import GelCardGrid from "@/components/gel-card-grid"
import { FileText, Download, FileCode, FileIcon as FilePdf } from "lucide-react"

export default function FilesPage() {
  // Sample files for the GEL cards
  const files = [
    {
      title: "Curriculum Vitae",
      description: "Full professional CV with work history and qualifications",
      icon: <FilePdf className="h-6 w-6" />,
      link: "/files/cv.pdf",
      type: "download",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Project Portfolio",
      description: "Collection of key projects and achievements",
      icon: <FileCode className="h-6 w-6" />,
      link: "/files/portfolio.pdf",
      type: "download",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Certifications",
      description: "Professional certifications and qualifications",
      icon: <FileText className="h-6 w-6" />,
      link: "/files/certifications.pdf",
      type: "download",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Publications",
      description: "Published articles and research papers",
      icon: <Download className="h-6 w-6" />,
      link: "/files/publications.pdf",
      type: "download",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Downloads</h1>
      <p className="mb-8 text-lg">
        Access and download various documents and resources related to my professional work and background.
      </p>

      <GelCardGrid cards={files} columns={2} />
    </div>
  )
}

