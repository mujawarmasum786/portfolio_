export const hubNodes = [
  { id: "about", label: "About", icon: "🏆", color: "#8b5cf6", angle: -90 },
  {
    id: "experience",
    label: "Experience",
    icon: "💼",
    color: "#3b82f6",
    angle: 90,
  },
  {
    id: "projects",
    label: "Projects",
    icon: "🚀",
    color: "#3b82f6",
    angle: 30,
  },
  { id: "skills", label: "Skills", icon: "💻", color: "#0de5ff", angle: 150 },
  { id: "resume", label: "Resume", icon: "📄", color: "#0de5ff", angle: -30 },
  { id: "contact", label: "Contact", icon: "✉️", color: "#8b5cf6", angle: 210 },
];

export const projects = [
  {
    title: "Portfolio",
    description:
      "An interactive portfolio highlighting my skills, projects, experience, and passion for building scalable web applications and intelligent software solutions",
    icon: "📄",
    color: "#8b5cf6",
    tags: ["Next.js", "React.js", "Tailwind"],
    demoUrl:
      "https://portfolio-mujawarmasum786-gmailcom-masum-mujawars-projects.vercel.app/",
    githubUrl: "",
  },
  {
    title: "Network Visualization (client side)",
    description:
      "The platform enables users to visualize the network, identify routes between two locations, and plan optimal paths using routing algorithms or manual route selection.",
    icon: "📈",
    color: "#8b5cf6",
    tags: ["Next.js", "React.js", "Node.js", "D3.js"],
    demoUrl: "",
    githubUrl: "",
  },

  {
    title: "Vibrant Energy App (client side)",
    description:
      "A customer-facing application that provides an interactive platform to view and manage charts, documents, bills, agreements, and other essential business data in one place.",
    icon: "💼",
    color: "#f5a623",
    tags: ["React Native", "React.js", "Node.js"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "YourPath Healthcare (client side)",
    description:
      "A healthcare platform that provides support for individuals with substance use disorders through secure chat, video consultations, and email communication.",
    icon: "🏥",
    color: "#0de5ff",
    tags: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "MongoDB",
      "Twilio",
      "AWS",
    ],
    demoUrl: "",
    githubUrl: "",
  },
  ,
  {
    title: "Chat Application",
    description:
      "Real-time messaging app with typing indicators and presence status.",
    icon: "💬",
    color: "#0de5ff",
    tags: ["Socket.io", "Node.js", "React.js", "Next.js"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Teqidp (internal)",
    description:
      "An intelligent document processing application that extracts text and tabular data from images and PDF files with high accuracy.",
    icon: "📃",
    color: "#0de5ff",
    tags: ["React Native", "React.js"],
    demoUrl: "",
    githubUrl: "",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥",
    color: "#0de5ff",
    items: [
      { name: "React", short: "⚛", level: "expert" },
      { name: "Next.js", short: "N", level: "expert" },
      { name: "Angular", short: "A", level: "intermediate" },
      { name: "TypeScript", short: "TS", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙",
    color: "#3b82f6",
    items: [
      { name: "Node.js", short: "JS", level: "expert" },
      { name: "Express.js", short: "ex", level: "expert" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄",
    color: "#8b5cf6",
    items: [
      { name: "MongoDB", short: "🍃", level: "intermediate" },
      { name: "MySQL", short: "🐬", level: "beginner" },
    ],
  },
  {
    id: "ai-tools",
    label: "AI/ Tools / Cloud",
    icon: "🤖",
    color: "#f5a623",
    items: [
      { name: "AWS", short: "☁️", level: "intermediate" },
      { name: "Twilio", short: "T", level: "intermediate" },
      { name: "D3.js", short: "D3", level: "expert" },
      { name: "Git", short: "git", level: "advanced" },
      { name: "OpenAI", short: "✦", level: "advanced" },
    ],
  },
];

export const levelColors: Record<string, string> = {
  beginner: "#8b93a7",
  intermediate: "#3b82f6",
  advanced: "#0de5ff",
  expert: "#8b5cf6",
  warning: "#f5a623",
};

export const experience = [
  {
    year: "MARCH-2024",
    role: "Software Engineer",
    company: "Teqfocus",
    location: "Pune",
    description:
      "Designed, developed, and maintained scalable web and mobile applications across multiple platforms.",
    award: "Customer Excellence Award",
  }
];

export const education = [
  {
    year: "2019",
    college: "AIKTC (Affiliated to University of Mumbai)",
    std: "Bachelor of Engineering (Electrical Engineering)",
    // value: "CGPI:8.24",
  },
  {
    year: "2015",
    college: "SIWS",
    std: "HSC (Science)",
    // value: "CGPI:8.24",
  },
  {
    year: "2013",
    college: "S.K.P.",
    std: "SSC",
    // value: "CGPI:8.24",
  },
];

export const about = {
  name: "Masum Mujawar",
  role: "Full Stack Developer · AI Enthusiast · Explorer",
  bio: "I love building interactive and data-driven web experiences. My passion lies in creating beautiful user interfaces, visualizing complex data, and building AI-powered solutions that make a difference.",
  stats: [
    { num: "4+", label: "Years experience" },
    { num: "10+", label: "Projects completed" },
    { num: "10+", label: "Technologies" },
    { num: "100%", label: "Dedication" },
  ],
};

export const contact = {
  email: "mujawarmasum786@gmail.com",
  // github: "github.com/masum-07",
  linkedin: "https://in.linkedin.com/in/masum-mujawar-a19a2212b",
  location: "Mumbai, India",
};

export const features = [
  "Interactive universe",
  "Smooth animations",
  "Drag nodes",
  "Zoom & pan",
  "Expandable network",
  "Glassmorphism UI",
  "Responsive design",
  // "Dark / light mode",
];
