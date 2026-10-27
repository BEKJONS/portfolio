
// Add missing React import to support React.ReactNode type definition
import React from 'react';

export interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Basic';
  category: 'Backend' | 'Cloud' | 'Database' | 'Tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}