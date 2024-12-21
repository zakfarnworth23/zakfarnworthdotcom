import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Construction, Linkedin, Github, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
          <div className="flex flex-col items-center text-center">
            <Construction className="w-16 h-16 text-yellow-500 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Site Under Construction
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your patience as we build something amazing!
            </p>
            <div className="w-full max-w-md bg-gray-100 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Coming Soon</h2>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Detailed portfolio of IT projects</li>
                <li>• Blog posts about my apprenticeship journey</li>
                <li>• Showcase of skills and expertise</li>
                <li>• Easy ways to get in touch and collaborate</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-6">
              In the meantime, feel free to connect with me on social media or via email:
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <Link href="https://www.linkedin.com/in/zak-farnworth" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:zak.farnworth@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

