import { ApplicationSample } from '../../types/applications';
import { essays } from './essays';
import { extracurriculars } from './extracurriculars';
import { recommendations } from './recommendations';

export const sampleApplications: ApplicationSample[] = [
  {
    id: 'app-1',
    studentName: 'Emily Chen',
    acceptedSchools: ['MIT', 'Stanford University', 'CalTech'],
    intendedMajor: 'Computer Science',
    gpa: 4.0,
    testScores: {
      sat: {
        math: 800,
        verbal: 760
      }
    },
    essays: [essays.commonApp, essays.supplemental],
    extracurriculars: [
      extracurriculars.stemLeadership,
      extracurriculars.research,
      extracurriculars.communityService
    ],
    recommendations: [recommendations.teacher, recommendations.counselor],
    tags: ['STEM', 'Research', 'Leadership']
  },
  {
    id: 'app-2',
    studentName: 'Marcus Johnson',
    acceptedSchools: ['Harvard University', 'Yale University', 'Princeton University'],
    intendedMajor: 'Biology',
    gpa: 3.95,
    testScores: {
      sat: {
        math: 780,
        verbal: 780
      }
    },
    essays: [
      {
        id: 'essay-3',
        title: 'Healthcare Access Initiative',
        prompt: 'Describe a problem you\'ve solved or would like to solve.',
        content: 'Witnessing healthcare disparities in my community...',
        analysis: 'Shows deep understanding of social issues and initiative in addressing them.',
        strengths: [
          'Clear passion for healthcare',
          'Demonstrates leadership and initiative',
          'Shows empathy and community awareness',
          'Specific examples of impact'
        ]
      }
    ],
    extracurriculars: [
      {
        activity: 'Healthcare Advocacy Club',
        role: 'Founder & President',
        impact: 'Created free health screening program, served 500+ community members'
      },
      extracurriculars.research
    ],
    recommendations: [recommendations.teacher],
    tags: ['STEM', 'First Generation', 'Leadership']
  }
];