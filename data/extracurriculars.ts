import { Activity } from '../types/extracurriculars';
import {
  Trophy,
  Palette,
  Brain,
  Users,
  Heart,
  Microscope,
  Music,
  Code,
  BookOpen,
  Award,
} from 'lucide-react';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Student Government',
    category: 'leadership',
    timeCommitment: {
      hoursPerWeek: 5,
      duration: 'Full academic year',
    },
    description: 'Represent student interests and organize school-wide initiatives.',
    benefits: [
      'Develop leadership skills',
      'Practice public speaking',
      'Gain project management experience',
      'Build consensus and negotiate',
    ],
    skills: ['Leadership', 'Communication', 'Organization', 'Problem-solving'],
    collegeImpact: 'Demonstrates leadership ability and commitment to community improvement',
    careerRelevance: ['Management', 'Public Service', 'Politics', 'Non-profit'],
    recognitions: ['Student Leader of the Year', 'Best Initiative Award'],
    icon: Users,
  },
  {
    id: '2',
    title: 'Robotics Club',
    category: 'stem',
    timeCommitment: {
      hoursPerWeek: 8,
      duration: 'Full academic year + competitions',
    },
    description: 'Design, build, and program robots for competitions.',
    benefits: [
      'Hands-on engineering experience',
      'Programming skills development',
      'Team collaboration',
      'Competition experience',
    ],
    skills: ['Engineering', 'Programming', 'Problem-solving', 'Teamwork'],
    collegeImpact: 'Shows technical aptitude and practical STEM application',
    careerRelevance: ['Engineering', 'Computer Science', 'Research', 'Technology'],
    recognitions: ['Regional Champions', 'Innovation Award'],
    icon: Code,
  },
  {
    id: '3',
    title: 'Community Service Club',
    category: 'service',
    timeCommitment: {
      hoursPerWeek: 4,
      duration: 'Flexible schedule',
    },
    description: 'Organize and participate in community service projects.',
    benefits: [
      'Make a positive impact',
      'Develop empathy',
      'Learn project organization',
      'Build community connections',
    ],
    skills: ['Organization', 'Communication', 'Empathy', 'Leadership'],
    collegeImpact: 'Shows social responsibility and community engagement',
    careerRelevance: ['Non-profit', 'Social Work', 'Education', 'Healthcare'],
    icon: Heart,
  },
];