export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; lang?: string; code: string };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-09-21" */
  date: string;
  tags: string[];
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "why-i-left-what-i-built-and-whats-next",
    title: "Why I left, what I built, and what's next.",
    summary:
      "There's a lot a resume can't capture. So here's the extra context, starting with why I left my last role, what building Oakrift taught me, and the role I'm looking for next.",
    date: "2026-09-21",
    tags: ["Career status"],
    body: [
      {
        type: "p",
        text: "I figured it would be a good idea to start a blog because there is so much a resume can't capture, and a bit of extra context is always worth having. The best place to start is probably why I left my previous role, because there were a few reasons.",
      },
      {
        type: "p",
        text: "A major one is that in my short time in the industry I've only ever been a contractor, and I felt easily disposable. I also started at Optum with a team of seven developers, and over time every one of them moved on for their own reasons. That part still stings, because it was an amazing team. A senior who showed me a lot, a junior who did nothing but amaze me, and two great scrum masters I got along with really well. I'll never forget them.",
      },
      {
        type: "p",
        text: "There are plenty of great stories from those years too. At Accenture I was made to build entire pipelines with Azure Pipelines and read through multiple stored procedures to track down errors. At Optum I built a microservice that became a monolith down the line once more chefs entered the kitchen. Through all of it, my domain knowledge and my ability to think through a feature, produce it, and talk through it became a really, really valuable skill to have.",
      },
      {
        type: "p",
        text: "So when I left, I figured it was a good time to find a role that would actually fix that feeling of being disposable. But first I wanted to get uncomfortable.",
      },
      { type: "h2", text: "Building Oakrift" },
      {
        type: "p",
        text: "I decided to build my own business, so I developed Oakrift. It's an AI powered SaaS that captures sentiment for brands and topics across news and social media. After building out the infrastructure, data, and application layers, I demoed the product to multiple companies and secured an enterprise paying client for a short time. It was a short lived dream, but it was my dream, and what it gave back for the hard work was exponential. I built an entire application end to end and learned the tradeoffs between tools, along with stewardship, managing finances, leadership, and building properly with agentic tooling, guardrails, and tests. You name it. It made me a better developer.",
      },
      {
        type: "p",
        text: "For reasons I can't share, my client and I decided it would be best to revisit our working agreement sometime in the future. Today Oakrift is live and stable, and I maintain and improve it in the background. It is not a second job. Truth be told, I don't think I'm at a stage where I want to operate a company solo full time, especially when competitors run businesses like this with teams of 200 or more. It feels like the right time to join something larger than myself and learn as much as I can from a team that builds and ships daily and owns its features.",
      },
      {
        type: "p",
        text: "Recruiters and CEOs always get nervous when they see I run a project outside of work, because they assume I'll be secretly juggling priorities. The reality is that running a business like this, especially now with AI, is a lot more like working on a car in your garage, and it's better that way. With modern tools like Sentry and a bit of decent logging, I can spot what's broken or what needs work, dispatch a team of agents to build it or fix it, and be left with a smoke test and hopefully no extra revisions. But I digress.",
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "The landscape for software engineering has changed a lot, and even though I've been getting some interviews lately, the criteria keep changing. As much as this stretch of my life sucks, it's actually been really good for growth. I've gone to networking events solo, I built and presented a project at a Claude Code event, and this week I'm going to a Grok event and a Latino Claude event.",
      },
      {
        type: "p",
        text: "So here is what I'm looking for. A full stack role building with LLM APIs and agentic tools, on a team that ships daily and owns its features. If that sounds like your team, I made sure the contact links in the footer work!",
      },
      {
        type: "p",
        text: "And to any developer who ends up in my situation or something similar, KEEP GOING! It's the only thing we can do.",
      },
      {
        type: "p",
        text: "Thanks for reading if you made it this far. I'll leave you with this quote.",
      },
      { type: "quote", text: "Little strokes fell great oaks." },
    ],
  },
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
