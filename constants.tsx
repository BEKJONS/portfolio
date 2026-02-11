
import React from 'react';
import { Skill, Project, Stat } from './types';

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

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Listn Music Platform',
    description: 'A modern music streaming platform built with Go, featuring real-time playback, playlist management, and social music sharing capabilities.',
    image: '/assets/img/listn.png',
    tech: ['Go', 'PostgreSQL', 'REST API', 'Music Streaming'],
    link: 'https://listn.gophers.uz',
  },
  {
    id: '2',
    title: 'Monitoring Alert System',
    description: 'High-concurrency monitoring service built with Go and gRPC, handling over 10k heartbeats per second with real-time alerting via Telegram.',
    image: '/assets/img/monitoring_alert_system.png',
    tech: ['Go', 'gRPC', 'PostgreSQL', 'Telegram API'],
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
    title: 'Pharma Cosmos',
    description: 'A comprehensive pharmacy management system with 1C integration, inventory tracking, and custom payment integrations (Click, Payme, Alif).',
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
