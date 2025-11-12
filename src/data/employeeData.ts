export interface Employee {
  id: string;
  name: string;
  currentSkills: string[];
  performanceScore: number;
  predictedSkillGaps: string;
  learningPath: string;
  microlearningNudges: string;
  lastTrainingDate: string;
  nextTrainingModule: string;
  feedbackScore: number;
}

export const employees: Employee[] = [
  {
    id: "101",
    name: "Alice",
    currentSkills: ["CRM", "Communication"],
    performanceScore: 78,
    predictedSkillGaps: "Data Visualization",
    learningPath: "Data Viz Basics",
    microlearningNudges: "15-min daily quiz",
    lastTrainingDate: "2025-07-01",
    nextTrainingModule: "Data Viz Advanced",
    feedbackScore: 4.2,
  },
  {
    id: "102",
    name: "Bob",
    currentSkills: ["Data Analysis", "Excel"],
    performanceScore: 82,
    predictedSkillGaps: "Python, Machine Learning",
    learningPath: "Python ML Intro",
    microlearningNudges: "Weekly challenge",
    lastTrainingDate: "2025-06-15",
    nextTrainingModule: "ML Projects",
    feedbackScore: 4.5,
  },
  {
    id: "103",
    name: "Carol",
    currentSkills: ["Customer Service", "Chat"],
    performanceScore: 74,
    predictedSkillGaps: "Conflict Resolution",
    learningPath: "Conflict Mgmt Workshop",
    microlearningNudges: "Scenario flashcard",
    lastTrainingDate: "2025-07-20",
    nextTrainingModule: "Handling Difficult Customers",
    feedbackScore: 3.8,
  },
  {
    id: "104",
    name: "David",
    currentSkills: ["Project Management", "Agile"],
    performanceScore: 88,
    predictedSkillGaps: "Cloud Computing",
    learningPath: "Cloud Fundamentals",
    microlearningNudges: "Video summaries",
    lastTrainingDate: "2025-06-30",
    nextTrainingModule: "Advanced Cloud",
    feedbackScore: 4.7,
  },
];
