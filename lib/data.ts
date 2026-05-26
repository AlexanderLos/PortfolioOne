export type WorkEntry = {
  org: string;
  role: string;
  period: string;
  description: string;
  links?: { label: string; href: string }[];
};

export const work: WorkEntry[] = [
  {
    org: "Optum",
    role: "Software Engineer",
    period: "2024 — Present",
    description:
      "Platform engineering on healthcare claims infrastructure. .NET services on Kubernetes, deployed to Azure Government Cloud.",
  },
  {
    org: "Oakrift",
    role: "Founder",
    period: "2024 — Present",
    description:
      "Building a B2B media intelligence platform from scratch. Designing the data pipeline, the schema, and the surface engineers and analysts actually use.",
  },
  {
    org: "ChipKrypt",
    role: "Side project",
    period: "2023",
    description:
      "Cryptocurrency price tracker and news aggregator. React frontend, Django + Postgres backend, deployed on Vercel.",
    links: [{ label: "Visit", href: "https://chipkrypt-frontend.vercel.app" }],
  },
  {
    org: "General Assembly",
    role: "Software Engineering Immersive Fellow",
    period: "Jul — Dec 2023",
    description:
      "480+ hours of full-stack instruction. Built capstone projects in React, Express, Node, and Postgres.",
  },
];

export const profile = {
  name: "Alexander De Los Santos",
  title: "Software engineer",
  location: "Miami, FL",
  email: "alexander.dlosant@gmail.com",
  github: "https://github.com/AlexanderLos",
  linkedin: "https://www.linkedin.com/in/alexander-de-los-santos/",
  resume: "/resume.pdf",
} as const;
