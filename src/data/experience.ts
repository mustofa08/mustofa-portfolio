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
    company: "PT Telekomunikasi Selular",
    role: "Software Development Intern",
    location: "Surabaya, Indonesia",
    startDate: "Oct 2025",
    endDate: "Dec 2025",
    description:
      "Developed a web-based Post Implementation Analysis application and automated data processing workflows to evaluate network event performance.",
    highlights: [
      "Developed a web-based Post Implementation Analysis application using React.js to visualize and evaluate network event performance.",
      "Built automated Excel-based data processing and analysis workflows for Payload, Revenue, Maximum User, and DL Resource Block Utilization metrics.",
      "Implemented automated data parsing, serving-site identification, baseline comparison, and performance calculations to reduce manual analysis.",
      "Integrated Supabase for managing event information and uploaded datasets.",
    ],
  },

  {
    id: 2,
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
];
