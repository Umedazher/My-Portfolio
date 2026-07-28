// import { Component, signal, HostListener } from '@angular/core';
// import { IconComponent } from '../../shared/components/icon/icon.component';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [IconComponent],
//   template: `
//     <nav class="navbar" [class.scrolled]="isScrolled()">
//       <div class="nav-container">
//         <div class="logo">UMED</div>
//         <div class="nav-links">
//           <a href="#home" (click)="scrollTo('home')">Home</a>
//           <a href="#about" (click)="scrollTo('about')">About Me</a>
//           <a href="#services" (click)="scrollTo('services')">Tech Stack</a>
//           <a href="#projects" (click)="scrollTo('projects')">Projects</a>
//         </div>
//         <a href="#contact" class="btn btn-primary" (click)="scrollTo('contact')">
//           Hire Me <app-icon name="arrowUpRight" customClass="icon-sm" class="hover-arrow"></app-icon>
//         </a>
//       </div>
//     </nav>
//   `,
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   isScrolled = signal<boolean>(false);

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.isScrolled.set(window.scrollY > 20);
//   }

//   scrollTo(elementId: string) {
//     const element = document.getElementById(elementId);
//     if (element) {
//       const y = element.getBoundingClientRect().top + window.scrollY - 100;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   }
// }

import { Component, signal, HostListener } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()" [class.menu-open]="isMobileMenuOpen()">
      <div class="nav-container">
        <div class="logo">UMED</div>
        
        <!-- Hamburger Icon (Mobile Only) -->
        <button class="hamburger" (click)="toggleMobileMenu()">
          <span class="line"></span>
          <span class="line"></span>
        </button>

        <!-- Desktop Links -->
        <div class="nav-links desktop-only">
          <a href="#home" (click)="scrollTo('home')">Home</a>
          <a href="#about" (click)="scrollTo('about')">About Me</a>
          <a href="#services" (click)="scrollTo('services')">Tech Stack</a>
          <a href="#projects" (click)="scrollTo('projects')">Projects</a>
        </div>

        <!-- Desktop Button -->
        <a href="#contact" class="btn btn-primary desktop-only" (click)="scrollTo('contact')">
          Hire Me <app-icon name="arrowUpRight" customClass="icon-sm" class="hover-arrow"></app-icon>
        </a>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (isMobileMenuOpen()) {
        <div class="mobile-menu">
          <div class="mobile-links">
            <a href="#home" (click)="scrollTo('home')">Home</a>
            <a href="#about" (click)="scrollTo('about')">About Me</a>
            <a href="#services" (click)="scrollTo('services')">Tech Stack</a>
            <a href="#projects" (click)="scrollTo('projects')">Projects</a>
          </div>
          <a href="#contact" class="btn btn-primary mobile-hire-btn" (click)="scrollTo('contact')">
            Hire Me <app-icon name="arrowUpRight" customClass="icon-sm" class="hover-arrow"></app-icon>
          </a>
        </div>
      }
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  scrollTo(elementId: string) {
    this.isMobileMenuOpen.set(false); // Closes menu when a link is clicked
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}