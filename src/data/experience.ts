export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,

    company: "Pondok Pesantren Mahasiswa Khoirul Huda 3",

    role: "Treasurer",

    location: "Surabaya, Indonesia",

    startDate: "May 2021",

    endDate: "Dec 2024",

    description:
      "Managed financial records and reporting while developing an Excel-based system to streamline income and expense tracking.",

    highlights: [
      "Developed an Excel-based financial management system to streamline income and expense tracking.",
      "Automated financial calculations using Excel formulas, reducing manual processing and minimizing reporting errors.",
      "Prepared monthly financial reports to support budgeting and internal financial decision-making.",
      "Maintained accurate financial records and ensured consistency in daily financial transactions.",
    ],
  },

  {
    id: 2,
    company: "Nama Perusahaan",
    role: "Software Developer",
    location: "Surabaya, Indonesia",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Built and maintained web applications to support business requirements and improve user experiences.",
    highlights: [
      "Developed web applications using React.js and Next.js.",
      "Implemented reusable components and responsive interfaces.",
      "Integrated backend services and APIs.",
    ],
  },
];
