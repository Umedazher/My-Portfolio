import { Component, ChangeDetectionStrategy, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { Skill, Experience, Project, Education, Award } from './models/portfolio.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IconComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  private fb = inject(FormBuilder);
  
  isDarkMode = signal<boolean>(true);
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);
  currentYear = new Date().getFullYear();
  
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);

  // Resume Data Mapping
  skillsData = signal<Skill[]>([
    { category: 'Programming Languages', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Frontend & Frameworks', items: ['Angular (v21+)', 'Angular Material', 'NG-ZORRO'] },
    { category: 'Angular Concepts', items: ['RxJS', 'NgRx', 'Lazy Loading', 'Reactive Forms', 'Dependency Injection', 'Component Lifecycle', 'API Integration', 'Performance Optimization'] },
    { category: 'Backend & Databases', items: ['Spring Boot', 'Spring Security', 'RESTful APIs', 'Oracle SQL', 'MySQL'] },
    { category: 'Tools & Environments', items: ['Git', 'GitHub', 'Postman', 'CI/CD', 'Kubernetes', 'Agile'] }
  ]);

  experienceData = signal<Experience[]>([
    {
      role: 'Software Developer (Angular Developer)', company: 'Compliance Cart', period: 'May 2025 - Present | Pune, Maharashtra',
      achievements: [
        'Designed and developed scalable Angular applications using modular architecture, improving performance by 40%.', 
        'Used Angular Routing, HTTPClient, and Dependency Injection to build reusable and maintainable components.', 
        'Implemented RxJS operators such as map, switchMap, and debounceTime for efficient asynchronous data handling.',
        'Applied lazy loading and code optimization techniques to reduce initial load time.',
        'Worked in an Agile environment with CI/CD pipelines for continuous integration and deployment.',
        'Performed unit testing and debugging to ensure application stability and performance.'
      ],
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'jQuery', 'AJAX']
    },
    {
      role: 'Systems Engineer', company: 'Intellect Design Arena', period: 'Nov 2021 - May 2025 | Hyderabad, Telangana',
      achievements: [
        'Built enterprise-grade Angular applications with optimized change detection and lazy loading, improving performance by 40%.', 
        'Developed dynamic and responsive UI components, enhancing customer experience and engagement by 60%.', 
        'Integrated RESTful APIs for efficient data flow and seamless system communication.',
        'Designed and developed key business modules, increasing user engagement by 15%.',
        'Collaborated with cross-functional teams in an Agile environment to deliver high-quality software solutions.'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'REST APIs']
    }
  ]);

  projectsData = signal<Project[]>([
    {
      title: 'Aayuvi (ABDM Integration)', tagline: 'Compliance Cart',
      description: [
        'Engineered scalable and secure frontend modules for a digital health platform aligned with Ayushman Bharat Digital Mission (ABDM).',
        'Developed Consent Management System using Angular, TypeScript, RxJS, and NG-ZORRO for secure healthcare data access and authorization control.',
        'Built interactive Record Request system to fetch patient data from multiple providers via RESTful API integration.',
        'Implemented real-time request lifecycle tracking (Pending/Completed) using reactive programming principles.'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NG-ZORRO', 'Spring Boot']
    },
    {
      title: 'Relationship Manager Office', tagline: 'Modular Dashboards',
      description: [
        'Developed scalable and modular frontend dashboards (Basket Holdings, Account Opening) using Angular, TypeScript, and RxJS.',
        'Integrated Spring Boot-based RESTful APIs for real-time data retrieval, improving responsiveness.',
        'Implemented reactive forms, dynamic components, and state-driven UI logic for enhanced user interaction.',
        'Optimized API consumption and frontend performance, reducing load time.'
      ],
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'RxJS']
    },
    {
      title: 'Customer Personal Office (E-KYC)', tagline: 'Secure Onboarding Module',
      description: [
        'Led development of secure E-KYC onboarding module using Angular, TypeScript, and Reactive Forms with dynamic validation.',
        'Integrated Spring Boot REST APIs for customer verification, document processing, and backend workflows.',
        'Implemented dynamic form generation and validation logic, improving data accuracy and reducing user errors.',
        'Enhanced performance by 30% through optimized form handling, API calls, and efficient state management.'
      ],
      technologies: ['Angular', 'Reactive Forms', 'Spring Boot APIs']
    }
  ]);

  educationData = signal<Education[]>([
    {
      degree: 'Bachelor of Engineering',
      institution: 'SGB Amravati University, Amravati',
      date: 'Aug 2020',
      score: '73.28%'
    }
  ]);

  awardsData = signal<Award[]>([
    { title: 'Spot Light Award', issuer: 'Intellect Design Arena', date: 'Aug 2023' },
    { title: 'Spot Award', issuer: 'Intellect Design Arena', date: 'Aug 2022' }
  ]);


  constructor() {
    window.addEventListener('scroll', () => {
      this.isScrolled.set(window.scrollY > 20);
    });
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode.set(true);
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
  }

  toggleTheme() { this.isDarkMode.update(v => !v); }
  toggleMobileMenu() { this.isMobileMenuOpen.update(v => !v); }

  scrollTo(elementId: string) {
    this.isMobileMenuOpen.set(false);
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset();
        setTimeout(() => this.submitSuccess.set(false), 3000);
      }, 1500);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
