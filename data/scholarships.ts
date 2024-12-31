import { Scholarship, ResourceLink } from '../types/scholarships';
import { BookOpen, PenLine, FileCheck } from 'lucide-react';

export const scholarships: Scholarship[] = [
  {
    id: '1',
    title: 'STEM Excellence Scholarship',
    provider: 'National Science Foundation',
    amount: 10000,
    deadline: '2024-12-31',
    description: 'Supporting outstanding students pursuing degrees in STEM fields.',
    eligibility: {
      gpa: 3.5,
      majors: ['Computer Science', 'Engineering', 'Mathematics', 'Physics'],
      yearInSchool: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
    },
    requirements: [
      'Personal statement',
      'Two letters of recommendation',
      'Research proposal',
      'Academic transcript',
    ],
    tags: ['STEM', 'Research', 'Merit-based'],
  },
  {
    id: '2',
    title: 'Future Leaders in Business',
    provider: 'Business Leaders Association',
    amount: 7500,
    deadline: '2024-11-15',
    description: 'Supporting aspiring business leaders with demonstrated leadership potential.',
    eligibility: {
      gpa: 3.2,
      majors: ['Business Administration', 'Economics', 'Finance', 'Marketing'],
      yearInSchool: ['Junior', 'Senior'],
    },
    requirements: [
      'Leadership essay',
      'Resume',
      'Letter of recommendation',
      'Academic transcript',
    ],
    tags: ['Business', 'Leadership', 'Merit-based'],
  },
];

export const resourceLinks: ResourceLink[] = [
  {
    title: 'Essay Writing Guide',
    description: 'Tips for writing compelling scholarship essays',
    icon: PenLine,
    url: '/resources/essay-guide',
  },
  {
    title: 'Application Checklist',
    description: 'Ensure your application is complete',
    icon: FileCheck,
    url: '/resources/checklist',
  },
  {
    title: 'Financial Aid Guide',
    description: 'Understanding different types of aid',
    icon: BookOpen,
    url: '/resources/financial-aid',
  },
];