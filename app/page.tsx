import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TestComponent } from "./components/test-component"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TestComponent />
      <div className="bg-[#1d70b8] text-white pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl py-8">
            IT Technician at Albany Learning Trust.
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical Leadership",
                description: "Leading digital transformation initiatives and technical teams"
              },
              {
                title: "Policy & Technology",
                description: "Bridging the gap between policy making and technological implementation"
              },
              {
                title: "Digital Government",
                description: "Modernizing government services through technology"
              }
            ].map((item, i) => (
              <div key={i} className="border p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <Link 
                  href="#" 
                  className="text-[#1d70b8] hover:underline mt-4 inline-block"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Work</h2>
          <div className="space-y-6">
            {[
              {
                title: "Digital Infrastructure Bill",
                date: "2023",
                description: "Led technical consultation on national digital infrastructure improvements"
              },
              {
                title: "Cybersecurity Framework",
                date: "2023",
                description: "Developed comprehensive cybersecurity guidelines for government institutions"
              },
              {
                title: "AI Ethics Committee",
                date: "2022",
                description: "Chair of the cross-party committee on AI ethics and governance"
              }
            ].map((item, i) => (
              <div key={i} className="border-b pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <span className="text-gray-600">{item.date}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <Link 
                  href="#" 
                  className="text-[#1d70b8] hover:underline mt-2 inline-block"
                >
                  View details →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

