import { Mentor } from '../types/mentorship';

export const mentors: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Sarah Williams',
    title: 'Former Admissions Officer',
    institution: 'Stanford University',
    expertise: [
      'College Essays',
      'Application Strategy',
      'Interview Prep',
      'STEM Applications'
    ],
    education: [
      {
        degree: 'Ph.D. Education',
        school: 'Harvard University',
        year: 2015
      },
      {
        degree: 'M.Ed.',
        school: 'Stanford University',
        year: 2010
      }
    ],
    specializations: ['Ivy League', 'Engineering Schools', 'Research Universities'],
    availability: {
      hours: 'Weekdays',
      timeZone: 'EST',
      nextAvailable: 'Tomorrow'
    },
    rating: 4.9,
    reviewCount: 127,
    bio: 'Former admissions officer with 10+ years of experience helping students get into top universities. Specialized in STEM applications and essay development.',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tags: ['STEM', 'Essays', 'Strategy']
  },
  {
    id: 'mentor-2',
    name: 'Prof. James Chen',
    title: 'College Counselor',
    institution: 'MIT',
    expertise: [
      'STEM Applications',
      'Research Experience',
      'Scholarship Applications',
      'International Students'
    ],
    education: [
      {
        degree: 'Ph.D. Computer Science',
        school: 'MIT',
        year: 2012
      }
    ],
    specializations: ['Engineering Schools', 'Research Universities', 'International Universities'],
    availability: {
      hours: 'Flexible',
      timeZone: 'PST',
      nextAvailable: 'Today'
    },
    rating: 4.8,
    reviewCount: 95,
    bio: 'Passionate about helping students navigate the complex world of college admissions, especially in STEM fields. Expert in research opportunities and international applications.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    tags: ['Research', 'International', 'STEM']
  }
];