import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// Expert data (you could move this to a separate file/database later)
const experts = [
  {
    id: 1,
    name: "Samuel Ade",
    role: "Founder & Readiness Strategist",
    shortBio: "Samuel is a sales and marketing operator with experience running teams and supporting startups on brand, growth, and positioning.",
    fullBio: "Samuel is a commercially minded operator with a background in leading sales teams and shaping marketing strategy for growth-focused businesses. Having worked closely with startups and small companies, he brings sharp communication, structured thinking, and real-world execution to every engagement. With a foundation in branding and revenue generation, Samuel focuses on helping founders present their companies with confidence — aligning story, systems, and materials to meet investor and acquirer expectations.",
    tags: ["Sales Leadership", "Marketing Strategy"],
    experience: "10+ years",
    companies: "25+ startups supported",
    specialties: ["Sales Leadership", "Marketing Strategy", "Startup Collaboration", "Client Communication"],
    isComingSoon: false
  }
]

export default function ExpertPage({ params }: { params: { id: string } }) {
  const expertId = parseInt(params.id)
  const expert = experts.find(e => e.id === expertId)
  
  if (!expert) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      <Navbar />
      
      {/* Back Navigation */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/experts"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Experts
          </Link>
        </div>
      </div>

      {/* Expert Detail */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-md p-6 sm:p-8">
            <div className="flex flex-col items-center text-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-white/15 to-white/25 w-32 h-32 sm:w-40 sm:h-40 rounded-md flex items-center justify-center border border-white/30 flex-shrink-0">
                <span className="text-white/60 text-sm font-medium">Photo</span>
              </div>
              
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {expert.name}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-4">{expert.role}</p>
              </div>
            </div>

            {/* Full biography */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">About</h2>
              <p className="text-gray-300 leading-relaxed text-lg text-center max-w-3xl mx-auto">{expert.fullBio}</p>
            </div>

            {/* Core Specialties */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">Core Specialties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {expert.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-md">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Connect with {expert.name.split(' ')[0]} and our team to discuss how we can help make your startup deal-ready.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-6 py-3 h-auto font-medium text-base"
                  asChild
                >
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { id: string } }) {
  const expertId = parseInt(params.id)
  const expert = experts.find(e => e.id === expertId)
  
  if (!expert) {
    return {
      title: 'Expert Not Found | DueReady',
      description: 'The expert you are looking for could not be found.'
    }
  }

  return {
    title: `${expert.name} - ${expert.role} | DueReady Experts`,
    description: expert.shortBio,
    openGraph: {
      title: `${expert.name} - ${expert.role}`,
      description: expert.shortBio,
      type: 'profile',
    },
  }
} 