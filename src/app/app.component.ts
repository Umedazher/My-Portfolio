import { Component, ChangeDetectionStrategy, AfterViewInit, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesStackComponent } from './features/services-stack/services-stack.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    AboutComponent, 
    ServicesStackComponent, 
    ProjectsComponent, 
    ContactComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  mouseX = signal<number>(-100);
  mouseY = signal<number>(-100);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }

  // ADD THIS: New Touch Listeners for Mobile Swiping/Touching
  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onTouch(event: TouchEvent) {
    if (event.touches.length > 0) {
      this.mouseX.set(event.touches[0].clientX);
      this.mouseY.set(event.touches[0].clientY);
    }
  }

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                 
        setTimeout(() => {
             document.querySelectorAll('.reveal').forEach((el) => {
              observer.observe(el);
            });
        }, 100);
    }
  }
}