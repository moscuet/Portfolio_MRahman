import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      
      const { email, name, subject, message } = req.body;
      if (typeof email !== 'string' || typeof name !== 'string' ||
        typeof subject !== 'string' || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
      }


      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_APP_PASSWORD,
        },
      });

      const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `name: ${name}, email:${email}, subject: (${subject})`,
        text: message,
      };

      await transport.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}



/*
   setting service as 'gmail' is same as providing these setings:
   host: "smtp.gmail.com",
   port: 465,
   secure: true
   If you want to use a different email provider other than gmail, you need to provide these manually.
   Or you can go use these well known services and their settings at
   https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
*/