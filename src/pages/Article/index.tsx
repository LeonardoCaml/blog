import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Header } from "../../components/header";
import { Footer } from "../../components/Footer";
import { posts } from "../../data/posts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <div className="flex flex-col home min-h-screen">
          <Header />
          <div className="flex flex-1 flex-col items-center justify-center py-32 px-10">
            <p className="text-[#677ce0] text-sm font-semibold mb-2">404</p>
            <h1 className="text-white font-bold text-2xl mb-2">
              Artigo não encontrado
            </h1>
            <p className="text-[#afabb6] text-sm mb-6">
              O artigo que você procura não existe ou foi removido.
            </p>
            <Link
              to="/blog"
              className="text-[#677ce0] text-sm font-semibold hover:underline"
            >
              ← Voltar para o blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  return (
    <>
      <div className="flex flex-col home">
        <Header />

        <main className="px-6 md:px-10 py-10 max-w-3xl mx-auto w-full">
          {/* Breadcrumb / Voltar */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-[#afabb6] text-sm hover:text-white transition mb-8"
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Voltar
          </button>

          {/* Categoria + tempo de leitura */}
          <div className="flex items-center gap-2 mb-4">
            <Link
              to={`/category/${post.category.toLowerCase()}`}
              className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#677ce01a] text-[#677ce0] hover:bg-[#677ce030] transition"
            >
              {post.category}
            </Link>
            <span className="text-[#4b4950] text-xs">•</span>
            <span className="text-[#afabb6] text-xs flex items-center gap-1">
              <AccessTimeIcon sx={{ fontSize: 13 }} />
              {post.reading_time} de leitura
            </span>
          </div>

          {/* Título */}
          <h1 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[#afabb6] text-base leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Meta: autor + data */}
          <div className="flex flex-wrap items-center gap-4 text-[#afabb6] text-xs border-y border-[#252529] py-4 mb-8">
            <span className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-[#677ce01a] flex items-center justify-center">
                <span className="text-[#677ce0] text-[10px] font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <CalendarTodayIcon sx={{ fontSize: 13 }} />
              {formattedDate}
            </span>
          </div>

          {/* Conteúdo do artigo */}
          {post.content ? (
            <article
              className="prose prose-invert prose-sm max-w-none text-[#afabb6] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-[#252529] rounded-xl">
              <p className="text-[#afabb6] text-sm">
                Conteúdo em breve...
              </p>
            </div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#252529] text-[#afabb6] border border-[#4b4950]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
