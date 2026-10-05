export const profile = {
  name: "Alexander De Los Santos",
  title: "Full Stack Software Engineer",
  location: "Miramar, FL",
  email: "alexander.dlosant@gmail.com",
  github: "https://github.com/AlexanderLos",
  linkedin: "https://www.linkedin.com/in/alexander-de-los-santos/",
  resume: "/Alexander_De_Los_Santos_Resume.pdf",
  resumePage: "/resume",
} as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "Software Engineer via Brooksource",
    period: "Mar 2025 — Jun 2026",
    location: "Remote",
    highlights: [
      "Built .NET microservices and Hangfire jobs that moved claims and payment files between SFTP servers and Azure for the VA Community Care Network.",
      "Cut a SQL Server pipeline from 11 hours to under 4 minutes using indexed lookups, caching, and parallel processing, turning an overnight batch into an on demand job.",
      "Fixed core claims jobs that had been failing in production for months, resolving 13 issues across Azure authentication, SQL schema ownership, and Terraform.",
      "Authored Terraform modules provisioning Event Hubs, Storage, and RBAC across FedRAMP compliant Azure Government Cloud environments.",
      "Led backlog refinement, split features into stories the team could build and test, and scoped a payments epic across three teams.",
    ],
  },
  {
    company: "Accenture",
    role: "IT Consultant via Brooksource",
    period: "Aug 2024 — Mar 2025",
    location: "Remote",
    highlights: [
      "Built healthcare data pipelines with Azure Data Factory, Databricks (PySpark), and SQL.",
      "Analyzed and debugged SQL stored procedures to resolve data issues in the enterprise data warehouse.",
      "Investigated Databricks dependencies in an Azure Data Factory environment with 400+ pipelines, measured storage use, and flagged duplicate records as defects for the team to fix.",
    ],
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      ".NET",
      "Prisma",
      "PostgreSQL (Neon)",
      "SQL Server",
      "Redis",
      "REST APIs",
      "NextAuth.js",
      "Stripe",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      "Azure",
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
      "Vercel",
    ],
  },
  {
    label: "DevOps & Observability",
    skills: [
      "GitHub Actions CI/CD",
      "Hangfire",
      "Sentry",
      "App Insights",
      "Azure Monitor",
    ],
  },
  {
    label: "AI & Agentic Development",
    skills: [
      "Claude Code",
      "Codex",
      "Claude API",
      "OpenAI API",
      "MCP servers",
      "Plugins & hooks",
      "Grok Bot",
      "Embeddings & semantic analysis",
    ],
  },
];

export const oakrift = {
  url: "https://oakrift.com/features",
  description:
    "A media intelligence SaaS that turns media coverage into sourced briefs and crisis alerts, live in production. I built it from ingestion to billing and handle production support and customer demos.",
  features: [
    {
      title: "Sourced executive briefs",
      detail:
        "Scheduled briefs that turn a window of coverage into key storylines, tone movement, and likely questions, with sources cited.",
    },
    {
      title: "Narrative drift detection",
      detail:
        "Topic modeling on embeddings, with statistical significance testing on media coverage over time.",
    },
    {
      title: "Crisis alerts in real time",
      detail: "Tiered severity alerts the moment coverage turns.",
    },
    {
      title: "Media ingestion",
      detail:
        "Thousands of media items a week across 8+ social, video, news, and broadcast platforms, with spend limits for each customer.",
    },
    {
      title: "Production SaaS foundations",
      detail:
        "Stripe billing, authentication, multitenant access controls with team workspaces, rate limits, monitoring, and security hardening.",
    },
  ],
  screenshots: [
    {
      src: "/oakrift-drift.png",
      alt: "Oakrift Narrative Drift dashboard showing weekly tone analysis for a media stream",
      width: 2908,
      height: 1364,
    },
    {
      src: "/oakrift-desk.png",
      alt: "Oakrift Narrative Desk showing executive brief generation over a selected coverage window",
      width: 2296,
      height: 1194,
    },
  ],
} as const;

export type EducationEntry = {
  institution: string;
  credential: string;
  period: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Florida International University",
    credential: "B.S. Economics, Minor in Computer Science",
    period: "2022 — 2024",
  },
  {
    institution: "General Assembly",
    credential: "Full Stack Software Engineering Certificate, 480+ hours of training",
    period: "Jul 2023 — Dec 2023",
  },
];

export const certifications = [
  { name: "Certified Kubernetes Administrator (CKA)", year: "2025" },
  { name: "AWS Certified Developer Associate", year: "2024" },
] as const;

export const languages = ["English", "Spanish"] as const;
