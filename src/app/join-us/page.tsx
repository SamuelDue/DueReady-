'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function JoinUsPage() {
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
        <div className="parallax-bg absolute top-32 right-0 w-96 h-96 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-64 right-20 w-80 h-80 bg-gradient-to-br from-white/6 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-96 right-10 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="parallax-bg absolute top-[600px] left-10 w-72 h-72 bg-gradient-to-br from-white/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
          <div className="max-w-4xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Work With <span className="text-gray-400">Growing Startups</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help ambitious founders navigate critical moments. Project-based, well-scoped, genuinely impactful.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <span>• Remote & Flexible</span>
              <span>• Net 15 Payment</span>
              <span>• Flexible Roles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-8 hover:from-blue-500/15 hover:to-blue-600/10 transition-all duration-300 scroll-animate fade-up group text-center overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-24 bg-gradient-to-bl from-blue-500/20 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Fast-Paced Impact</h3>
              <p className="text-gray-200 leading-relaxed relative z-10 text-base">
                1-6 week sprints helping startups prep for funding rounds, acquisitions, or compliance milestones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 rounded-xl p-8 hover:from-purple-500/15 hover:to-purple-600/10 transition-all duration-300 scroll-animate fade-up group text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Clear Scope</h3>
              <p className="text-gray-200 leading-relaxed relative z-10 text-base">
                Defined deliverables, structured timelines, Notion-based workflows. No scope creep or surprises.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-400/20 rounded-xl p-8 hover:from-green-500/15 hover:to-green-600/10 transition-all duration-300 scroll-animate fade-up group text-center overflow-hidden relative">
              <div className="absolute top-0 right-0 w-30 h-26 bg-gradient-to-l from-green-500/20 to-emerald-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Direct Results</h3>
              <p className="text-gray-200 leading-relaxed relative z-10 text-base">
                Your work directly enables funding rounds, acquisitions, compliance milestones, and business growth. Real outcomes across all stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Needed */}
      <section className="py-16 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expertise We Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're looking for specialists who can step into high-value situations with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Legal */}
            <div className="bg-gradient-to-br from-blue-500/8 to-blue-600/4 border border-blue-400/15 rounded-xl p-8 hover:from-blue-500/12 hover:to-blue-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-20 bg-gradient-to-bl from-blue-500/15 to-cyan-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Senior Startup Legal Counsel</h3>
              <p className="text-gray-200 text-base relative z-10">
                Corporate governance • IP assignments • Contract review • Employment compliance
              </p>
            </div>

            {/* Finance */}
            <div className="bg-gradient-to-br from-purple-500/8 to-purple-600/4 border border-purple-400/15 rounded-xl p-8 hover:from-purple-500/12 hover:to-purple-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-20 h-24 bg-gradient-to-br from-purple-500/15 to-indigo-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Startup Finance & Operations Lead</h3>
              <p className="text-gray-200 text-base relative z-10">
                Financial cleanup • Operational efficiency • SaaS metrics • Cap table optimization
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-gradient-to-br from-green-500/8 to-green-600/4 border border-green-400/15 rounded-xl p-8 hover:from-green-500/12 hover:to-green-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-22 h-26 bg-gradient-to-l from-green-500/15 to-emerald-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Data Privacy & Compliance Specialist</h3>
              <p className="text-gray-200 text-base relative z-10">
                SOC 2 readiness • GDPR/CCPA • Industry-specific compliance • Risk frameworks
              </p>
            </div>

            {/* Technical */}
            <div className="bg-gradient-to-br from-orange-500/8 to-orange-600/4 border border-orange-400/15 rounded-xl p-8 hover:from-orange-500/12 hover:to-orange-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-red-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Lead Technical Due Diligence Expert</h3>
              <p className="text-gray-200 text-base relative z-10">
                Tech stack audits • Architecture reviews • Security posture • Development process assessment
              </p>
            </div>

            {/* Investment Strategy */}
            <div className="bg-gradient-to-br from-indigo-500/8 to-indigo-600/4 border border-indigo-400/15 rounded-xl p-8 hover:from-indigo-500/12 hover:to-indigo-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-20 bg-gradient-to-bl from-indigo-500/15 to-purple-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Investor Readiness Strategist</h3>
              <p className="text-gray-200 text-base relative z-10">
                Financial modeling • Investor narratives • Market intelligence • Valuation benchmarks
              </p>
            </div>

            {/* M&A */}
            <div className="bg-gradient-to-br from-teal-500/8 to-teal-600/4 border border-teal-400/15 rounded-xl p-8 hover:from-teal-500/12 hover:to-teal-600/8 transition-all duration-300 scroll-animate fade-up group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-20 h-24 bg-gradient-to-br from-teal-500/15 to-cyan-500/8 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">M&A Readiness & Integration Specialist</h3>
              <p className="text-gray-200 text-base relative z-10">
                M&A strategy • Commercial diligence • Integration planning • Buyer-side prep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 scroll-animate fade-up text-center">
              <div className="text-3xl font-bold text-white mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Project Match</h3>
              <p className="text-gray-300 text-base">
                We send you relevant opportunities. You decide based on scope, timeline, and rate.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 scroll-animate fade-up text-center">
              <div className="text-3xl font-bold text-white mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Scoped Work</h3>
              <p className="text-gray-300 text-base">
                Clear deliverables, defined timeline. Structured through Notion workspace.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 scroll-animate fade-up text-center">
              <div className="text-3xl font-bold text-white mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Get Paid</h3>
              <p className="text-gray-300 text-base">
                Net 15 terms, direct deposit. You set rates; we handle billing.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in working with DueReady?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              15-minute application + 30-minute call. No lengthy onboarding or exclusive commitments.
            </p>
            
            <div className="flex justify-center mb-6">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-lg px-8 py-3 h-auto font-medium text-lg"
                asChild
              >
                <a href="mailto:hello@dueready.com">Apply</a>
              </Button>
            </div>
            
            <p className="text-gray-400 text-base">
              Questions? We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-8px) scale(1.01);
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
          }
          33% { 
            transform: translateY(-6px) translateX(2px);
          }
          66% { 
            transform: translateY(2px) translateX(-1px);
          }
        }
        
        @keyframes float-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-10px) rotate(0.5deg);
          }
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 