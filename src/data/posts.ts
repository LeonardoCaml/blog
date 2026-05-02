export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  published_at: string;
  reading_time: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "server-components-nextjs-guia-completo",
    title: "Server Components no Next.js: quando usar SSR, SSG e RSC na prática",
    excerpt:
      "Aprenda a diferença real entre Server Components, SSR e SSG com exemplos de código e quando cada abordagem faz sentido no seu projeto.",
    content: "",
    category: "React",
    tags: ["React", "Next.js", "Server Components", "SSR"],
    author: "Code Learner",
    published_at: "2026-04-10",
    reading_time: "8 min",
    featured: true,
  },
  {
    id: 2,
    slug: "javascript-closures-sem-misterio",
    title: "Closures em JavaScript sem mistério: entenda de uma vez por todas",
    excerpt:
      "Closures são o conceito que separa quem escreve JavaScript de quem entende JavaScript. Veja com exemplos simples como funciona na prática.",
    content: "",
    category: "JavaScript",
    tags: ["JavaScript", "Fundamentos", "Closures"],
    author: "Code Learner",
    published_at: "2026-04-03",
    reading_time: "6 min",
  },
  {
    id: 3,
    slug: "typescript-tipos-avancados-para-iniciantes",
    title: "TypeScript: tipos avançados explicados para quem está começando",
    excerpt:
      "Generics, Union Types e Mapped Types parecem complicados, mas têm uma lógica simples. Aprenda com exemplos do dia a dia.",
    content: "",
    category: "TypeScript",
    tags: ["TypeScript", "Tipos", "Generics"],
    author: "Code Learner",
    published_at: "2026-03-28",
    reading_time: "10 min",
  },
  {
    id: 4,
    slug: "git-workflow-times-reais",
    title: "Git na prática: o workflow que times reais usam (e que tutoriais não mostram)",
    excerpt:
      "Além do git add e commit, existe um mundo de boas práticas. Feature branches, squash, rebase interativo e convenções de commit.",
    content: "",
    category: "DevOps",
    tags: ["Git", "Workflow", "Boas Práticas"],
    author: "Code Learner",
    published_at: "2026-03-20",
    reading_time: "7 min",
  },
  {
    id: 5,
    slug: "css-grid-vs-flexbox-quando-usar",
    title: "CSS Grid vs Flexbox: quando usar cada um (com exemplos visuais)",
    excerpt:
      "Não é um ou outro — é saber quando cada um resolve o problema. Veja os padrões de layout que determinam a escolha certa.",
    content: "",
    category: "Frontend",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    author: "Code Learner",
    published_at: "2026-03-14",
    reading_time: "5 min",
  },
  {
    id: 6,
    slug: "nodejs-api-rest-do-zero",
    title: "Construindo uma API REST com Node.js do zero: estrutura que escala",
    excerpt:
      "Além do Hello World: aprenda a estruturar rotas, middlewares, validação e conexão com banco de dados em um projeto real.",
    content: "",
    category: "Backend",
    tags: ["Node.js", "API REST", "Express", "Backend"],
    author: "Code Learner",
    published_at: "2026-03-05",
    reading_time: "12 min",
  },
  {
    id: 7,
    slug: "roadmap-frontend-2026",
    title: "Roadmap Frontend 2026: o que aprender e em qual ordem",
    excerpt:
      "HTML, CSS, JavaScript, React... mas qual a ordem certa? Um guia prático baseado no que o mercado está contratando.",
    content: "",
    category: "Carreira",
    tags: ["Roadmap", "Frontend", "Carreira", "Aprendizado"],
    author: "Code Learner",
    published_at: "2026-02-20",
    reading_time: "9 min",
  },
  {
    id: 8,
    slug: "react-hooks-useState-useEffect-guia",
    title: "useState e useEffect: o guia que eu queria ter lido quando comecei com React",
    excerpt:
      "Os dois hooks mais usados explicados com exemplos reais de problemas comuns: dependências erradas, re-renders desnecessários e efeitos que vazam.",
    content: "",
    category: "React",
    tags: ["React", "Hooks", "useState", "useEffect"],
    author: "Code Learner",
    published_at: "2026-02-12",
    reading_time: "11 min",
  },
];

export const getFeaturedPost = (): Post | undefined =>
  posts.find((p) => p.featured);

export const getLatestPosts = (limit = 6): Post[] =>
  posts.filter((p) => !p.featured).slice(0, limit);

export const getPostsByCategory = (categorySlug: string): Post[] =>
  posts.filter((p) => p.category.toLowerCase() === categorySlug.toLowerCase());

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
