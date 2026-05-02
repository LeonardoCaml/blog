import React, { Suspense } from "react";
import { useParams, Link } from "react-router";
import { Header } from "../../components/header";
import { Post } from "../../components/post";
import PostSkeleton from "../../lazy/postLazy";
import { getPostsByCategory } from "../../data/posts";
import { categories } from "../../data/categories";
import { Footer } from "../../components/Footer";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const posts = getPostsByCategory(slug ?? "");

  if (!category) {
    return (
      <>
        <div className="flex flex-col home">
          <Header />
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <h1 className="text-white font-bold text-2xl">Categoria não encontrada</h1>
            <Link to="/blog" className="text-[#677ce0] hover:underline text-sm">
              ← Voltar para o blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col home">
        <Header />

        <div className="px-10 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#afabb6] mb-8">
            <Link to="/" className="hover:text-white transition">
              Início
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition">
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: category.color }}>{category.name}</span>
          </div>

          {/* Cabeçalho da categoria */}
          <div className="mb-8">
            <span
              className="text-xs font-semibold px-2 py-1 rounded-md mb-3 inline-block"
              style={{ background: `${category.color}1a`, color: category.color }}
            >
              {category.name}
            </span>
            <h1 className="text-white font-bold text-2xl mb-1">{category.name}</h1>
            <p className="text-[#afabb6] text-sm">{category.description}</p>
            <p className="text-[#afabb6] text-xs mt-1">
              {posts.length} artigo{posts.length !== 1 ? "s" : ""} nesta categoria
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#afabb6]">
                Ainda não há artigos nesta categoria.
              </p>
              <Link
                to="/blog"
                className="text-[#677ce0] text-sm mt-2 inline-block hover:underline"
              >
                Ver todos os artigos
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
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

          {/* Outras categorias */}
          <div className="mt-12 pt-8 border-t border-[#252529]">
            <p className="text-white font-semibold text-sm mb-4">Outras categorias</p>
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((c) => c.slug !== slug)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#4b4950] hover:border-[#677ce030] transition"
                    style={{ color: cat.color }}
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
