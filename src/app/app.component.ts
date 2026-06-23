import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ParticlesComponent } from './components/particles/particles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParticlesComponent, NavbarComponent, HeroComponent, AboutComponent,
    SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  year = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      }, { threshold: 0.15 });

      // Target all major sections and cards
      setTimeout(() => {
        const hiddenElements = document.querySelectorAll('.sec-title, .sec-tag, .project-card, .stat-card, .tl-card, .about-bio, .form-card, .contact-left, .edu-block, .all-skills');
        hiddenElements.forEach((el) => {
          el.classList.add('reveal');
          observer.observe(el);
        });
      }, 100);
    }
  }
}
