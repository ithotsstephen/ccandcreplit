import nodemailer from 'nodemailer';
import type { ContactSubmission } from '@shared/schema';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.office365.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER,
    pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
  },
});

export class EmailService {
  async sendContactNotification(submission: ContactSubmission): Promise<void> {
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.EMAIL_USER,
      to: 'anish@ccandcsolutions.com',
      subject: `New Contact Form Submission - ${submission.firstName} ${submission.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ''}
        ${submission.region ? `<p><strong>Region:</strong> ${submission.region}</p>` : ''}
        ${submission.service ? `<p><strong>Service Interest:</strong> ${submission.service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted on: ${submission.createdAt ? new Date(submission.createdAt).toLocaleString() : new Date().toLocaleString()}</small></p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Contact form notification sent successfully');
    } catch (error) {
      console.error('Error sending contact form notification:', error);
      throw new Error('Failed to send email notification');
    }
  }

  async sendAutoReply(submission: ContactSubmission): Promise<void> {
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.EMAIL_USER,
      to: submission.email,
      subject: 'Thank you for contacting CC&C Solutions',
      html: `
        <h2>Thank you for contacting CC&C Solutions</h2>
        <p>Dear ${submission.firstName},</p>
        <p>Thank you for your interest in CC&C Solutions. We have received your inquiry and one of our experts will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services and resources on our website.</p>
        <p>Best regards,<br>
        The CC&C Solutions Team</p>
        <hr>
        <p><strong>Your submission:</strong></p>
        <p>${submission.message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Auto-reply sent successfully');
    } catch (error) {
      console.error('Error sending auto-reply:', error);
      // Don't throw error for auto-reply failure
    }
  }
}

export const emailService = new EmailService();
