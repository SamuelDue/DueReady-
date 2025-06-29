'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function HiddenCostInsightPage() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate')
    animatedElements.forEach((el) => observer.observe(el))

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-bg')
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1)
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-96 left-10 w-96 h-96 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute bottom-96 right-20 w-80 h-80 bg-gradient-to-br from-white/4 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="scroll-animate fade-up">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13V9H11V7M11,11H13V17H11V11Z"/>
                </svg>
                Insight Post
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
                The Hidden Cost of <span className="text-gray-400">'Almost Ready'</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Why Last-Minute Due Diligence Prep Kills Deals
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                  Deal Readiness Team
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
                  </svg>
                  5 min read
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="scroll-animate fade-left">
              <div className="aspect-[4/3] rounded-md overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src="/Gemini_Generated_Image_f2debdf2debdf2de.png"
                  alt="Overwhelmed founder dealing with due diligence paperwork after receiving term sheet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none scroll-animate fade-up">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Moment Everything Changes</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              That moment you get a term sheet – euphoria! After months of pitching, networking, and relentless hustle, the vision is finally tangible. The valuation looks good. The investor seems aligned. You're ready to pop the champagne and announce the news to your team.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Then, the investor's due diligence checklist lands in your inbox.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              The stack of requests seems endless: cap table reconciliation, employment agreements, IP assignments, financial statements, compliance documentation, customer contracts, data privacy policies. The looming deadlines feel impossible. And then comes the sudden, sinking realization: "Are we actually ready for this?"
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The 'Almost Ready' Trap</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This scenario plays out in boardrooms across the startup ecosystem every single day. Founders pour their energy into perfecting pitch decks, crafting compelling narratives, and securing those crucial investor meetings. They master the art of selling the vision, the market opportunity, the team's capabilities. They believe they're "ready enough" for fundraising.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              But here's the brutal truth: while you were optimizing slide transitions and rehearsing your two-minute elevator pitch, your operational and documentary backbone was falling behind. Your cap table has inconsistencies from that convertible note round. Your employee stock option grants were never properly documented. Your customer contracts lack standard data processing clauses. Your financial records are scattered across three different systems.
            </p>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-md p-6 my-12">
              <p className="text-lg font-semibold text-white mb-2">
                You thought you were 90% ready. In reality, you might be 60% ready – and in the world of institutional fundraising, that gap isn't just problematic. It's potentially fatal.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Devastating Hidden Costs</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Being "almost ready" isn't a minor inconvenience. It introduces hidden costs that extend far beyond lost time and can fundamentally damage your fundraising prospects:
            </p>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Trust Erosion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every missing document, every "we'll get that to you next week," every inconsistency in your records signals to investors that your operational discipline may be lacking. If you can't manage your own documentation, how will you manage their capital?
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Valuation Compression</h3>
                <p className="text-gray-300 leading-relaxed">
                  Investors price risk. When due diligence reveals operational gaps, messy cap tables, or compliance issues, they don't just walk away – they often come back with lower valuations or additional protective terms that dilute your ownership and control.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Deal Momentum Loss</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fundraising operates on momentum. Every delay gives investors time to second-guess, discover other opportunities, or simply lose enthusiasm. That "hot" deal can quickly turn lukewarm when due diligence drags on for months instead of weeks.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Competitive Disadvantage</h3>
                <p className="text-gray-300 leading-relaxed">
                  While you're scrambling to assemble basic documentation, your competitors who came prepared are moving through diligence quickly and securing funding. In high-velocity markets, this timing difference can be existential.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Team Distraction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Last-minute due diligence preparation pulls your entire leadership team away from running the business. Your CFO is hunting down old contracts instead of managing cash flow. Your CEO is assembling compliance documents instead of closing customers. The business suffers while you chase paperwork.
                </p>
              </div>

              <div className="border-l-4 border-gray-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Outright Deal Death</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sometimes, the gaps are simply too large to bridge within the investor's timeline. That dream round you worked so hard to secure? It evaporates because you couldn't deliver clean documentation when it mattered most.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-md p-8 my-12">
              <p className="text-lg font-semibold text-white leading-relaxed">
                The reality is stark: <strong>institutional investors have dozens of other opportunities competing for their attention. They will choose the path of least resistance, and that path rarely includes founders who can't demonstrate operational readiness.</strong>
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This article will uncover the true, often devastating, consequences of delaying due diligence preparation and make the case for a proactive "deal readiness" approach that positions your startup for fundraising success before you ever need it.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Avoid the 'Almost Ready' Trap?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't let poor preparation kill your next fundraise. Get deal-ready before you need to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/contact">Get Deal Ready</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/resources/readiness-assessment">Take Assessment →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-animate fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Related Resources</h2>
            <p className="text-gray-300">Continue learning about deal readiness and fundraising best practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate fade-up stagger-children">
            <Link href="/resources" className="group">
              <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Deal Readiness Playbook</h3>
                <p className="text-gray-300 text-sm">Complete guide to preparing your startup for fundraising success</p>
              </div>
            </Link>

            <Link href="/resources/readiness-assessment" className="group">
              <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/30 to-emerald-400/20 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Readiness Assessment</h3>
                <p className="text-gray-300 text-sm">Take our interactive assessment to evaluate your current deal readiness</p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Our Services</h3>
                <p className="text-gray-300 text-sm">Explore how we help startups become deal-ready</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 