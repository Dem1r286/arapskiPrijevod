import nodemailer from "nodemailer";

// Rate limiting map (IP → timestamp of last request)
const rateLimitMap = new Map();
const LIMIT_MS = 60 * 1000; // 1 minute

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // ===== VALIDATION ===== //
    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    if (message.length > 2000) {
      return new Response("Message too long", { status: 400 });
    }

    if (message.trim().length < 3) {
      return new Response("Message too short", { status: 400 });
    }

    // ===== RATE LIMITING ===== //
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();

    if (rateLimitMap.has(ip)) {
      const lastTime = rateLimitMap.get(ip);
      if (now - lastTime < LIMIT_MS) {
        return new Response(
          "Previše pokušaja. Pokušajte nakon 1 minute.",
          { status: 429 }
        );
      }
    }

    rateLimitMap.set(ip, now);

    // ===== EMAIL TRANSPORTER ===== //
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ===== SEND EMAIL ===== //
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "Arapski prijevod - upit",
      html: `
      <div style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        color: #333; 
        line-height: 1.6; 
        max-width: 600px; 
        margin: 30px auto; 
        padding: 25px; 
        border-radius: 12px; 
        background-color: #ffffff; 
        box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
        border: 1px solid #e0e0e0;
      ">
        <h2 style="
          color: #1D4ED8; 
          text-align: center; 
          margin-bottom: 20px; 
          font-size: 22px; 
          font-weight: 600;
        ">
          Novi upit sa web stranice
        </h2>
        <p style="margin: 10px 0;"><b>Ime:</b> ${name}</p>
        <p style="margin: 10px 0;"><b>Email:</b> ${email}</p>
        <p style="margin: 10px 0;"><b>Telefon:</b> ${phone || "Nije unesen"}</p>
        <p style="margin: 15px 0 5px 0;"><b>Poruka:</b></p>
        <p style="
          background-color: #f3f4f6; 
          padding: 15px; 
          border-radius: 8px; 
          border-left: 4px solid #1D4ED8;
          white-space: pre-wrap;
        ">${message}</p>
      </div>
    `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Greška prilikom slanja." }),
      { status: 500 }
    );
  }
}
