// projects.js

window.PROJECTS = [
  {
    id: "websites-portfolio",
    title: "Portfolio / microsites",
    type: "useful", // "useful" | "fun"
    topic: "Websites",
    summary: "Static + interactive microsites with clean UX, deployment pipelines, and performance budgets.",
    details: [
      "Responsive layouts, accessibility checks, Lighthouse budgets",
      "Deployment to GitHub Pages / Netlify",
      "Reusable components and design tokens"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      repo: "https://github.com/d-onnelly",
      live: ""
    },
    status: "Active"
  },
  {
    id: "invoice-app",
    title: "Invoice application",
    type: "useful",
    topic: "Invoice Application",
    summary: "CRUD invoicing with UK-centric formatting (GBP, dd/mm/yyyy), validation, and exports.",
    details: [
      "Client/projects/invoices data model",
      "Totals, VAT handling, and PDF export (optional)",
      "Role-based views (optional)"
    ],
    tech: ["Java", "Spring Boot", "SQL"],
    links: { repo: "", live: "" },
    status: "In progress"
  },
  {
    id: "3d-building",
    title: "3D building work",
    type: "fun",
    topic: "3D Building",
    summary: "3D assets and environments; optimised meshes and textures for real-time use.",
    details: [
      "Modular assets and trim-sheet workflows",
      "LOD strategy, collider strategy, lightmap basics",
      "Export pipeline to Unity"
    ],
    tech: ["Blender", "Unity"],
    links: { repo: "", live: "" },
    status: "Active"
  },
  {
    id: "lua-systems",
    title: "Lua programming",
    type: "fun",
    topic: "Lua Programming",
    summary: "Gameplay / automation scripts with state machines and event-driven patterns.",
    details: [
      "Input handling and action systems",
      "Networking-safe state transitions (optional)",
      "Config-driven behaviours"
    ],
    tech: ["Lua"],
    links: { repo: "", live: "" },
    status: "Ongoing"
  },
  {
    id: "misc-tools",
    title: "Miscellaneous tools",
    type: "useful",
    topic: "Miscellaneous",
    summary: "Small utilities: scripts, parsers, one-off automations, and data transforms.",
    details: [
      "CLI utilities and task automation",
      "Data cleanup pipelines",
      "Quick internal tools"
    ],
    tech: ["Python", "Node.js"],
    links: { repo: "", live: "" },
    status: "Varies"
  },
  {
    id: "arduino-r4",
    title: "Arduino Uno R4 work",
    type: "fun",
    topic: "Arduino Uno R4 Stuff",
    summary: "Microcontroller experiments: sensors, actuators, and simple IoT prototypes.",
    details: [
      "LED/servo projects, debouncing, timers",
      "Serial debugging and basic power considerations",
      "Wiring diagrams and build notes"
    ],
    tech: ["C/C++", "Arduino"],
    links: { repo: "", live: "" },
    status: "Ongoing"
  },
  {
    id: "resurface",
    title: "ReSurface",
    type: "useful",
    topic: "ReSurface",
    summary: "Placeholder project entry—swap with your actual project details.",
    details: [
      "Problem statement",
      "Approach and architecture",
      "Results and next steps"
    ],
    tech: ["TBC"],
    links: { repo: "", live: "" },
    status: "Draft"
  }
];
