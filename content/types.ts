export type ProjectItem = { title: string; desc: string };
export type FeaturedProject = { title: string; tag: string; description: string };
export type NewsItem = { date: string; title: string; description: string };
export type MilestoneItem = { year: string; title: string; description?: string };

export type SiteContent = {
  home: {
    roles: string[];
    missionCard: string;
    snapshot: { value: string; label: string }[];
    milestones: MilestoneItem[];
    featuredProjects: FeaturedProject[];
    news: NewsItem[];
  };
  about: {
    bio: string;
    mission: string;
    careerVision: string;
    values: { title: string; description: string }[];
  };
  academics: {
    gpa?: string;
    classRank?: string;
    classOf: string;
    track: string;
    honors: { title: string; note?: string }[];
    coursework: string[];
    apClasses: { name: string; note: string }[];
    healthcareAcademyDescription: string;
    certifications: string[];
    awards: { title: string; year: string }[];
  };
  research: {
    pageDescription: string;
    comingSoonNote?: string;
    interests: string[];
    facultyInterests: string;
    currentReading: string;
    pythonProjects: ProjectItem[];
    webProjects: ProjectItem[];
    healthcareApps: ProjectItem[];
    scienceFair: ProjectItem[];
    codingSkills: string[];
    futureProjects: ProjectItem[];
  };
  healthcare: {
    volunteerWork: string;
    clinicalExperience: string;
    shadowing: string;
    certifications: string;
    leadership: string;
    communityService: string;
    journey: { year: string; title: string; text: string }[];
  };
  contact: {
    email: string;
  };
};
