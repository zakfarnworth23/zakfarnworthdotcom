import Image from 'next/image'
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/app/public/OfficialPortrait_2024.jpeg"
                alt="Zak Farnworth"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                As an IT Apprentice, I am passionate about leveraging technology to solve complex problems and improve digital services. My journey in technology began with a deep curiosity about how systems work and has evolved into a commitment to excellence in IT solutions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Skills & Expertise</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Full-stack web development</li>
                <li>Cloud computing and infrastructure</li>
                <li>Agile project management</li>
                <li>System administration</li>
                <li>Cybersecurity best practices</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Education & Training</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">IT Apprenticeship</h3>
                  <p className="text-gray-600">Current Position</p>
                </div>
                <div>
                  <h3 className="font-bold">Various Technical Certifications</h3>
                  <p className="text-gray-600">Including cloud platforms and development frameworks</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Professional Interests</h2>
              <p className="mb-6">
                I am particularly interested in digital transformation, cloud computing, and making technology accessible to everyone. I believe in the power of technology to improve public services and make them more efficient and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

