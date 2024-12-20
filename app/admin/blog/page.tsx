'use client'

import { useState, useEffect } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BlogPost, getSortedPostsData, createPost, updatePost, deletePost } from "../../../lib/blog"
import { formatDate } from "@/lib/utils"

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    setPosts(getSortedPostsData())
  }, [])

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    createPost(title, content)
    setPosts(getSortedPostsData())
    setIsCreating(false)
  }

  const handleUpdatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentPost) return
    const formData = new FormData(e.currentTarget)
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    updatePost(currentPost.id, title, content)
    setPosts(getSortedPostsData())
    setIsEditing(false)
    setCurrentPost(null)
  }

  const handleDeletePost = (id: string) => {
    deletePost(id)
    setPosts(getSortedPostsData())
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog Admin</h1>
          <Button onClick={() => setIsCreating(true)} className="bg-[#1d70b8] hover:bg-[#1d70b8]/90">
            Create New Post
          </Button>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{formatDate(new Date(post.date))}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => {
                  setCurrentPost(post)
                  setIsEditing(true)
                }}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDeletePost(post.id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <Dialog open={isCreating} onOpenChange={setIsCreating}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" name="content" required rows={10} />
            </div>
            <Button type="submit" className="w-full bg-[#1d70b8] hover:bg-[#1d70b8]/90">
              Create Post
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdatePost} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="edit-title">Title</Label>
              <Input id="edit-title" name="title" defaultValue={currentPost?.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-content">Content</Label>
              <Textarea id="edit-content" name="content" defaultValue={currentPost?.content} required rows={10} />
            </div>
            <Button type="submit" className="w-full bg-[#1d70b8] hover:bg-[#1d70b8]/90">
              Update Post
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

