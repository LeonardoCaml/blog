import * as React from "react";
import { Suspense } from "react";
import { Link } from "react-router";
import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { FeaturedPost } from "./components/FeaturedPost";
import { CategoryList } from "./components/CategoryList";
import { Newsletter } from "./components/Newsletter";
import { Post } from "./components/post";
import PostSkeleton from "./lazy/postLazy";
import { getFeaturedPost, getLatestPosts } from "./data/posts";
import { Footer } from "./components/Footer";

const Home = () => {
  const featured = getFeaturedPost();
  const latest = getLatestPosts(6);

  return (
    <div className="flex flex-col home">
      <Header />

      <Hero />

      {featured && <FeaturedPost post={featured} />}

      <CategoryList />

      {/* Últimos artigos */}
      <section className="px-10 py-10 border-b border-[#252529]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-white font-bold text-lg">Artigos recentes</p>
            <Link
              to="/blog"
              className="text-[#677ce0] text-base font-bold hover:underline"
            >
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latest.map((post) => (
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
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
