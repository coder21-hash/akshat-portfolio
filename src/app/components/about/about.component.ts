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
    { icon:'🎓', num:'9.54', label:'CGPA', sub:'B.E. Information Technology' },
    { icon:'⚡', num:'30%', label:'Throughput Boost', sub:'Cargo Management System' },
    { icon:'🤖', num:'45%', label:'Effort Reduced', sub:'AI PDF Automation' },
    { icon:'🚀', num:'1.5+', label:'Yrs Experience', sub:'Enterprise Architecture' },
  ];

  techStack = [
    { name:'.NET Core 8', color:'#512bd4' },
    { name:'Angular 19', color:'#dd1b16' },
    { name:'Go (Golang)', color:'#00add8' },
    { name:'MS SQL Server', color:'#cc2927' },
    { name:'Mistral AI', color:'#ff7000' },
    { name:'TypeScript', color:'#3178c6' },
    { name:'C#', color:'#9b4993' },
    { name:'WebSocket', color:'#00ff88' },
    { name:'Razorpay', color:'#2d9ee0' },
    { name:'Twilio', color:'#f22f46' },
    { name:'Scriban', color:'#ffd700' },
    { name:'RBAC', color:'#7c3aed' },
  ];
}
