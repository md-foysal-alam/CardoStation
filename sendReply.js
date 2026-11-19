// npm i nodemailer
import nodemailer from "nodemailer";

/* .env
 * SMTP_HOST=smtp.gmail.com
 * SMTP_PORT=465
 * SMTP_USER=you@gmail.com
 * SMTP_PASS=your-app-password
 * MAIL_FROM="CardoStation <you@gmail.com>"
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: Number(process.env.SMTP_PORT) !== 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* POST /client/sendReply
 * Body: { to, name, subject, message } */
export const sendReply = async (req, res) => {
  try {
    const { to, name, subject, message } = req.body || {};

    if (!to?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        error: "to, subject and message are required",
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to.trim())) {
      return res.status(400).json({ success: false, error: "Invalid email address" });
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: to.trim(),
      subject: subject.trim(),
      text: message.trim(),
    });

    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("sendReply error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

