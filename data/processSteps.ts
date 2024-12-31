import { TimelineStep } from '../types/process';
import { BookOpen, Trophy, PenTool, GraduationCap, Brain, Users, Award } from 'lucide-react';

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Academic Excellence',
    description: 'Focus on maintaining strong grades and taking challenging courses',
    date: 'Freshman - Junior Year',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Extracurricular Activities',
    description: 'Develop leadership and pursue passionate interests',
    date: 'Freshman - Junior Year',
    icon: Trophy
  },
  {
    id: 3,
    title: 'Standardized Testing',
    description: 'Prepare for and take SAT/ACT tests',
    date: 'Spring Junior Year',
    icon: Brain
  },
  {
    id: 4,
    title: 'College Research',
    description: 'Research schools and create college list',
    date: 'Spring Junior Year',
    icon: GraduationCap
  },
  {
    id: 5,
    title: 'Essay Writing',
    description: 'Draft and refine college essays',
    date: 'Summer Before Senior Year',
    icon: PenTool
  },
  {
    id: 6,
    title: 'Application Submission',
    description: 'Submit applications and supporting materials',
    date: 'August - December Senior Year',
    icon: Award
  }
];