export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "frontend",
    name: "Frontend",
    description: "HTML, CSS, JavaScript e frameworks modernos",
    color: "#677ce0",
  },
  {
    id: 2,
    slug: "react",
    name: "React",
    description: "Componentes, hooks, estado e ecossistema React",
    color: "#61dafb",
  },
  {
    id: 3,
    slug: "javascript",
    name: "JavaScript",
    description: "Fundamentos, ES6+ e padrões da linguagem",
    color: "#f7df1e",
  },
  {
    id: 4,
    slug: "typescript",
    name: "TypeScript",
    description: "Tipagem estática e escalabilidade no JS",
    color: "#3178c6",
  },
  {
    id: 5,
    slug: "backend",
    name: "Backend",
    description: "APIs, bancos de dados e arquitetura server-side",
    color: "#68d391",
  },
  {
    id: 6,
    slug: "carreira",
    name: "Carreira",
    description: "Roadmaps, mercado e dicas para evoluir",
    color: "#fc8181",
  },
  {
    id: 7,
    slug: "devops",
    name: "DevOps",
    description: "Git, CI/CD, containers e infraestrutura",
    color: "#f6ad55",
  },
];
