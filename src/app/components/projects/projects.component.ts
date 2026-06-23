import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cargo & Shipment Management System',
      desc: 'Enterprise logistics platform with AI-powered PDF extraction, real-time cargo tracking, RBAC security, and automated invoice generation pipeline.',
      tags: ['.NET Core 8', 'Angular', 'MS SQL Server', 'Mistral AI', 'Scriban', 'RBAC'],
      metrics: ['+30% Throughput', '-45% Manual Effort', 'Auto-Save UX'],
      color: '#00ff88',
      featured: true,
    },
    {
      title: 'E-Commerce Application',
      desc: 'Full-featured Go-powered store with Razorpay payment gateway, real-time admin dashboard via WebSocket, WhatsApp order notifications via Twilio, and cron-triggered email campaigns.',
      tags: ['Go (Golang)', 'Angular', 'Angular Material', 'Razorpay', 'Twilio', 'WebSocket', 'SMTP'],
      metrics: ['Real-time Dashboard', 'WhatsApp Alerts', 'Payment Webhooks'],
      color: '#00d4ff',
      featured: true,
    },
    {
      title: 'Personal Expense Tracker',
      desc: 'Full-stack personal finance app with OTP-based authentication, Chart.js spending analytics by category, and on-demand PDF report generation.',
      tags: ['.NET Core', 'Angular', 'MS SQL Server', 'Chart.js', 'Scriban', 'OTP'],
      metrics: ['Chart Analytics', 'PDF Reports', 'OTP Auth'],
      color: '#7c3aed',
      featured: false,
    },
    {
      title: 'Travelo – Travel Booking App',
      desc: 'Django-powered destination booking platform with user authentication, travel package management, responsive search/filter UI, and real-time itinerary updates.',
      tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
      metrics: ['Package Booking', 'Live Reviews', 'Itinerary Builder'],
      color: '#f59e0b',
      featured: false,
    },
    // Fake News Detection project removed from public projects list per request
  ];
}
