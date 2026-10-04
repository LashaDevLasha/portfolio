import type { StaticImageData } from "next/image";
import adli from "@/assets/projects/adli.jpg";
import asteriskManager from "@/assets/projects/asterisk-manager.png";
import cb2 from "@/assets/projects/cb2.jpg";
import ketcher from "@/assets/projects/ketcher.jpg";
import citadeli from "@/assets/projects/citadeli.jpg";
import orderManagement from "@/assets/projects/order-management.jpg";
import quickTest from "@/assets/projects/quicktest.png";
import toyotaLexus from "@/assets/projects/toyota-lexus.png";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  duration: string;
  client: {
    name: string;
    location?: string;
    description: string;
  };
  image: StaticImageData;
  imageAlt: string;
  summary: string;
  overview: string[];
  highlights: string[];
  responsibilities: string[];
  outcome: string;
  stack: string[];
  team: { label?: string; value: string }[];
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "ketcher",
    title: "Ketcher",
    tagline: "Open-source chemical structure editor",
    role: "Software Engineer",
    period: "Jul 2026 – Sep 2026",
    duration: "3 months",
    client: {
      name: "EPAM Systems",
      description:
        "EPAM Systems, Inc. is a global software engineering and IT consulting company. Its Life Sciences practice develops and maintains open-source tools for chemists and laboratory scientists, including Ketcher.",
    },
    image: ketcher,
    imageAlt:
      "Ketcher open-source chemical structure editor showing a drawn molecule with its formula, molecular weight, and SMILES string, in a laboratory setting with glassware and a molecular model",
    summary:
      "Contributing to Ketcher, EPAM's open-source, web-based chemical structure editor used by chemists and lab scientists to draw and analyze molecules and reactions.",
    overview: [
      "Ketcher is an open-source, web-based chemical structure editor that offers high performance, good portability, a light footprint, and easy integration into custom web applications. It is designed for chemists, laboratory scientists, and technicians who draw structures and reactions.",
      "As part of EPAM's internal Life Sciences projects on the EPM-LSTR team, I contributed to Ketcher's codebase as an open-source contributor, working with React, TypeScript, and WebAssembly on a real-world scientific application.",
      "The work combined modern front-end engineering with the Life Sciences domain — keeping a complex, interactive 2D drawing tool fast, reliable, and well tested.",
    ],
    highlights: [
      "Open-source contributions to a real scientific product",
      "React and TypeScript with a WebAssembly core",
      "Unit tests with Jest and end-to-end tests with Playwright",
      "Interactive 2D chemical structure editing",
    ],
    responsibilities: [
      "Contributed features and fixes to Ketcher, an open-source chemical structure editor, using React and TypeScript.",
      "Worked with Ketcher's WebAssembly-powered core to support high-performance structure rendering and processing.",
      "Wrote and maintained unit tests with Jest and end-to-end tests with Playwright to keep the editor reliable.",
      "Followed the project's open-source workflow — issues, pull requests, and code reviews — with the maintainers.",
    ],
    outcome:
      "Gained hands-on experience contributing to a widely used open-source scientific tool, working in the Life Sciences domain with a modern React, TypeScript, and WebAssembly stack.",
    stack: ["React", "TypeScript", "WebAssembly", "Jest", "Playwright"],
    team: [{ value: "EPM-LSTR" }],
    href: "https://github.com/epam/ketcher",
    linkLabel: "GitHub",
  },
  {
    slug: "cb2",
    title: "CB2 React Migration",
    tagline: "Multi-country e-commerce on React and SAP Commerce Cloud",
    role: "Software Engineer",
    period: "Mar 2026 – Jun 2026",
    duration: "4 months",
    client: {
      name: "Majid Al Futtaim Emakina",
      description:
        "Majid Al Futtaim Emakina builds and runs e-commerce platforms for MAF Ventures LLC brands, including CB2, across multiple country markets.",
    },
    image: cb2,
    imageAlt:
      "CB2 React Migration Stream: a modern furnished living room with a world map on the wall, next to a list of highlights — React migration, e-commerce, country rollouts, and performance",
    summary:
      "Migrating CB2's e-commerce storefronts to React on SAP Commerce Cloud — with order management, third-party integrations, search, and promotions across multiple country rollouts.",
    overview: [
      "I joined the MAFE-CB26 team at Majid Al Futtaim Emakina on the CB2 React Migration Stream, moving CB2's e-commerce experience onto a modern React front end built on SAP Commerce Cloud.",
      "The work spanned the full commerce stack: building and enhancing storefronts, managing order processes from sourcing and fulfillment to returns and refunds, and integrating third-party systems such as payment gateways, cargo services, e-invoicing, ERP, SMS, and email platforms.",
      "I also improved search and engagement with the SOLR search engine and Promotion Engine, automated data flows with import/export processes and cron jobs, and hardened the platform based on performance and vulnerability test results.",
    ],
    highlights: [
      "7 e-commerce websites and 6 country rollouts for MAF Ventures",
      "SAP Commerce Cloud: B2C Accelerator, PCM, WCMS/SmartEdit",
      "Payment, cargo, ERP, e-invoice, SMS, and email integrations",
      "Performance tuning and security fixes from test results",
    ],
    responsibilities: [
      "Developed and delivered 7 e-commerce websites and managed 6 country-specific rollouts for MAF Ventures LLC over a 3-year period.",
      "Iterated and enhanced existing e-commerce platforms by adding new features and optimizing functionality.",
      "Designed and implemented new e-commerce websites tailored to business requirements and client needs.",
      "Utilized SAP Commerce Cloud expertise, including B2C Accelerator, PCM (Category & Product Management), and WCMS/SmartEdit, to develop and maintain high-quality solutions.",
      "Managed order processes, including sourcing, shipping, fulfillment, inventory, returns, and refunds, ensuring seamless operations.",
      "Integrated 3rd party systems such as payment gateways, cargo services, e-invoice solutions, ERP, SMS, and email platforms.",
      "Leveraged SOLR Search Engine and Promotion Engine to improve user experience and drive customer engagement.",
      "Executed data export/import processes and configured cron jobs for system automation and efficiency.",
      "Conducted performance optimization based on performance test results to ensure system reliability and scalability.",
      "Identified and resolved security vulnerabilities according to vulnerability test results, ensuring compliance with security standards.",
      "Collaborated on REF application development tailored specifically for MAF projects, contributing to its success and alignment with client goals.",
    ],
    outcome:
      "Delivered reliable, scalable e-commerce experiences across multiple markets — with smoother order operations, richer integrations, and a platform tuned for performance and security.",
    stack: [
      "React",
      "SAP Commerce Cloud",
      "B2C Accelerator",
      "PCM",
      "WCMS / SmartEdit",
      "SOLR",
      "Promotion Engine",
      "Payment Gateways",
      "ERP Integration",
      "Cron Jobs",
    ],
    team: [{ value: "MAFE-CB26" }],
  },
  {
    slug: "toyota-lexus",
    title: "Toyota & Lexus Web Platform",
    tagline: "Sitecore XM upgrade and mobile app development",
    role: "Software Engineer",
    period: "Nov 2025 – Feb 2026",
    duration: "4 months",
    client: {
      name: "ALJ Emakina",
      description:
        "ALJ Emakina delivers the digital platforms behind the Toyota and Lexus brands — including their brand websites and mobile application.",
    },
    image: toyotaLexus,
    imageAlt:
      "Toyota and Lexus web platform: a Toyota and a Lexus SUV parked in front of a dealership at dusk, next to a list of platform features",
    summary:
      "Front-end engineering on the Toyota and Lexus brand platforms during a Sitecore XM upgrade, alongside development of a companion mobile app.",
    overview: [
      "I joined the ALJE-STR team at ALJ Emakina to work on the Toyota and Lexus web platforms during a Sitecore XM upgrade, delivered alongside development of a mobile application.",
      "I developed and maintained responsive web applications with Next.js and TypeScript, implemented new features in line with project requirements and business goals, and built user-friendly interfaces with Material-UI (MUI) in close collaboration with UX/UI designers.",
      "I also integrated the front end with REST APIs and backend services, optimized loading performance and cross-browser compatibility, and helped plan and estimate front-end work within agile development cycles.",
    ],
    highlights: [
      "Brand websites for Toyota and Lexus on Next.js and TypeScript",
      "Delivered during a Sitecore XM platform upgrade",
      "Interfaces built with Material-UI alongside UX/UI designers",
      "Performance and cross-browser optimization",
    ],
    responsibilities: [
      "Develop and maintain responsive web applications using Next.js and TypeScript to deliver optimal user experiences.",
      "Implement new features and functionality in alignment with project requirements and business goals.",
      "Troubleshoot, debug, and resolve front-end issues to ensure application stability and high performance.",
      "Collaborate with UX/UI designers to create user-friendly and visually appealing interfaces utilizing Material-UI (MUI).",
      "Integrate front-end systems with REST APIs and backend services for seamless functionality.",
      "Optimize application performance, ensuring efficient loading times and cross-browser compatibility.",
      "Participate in code reviews to ensure clean, maintainable, and scalable code.",
      "Assist in planning and estimating front-end tasks and features within agile development cycles.",
    ],
    outcome:
      "Helped move the Toyota and Lexus brand platforms onto an upgraded Sitecore XM foundation while keeping the sites fast, stable, and consistent across browsers.",
    stack: [
      "Next.js",
      "TypeScript",
      "Material-UI (MUI)",
      "Sitecore XM",
      "REST APIs",
      "Agile",
    ],
    team: [{ value: "ALJE-STR" }],
  },
  {
    slug: "citadeli",
    title: "Citadeli",
    tagline: "Company platform for a construction leader",
    role: "Front-End Developer",
    period: "Jun 2024 – Oct 2025",
    duration: "1 year 5 months",
    client: {
      name: "Citadeli",
      location: "Georgia",
      description:
        "Citadeli is a large construction company in Georgia that sells building materials and provides related services. The company needed a centralized platform to organize and manage internal information, making it easier for employees and administrators to access company data and improve overall efficiency.",
    },
    image: citadeli,
    imageAlt:
      "Citadeli construction company website: a construction site with a crane, a building under construction, and pallets of building materials, next to a list of site sections",
    summary:
      "A centralized, responsive website that gives Citadeli's employees and administrators clear access to company information, services, product catalog, and internal resources.",
    overview: [
      "The Citadeli website is a centralized platform developed for a construction company to streamline access to company information. The goal was a clear, user-friendly website where employees and administrators could efficiently access details about the company, its services, and internal resources.",
      "As a front-end developer, I designed and implemented responsive user interfaces with Next.js and TypeScript, ensuring compatibility across devices and screen sizes. I translated design mockups into functional, interactive pages, integrated components with backend APIs, and collaborated closely with designers to maintain consistency.",
      "The project emphasized accessibility and organization, enabling the company to manage its information digitally with greater ease.",
    ],
    highlights: [
      "Front-end architecture built on Next.js and TypeScript",
      "Reusable, responsive Ant Design component system",
      "Live online chat integration over WebSockets",
      "Optimized page load and accessibility across devices",
    ],
    responsibilities: [
      "Designed and implemented the frontend architecture of the website using Next.js and TypeScript.",
      "Developed responsive layouts and reusable UI components with Ant Design to ensure consistency across the platform.",
      "Integrated frontend components with backend APIs to dynamically display company data.",
      "Collaborated with designers to transform mockups and wireframes into functional, interactive web pages.",
      "Ensured cross-device compatibility, optimizing the website for mobile, tablet, and desktop users.",
      "Enhanced page load performance and frontend efficiency to improve overall user experience.",
      "Participated in code reviews, adhering to best practices for clean and maintainable code.",
      "Worked in an Agile environment, contributing to sprint planning, standups, and team task coordination.",
      "Implemented accessibility features to ensure usability for a diverse audience.",
      "Tested UI components and workflows to guarantee functionality and a bug-free user experience.",
    ],
    outcome:
      "The platform made company information accessible and well organized, enabling Citadeli to manage its information digitally with greater ease.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Ant Design",
      "WebSockets",
      "Online Chat Integration",
      "Git",
      "GitHub",
      "Agile",
    ],
    team: [
      { label: "Front-end", value: "3 developers (including me)" },
      { label: "Back-end", value: "3 developers (PHP)" },
    ],
  },
  {
    slug: "adli",
    title: "ADLI",
    tagline: "Construction projects platform for a Citadeli subsidiary",
    role: "Front-End Developer",
    period: "Jul 2024 – Oct 2025",
    duration: "1 year 4 months",
    client: {
      name: "ADLI",
      location: "Georgia",
      description:
        "ADLI is a subsidiary of Citadeli, specializing in construction and building projects using Citadeli materials. We developed their software platforms to help manage company information and operations efficiently, and provided ongoing support — fixing bugs, making improvements, and adding new features based on ADLI's requirements to ensure the systems met their needs.",
    },
    image: adli,
    imageAlt:
      "ADLI construction projects platform: a concrete building under construction with the ADLI logo, a crane, and stacked building materials, next to a list of site sections",
    summary:
      "A platform that centralizes ADLI's company information, projects, services, and internal resources — continuously improved with new features and fixes as the business evolved.",
    overview: [
      "I worked as a front-end developer for ADLI, a subsidiary of Citadeli, contributing to a platform designed to centralize company information. The website enables employees and administrators to access company data, services, and other critical information efficiently.",
      "My responsibilities included creating responsive, user-friendly pages with Next.js, TypeScript, and Ant Design, and working closely with the backend team to integrate APIs and keep data flowing seamlessly across the platform.",
      "Development was continuous, with regular bug fixes, feature enhancements, and updates based on ADLI's evolving requirements.",
    ],
    highlights: [
      "Scalable front end built with Next.js and TypeScript",
      "Reusable Ant Design components shared across pages",
      "Continuous delivery of features from client requests",
      "Ongoing maintenance and bug fixing for platform stability",
    ],
    responsibilities: [
      "Designed and implemented the frontend of the ADLI platform using Next.js and TypeScript, ensuring a robust and scalable architecture.",
      "Built responsive and reusable UI components with Ant Design to maintain consistency and improve development efficiency.",
      "Translated design mockups into functional and visually appealing web pages tailored for employees and administrators.",
      "Regularly identified and resolved bugs, performing ongoing maintenance to ensure platform stability and an optimal user experience.",
      "Added new features and enhancements based on client requests and evolving business requirements.",
      "Collaborated closely with the backend team to integrate APIs and ensure seamless data flow across the platform.",
      "Tested UI components and functionality to guarantee compatibility and performance across various devices and browsers.",
      "Followed best practices in coding, documentation, and version control using Git to maintain code quality and traceability.",
    ],
    outcome:
      "The system improved the organization of company information and streamlined ADLI's daily operations.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Ant Design",
      "WebSockets",
      "Online Chat Integration",
      "Git",
      "GitHub",
    ],
    team: [
      { label: "Front-end", value: "3 developers (including me)" },
      { label: "Back-end", value: "3 developers (PHP)" },
    ],
  },
  {
    slug: "asterisk-manager",
    title: "Asterisk Manager",
    tagline: "Internal support management platform",
    role: "Front-End Developer",
    period: "Feb 2023 – Jun 2024",
    duration: "1 year 5 months",
    client: {
      name: "Softgen",
      location: "Tbilisi, Georgia",
      description:
        "Softgen is a software development company specializing in custom web and software solutions for clients across multiple industries. It provides full-cycle development — UI/UX design, front-end and back-end development, system integration, and ongoing technical support — focused on efficient, scalable, user-oriented products that help businesses automate processes and improve operational efficiency.",
    },
    image: asteriskManager,
    imageAlt:
      "Asterisk Manager dashboard showing active calls, queue, open tickets, live calls, call volume, recent tickets, and team activity",
    summary:
      "An internal web application for Softgen's support team to manage and monitor customer support — live calls, queues, tickets, and team activity in one place.",
    overview: [
      "Asterisk Manager is an internal web application developed to enhance Softgen's support team operations by improving the management and monitoring of customer support activities. The goal was an intuitive, responsive, and efficient interface that streamlines daily workflows, reduces response times, and increases visibility into support processes.",
      "As the front-end developer, I designed and implemented a clean, user-friendly interface with React and TypeScript — creating reusable UI components, integrating APIs for seamless client-server communication, and keeping visual consistency with Ant Design.",
      "I focused on a scalable, maintainable front-end architecture that follows best practices in component-based development and state management, while optimizing rendering performance and ensuring compatibility across browsers and devices.",
    ],
    highlights: [
      "Real-time support data via REST APIs",
      "Reusable, modular component library on Ant Design",
      "Optimized state and rendering to cut unnecessary re-renders",
      "Responsive and accessible across browsers and devices",
    ],
    responsibilities: [
      "Collaborated with backend developers to design and implement the front-end architecture for the Asterisk Manager web application.",
      "Developed a modern, responsive, and intuitive user interface using React and TypeScript, enhancing support team productivity.",
      "Created reusable and modular UI components using Ant Design to ensure design consistency and maintainability across the application.",
      "Integrated REST APIs to display and manage real-time data for support operations.",
      "Ensured cross-browser compatibility, responsiveness, and accessibility across various screen sizes and devices.",
      "Implemented effective state management and optimized rendering to enhance performance and minimize unnecessary re-renders.",
      "Participated in code reviews, sprint planning, and Agile ceremonies to improve product quality and development efficiency.",
      "Collaborated with UX/UI designers to translate design mockups into functional and interactive components.",
      "Wrote clean, maintainable, and well-documented code adhering to industry best practices and company standards.",
      "Contributed to bug fixing, UI enhancements, and performance optimization throughout the project lifecycle.",
    ],
    outcome:
      "The application gave the support team a centralized platform to manage communications and tasks more effectively, improving operational efficiency and simplifying internal processes.",
    stack: [
      "React",
      "TypeScript",
      "Ant Design",
      "Redux",
      "Axios",
      "TanStack Query",
    ],
    team: [
      { label: "Front-end", value: "1 developer (me)" },
      { label: "Back-end", value: "1 developer" },
    ],
  },
  {
    slug: "quicktest",
    title: "QuickTest PTI System",
    tagline: "Online car inspection booking platform",
    role: "Full Stack Developer",
    period: "Feb 2023 – Jun 2024",
    duration: "1 year 5 months",
    client: {
      name: "QuickTest",
      location: "Georgia",
      description:
        "QuickTest is a car inspection service provider in Georgia, specializing in vehicle technical inspections and compliance checks. It offers convenient online booking for periodic technical inspections (PTI) and automated notifications that keep customers informed about their appointments, improving vehicle safety and compliance while streamlining the process for customers and staff.",
    },
    image: quickTest,
    imageAlt:
      "QuickTest PTI system: a car on an inspection line next to the online booking form for checking inspection dates and choosing branch, date, and time",
    summary:
      "A web platform that digitalizes periodic technical inspections — online booking, automated SMS reminders, online payments, and an admin panel for staff.",
    overview: [
      "The Car Inspection PTI System is a web-based platform designed to streamline periodic technical inspections (PTI) for vehicles. Customers book inspection appointments online and receive automated SMS reminders, reducing missed appointments and improving overall efficiency.",
      "As the backend developer, I built the server-side architecture with Express, designed the PostgreSQL database structure, and developed the APIs connecting the backend to the front-end applications — with a focus on data validation, authentication, performance, and security.",
      "I also built an admin panel with React and TypeScript, giving staff a user-friendly interface to manage inspection data, bookings, and users, and worked closely with the Angular developer to integrate the public-facing website.",
    ],
    highlights: [
      "Express backend and PostgreSQL schema built from the ground up",
      "Online booking with automated SMS reminders and payments",
      "JWT authentication, validation, and error handling",
      "React + TypeScript admin panel for staff",
    ],
    responsibilities: [
      "Designed and implemented the backend architecture of the PTI system using Express, ensuring reliability, performance, and a clean structure.",
      "Created and maintained RESTful APIs to facilitate booking, inspection management, and user data communication between server and client.",
      "Designed and optimized PostgreSQL database schemas, including relationships for users, bookings, and inspection records.",
      "Implemented authentication, input validation, and error handling to enhance system security and stability.",
      "Developed an admin panel using React and TypeScript, enabling staff to view, update, and manage inspection data via a user-friendly dashboard.",
      "Collaborated with the Angular developer to ensure seamless integration between the public website and backend services.",
      "Participated in system planning and design, contributing ideas for structure, user flow, and technical improvements.",
      "Conducted testing and debugging of backend logic and API endpoints to ensure smooth and error-free operation.",
      "Adhered to clean code practices and Git workflows to maintain code quality and facilitate team collaboration.",
      "Engaged in Agile meetings to discuss progress, review code, and coordinate with team members for timely feature delivery.",
    ],
    outcome:
      "The project digitalized the company's workflow, minimized manual coordination, and gave customers a modern, convenient way to manage car inspections.",
    stack: [
      "Express",
      "React",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "RESTful APIs",
      "JWT Authentication",
      "SMS Integration",
      "Online Payments",
      "Postman",
      "Swagger",
      "Git",
      "GitLab",
      "Agile",
    ],
    team: [
      { label: "Back-end", value: "1 developer (me)" },
      { label: "Front-end", value: "1 Angular, 1 React (me)" },
      { label: "QA", value: "1 engineer" },
    ],
    href: "https://quicktest.ge/",
  },
  {
    slug: "order-management",
    title: "Logistics Order Management",
    tagline: "Automated order processing for a US trucking company",
    role: "Full Stack Developer",
    period: "Feb 2023 – Jun 2024",
    duration: "1 year 5 months",
    client: {
      name: "US trucking company",
      location: "USA",
      description:
        "A delivery trucking company based in the USA, providing logistics and transportation services. It manages daily shipments and deliveries, and needed a system to automate order processing, improve efficiency, and track orders in real time.",
    },
    image: orderManagement,
    imageAlt:
      "Logistics order management system: a truck at a warehouse with an order pipeline from a received email through processing, in transit, out for delivery, and delivered, plus a route map",
    summary:
      "A full-stack system that receives orders by email, parses and stores them automatically, and tracks every delivery in real time — replacing a fully manual process.",
    overview: [
      "The Order Management System is a full-stack application designed to automate and streamline the order management process for a trucking company. It receives orders via email, processes them efficiently, and tracks their status in real time.",
      "I developed the project independently, initially building the backend with Express and later migrating to NestJS to improve the system's structure, scalability, and maintainability. The backend parses incoming order emails, stores order details in a PostgreSQL database, and pushes real-time updates to the frontend over WebSockets.",
      "On the frontend, I built a user-friendly dashboard with React and TypeScript that lets staff view, process, and manage orders with ease, with real-time order tracking and status updates that significantly improved operational efficiency and reduced manual work.",
    ],
    highlights: [
      "Solo build, end to end — backend, frontend, and database",
      "Automatic order intake by parsing emails via the Gmail API",
      "Live order status over WebSockets, routes on Google Maps",
      "Migrated from Express to NestJS for structure and scale",
    ],
    responsibilities: [
      "Designed and implemented both backend and frontend components to ensure seamless system functionality and an enhanced user experience.",
      "Developed and maintained server-side logic to optimize application performance and scalability.",
      "Managed database operations, including schema design, data storage, and optimization to ensure efficient data retrieval.",
      "Enabled real-time data transmission to support dynamic and responsive application behavior.",
      "Created an intuitive and user-friendly interface for order management, improving usability and workflow efficiency.",
    ],
    outcome:
      "The project delivered a robust, scalable solution that automated a previously manual process, enabling the company to handle orders more effectively while minimizing errors.",
    stack: [
      "NestJS",
      "Express",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Ant Design",
      "WebSockets",
      "Axios",
      "Google Maps API",
      "Gmail API",
      "JWT Authentication",
      "Git",
      "GitLab",
      "Agile",
    ],
    team: [{ value: "Independent development (solo project)" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
