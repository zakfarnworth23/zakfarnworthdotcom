import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface GelCardProps {
  title: string
  description?: string
  image?: string
  link?: string
  icon?: ReactNode
  type?: "default" | "download" | "internal" | "external"
  className?: string
}

export default function GelCard({
  title,
  description,
  image,
  link,
  icon,
  type = "default",
  className = "",
}: GelCardProps) {
  // BBC GEL card styles
  const cardClasses = `
    group relative bg-white border border-gray-200 rounded-sm overflow-hidden
    hover:shadow-md transition-shadow duration-200
    ${className}
  `

  const cardContent = (
    <>
      {image && (
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4">
        {icon && <div className="mb-2 text-govuk-blue">{icon}</div>}
        <h3 className="text-lg font-bold mb-1 group-hover:text-govuk-blue transition-colors duration-200">{title}</h3>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
      {type !== "default" && (
        <div className="absolute bottom-0 right-0 p-2">
          {type === "download" && (
            <span className="text-xs bg-govuk-blue text-white px-2 py-1 rounded-sm">Download</span>
          )}
          {type === "external" && <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-sm">External</span>}
        </div>
      )}
    </>
  )

  if (link) {
    return (
      <Link href={link} className={cardClasses}>
        {cardContent}
      </Link>
    )
  }

  return <div className={cardClasses}>{cardContent}</div>
}

