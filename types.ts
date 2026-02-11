
// Added React import to resolve namespace issues in .ts file
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface CareerItem {
  year: string;
  content: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}