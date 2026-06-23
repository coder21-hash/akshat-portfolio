import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  form = { name: '', email: '', subject: '', message: '' };
  sent = false;
  errorMsg = '';
  isSending = false;
  isBlocked = false;

  contacts = [
    { label: 'Email', value: 'akshatshah187@gmail.com', href: 'mailto:akshatshah187@gmail.com', color: '#00ff88' },
    { label: 'Phone', value: '+91 93749 73636', href: 'tel:+919374973636', color: '#00d4ff' },
    { label: 'Location', value: 'Ahmedabad, Gujarat, India', href: '#', color: '#7c3aed' },
  ];

  ngOnInit() {
    this.checkRateLimit();
  }

  checkRateLimit(): boolean {
    if (typeof window === 'undefined' || !localStorage) return false;
    const now = Date.now();
    const twoHours = 2 * 60 * 60 * 1000;
    let timestamps: number[] = [];
    try {
      timestamps = JSON.parse(localStorage.getItem('contact_sent_timestamps') || '[]');
      if (!Array.isArray(timestamps)) timestamps = [];
    } catch {
      timestamps = [];
    }

    // Filter to last 2 hours
    timestamps = timestamps.filter(t => now - t < twoHours);
    localStorage.setItem('contact_sent_timestamps', JSON.stringify(timestamps));

    if (timestamps.length >= 3) {
      const oldest = timestamps[0];
      const remainingMs = twoHours - (now - oldest);
      const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
      this.isBlocked = true;
      this.errorMsg = `Rate limit reached. You can send up to 3 messages every 2 hours. Please try again in ${remainingMinutes} minute(s).`;
      return true;
    }

    this.isBlocked = false;
    if (this.errorMsg && this.errorMsg.includes('Rate limit reached')) {
      this.errorMsg = '';
    }
    return false;
  }

  validateContent(text: string): boolean {
    const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;
    const badWords = ['fuck', 'shit', 'bitch', 'ass', 'damn', 'crap'];

    if (urlPattern.test(text)) return false;
    if (htmlPattern.test(text)) return false;

    const lowerText = text.toLowerCase();
    for (const word of badWords) {
      if (lowerText.includes(word)) return false;
    }

    return true;
  }

  async onSubmit() {
    if (this.checkRateLimit()) return;
    this.errorMsg = '';

    if (!this.validateContent(this.form.message) || !this.validateContent(this.form.name)) {
      this.errorMsg = 'Message blocked: contains unsupported links, HTML, or inappropriate content.';
      return;
    }

    this.isSending = true;

    try {
      await emailjs.send('service_ksypb2o', 'template_olag1qs', {
        from_name: this.form.name,
        from_email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
        to_email: 'akshatshah187@gmail.com'
      }, 'NPDolm739NkpfPFpc');

      this.sent = true;
      this.form = { name: '', email: '', subject: '', message: '' };

      if (typeof window !== 'undefined' && localStorage) {
        let timestamps: number[] = [];
        try {
          timestamps = JSON.parse(localStorage.getItem('contact_sent_timestamps') || '[]');
          if (!Array.isArray(timestamps)) timestamps = [];
        } catch {
          timestamps = [];
        }
        timestamps.push(Date.now());
        localStorage.setItem('contact_sent_timestamps', JSON.stringify(timestamps));
        this.checkRateLimit();
      }

      setTimeout(() => this.sent = false, 5000);
    } catch (err) {
      this.errorMsg = 'Failed to send message. Please verify EmailJS configuration.';
      console.error(err);
    } finally {
      this.isSending = false;
    }
  }
}
