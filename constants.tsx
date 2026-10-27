
import React from 'react';
import { Skill, Project, Stat, Experience } from './types';

export const SKILLS: Skill[] = [
  { name: 'Go (Golang)', level: 'Advanced', category: 'Backend' },
  { name: 'System Design', level: 'Advanced', category: 'Backend' },
  { name: 'gRPC / Protobuf', level: 'Advanced', category: 'Backend' },
  { name: 'Gin Framework', level: 'Advanced', category: 'Backend' },
  { name: 'REST API Design', level: 'Advanced', category: 'Backend' },
  { name: 'PostgreSQL', level: 'Advanced', category: 'Database' },
  { name: 'MongoDB', level: 'Advanced', category: 'Database' },
  { name: 'Redis', level: 'Advanced', category: 'Database' },
  { name: 'Docker / Compose', level: 'Advanced', category: 'Cloud' },
  { name: 'GitLab CI/CD', level: 'Advanced', category: 'Cloud' },
  { name: 'Git', level: 'Advanced', category: 'Tools' },
  { name: 'Linux (Ubuntu)', level: 'Intermediate', category: 'Tools' },
  { name: 'HTTP Protocol', level: 'Advanced', category: 'Tools' },
  { name: 'Python', level: 'Basic', category: 'Backend' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'itlegacy',
    role: 'Product Co-founder & Team Lead (Founding Backend Engineer)',
    company: 'ItLegacy · AI SaaS for U.S. truck repair shops',
    period: 'Oct 2025 – Present',
    summary: 'Service orders, parts & POS, invoicing, finance, and CRM for heavy-duty repair shops, live in production with U.S. customers. I co-founded the product, built its backend from the first commit and lead a team of 4 (backend, frontend, QA).',
    highlights: [
      'Team lead: review and merge all PRs, plan and assign work, hired and onboarded engineers, work directly with U.S. shop owners, and make the final technical calls.',
      'Shift to AI SaaS: an in-app LLM assistant (Go + React/TypeScript) on the OpenAI Responses API with 51 strict-schema tools and SSE streaming. It turns invoice photos into draft purchase orders, decodes VINs, and suggests reorders.',
      'Guardrails for AI actions: per-call permission and tenant checks, writes only through user-confirmed cards, an output filter for prompt leaks, and a per-company monthly cost cap.',
      'Multi-tenant backend with 1,000+ API routes over 130+ domain models: tenant isolation, Casbin RBAC, JWT sessions in Redis, rate limiting, encrypted integration tokens.',
      'CRM and communications: pipelines and deals, a unified inbox across Telegram and SMS, RingCentral calls with Whisper transcription, Gmail API estimate and invoice emails, and Telegram bots.',
      'Real-time and delivery: authenticated WebSocket hub, Redis dashboard cache, CI/CD for backend and frontend (GitHub Actions, Docker, GHCR), and the AWS and DigitalOcean servers.',
    ],
    tech: ['Go', 'Fiber', 'MongoDB', 'Redis', 'OpenAI API', 'WebSockets', 'Docker'],
  },
  {
    id: 'noor',
    role: 'Backend Engineer',
    company: 'Noor · PharmaCosmos',
    period: 'Jun 2025 – Oct 2025',
    summary: 'Pharmacy-chain management system: inventory, sales, 1C sync, and payments.',
    highlights: [
      'Built most of the 1C integration and implemented Alif payments end to end, alongside existing Click and Payme flows.',
      'Refactored core modules, tuned slow SQL queries, and added Redis caching to heavily used endpoints.',
    ],
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'udevs',
    role: 'Backend Engineer',
    company: 'Udevs · Bonvi ERP (MBF)',
    period: 'Dec 2024 – Jun 2025',
    summary: 'Mobile ERP app integrated with SAP Business One.',
    highlights: [
      "Started as a trainee doing full engineering work; hired in May 2025 and took over the departing project lead's work.",
      'Built Go APIs (gRPC, REST) between the mobile app and SAP Business One, plus background services on Redis and RabbitMQ.',
      'Evaluated CockroachDB as a distributed SQL option and presented the findings to the backend team.',
    ],
    tech: ['Go', 'gRPC', 'SAP Business One', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'smartadmin',
    role: 'Co-founder & Backend Engineer',
    company: 'SmartAdmin.uz & ManageApp.uz (part-time startup)',
    period: 'Oct 2024 – Apr 2025',
    summary: 'Two products built with a partner.',
    highlights: [
      "SmartAdmin's backend: a multi-company, multi-branch CRM for small businesses (inventory, sales, purchasing, cash flow, and debt).",
      "ManageApp's backend: social media post scheduling and Jira-style team task management.",
    ],
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Docker'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Listn Music Platform',
    description: 'A minimal personal link for sharing your favorite tracks from Spotify, Yandex Music, Apple Music, and SoundCloud in one place.',
    image: '/assets/img/listn.png',
    tech: ['Go', 'PostgreSQL', 'React', 'TypeScript'],
    link: 'https://new-listn.lovable.app',
  },
  {
    id: '2',
    title: 'Monitoring Alert System',
    description: 'Lightweight server monitor in Go: samples CPU, memory and disk I/O on a configurable interval and sends Telegram alerts when a threshold is crossed.',
    image: '/assets/img/monitoring_alert_system.png',
    tech: ['Go', 'gopsutil', 'Telegram API', 'YAML'],
    link: 'https://github.com/BEKJONS/MonitoringAlertSystem',
    github: 'https://github.com/BEKJONS/MonitoringAlertSystem',
  },
  {
    id: '3',
    title: 'SmartAdmin CRM',
    description: 'Comprehensive CRM system for business management with advanced analytics, customer tracking, and automated workflow management.',
    image: '/assets/img/smartadmin.png',
    tech: ['Go', 'Gin', 'PostgreSQL', 'REST API'],
    link: 'https://smartadmin.uz/',
  },
  {
    id: '4',
    title: 'Bonvi ERP System',
    description: 'Enterprise resource planning system with SAP integration, featuring complex transaction management and automated reporting for logistics.',
    image: '/assets/img/bonvi.png',
    tech: ['Go', 'SAP Integration', 'PostgreSQL', 'Docker'],
    link: 'https://apps.apple.com/uz/app/bonvi-erp-system/id6737776707',
  },
  {
    id: '5',
    title: 'ManageApp.uz',
    description: 'Social media and task management platform combining team collaboration tools with social networking features for enhanced productivity.',
    image: '/assets/img/manageapp_uz.png',
    tech: ['Go', 'PostgreSQL', 'Social Media', 'Task Management'],
    link: 'https://manageapp.uz',
  },
  {
    id: '6',
    title: 'PharmaCosmos',
    description: 'Pharmacy-chain management system at Noor: inventory, sales, 1C sync, and payments (Click, Payme, Alif). I built the Alif integration and most of the 1C sync.',
    image: '/assets/img/pharma.png',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Payment Systems'],
    link: 'https://tpharma.noor.uz/',
  }
];

export const STATS: Stat[] = [
  { label: 'Years of Experience', value: '2+', icon: null },
  { label: 'Projects Completed', value: '8+', icon: null },
  { label: 'GitHub Repos', value: '20+', icon: null },
  { label: 'System Designs', value: '5+', icon: null },
];
