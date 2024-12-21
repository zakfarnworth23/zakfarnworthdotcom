import Image from 'next/image'
import profilePic from '@/public/OfficialPortrait_2024.jpeg'
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
                src={profilePic}
                alt="Zak Farnworth"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
      </main>
      <Footer />
    </div>
  )
}

