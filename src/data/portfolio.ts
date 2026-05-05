/* ─── Portfolio Data Types & Content ─── */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  program: string;
  details?: string;
  period: string;
  status: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
}

/* ─── Content Data ─── */

export const personalInfo = {
  name: 'Yorgos Tseperkas',
  shortName: 'Yorgos Tseperkas',
  role: 'Software Engineer',
  tagline:
    'Building reliable software with a focus on backend systems, data engineering, and clean architecture.',
  location: 'Athens, Greece',
  email: 'georgetseperkas@gmail.com',
  cvUrl: 'https://www.dropbox.com/s/07nuh8jbhwp7q00/Curriculum_Vitae.pdf?dl=0',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/geotseperkas/',
    github: 'https://github.com/GeoTseperkas',
  },
};

export const aboutText = [
  'I am a dedicated software engineer who strives to deliver high-quality results, even under tight deadlines. I am constantly looking for new opportunities to learn and develop my professional skills through challenging projects.',
  'I value collaboration, mutual support, and a positive work culture. Working with like-minded individuals who share a passion for excellence is key to achieving meaningful results.',
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQL Server', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitLab', 'Bootstrap', 'Figma'],
  },
  {
    category: 'Data & Analytics',
    items: ['Power BI', 'Tableau', 'MS Excel', 'MS Office'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution:
      'Deree — The American College of Greece & Big Blue Data Academy',
    program: 'Professional Diploma in Data Analytics, Data Science',
    period: 'Jan 2023 — Apr 2023',
    status: 'Completed',
  },
  {
    id: 'edu-2',
    institution: 'Athens University of Economics and Business (KEDIVIM-AUEB)',
    program: 'Professional Diploma, Software Engineer',
    details:
      'Initiated by SEV (Hellenic Federation of Enterprises), Powered by ReGeneration',
    period: 'Aug 2022 — Nov 2022',
    status: 'Completed',
  },
  {
    id: 'edu-3',
    institution: 'Reatcode — Workearly IT Consulting Services',
    program:
      'Training & Upskilling, Data Science School — Data Analytics & Data Science',
    period: 'Jun 2022 — Oct 2022',
    status: 'Completed',
  },
  {
    id: 'edu-4',
    institution: 'IEK Nea Smyrni',
    program: 'Graduate of Informatics — Informatics Engineer',
    period: '2010 — 2012',
    status: 'Completed',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'SYNTEXNIA.FM',
    description:
      'Full-stack digital transmission platform merging live web radio with a multimedia art repository.',
    tags: ['React', 'Full Stack', 'SQL'],
    githubUrl: 'https://syntexniafm.gr/',
  },
  {
    id: 'proj-1b',
    title: 'geotseperkas.github.io',
    description:
      'A modern, minimalist digital portfolio and project showcase. Always learning, continually evolving.',
    tags: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/geotseperkas/geotseperkas.github.io',
  },
  {
    id: 'proj-2',
    title: 'SEV AUEB/Skills4Jobs — Final Project',
    description:
      'Full workflow simulation of a Junior Full Stack Developer, built as the capstone project for the SEV/AUEB Skills4Jobs bootcamp.',
    tags: ['Java', 'Full Stack', 'SQL'],
    githubUrl:
      'https://github.com/GeoTseperkas/SEV_AUEB-Skills4Jobs-Final_Project',
  },
  {
    id: 'proj-3',
    title: 'Python Data Science Projects',
    description:
      'A collection of data science projects demonstrating the use of Python and its libraries for data analysis and visualization.',
    tags: ['Python', 'Data Science', 'Pandas'],
    githubUrl: 'https://github.com/GeoTseperkas/Py-Data-Science-Projects',
  },
  {
    id: 'proj-4',
    title: 'SQL / Python / Tableau Assignment',
    description:
      'End-to-end data analyst workflow simulation using SQL for data extraction, Python for processing, and Tableau for visualization.',
    tags: ['SQL', 'Python', 'Tableau'],
    githubUrl:
      'https://github.com/GeoTseperkas/SQL-Py-Tableau-Assignment-Workearly',
  },
  {
    id: 'proj-5',
    title: 'Python — Coderbyte Exercises',
    description:
      'Solutions to Coderbyte Python exercises across all difficulty levels. Every solution achieves a perfect score.',
    tags: ['Python', 'Algorithms'],
    githubUrl: 'https://github.com/GeoTseperkas/Python-Coderbyte_Exercises',
  },
  {
    id: 'proj-6',
    title: 'Databases / SQL Mini Projects',
    description:
      'Exercises simulating the creation of SQL database schemas through various real-world scenarios.',
    tags: ['SQL', 'Database Design'],
    githubUrl: 'https://github.com/GeoTseperkas/Databases-SQL--Mini_Projects',
  },
  {
    id: 'proj-7',
    title: 'Power BI — WE Assignment',
    description:
      'Data processing, analysis, and visualization workflow using Power BI Desktop for business intelligence reporting.',
    tags: ['Power BI', 'Data Analytics'],
    githubUrl:
      'https://github.com/GeoTseperkas/PowerBI-Final_Assignment-Workearly',
  },
  {
    id: 'proj-8',
    title: 'Tableau — WE Assignment',
    description:
      'Data visualization and analysis project using Tableau to create interactive dashboards and reports.',
    tags: ['Tableau', 'Data Visualization'],
    githubUrl:
      'https://github.com/GeoTseperkas/Tableau-Final_Assignment-Workearly',
  },
  {
    id: 'proj-9',
    title: 'Java Mini Projects',
    description:
      'A multitude of Java mini projects and exercises from the SEV/AUEB Skills4Jobs bootcamp covering core OOP concepts.',
    tags: ['Java', 'OOP'],
    githubUrl: 'https://github.com/GeoTseperkas/Java-AUEB_Mini_Projects',
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Netcompany-Intrasoft',
    role: 'Software Engineer',
    period: 'Jul 2025 — Present',
  },
  {
    id: 'exp-2',
    company: 'Netcompany-Intrasoft',
    role: 'Associate Software Engineer',
    period: 'Jul 2023 — Jun 2025',
  },
  {
    id: 'exp-3',
    company: 'P.J. Condellis S.A.',
    role: 'Junior ERP Analyst/Developer',
    period: 'Jan 2023 — Jun 2023',
  },
  {
    id: 'exp-4',
    company: 'A D B Financial Consultants E.E.',
    role: 'Junior Data Analyst',
    period: 'Jul 2022 — Dec 2022',
    description: '6-month fixed term contract',
  },
  {
    id: 'exp-5',
    company: 'MyServices Supporting Solutions S.A.',
    role: 'Human Resources Assistant',
    period: 'Oct 2021 — Dec 2022',
  },
  {
    id: 'exp-6',
    company: 'CQS S.A.',
    role: 'Technical Support Engineer for OPAP S.A.',
    period: 'Sep 2018 — Sep 2021',
    description: '2nd level VLT Technical Support — Retail Operations Team',
  },
  {
    id: 'exp-7',
    company: 'E-SHOP.GR',
    role: 'Intern Technician',
    period: 'Sep 2012 — Feb 2013',
    description: 'Internship',
  },
];

export const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
];
