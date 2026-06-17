import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Full Stack Developer', '.NET Core 8 Expert', 'Angular Architect', 'Go Lang Developer', 'AI Integration Specialist'];
  typed = '';
  roleIdx = 0;
  charIdx = 0;
  deleting = false;
  timer: any;
  showCursor = true;
  cursorTimer: any;

  ngOnInit() {
    this.typeEffect();
    this.cursorTimer = setInterval(() => this.showCursor = !this.showCursor, 500);
  }

  typeEffect() {
    const full = this.roles[this.roleIdx];
    if (!this.deleting) {
      this.typed = full.slice(0, ++this.charIdx);
      if (this.charIdx === full.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.typeEffect(), 2200);
        return;
      }
    } else {
      this.typed = full.slice(0, --this.charIdx);
      if (this.charIdx === 0) {
        this.deleting = false;
        this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeEffect(), this.deleting ? 40 : 75);
  }

  ngOnDestroy() { clearTimeout(this.timer); clearInterval(this.cursorTimer); }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Akshat_Shah_Resume.pdf';
    link.click();
  }
}
