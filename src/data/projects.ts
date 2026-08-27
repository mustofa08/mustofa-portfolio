export type ProjectStatus = "Completed" | "In Progress";

export type Project = {
  id: number;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  image?: string;
  techStack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,

    title: "Ciptain",

    category: "Digital Invitation Marketplace",

    status: "In Progress",

    image: "/projects/ciptain.png",

    description:
      "A full-stack web application for managing, publishing, and purchasing digital invitation templates.",

    techStack: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL"],

    highlights: [
      "Implemented role-based authentication and authorization for Admin and User roles, including protected routes using Supabase Auth.",
      "Built invitation template management features with CRUD operations, image uploads, categories, pricing, and publication management.",
      "Integrated PostgreSQL and Supabase Storage to support image management, search, filtering, and favorites.",
    ],
  },

  {
    id: 2,

    title: "MOCO",

    category: "Personal Finance Management Web Application",

    status: "In Progress",

    image: "/projects/moco.png",

    description:
      "A responsive personal finance management web application for tracking wallets, transactions, budgets, savings goals, and debts.",

    techStack: ["React.js", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],

    highlights: [
      "Designed and implemented a relational PostgreSQL database for wallets, transactions, budgets, savings goals, and debt management.",
      "Developed RESTful APIs and CRUD operations for transaction management, wallet transfers, and financial tracking.",
      "Implemented authentication, filtering, search, and drag-and-drop interactions to improve application usability.",
    ],
  },
];
