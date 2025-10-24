import axios from "axios";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const WHATSAPP_NUMBER_ID = process.env.WHATSAPP_NUMBER_ID;
    const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
    const MY_WHATSAPP_NUMBER = process.env.MY_WHATSAPP_NUMBER;

    const textMessage = 
`📩 New Contact Form Submission
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

    await axios.post(
      `https://graph.facebook.com/v17.0/${WHATSAPP_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: MY_WHATSAPP_NUMBER,
        type: "text",
        text: { body: textMessage },
      },
      {
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
