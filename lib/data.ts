export const profile = {
  name: "Alexander De Los Santos",
  title: "Full Stack Software Engineer",
  location: "Miramar, FL",
  email: "alexander.dlosant@gmail.com",
  github: "https://github.com/AlexanderLos",
  linkedin: "https://www.linkedin.com/in/alexander-de-los-santos/",
  resume: "/resume.pdf",
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
    company: "Optum",
    role: "Software Engineer (Contract)",
    period: "Mar 2025 — Jun 2026",
    location: "Remote",
    highlights: [
      "Owned critical .NET and Hangfire background jobs for healthcare claims processing. Resolved a production failure that had been open for months by diagnosing 13 distinct issues across managed-identity authentication, SQL schema ownership, and Terraform database provisioning, restoring the jobs across every Azure Government environment.",
      "Cut a SQL Server data extraction pipeline from 11 hours to under 4 minutes.",
      "Authored Terraform modules provisioning Event Hubs, Storage, and RBAC across FedRAMP-compliant Azure Government Cloud environments.",
    ],
  },
  {
    company: "Accenture",
    role: "IT Consultant (Contract)",
    period: "Aug 2024 — Mar 2025",
    location: "Remote",
    highlights: [
      "Built healthcare data pipelines with Azure Data Factory, Databricks (PySpark), and SQL.",
      "Investigated Databricks dependencies in an Azure Data Factory environment with 400+ pipelines, measured storage use, and flagged duplicate records as defects for the team to fix.",
    ],
  },
  {
    company: "Oakrift",
    role: "Founder & Engineer",
    period: "Sep 2025 — Present",
    location: "Miramar, FL",
    current: true,
    highlights: [
      "Solo-built and launched an AI-powered media intelligence B2B SaaS, live in production.",
      "Direct Claude Code agents across the full codebase — multi-agent orchestration, dynamic workflows, and pre-tool-use governance hooks.",
    ],
  },
  {
    company: "General Assembly",
    role: "Student Software Engineer",
    period: "Jul 2023 — Dec 2023",
    location: "Remote",
    highlights: [
      "Completed 480+ hours of full-stack training; built and shipped multiple responsive web applications with React, Node.js, and Express.",
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
      "Claude Code (multi-agent orchestration)",
      "Codex",
      "Claude API",
      "OpenAI API",
      "Agentic loops",
      "MCP servers",
      "Plugins & hooks",
      "Grok Bot",
      "LLM application architecture",
      "Embeddings & semantic analysis",
    ],
  },
];

export const oakrift = {
  url: "https://oakrift.com/features",
  description:
    "An enterprise B2B SaaS that reads the media landscape — live in production. Every layer, from ingestion to billing, designed, shipped, and operated by one engineer.",
  features: [
    {
      title: "Research-augmented executive briefs",
      detail:
        "Scheduled brief generation that turns a window of coverage into key storylines, tone movement, and likely questions.",
    },
    {
      title: "Narrative drift detection",
      detail:
        "Embedding-based topic modeling and statistical significance testing over time-series media data.",
    },
    {
      title: "Real-time crisis alerting",
      detail: "Tiered severity alerts the moment coverage turns.",
    },
    {
      title: "Multi-source ingestion",
      detail:
        "Thousands of media items weekly across 8+ social, video, news, and broadcast channels, with per-tenant spend limits.",
    },
    {
      title: "Production SaaS foundations",
      detail:
        "Stripe billing, auth, RBAC team workspaces, rate limiting, and security hardening — run solo, end to end.",
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
    institution: "Harvard Business School",
    credential: "CORe — Credential of Readiness",
    period: "2025 — 2026",
  },
];

export const certifications = [
  { name: "CKA — Certified Kubernetes Administrator", year: "2025" },
  { name: "AWS Certified Developer Associate", year: "2024" },
  { name: "General Assembly Certified Full Stack Developer", year: "2023" },
] as const;

export const languages = ["English (fluent)", "Spanish (fluent)"] as const;
