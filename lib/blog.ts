import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type BlogPost = {
  id: string
  title: string
  date: string
  content: string
  excerpt: string
}

export function getSortedPostsData(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
      excerpt: matterResult.content.slice(0, 200) + '...'
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
    excerpt: matterResult.content.slice(0, 200) + '...'
  }
}

export function createPost(title: string, content: string): void {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const date = new Date().toISOString().split('T')[0]
  const fileName = `${date}-${title.toLowerCase().replace(/\s+/g, '-')}.md`
  const fullPath = path.join(postsDirectory, fileName)
  const fileContent = `---
title: "${title}"
date: "${date}"
---

${content}`

  fs.writeFileSync(fullPath, fileContent)
}

export function updatePost(id: string, title: string, content: string): void {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = `---
title: "${title}"
date: "${id.split('-').slice(0, 3).join('-')}"
---

${content}`

  fs.writeFileSync(fullPath, fileContent)
}

export function deletePost(id: string): void {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  fs.unlinkSync(fullPath)
}

