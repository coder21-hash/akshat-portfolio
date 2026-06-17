import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsSection') sectionRef!: ElementRef;
  animated = false;

  categories = [
    {
      name: 'Backend', icon: '⚙️', color: '#512bd4',
      skills: [
        { name: '.NET Core 8', pct: 92, tag: 'Primary' },
        { name: 'C#', pct: 90, tag: '' },
        { name: 'Go (Golang)', pct: 65, tag: 'Intermediate' },
        { name: 'Python', pct: 60, tag: '' },
        { name: 'RESTful APIs', pct: 88, tag: '' },
        { name: 'RBAC Architecture', pct: 82, tag: '' },
      ]
    },
    {
      name: 'Frontend', icon: '🖥️', color: '#dd1b16',
      skills: [
        { name: 'Angular 19', pct: 88, tag: 'Primary' },
        { name: 'TypeScript', pct: 85, tag: '' },
        { name: 'Angular Material', pct: 82, tag: '' },
        { name: 'JavaScript', pct: 80, tag: '' },
        { name: 'HTML5 / SCSS', pct: 85, tag: '' },
        { name: 'React', pct: 60, tag: '' },
      ]
    },
    {
      name: 'Database & Tools', icon: '🗄️', color: '#cc2927',
      skills: [
        { name: 'MS SQL Server', pct: 86, tag: 'Primary' },
        { name: 'Scriban Templating', pct: 76, tag: '' },
        { name: 'Chart.js', pct: 76, tag: '' },
        { name: 'Visual Studio', pct: 88, tag: '' },
      ]
    },
    {
      name: 'Integrations & AI', icon: '🤖', color: '#ff7000',
      skills: [
        { name: 'Mistral AI', pct: 78, tag: 'Experience' },
        { name: 'Razorpay / Webhooks', pct: 76, tag: '' },
        { name: 'Twilio WhatsApp API', pct: 72, tag: '' },
        { name: 'WebSocket', pct: 74, tag: '' },
        { name: 'SMTP / OTP Auth', pct: 78, tag: '' },
      ]
    }
  ];

  activeTab = 0;

  ngAfterViewInit() {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !this.animated) {
        this.animated = true;
      }
    }, { threshold: 0.2 });
    if (this.sectionRef) obs.observe(this.sectionRef.nativeElement);
  }
}
