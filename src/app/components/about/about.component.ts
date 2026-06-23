import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cards = [
    { num:'9.54', label:'CGPA', sub:'B.E. Information Technology' },
    { num:'30%', label:'Throughput Boost', sub:'Cargo Management System' },
    { num:'45%', label:'Effort Reduced', sub:'AI PDF Automation' },
    { num:'1.5+', label:'Yrs Experience', sub:'Enterprise Architecture' },
  ];

  techStack = [
    { name:'.NET Core 8', color:'#8b5cf6' },
    { name:'Angular 19', color:'#ef4444' },
    { name:'Go (Golang)', color:'#38bdf8' },
    { name:'MS SQL Server', color:'#f87171' },
    { name:'Mistral AI', color:'#fb923c' },
    { name:'TypeScript', color:'#60a5fa' },
    { name:'C#', color:'#d946ef' },
    { name:'WebSocket', color:'#00ff88' },
    { name:'Razorpay', color:'#60a5fa' },
    { name:'Twilio', color:'#f43f5e' },
    { name:'Scriban', color:'#ffd700' },
    { name:'RBAC', color:'#a78bfa' },
  ];
}
