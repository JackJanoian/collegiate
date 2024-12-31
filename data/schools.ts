import { School } from '../types/lists';

export const schools: School[] = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology",
    ranking: 1,
    acceptanceRate: 7.3,
    location: {
      city: "Cambridge",
      state: "MA"
    },
    tuition: {
      inState: 55878,
      outOfState: 55878
    },
    enrollment: 11376,
    satRange: {
      math: [780, 800],
      verbal: [730, 780]
    },
    topMajors: [
      "Computer Science",
      "Engineering",
      "Mathematics",
      "Physics",
      "Biology"
    ],
    tags: ["STEM", "Research", "Ivy League", "Urban"]
  },
  {
    id: 2,
    name: "Stanford University",
    ranking: 2,
    acceptanceRate: 4.7,
    location: {
      city: "Stanford",
      state: "CA"
    },
    tuition: {
      inState: 56169,
      outOfState: 56169
    },
    enrollment: 17249,
    satRange: {
      math: [760, 800],
      verbal: [720, 770]
    },
    topMajors: [
      "Computer Science",
      "Engineering",
      "Economics",
      "Biology",
      "Psychology"
    ],
    tags: ["Research", "Innovation", "Silicon Valley", "Liberal Arts"]
  }
  // Add more schools as needed
];