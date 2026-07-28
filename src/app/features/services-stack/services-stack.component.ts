import { Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-services-stack',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './services-stack.component.html',
  styleUrls: ['./services-stack.component.css']
})
export class ServicesStackComponent {

  // Modal State
  isModalOpen = false;
  openPanelIndex: number | null = 0; // Default first panel open

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  togglePanel(index: number) {
    this.openPanelIndex = this.openPanelIndex === index ? null : index;
  }

  // Comprehensive Skills Data
  skillsData = [
    {
      category: 'Angular Skills',
      skills: ['Angular (v10+ / v12+ / v15+ / v17)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'Angular Material', 'Bootstrap', 'Responsive Web Design', 'Reactive Forms', 'Template-driven Forms', 'Custom Validators', 'Dynamic Forms', 'Standalone Components', 'Lazy Loading', 'Routing & Route Guards', 'Pipes', 'Directives', 'Dependency Injection', 'Lifecycle Hooks', 'Change Detection', 'Signals (Angular 16+)', 'RxJS', 'Observables', 'Subjects (BehaviorSubject, ReplaySubject)', 'HTTP Client', 'Interceptors', 'Guards', 'Resolvers']
    },
    {
      category: 'State Management',
      skills: ['NgRx', 'Store', 'Actions', 'Reducers', 'Effects', 'Selectors']
    },
    {
      category: 'API Integration',
      skills: ['REST APIs', 'JSON', 'API Integration', 'Error Handling', 'Authentication APIs', 'Authorization', 'JWT Tokens', 'OAuth (basic understanding)']
    },
    {
      category: 'UI Development',
      skills: ['Dashboard Development', 'Data Tables', 'Charts', 'Pagination', 'Sorting', 'Filtering', 'Search', 'Modals', 'Tooltips', 'Side Navigation', 'Multi-step Forms', 'Dynamic Components', 'File Upload', 'Excel Export', 'PDF Export']
    },
    {
      category: 'Performance Optimization',
      skills: ['Lazy Loading', 'OnPush Change Detection', 'TrackBy', 'Virtual Scrolling', 'Code Splitting', 'Bundle Optimization', 'Memory Leak Prevention', 'Subscription Management']
    },
    {
      category: 'Testing',
      skills: ['Unit Testing', 'Component Testing', 'Service Testing']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub / GitLab / Bitbucket', 'Jira', 'Postman', 'VS Code', 'npm', 'Angular CLI', 'SonarQube', 'Chrome Developer Tools']
    },
    {
      category: 'CI/CD & Backend Collaboration',
      skills: ['Jenkins', 'Azure DevOps', 'GitHub Actions (basic)', 'Build & Deployment', 'CI/CD Pipelines', 'Spring Boot APIs', 'Java', 'REST Services', 'SQL Basics', 'Oracle / MySQL / PostgreSQL']
    },
    {
      category: 'Wealth Management Domain',
      skills: ['Portfolio Management', 'Investment Products', 'Mutual Funds', 'Equity Holdings', 'SIP/STP/SWP', 'Customer Onboarding', 'KYC/eKYC', 'Risk Profiling', 'Account Opening', 'Holdings Dashboard', 'Transaction History', 'Statements', 'Wealth Dashboard', 'Asset Allocation', 'Client Profiles']
    },
    {
      category: 'Healthcare Domain',
      skills: ['Patient Registration', 'Appointment Management', 'Patient Dashboard', 'Medical Records', 'Healthcare Compliance', 'Insurance Integration', 'Clinical Workflows']
    },
    {
      category: 'Compliance & Security',
      skills: ['KYC', 'Identity Verification', 'Approval Workflows', 'Data Privacy', 'Authentication', 'Authorization', 'JWT', 'Session Management', 'Route Guards', 'Secure API Communication', 'Input Validation', 'XSS Prevention', 'CSRF Awareness']
    },
    {
      category: 'Development Practices & Responsibilities',
      skills: ['Agile Scrum', 'Sprint Planning', 'Daily Stand-ups', 'Code Reviews', 'Peer Reviews', 'Bug Fixing', 'Production Support', 'Root Cause Analysis', 'Developing reusable Angular components', 'Integrating REST APIs', 'Optimizing application performance', 'Maintaining CI/CD processes']
    }
  ];

}