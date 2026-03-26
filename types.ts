import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  stats?: {
    label: string;
    value: string;
    desc: string;
  }[];
}

export interface GridFeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
}

export interface BenefitItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface ChartData {
  label: string;
  value: number;
  max: number;
  unit: string;
  color: string;
}