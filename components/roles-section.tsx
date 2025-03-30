"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function RolesSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null)

  const roles = [
    {
      title: "ICT Technician",
      period: "2025 - Present",
      organization: "Albany Learning Trust",
      description: "Content to come...",
      responsibilities: [
        "Support the provision of end-user devices, computers, and servers to support the MAT and Academies."
      ],
    },
    {
      title: "IT Apprentice",
      period: "2023 - 2025",
      organization: "The Quill C of E Trust",
      description: `
        As an IT Apprentice, I oversaw the implementation and design of our trust's digital infrastructure. 
        My responsibilities included managing centralised print servers, Active Directory, Autopilot, Intune, MDT, and more.
        My expertise ensured the smooth operation of these critical systems, creating a robust and efficient digital environment 
        that supported our MAT goals.

        In recognition of my contributions, I was honored with the BCS IT and Digital Award, receiving a Highly Commended distinction.
        This accolade highlights my dedication to excellence and innovation in the field of IT.
      `,
      responsibilities: [
        "Support the provision of end-user devices, computers, and servers to support the MAT and Academies."
      ],
    },
    {
      title: "IT Technician (Work Experience)",
      period: "2022 - 2022",
      organization: "Bolton St Catherine's Academy",
      description: "Content to come...",
      responsibilities: ["Content to come..."],
    },
  ]

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index)
  }

  return (
    <section id="roles" className="py-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">Experiences</h2>
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
            <button
              className={`w-full text-left p-4 flex justify-between items-center ${
                expandedRole === index ? "bg-govuk-blue text-white" : "bg-gray-50"
              }`}
              onClick={() => toggleRole(index)}
              aria-expanded={expandedRole === index}
              aria-controls={`role-content-${index}`}
            >
              <div>
                <h3 className="font-bold text-lg">{role.title}</h3>
                <p className={expandedRole === index ? "text-white/90" : "text-gray-600"}>
                  {role.organization} | {role.period}
                </p>
              </div>
              {expandedRole === index ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>

            {expandedRole === index && (
              <div id={`role-content-${index}`} className="p-4 bg-white">
                <p className="mb-4 whitespace-pre-line">{role.description}</p>
                <h4 className="font-bold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {role.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
