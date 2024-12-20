import { notFound } from "next/navigation"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { getPostData } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export default function BlogPost({ params }: { params: { id: string } }) {
  let post;
  try {
    post = getPostData(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <h1>{post.title}</h1>
          <div className="text-gray-500 mb-4">
            Published on {formatDate(new Date(post.date))}
          </div>
          <div className="mt-8">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

