'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '@/public/zak_london.jpeg'
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from 'lucide-react'

const photos = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={profilePic}
                alt="Zak Farnworth"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Lord Zak Farnworth</h1>
              <p className="text-gray-600">IT Apprentice</p>
              <Button className="w-full" asChild>
                <Link href="https://www.linkedin.com/in/zakfarnworth" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect with me on LinkedIn
                </Link>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <Tabs defaultValue="career" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="career">Career</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>

              <TabsContent value="career" className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-4">Current Role</h2>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">IT Apprentice</h3>
                      <p className="text-gray-600 mb-4">
                      I oversee the implementation and design of our trust's digital infrastructure. My responsibilities include managing centralised print servers, Active Directory, Autopilot, Intune, MDT, and more. My expertise ensures the smooth operation of these critical systems, creating a robust and efficient digital environment that supports our MAT goals.
In recognition of my contributions, I was honored with the BCS IT and Digital Award, coming in as Highly Commended. This accolade highlights my dedication to excellence and innovation in the field of IT.As a seasoned IT Apprentice, I oversee the implementation and design of our trust's digital infrastructure. My responsibilities include managing centralised print servers, Active Directory, Autopilot, Intune, MDT, and more. My expertise ensures the smooth operation of these critical systems, creating a robust and efficient digital environment that supports our MAT goals. In recognition of my contributions, I was honored with the BCS IT and Digital Award, coming in as Highly Commended. This accolade highlights my dedication to excellence and innovation in the field of IT.

                      </p>
                      <div className="text-sm text-gray-500">September 2023 - Present</div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Development of web applications using modern technologies</li>
                    <li>Contributing to digital transformation initiatives</li>
                    <li>Collaboration with cross-functional teams</li>
                    <li>Implementation of technical solutions</li>
                    <li>Participation in agile development processes</li>
                  </ul>
                </section>
              </TabsContent>

              <TabsContent value="photos" className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Official Portrait</h2>
                <div className="max-w-md">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={profilePic}
                      alt="Parliamentary portrait of Zak Farnworth"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-4">Previous Experience</h2>
                  <div className="space-y-4">
                    {[
                      {
                        role: "Student Developer",
                        company: "Tech Academy",
                        period: "2022 - 2023",
                        description: "Participated in various coding projects and workshops, developing foundational programming skills."
                      },
                      {
                        role: "IT Support Volunteer",
                        company: "Local Community Center",
                        period: "2021 - 2022",
                        description: "Provided technical support and basic computer training to community members."
                      }
                    ].map((job, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="font-bold mb-1">{job.role}</h3>
                          <div className="text-gray-600 mb-2">{job.company}</div>
                          <p className="text-gray-600 mb-2">{job.description}</p>
                          <div className="text-sm text-gray-500">{job.period}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">Education</h2>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-1">Computer Science</h3>
                      <div className="text-gray-600 mb-2">Local College</div>
                      <p className="text-gray-600 mb-2">
                        Studied fundamental computer science concepts, programming, and software development.
                      </p>
                      <div className="text-sm text-gray-500">2020 - 2022</div>
                    </CardContent>
                  </Card>
                </section>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

