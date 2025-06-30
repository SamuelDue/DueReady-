'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'

// Simplified scroll animations to avoid hydration issues
function useScrollAnimation() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const animatedElements = document.querySelectorAll('.scroll-animate')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])
}

// Scrolling words component
function ScrollingWords() {
  const words = ['fundable.', 'acquirable.', 'compliant.', 'deal-ready.', 'audit-ready.']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  // Prevent hydration mismatch by not showing animation until client-side
  if (!isClient) {
    return <span className="text-gray-400">fundable</span>
  }

  return (
    <span className="scrolling-words-container inline-block relative">
      <span 
        key={currentWordIndex}
        className="scrolling-words-text text-gray-400 absolute left-0 animate-slide-up whitespace-nowrap"
      >
        {words[currentWordIndex]}
      </span>
      
      <style jsx>{`
        /* Desktop positioning (default) */
        .scrolling-words-container {
          width: 240px;
          height: 1.2em;
          overflow: visible;
          vertical-align: baseline;
        }
        
        .scrolling-words-text {
          top: 0.36em;
          line-height: inherit;
          display: inline-block;
        }
        
        /* Mobile positioning - natural baseline alignment */
        @media (max-width: 768px) {
          .scrolling-words-container {
            width: 200px; /* Smaller width on mobile */
            height: 1.1em;
            vertical-align: baseline;
          }
          
          .scrolling-words-text {
            top: 0.25em; /* Slightly higher for perfect baseline alignment on mobile */
            bottom: auto; /* Reset bottom positioning */
            font-size: 0.95em; /* Slightly smaller on mobile if needed */
          }
          
          /* Mobile-specific animation with baseline alignment */
          .animate-slide-up {
            animation: slide-up-mobile 3s ease-in-out;
          }
        }
        
        /* Very small mobile screens */
        @media (max-width: 480px) {
          .scrolling-words-container {
            width: 180px;
          }
          
          .scrolling-words-text {
            top: 0.25em; /* Slightly higher for perfect baseline alignment on small screens */
            bottom: auto; /* Reset bottom positioning */
            font-size: 0.9em;
          }
          
          /* Small mobile-specific animation with baseline alignment */
          .animate-slide-up {
            animation: slide-up-small-mobile 3s ease-in-out;
          }
        }
        
        /* Desktop animation */
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          15% {
            transform: translateY(0%);
            opacity: 1;
          }
          85% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        /* Mobile animation with baseline alignment */
        @media (max-width: 768px) {
          @keyframes slide-up-mobile {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            15% {
              transform: translateY(0%);
              opacity: 1;
            }
            85% {
              transform: translateY(0%);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        }
        
        /* Small mobile animation with baseline alignment */
        @media (max-width: 480px) {
          @keyframes slide-up-small-mobile {
            0% {
              transform: translateY(100%);
              opacity: 0;
            }
            15% {
              transform: translateY(0%);
              opacity: 1;
            }
            85% {
              transform: translateY(0%);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        }
        
        .animate-slide-up {
          animation: slide-up 3s ease-in-out;
        }
      `}</style>
    </span>
  )
}

