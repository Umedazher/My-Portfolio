import { Component, signal, HostListener } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <div class="logo">UMED</div>
        <div class="nav-links">
          <a href="#home" (click)="scrollTo('home')">Home</a>
          <a href="#about" (click)="scrollTo('about')">About Me</a>
          <a href="#services" (click)="scrollTo('services')">Tech Stack</a>
          <a href="#projects" (click)="scrollTo('projects')">Projects</a>
        </div>
        <a href="#contact" class="btn btn-primary" (click)="scrollTo('contact')">
          Hire Me <app-icon name="arrowUpRight" customClass="icon-sm" class="hover-arrow"></app-icon>
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}