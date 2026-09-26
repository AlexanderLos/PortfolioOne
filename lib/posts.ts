export type PostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; lang?: string; code: string }
  | ({ type: "image" } & PostImage)
  | { type: "gallery"; images: PostImage[] };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-09-21" */
  date: string;
  tags: string[];
  /** Drafts render in `next dev` only and never in production builds. */
  draft?: boolean;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "water-neighbor-claude-code-build-day",
    title: "Water Neighbor at Claude Code Build Day.",
    summary:
      "[Fill in. One or two sentences on what Water Neighbor is and what got built at the Claude Code build day.]",
    date: "2026-09-27",
    tags: ["Build day", "Water Neighbor"],
    draft: true,
    body: [
      {
        type: "p",
        text: "[Fill in. Set the scene. What the Claude Code build day was, where it was, who was there, and why you showed up.]",
      },
      {
        type: "image",
        src: "/blog/water-neighbor-1.png",
        alt: "[Describe the photo]",
        width: 1600,
        height: 1000,
        caption: "[Caption for the first photo]",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "[Fill in. The ongoing water crisis in Puerto Rico as you understand it, and the gap Water Neighbor is meant to fill for the people dealing with it.]",
      },
      { type: "h2", text: "What we built" },
      {
        type: "p",
        text: "[Fill in. Water Neighbor, built with Cesar Melendez. What it does for someone in Puerto Rico who needs water, and what the first version actually shipped that day.]",
      },
      {
        type: "ul",
        items: [
          "[Feature or piece one]",
          "[Feature or piece two]",
          "[Feature or piece three]",
        ],
      },
      {
        type: "gallery",
        images: [
          {
            src: "/blog/water-neighbor-2.png",
            alt: "[Describe the photo]",
            width: 1600,
            height: 1000,
            caption: "[Caption]",
          },
          {
            src: "/blog/water-neighbor-3.png",
            alt: "[Describe the photo]",
            width: 1600,
            height: 1000,
            caption: "[Caption]",
          },
        ],
      },
      { type: "h2", text: "How we built it with Claude Code" },
      {
        type: "p",
        text: "[Fill in. How the work was split between you, Cesar, and the agents. What Claude Code handled well, where it needed direction, and any hooks, plugins, or workflows you leaned on.]",
      },
      {
        type: "image",
        src: "/blog/water-neighbor-4.png",
        alt: "[Describe the photo]",
        width: 1600,
        height: 1000,
        caption: "[Caption for the last photo]",
      },
      { type: "h2", text: "What's next for Water Neighbor" },
      {
        type: "p",
        text: "[Fill in. Where the project goes from here, how people can use it or help, and a thank you to Cesar and the organizers.]",
      },
    ],
  },
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
        text: "There are plenty of great stories from those years too. At Accenture I built healthcare data pipelines with Azure Data Factory and Databricks, and dug through an environment with 400+ pipelines to track down errors and duplicate records. At Optum I built a microservice that became a monolith down the line once more chefs entered the kitchen. Through all of it, my domain knowledge and my ability to think through a feature, produce it, and talk through it became a really, really valuable skill to have.",
      },
      {
        type: "p",
        text: "So when I left, I figured it was a good time to find a role that would actually fix that feeling of being disposable. But first I wanted to get uncomfortable.",
      },
      { type: "h2", text: "Building Oakrift" },
      {
        type: "p",
        text: "I decided to build my own business, so I developed Oakrift. It's an AI powered SaaS that captures sentiment for brands and topics across news and social media. After building out the infrastructure, data, and application layers, I demoed the product to multiple companies. It was a short lived dream, but it was my dream, and what it gave back for the hard work was exponential. I built an entire application end to end and learned the tradeoffs between tools, along with stewardship, managing finances, leadership, and building properly with agentic tooling, guardrails, and tests. You name it. It made me a better developer.",
      },
      {
        type: "p",
        text: "Today Oakrift is live and stable, and I maintain and improve it in the background. It is not a second job. Truth be told, I don't think I'm at a stage where I want to operate a company solo full time, especially when competitors run businesses like this with teams of 200 or more. It feels like the right time to join something larger than myself and learn as much as I can from a team that builds and ships daily and owns its features.",
      },
      {
        type: "p",
        text: "Recruiters and CEOs always get nervous when they see I run a project outside of work, because they assume I'll be secretly juggling priorities. The reality is that running a business like this, especially now with AI, is a lot more like working on a car in your garage, and it's better that way. With modern tools like Sentry and a bit of decent logging, I can spot what's broken or what needs work, dispatch a team of agents to build it or fix it, and be left with a smoke test and hopefully no extra revisions. But I digress.",
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "The landscape for software engineering has changed a lot, and even though I've been getting some interviews lately, the criteria keep changing. As much as this part of the job application sucks, it's actually been really good for growth. I've gone to networking events solo, I built and presented a project at a Claude Code event, and this week I'm going to a Grok event and a Latino Claude event.",
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

const showDrafts = process.env.NODE_ENV === "development";

export function getPosts(): Post[] {
  return posts
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
