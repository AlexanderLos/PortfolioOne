export const profile = {
  name: "Alexander De Los Santos",
  title: "AI Product Engineer",
  location: "Miami, FL",
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
    role: "Mid-Level Software Engineer (Contract)",
    period: "Mar 2025 — Jun 2026",
    location: "Remote",
    highlights: [
      "Owned critical .NET and Hangfire background jobs for healthcare claims processing across dev and staging. Diagnosed and fixed multi-layered production failures in managed-identity authentication and database provisioning that others couldn't isolate.",
      "Cut a SQL Server data extraction pipeline from 11 hours to under 4 minutes.",
      "Authored Terraform modules provisioning Event Hubs, Storage, and RBAC across FedRAMP-compliant Azure Government Cloud environments.",
      "Kept core systems running as the team contracted, owning everything from root-cause debugging through cross-environment deployment.",
    ],
  },
  {
    company: "Oakrift",
    role: "Founder & Engineer",
    period: "Sep 2025 — Present",
    location: "Miami, FL",
    current: true,
    highlights: [
      "Solo-built and launched an AI-powered media intelligence B2B SaaS generating recurring enterprise revenue, with an active international sales pipeline.",
      "Direct Claude Code agents across the full codebase — multi-agent orchestration, dynamic workflows, and pre-tool-use governance hooks.",
      "Cut LLM and third-party API costs by ~50% through prompt caching and quota-efficient endpoint migration.",
    ],
  },
  {
    company: "Accenture",
    role: "IT Consultant (Contract)",
    period: "Aug 2024 — Mar 2025",
    location: "Remote",
    highlights: [
      "Built Azure Data Factory pipelines automating healthcare data workflows and integrations.",
      "Delivered scalable cloud-native solutions on Azure with cross-functional data engineering teams.",
    ],
  },
  {
    company: "General Assembly",
    role: "Software Engineering Fellow",
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
    label: "AI & Agentic Development",
    skills: [
      "Claude Code (multi-agent orchestration)",
      "Claude API",
      "OpenAI API",
      "LLM application architecture",
      "Embeddings & semantic analysis",
      "RAG pipelines",
      "LLM cost & quota optimization",
      "MCP integrations",
    ],
  },
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
      "REST APIs",
      "NextAuth.js",
      "Stripe",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes", "Vercel"],
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
];

export const oakrift = {
  url: "https://oakrift.com",
  description:
    "An enterprise B2B SaaS that reads the media landscape for its clients — and it generates recurring revenue today, with an active international sales pipeline. Every layer, from ingestion to billing, designed, shipped, and operated by one engineer.",
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
        "Thousands of media items weekly across 8+ social, video, news, and broadcast channels, with per-client cost controls.",
    },
    {
      title: "Production SaaS foundations",
      detail:
        "Stripe billing, auth, RBAC team workspaces, rate limiting, and security hardening — run solo, end to end.",
    },
    {
      title: "LLM cost engineering",
      detail:
        "~50% cost reduction through prompt caching and quota-efficient endpoint migration.",
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
    note: "Pass with High Honors",
  },
];

export const certifications = [
  { name: "CKA — Certified Kubernetes Administrator", year: "2025" },
  { name: "AWS Certified Developer Associate", year: "2024" },
  { name: "General Assembly Certified Full Stack Developer", year: "2023" },
] as const;

export const languages = ["English (fluent)", "Spanish (fluent)"] as const;
