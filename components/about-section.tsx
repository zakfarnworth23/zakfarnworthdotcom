import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">About Zak Farnworth</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src="/zfarnworth.jpg"
            alt="Official portrait of Lord Farnworth"
            width={300}
            height={400}
            className="w-full rounded-md"
          />
        </div>
        <div className="md:col-span-2">
          <p className="mb-4 text-lg">
            Zak Farnworth was made Lord Farnworth on the 24th Day of December in 2024. Zak, was proud to have received this and the Highly Commended Apprentice of the Year award Honour in November.
          </p>
          <p className="mb-4">
            I started my career at the age of 16 in September 2023 with The Quill C of E Trust. This experience was one which I thouroughly enjoyed and during my time there, worked with a number of key members of the MAT to improve technology and digital services across the acaddmies.
          </p>
          <p className="mb-4">
            Throughout my still evolving career, I have presented at various events on topics I have had an interest in and have completed/built solutions to, including the ANME (Association of Network Managers Event) which was to around 50+ network managers, where I discussed and outlined my solution to Email Signatures, and why these had bcome such an issue. More recently, I have presented again at the ANME on my cloud journey with the Operations Director at The Quill C of E Trust, with a more recent engagement being at the Cybrewery Evenings. At this event, I led a presentation on the challenges and issues I've faced and overcome with Microsoft Intune, Azure, and Printers.
          </p>
          <p className="mb-4">
            I have many interests, to those who know me well, I am a big supporter of the Sounds of the 70s show with Johnnie Walker and now S070 with Bob Harris, with a private collection of archived shows. My other insterests include the collection of Art, Politics, and History.
          </p>
        </div>
      </div>
    </section>
  )
}

