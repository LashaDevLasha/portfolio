/**
 * All public copy lives here.
 * Edit this file and the homepage updates — no layout changes required.
 */

export type SiteLink = {
  label: string;
  href: string;
};

export type Language = {
  name: string;
  short: string;
};

export type Skill = {
  title: string;
  core: string[];
  summary: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

const links: SiteLink[] = [
  { label: "GitHub", href: "https://github.com/LashaDevLasha" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lasha-goglidze-9ba671268/?isSelfProfile=true",
  },
];

export const site = {
  name: "Lasha Goglidze",
  role: "Software Engineer",
  statement: "From idea to interface — and everything in between",
  summary:
    "I've spent 4+ years building products with React and TypeScript, and taking them end to end with Node.js and NestJS.",
  email: "lashagoglidzelasha@gmail.com",
  phone: "+995 533 330 802",
  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "3d48153e-51f1-4b45-9650-8b591e9234a6",
    subject: "New message from your portfolio",
  },
  whatsapp: {
    number: "995533330802",
    message: "Hi Lasha, I saw your portfolio and would like to get in touch.",
  },
  cv: {
    href: "/cv.pdf",
    fileName: "Lasha-Goglidze-CV.pdf",
  },
  sections: {
    work: {
      kicker: "Projects",
      title: "Discover what I've built",
      intro:
        "Products I've helped design and ship — what they do, what I owned, and the stack behind them.",
    },
    about: {
      title: "Who I am",
    },
    skills: {
      kicker: "Skills",
      title: "What I bring",
      intro:
        "Front-end depth, full-stack range, and AI-assisted workflows that speed up delivery without lowering the bar.",
    },
    contact: {
      kicker: "Contact",
      title: "Let's work together",
      intro: "Have a project in mind, or just want to talk? My inbox is open.",
    },
  },
  about: [
    "I'm a software engineer who's spent the last 4+ years turning ideas into web apps people actually enjoy using. I live in JavaScript, TypeScript, and React — and I care about the details: interfaces that are fast, accessible, and feel effortless, no matter how complex things get under the hood.",
    "I don't stop at the browser. With Node.js, Express, NestJS, and both SQL and NoSQL databases in my toolkit, I can take a feature from the first pixel to the last API call — and speak the same language as the backend team.",
    "AI is part of my daily workflow. Claude, GitHub Copilot, and other LLM tools help me write, refactor, debug, test, and document faster — but speed never comes at the cost of quality. Every line still has to earn its place.",
  ],
  languages: [
    { name: "TypeScript", short: "TS" },
    { name: "JavaScript", short: "JS" },
  ] satisfies Language[],
  skills: [
    {
      title: "Front-End Development",
      core: ["React", "Next.js"],
      summary:
        "Complex, responsive, accessible interfaces with solid component architecture, predictable state, and attention to performance and cross-browser behavior.",
    },
    {
      title: "Back-End Development",
      core: ["Express", "NestJS"],
      summary:
        "Backend services and APIs built with Node.js, Express, and NestJS, backed by both SQL and NoSQL databases.",
    },
  ] satisfies Skill[],
  toolbox: [
    {
      title: "Programming languages",
      items: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SQL",
        "Python",
        "C++",
        "C",
      ],
    },
    {
      title: "Front-end",
      items: [
        "React",
        "Next.js",
        "Redux",
        "TanStack Start",
        "Apollo",
        "Material UI",
        "Tailwind CSS",
        "Bootstrap CSS",
        "SASS/SCSS",
        "CSS Preprocessors",
        "Vite",
        "Webpack",
        "Ant Design",
        "Zustand",
        "TanStack Query",
      ],
    },
    {
      title: "Back-end & APIs",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "REST",
        "GraphQL",
        "HTTP",
        "WebSockets",
        "Prisma",
        "TypeORM",
        "APIs and Integration",
        "Data Integration",
        "Fastify",
      ],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Databases", "Sitecore CMS"],
    },
    {
      title: "Testing & tools",
      items: [
        "Jest",
        "Git",
        "Docker",
        "Cloud",
        "Content Management Systems",
        "Asterisk",
        "SMS",
        "React Testing Library",
        "Mocha",
      ],
    },
    {
      title: "AI",
      items: [
        "GitHub Copilot",
        "Gen AI Assisted Development",
        "Generative AI Fundamentals",
        "Prompt Engineering",
        "LLMs",
        "RAG",
        "AI Agents",
      ],
    },
    {
      title: "Languages",
      items: ["English", "Georgian", "Russian"],
    },
  ] satisfies SkillGroup[],
  links,
};