export default function Home() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Animated Glow Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="floating-glow-1 absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-2 absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-3 absolute top-80 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-4 absolute top-[600px] left-10 w-72 h-72 bg-gradient-to-br from-emerald-500/8 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="flex items-center min-h-screen pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12 w-full">
          <div className="max-w-4xl scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight animate-blur-in font-[family-name:var(--font-space-grotesk)] leading-tight" style={{ overflow: 'visible' }}>
              <span className="block">The fastest way to</span>
              <span className="inline">become <ScrollingWords /></span>
          </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-blur-in-delayed">
              Financial, legal, and compliance readiness for startups - so you can focus on building, not chasing documents.
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-blur-in-delayed-2">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                asChild
              >
                <Link href="/contact">Get Deal Ready</Link>
            </Button>
              
              <Button 
                variant="ghost"
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                asChild
              >
                <Link href="/resources/readiness-assessment">Take Assessment →</Link>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Title - Left side on desktop, top on mobile */}
            <div className="lg:col-span-1 scroll-animate fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 lg:mb-0">
                Who we are
              </h2>
            </div>
            
            {/* Content - Right side on desktop, below title on mobile */}
            <div className="lg:col-span-2">
              <div className="text-lg text-gray-300 leading-relaxed scroll-animate fade-up stagger-children">
                <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
                  <p className="leading-relaxed">
                    We're a specialist collective of fractional legal, financial, and tech experts dedicated to one mission: making startups deal-ready.
                  </p>
                  <p className="leading-relaxed">
                    Whether you're navigating a funding round, preparing for an acquisition, or fixing compliance gaps before they derail a deal, our vetted specialists bring the experience, speed, and precision required to deliver.
                  </p>
                  <p className="leading-relaxed">
                    Built by founders who've lived through the fundraising process, we understand exactly where deals fall apart — and how to prevent it.
                  </p>
                </div>
                
                {/* Call-to-action */}
                <div className="pt-2 sm:pt-4">
                  <Button 
                    className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                    asChild
                  >
                    <Link href="/experts">Meet Our Experts</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              What We Do
          </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you're raising capital, preparing for acquisition, or navigating compliance, we tailor our services to match your stage, speed, and strategic goals.
          </p>
        </div>

          <div className="space-y-20">
            {/* Deal Readiness Audits - Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div className="h-48 bg-gradient-to-br from-orange-500/15 to-red-500/10 rounded-md border border-orange-500/20 hover:from-orange-500/25 hover:to-red-500/20 transition-all duration-300 flex items-center justify-center p-8 group order-1 lg:order-2">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400/30 to-red-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-300 transition-all duration-300 md:duration-500 md:group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div className="text-orange-200/80 text-sm font-medium">Risk Assessment</div>
                  <div className="text-orange-200/60 text-xs mt-1">Identify & Resolve Issues</div>
                </div>
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Deal Readiness Audits</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  We identify red flags before investors or acquirers do. From messy cap tables to missing IP agreements, we help you clean it up before it costs you the deal.
                </p>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-3 py-2 h-auto font-medium text-sm flex items-center justify-center min-h-[36px]"
                  asChild
                >
                  <Link href="/services/compliance-risk-audit">Learn More →</Link>
                </Button>
              </div>
            </div>

            {/* Fundraising & Data Room Prep - Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-right">
              <div className="order-1 lg:order-1 h-48 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-md border border-purple-500/20 hover:from-purple-500/25 hover:to-indigo-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-300 transition-all duration-300 md:duration-500 md:group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <div className="text-purple-200/80 text-sm font-medium">Data Organization</div>
                  <div className="text-purple-200/60 text-xs mt-1">Investor-Ready Documents</div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-4">Fundraising & Data Room Prep</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  From SAFE cleanups to board deck input and financial model reviews, we get your documents—and your story—ready for investors.
                </p>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-3 py-2 h-auto font-medium text-sm flex items-center justify-center min-h-[36px]"
                  asChild
                >
                  <Link href="/services/tech-data-room-optimization">Learn More →</Link>
                </Button>
              </div>
            </div>

            {/* Legal & Compliance Structuring - Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div className="order-1 lg:order-2 h-48 bg-gradient-to-br from-green-500/15 to-emerald-500/10 rounded-md border border-green-500/20 hover:from-green-500/25 hover:to-emerald-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400/30 to-emerald-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-300 transition-all duration-300 md:duration-500 md:group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16.06L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"/>
                    </svg>
                  </div>
                  <div className="text-green-200/80 text-sm font-medium">Legal Structure</div>
                  <div className="text-green-200/60 text-xs mt-1">Compliance & Protection</div>
                </div>
              </div>
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Legal & Compliance Structuring</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  We work with fractional legal experts to review contracts, employment terms, IP protection, and data compliance (GDPR, SOC 2 prep, etc.)
                </p>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-3 py-2 h-auto font-medium text-sm flex items-center justify-center min-h-[36px]"
                  asChild
                >
                  <Link href="/services/legal-corporate-readiness">Learn More →</Link>
                </Button>
              </div>
            </div>

            {/* Financial & Operational Readiness - Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-right">
              <div className="order-1 lg:order-1 h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-md border border-blue-500/20 hover:from-blue-500/25 hover:to-cyan-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-300 transition-all duration-300 md:duration-500 md:group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,13C7.55,13 8,13.45 8,14S7.55,15 7,15 6,14.55 6,14 6.45,13 7,13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6L14.39,10.42L19,11L15.5,14.39L16.42,19L12,16.61L7.58,19L8.5,14.39L5,11L9.61,10.42L12,6Z"/>
                    </svg>
                  </div>
                  <div className="text-blue-200/80 text-sm font-medium">Financial Models</div>
                  <div className="text-blue-200/60 text-xs mt-1">Investor-Grade Reporting</div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-4">Financial & Operational Readiness</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Fractional CFOs and finance experts help you build investor-grade financials, correct accounting gaps, and present credible forecasts.
                </p>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-3 py-2 h-auto font-medium text-sm flex items-center justify-center min-h-[36px]"
                  asChild
                >
                  <Link href="/services/financial-due-diligence-prep">Learn More →</Link>
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Latest Resources Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Latest Resources
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Free guides, case studies, and tools to help you prepare your startup for funding and acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Case Study */}
            <div className="scroll-animate fade-up group cursor-pointer">
              <Link href="/resources/case-studies/chaos-to-closed">
                <div className="bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src="/Gemini_Generated_Image_p9g5dap9g5dap9g5.png"
                      alt="From Chaos to Closed case study"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-300">
                        Case Study
                      </span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-orange-500/20 text-orange-300">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                      From Chaos to Closed: B2B SaaS Series A
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      How professional deal readiness accelerated a funding round and preserved executive focus during critical growth.
                    </p>
                    <div className="text-sm text-gray-500">
                      12 min read
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Due Diligence Checklist */}
            <div className="scroll-animate fade-up group cursor-pointer">
              <Link href="/resources/templates/due-diligence-checklist">
                <div className="bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src="/new image.png"
                      alt="Due diligence checklist template"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/20 text-yellow-300">
                        Checklist
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                      The Complete Due Diligence Checklist
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      Comprehensive checklist covering every aspect of due diligence preparation for funding rounds.
                    </p>
                    <div className="text-sm text-gray-500">
                      15 min read
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Hidden Cost Article */}
            <div className="scroll-animate fade-up group cursor-pointer">
              <Link href="/resources/insights/hidden-cost-almost-ready">
                <div className="bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src="/Gemini_Generated_Image_f2debdf2debdf2de.png"
                      alt="The hidden cost of almost ready article"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-cyan-500/20 text-cyan-300">
                        Article
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                      The Hidden Cost of 'Almost Ready'
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      Why "almost ready" for due diligence often means "not ready at all" and how to avoid common pitfalls.
                    </p>
                    <div className="text-sm text-gray-500">
                      5 min read
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Assessment Tool */}
          <div className="scroll-animate fade-up">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 rounded-md p-8 hover:from-blue-500/15 hover:to-purple-500/10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">Interactive Tool</span>
                    <span className="text-gray-400 text-sm">Free</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    DueReady Assessment
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Get an instant, personalized assessment of your startup's readiness for funding, acquisition, or enterprise deals. Receive your score and actionable insights in minutes.
                  </p>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">5 minutes</span> • Instant results
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-white font-medium">7 categories</span> • Comprehensive
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 transition-all duration-300 rounded-md px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                    asChild
                  >
                    <Link href="/resources/readiness-assessment">Take Assessment Now →</Link>
                  </Button>
                </div>
                <div className="h-48 lg:h-64 rounded-md border border-white/30 overflow-hidden">
                  <img 
                    src="/Gemini_Generated_Image_q4o65eq4o65eq4o6.png"
                    alt="Interactive deal readiness assessment interface"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* View All Resources CTA */}
          <div className="text-center mt-12 scroll-animate fade-up">
            <Button 
              variant="ghost"
              className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
              asChild
            >
              <Link href="/resources">View All Resources →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto text-center scroll-animate fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            See if you're deal-ready.
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Get peace of mind knowing your startup is prepared for investors, acquirers, and auditors — before they start asking questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
              asChild
            >
              <Link href="/contact">Get Deal Ready</Link>
            </Button>
            
            <Button 
              variant="ghost"
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
              asChild
            >
              <Link href="/resources/readiness-assessment">Take Assessment →</Link>
          </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
