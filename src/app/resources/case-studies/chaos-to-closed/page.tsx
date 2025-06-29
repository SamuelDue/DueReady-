'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ChaosToClosedCaseStudy() {
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
        <div className="max-w-6xl mx-auto px-12 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="scroll-animate fade-up">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
                Case Study
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
                From Chaos to <span className="text-gray-400">Closed</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                How Professional Deal Readiness Accelerated a B2B SaaS Series A
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
                  12 min read
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="scroll-animate fade-left">
              <div className="aspect-[4/3] rounded-md overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src="/Gemini_Generated_Image_p9g5dap9g5dap9g5.png"
                  alt="Professional team working on deal readiness and due diligence preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate fade-up mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Industry</h3>
                <p className="text-white font-semibold">B2B SaaS - AI Analytics for FinTech</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Stage</h3>
                <p className="text-white font-semibold">Series A Fundraising</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Challenge</h3>
                <p className="text-white font-semibold">Operational chaos threatening deal</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none scroll-animate fade-up">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Challenge: When Explosive Growth Meets Due Diligence Reality</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This fast-growing B2B SaaS company was experiencing the kind of growth every startup dreams about. Fresh off a successful seed round and posting impressive annual recurring revenue (ARR) numbers, they had attracted serious attention from top-tier Series A venture capital firms. When that coveted term sheet finally arrived, the founding team was ready to celebrate their breakthrough moment.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Then the due diligence checklist arrived – and everything changed.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              What landed in the CEO's inbox wasn't just a simple document request. It was a comprehensive 47-page audit covering financial records, legal documentation, compliance frameworks, technical infrastructure, and operational processes. What should have been a victory lap suddenly became an operational nightmare that threatened to derail the entire funding round.
            </p>

            <h3 className="text-xl font-bold text-white mb-6">The Hidden Cost of Rapid Growth</h3>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Like many hyper-growth startups, this company had prioritized speed and customer acquisition over internal systems and documentation. Their lean team had accumulated significant "operational debt" while building their market-leading product.
            </p>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-bold text-white mb-3">Financial Infrastructure Gaps</h4>
                <p className="text-gray-300 leading-relaxed">
                  The company's books were maintained on cash-basis accounting instead of the accrual-based systems institutional investors expect. Revenue recognition policies were undefined, leading to inconsistent reporting.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-bold text-white mb-3">Legal Documentation Chaos</h4>
                <p className="text-gray-300 leading-relaxed">
                  Corporate documents were scattered across personal cloud storage accounts, email attachments, and various team drives. Intellectual property assignments from early employees were missing or incomplete.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-bold text-white mb-3">Compliance Blind Spots</h4>
                <p className="text-gray-300 leading-relaxed">
                  While the company had basic data privacy policies, they weren't properly implemented across all customer touchpoints. GDPR compliance documentation was incomplete despite serving European clients.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-lg font-bold text-white mb-3">Technical Documentation Deficits</h4>
                <p className="text-gray-300 leading-relaxed">
                  Code repositories were well-organized for developers but lacked the business context and scalability assessments that investors require.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-md p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">The Internal Crisis That Nearly Killed the Deal</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                The CEO found himself spending 60+ hours per week digging through old email threads, hunting for signed contracts, and trying to reconcile financial discrepancies. Every hour spent on "document archaeology" was time stolen from the core business activities that made the company attractive to investors.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 mt-16">The Solution: Strategic Deal Readiness Intervention</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Recognizing that time was their most critical resource, the CEO brought in specialized experts who could handle the operational cleanup while the core team focused on building and selling their revolutionary product.
            </p>

            <div className="space-y-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Financial Infrastructure Transformation</h4>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Converted to investor-grade accrual accounting</li>
                  <li>• Built comprehensive ARR, MRR, LTV dashboard</li>
                  <li>• Resolved financial discrepancies systematically</li>
                  <li>• Developed sophisticated projections and scenario modeling</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Legal and Corporate Governance Overhaul</h4>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Organized all incorporation documents</li>
                  <li>• Secured comprehensive IP assignments</li>
                  <li>• Inventoried all customer and vendor agreements</li>
                  <li>• Updated all employment agreements</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Technology and Security Assessment</h4>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• Created comprehensive technical documentation</li>
                  <li>• Implemented enterprise-grade security</li>
                  <li>• Ensured GDPR compliance was properly documented</li>
                  <li>• Translated technical capabilities for investors</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 mt-16">The Results: Deal Success and Competitive Advantage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Six-Week Deal Closure</h4>
                <p className="text-gray-300 leading-relaxed">
                  Series A round closed within six weeks – dramatically faster than the typical 12-16 week timeline.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Valuation Integrity Maintained</h4>
                <p className="text-gray-300 leading-relaxed">
                  Deal closed at original term sheet valuation with no discounts or additional protective terms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Enhanced Investor Confidence</h4>
                <p className="text-gray-300 leading-relaxed">
                  Clean, comprehensive data room eliminated typical investor concerns about operational readiness.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Executive Bandwidth Preserved</h4>
                <p className="text-gray-300 leading-relaxed">
                  CEO maintained focus on high-value activities while professional team handled operational details.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-md p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Lesson: Proactive Deal Readiness as Competitive Advantage</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                This case demonstrates that operational readiness isn't just about avoiding problems during investor due diligence – it's about creating systematic competitive advantages that accelerate growth and improve fundraising outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Transform Your Deal Readiness?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't let operational chaos kill your next funding round. Get professionally prepared before you need to be.
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

      <Footer />
    </div>
  )
}
 