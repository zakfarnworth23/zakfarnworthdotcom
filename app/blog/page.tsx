import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { getSortedPostsData } from "../../lib/blog"
import Link from "next/link"
import { formatDate } from "../../lib/utils"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-[#1d70b8]">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                Published on {formatDate(new Date(post.date))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

