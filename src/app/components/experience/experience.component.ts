import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Associate Technology Architect',
      company: 'IT Path Solutions',
      location: 'Ahmedabad, India',
      period: 'July 2025 – Present',
      type: 'Full Time',
      current: true,
      color: '#00ff88',
      stack: ['.NET Core 8', 'Angular 19', 'MS SQL Server', 'Mistral AI', 'RBAC', 'Scriban'],
      achievements: [
        { metric: '+30%', desc: 'data-processing throughput via modular RESTful APIs' },
        { metric: '−45%', desc: 'manual data entry through Mistral AI PDF extraction' },
      ],
      points: [
        'Architect and deliver enterprise web applications ensuring high availability, modularity, and performance at scale.',
        'Lead development of the Cargo & Shipment Management System with modular UI and RESTful APIs.',
        'Integrated Mistral AI API for intelligent PDF data extraction and Scriban-based document automation.',
        'Implemented Role-Based Access Control (RBAC) with granular permission management across user roles.',
        'Recognized by AVP leadership for consistent delivery excellence in an Agile/Scrum environment.',
      ]
    },
    {
      role: 'Intern Technology Architect',
      company: 'IT Path Solutions',
      location: 'Ahmedabad, India',
      period: 'Jan 2025 – June 2025',
      type: 'Internship',
      current: false,
      color: '#00d4ff',
      stack: ['.NET Core', 'Angular', 'Chart.js', 'Scriban', 'OTP Auth', 'Postman'],
      achievements: [
        { metric: '100%', desc: 'API coverage validated with Postman' },
        { metric: 'SOLID', desc: 'principles applied under senior architect mentorship' },
      ],
      points: [
        'Built the Personal Expense Tracker — full-stack finance app with CRUD, search, filters, and Chart.js analytics.',
        'Developed email/OTP-based authentication and on-demand PDF report generation via Scriban templating.',
        'Validated all REST API endpoints using Postman; adhered to SOLID principles throughout.',
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'CODE-UNNATI (Edunet Foundation)',
      location: 'Ahmedabad, India',
      period: 'Jan 2024 – April 2024',
      type: 'Internship',
      current: false,
      color: '#7c3aed',
      stack: ['Python', 'scikit-learn', 'TF-IDF', 'NLP', 'pandas', 'NumPy'],
      achievements: [
        { metric: 'F1', desc: 'score optimized via hyperparameter tuning' },
        { metric: '4', desc: 'ML models benchmarked (LR, RF, SVM, NN)' },
      ],
      points: [
        'Engineered a Fake News Detection system using NLP features: TF-IDF, sentiment analysis, and readability scores.',
        'Benchmarked Logistic Regression, Random Forest, SVM, and Neural Networks to maximize classification accuracy.',
      ]
    }
  ];

  education = {
    degree: 'B.E. – Information Technology',
    school: 'L.J. Institute of Engineering and Technology',
    location: 'Ahmedabad, Gujarat',
    period: 'Aug 2020 – June 2024',
    cgpa: '9.54 / 10.0'
  };
}
