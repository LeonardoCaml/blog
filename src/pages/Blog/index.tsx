import React, { Suspense } from "react";
import { Header } from "../../components/header";
import { Post } from "../../components/post";
import PostSkeleton from "../../lazy/postLazy";
import { posts } from "../../data/posts";
import { categories } from "../../data/categories";
import { Link, useSearchParams } from "react-router";
import { Footer } from "../../components/Footer";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("categoria") ?? "";
  const searchQuery = searchParams.get("busca") ?? "";

  const filtered = posts.filter((p) => {
    const matchesCategory =
      activeCategory === "" ||
      p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col home">
        <Header />

      <div className="px-10 py-10">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-white font-bold text-2xl mb-1">Todos os artigos</h1>
          <p className="text-[#afabb6] text-sm">
            {filtered.length} artigo{filtered.length !== 1 ? "s" : ""} encontrado
            {filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Busca */}
        <input
          type="search"
          placeholder="Buscar artigos..."
          value={searchQuery}
          onChange={(e) =>
            setSearchParams((prev) => {
              const next = new URLSearchParams(prev);
              if (e.target.value) next.set("busca", e.target.value);
              else next.delete("busca");
              return next;
            })
          }
          className="w-full max-w-md h-10 rounded-lg px-4 text-white bg-[#252529] border border-[#4b4950] focus:outline-none focus:border-[#677ce0] transition text-sm mb-6"
        />

        {/* Filtro de categorias */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                next.delete("categoria");
                return next;
              })
            }
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
              activeCategory === ""
                ? "bg-[#677ce0] border-[#677ce0] text-white"
                : "border-[#4b4950] text-[#afabb6] hover:border-[#677ce0]"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setSearchParams((prev) => {
                  const next = new URLSearchParams(prev);
                  next.set("categoria", cat.slug);
                  return next;
                })
              }
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                activeCategory === cat.slug
                  ? "bg-[#677ce0] border-[#677ce0] text-white"
                  : "border-[#4b4950] text-[#afabb6] hover:border-[#677ce0]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#afabb6] text-base">
              Nenhum artigo encontrado. Tente outro filtro.
            </p>
            <Link
              to="/blog"
              className="text-[#677ce0] text-sm mt-2 inline-block hover:underline"
            >
              Limpar filtros
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((post) => (
              <Suspense key={post.id} fallback={<PostSkeleton />}>
                <Post
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  reading_time={post.reading_time}
                  published_at={post.published_at}
                  author={post.author}
                />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}
