export type CaseStudyDiagram = {
  caption?: string;
  nodes: {
    id: string;
    label: string;
    x: number;
    y: number;
    tone?: "teal" | "blue" | "purple";
  }[];
  edges: {
    from: string;
    to: string;
    label?: string;
  }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  categories: string[];
  labels: string[];
  tech: string[];
  heroImage?: string;
  summary: string;
  engagement?: "internship" | "individual";
  caseStudy: {
    context: string[];
    architecture: string[];
    features: string[];
    challenges: string[];
    impact: string[];
    improvements: string[];
    diagram?: CaseStudyDiagram;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  accent?: "teal" | "purple";
};

export type Award = {
  title: string;
  event: string;
  period: string;
  details: string[];
  label?: string;
};
