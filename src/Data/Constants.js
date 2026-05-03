
export const Bio = {
  name: "Srikanth Konnagula",
  roles: ["Azure Data Engineer"],
  description:
    "Azure Data Engineer with experience in building scalable data ingestion pipelines and processing large datasets using PySpark and SQL. Skilled in Azure Databricks, Azure Data Factory, and Delta Lake.",
  github: "https://github.com/konnagulasrikanth",
  resume:
    "https://drive.google.com/file/d/179k3m0JXWsL_C-sYPtCutoJEOELZ_1gG/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/konnagula-srikanth/",
};

export const skills = [
  {
    title: "Programming",
    skills: [{ name: "Python" }, { name: "SQL (MySQL)" }, { name: "PySpark" }],
  },
  {
    title: "Cloud",
    skills: [
      { name: "Azure Databricks" },
      { name: "Azure Data Factory" },
      { name: "Azure Data Lake" },
      { name: "Delta Lake" },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "SQL Server (SSMS)" }, { name: "SSAS" }],
  },
  {
    title: "Scheduling",
    skills: [{ name: "Autosys" }],
  },
  {
    title: "Tools",
    skills: [{ name: "Azure DevOps (CI/CD)" }, { name: "Git" }],
  },
  {
    title: "Operating Systems",
    skills: [{ name: "Windows" }],
  },
  {
    title: "Other",
    skills: [{ name: "Advanced Excel" }],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Data Engineer",
    company: "Infinite Computer Solutions",
    date: "Aug 2023 - Present",
    desc: "Healthcare Project (Client: Molina Healthcare)",
    points: [
      "Gathered requirements from stakeholders and implemented business logic using Python and PySpark transformations",
      "Built scalable data ingestion pipelines to process multiple file formats into Azure Data Lake",
      "Automated table creation from CSV files improving efficiency and reducing manual effort",
      "Utilized Azure Databricks notebooks for data transformation and processing workflows",
      "Designed and managed workflows, scheduled jobs, and configured alerts in Databricks",
      "Leveraged Databricks Auto Loader to efficiently ingest and process large-scale data into Delta Tables",
      "Implemented error handling mechanisms to improve pipeline reliability",
      "Developed Python-based data validation scripts for data quality checks",
      "Wrote optimized SQL queries improving data processing efficiency by 50%",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Sphoorthy Engineering College, Hyderabad",
    date: "2019 - 2023",
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
  },
];
