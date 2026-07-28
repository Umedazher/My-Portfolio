import { Injectable, signal } from '@angular/core';
import { Experience, Project } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  experienceData = signal<Experience[]>([
    { role: 'Angular Developer', company: 'Compliance Cart', period: 'May 2025 - Present', type: 'job' },
    { role: 'Systems Engineer', company: 'Intellect Design Arena', period: 'Nov 2021 - May 2025', type: 'job' },
    { role: 'B.E. Student', company: 'SGB Amravati University', period: 'Graduated Aug 2020', type: 'edu' }
  ]);

  projectsData = signal<Project[]>([
    {
      title: 'Aayuvi (ABDM)', 
      tagline: 'Digital Health Platform Integration',
      imageUrl: '../assets/AayuviLogo.png',
      tags: ['Angular', 'TypeScript', 'RxJS', 'NG-ZORRO', 'REST APIs', 'Healthcare']
    },
    {
      title: 'RM Office', 
      tagline: 'Modular Frontend Dashboards',
      imageUrl: '../assets/UIDashboard.webp',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Spring Boot', 'Web App']
    },
    {
      title: 'E-KYC Module', 
      tagline: 'Secure Onboarding Workflows',
      imageUrl: '../assets/ekyc.png',
      tags: ['Angular', 'TypeScript', 'Reactive Forms', 'Spring Boot', 'State Management', 'Security']
    },
    {
      // id: 'admin-portal',
      title: 'Admin Portal',
      tagline: 'Jio-BlackRock (JBR) | Jul 2024 to May 2025',
      // description: 'Developed features for a fintech product RMOffice to manage wealth activities such as mutual fund orders and model portfolios. Implemented key modules like Security Maintenance, Model Order Placement, and Service Request Maintenance.',
      tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'RxJS', 'Fintech'],
      imageUrl: '../assets/JBR.cms',
    },
    {
      // id: 'agent-office',
      title: 'Agent Office',
      tagline: 'IIFL Finance | Aug 2023 to Jul 2024',
      // description: 'Developed a wealth management platform focusing on customer holdings and transaction tracking. Implemented features related to transaction views, scheduling reports, and document downloads.',
      tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'SQL', 'Wealth Management'],
      imageUrl: '../assets/IIFLFinance.png',
    }
  ]);
}