import type { Metadata } from 'next';
import { FeaturesPageClient } from '@/components/landing/FeaturesPageClient';

export const metadata: Metadata = {
  title: 'Complete Features - HireTrack',
  description:
    'Explore all 240+ features of HireTrack: AI-powered resume analysis, multi-tenant system, drag-and-drop pipeline, real-time collaboration, and more. Complete feature showcase.',
  openGraph: {
    title: 'HireTrack - Complete Features Showcase',
    description: 'Explore all 240+ features of HireTrack, the comprehensive AI-powered hiring management platform.',
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
