import { Activity } from '../types/extracurriculars';
import {
  Users,
  Code,
  Heart,
} from 'lucide-react';

export const ACTIVITY_CATEGORIES = [
  'all',
  'sports',
  'arts',
  'academic',
  'leadership',
  'service',
  'stem'
] as const;

export const TIME_COMMITMENTS = [
  { label: 'Any', value: 0 },
  { label: '1-3 hours/week', value: 3 },
  { label: '4-6 hours/week', value: 6 },
  { label: '7-10 hours/week', value: 10 },
  { label: '10+ hours/week', value: 11 },
] as const;