'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function LegalCorporateReadinessPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Legal & Corporate <span className="text-gray-400">Readiness</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build bulletproof legal foundations with proper corporate structures, contracts, and IP protection that won't derail your deal.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-animate fade-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We work with fractional legal experts to review your corporate structure, clean up contracts, protect IP, and ensure your legal house is in order before investors or acquirers start digging.
              </p>
            </div>
            <div className="space-y-6 scroll-animate fade-right stagger-children">
              <h3 className="text-xl font-bold text-white mb-4">Our focus areas:</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Corporate structure optimization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Contract review and standardization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Intellectual property audit</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Employment and equity documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Why Legal Readiness Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate fade-up stagger-children">
            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card">
              <div className="w-12 h-12 mb-4 text-green-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.58 10.76C10.22 11.12 10 11.6 10 12.1V23H12V12.1L17.5 6.6L19.83 8.93L21 7.76V9H21Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Avoid Deal Killers</h3>
              <p className="text-gray-300 leading-relaxed">
                Clean legal structure prevents last-minute surprises that could derail your fundraise or acquisition.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-1">
              <div className="w-12 h-12 mb-4 text-green-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Faster Negotiations</h3>
              <p className="text-gray-300 leading-relaxed">
                Standardized contracts and clear IP ownership accelerate legal review and term sheet negotiations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-2">
              <div className="w-12 h-12 mb-4 text-green-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Mitigation</h3>
              <p className="text-gray-300 leading-relaxed">
                Proper documentation protects your interests and demonstrates professional governance to investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Our Approach
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Legal Structure Audit</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We review your corporate structure, cap table, and governance documents to identify potential red flags.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-green-500/15 to-emerald-500/10 rounded-md border border-green-500/20 hover:from-green-500/25 hover:to-emerald-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400/30 to-emerald-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                    </svg>
                  </div>
                  <div className="text-green-200/80 text-sm font-medium">Legal Audit</div>
                  <div className="text-green-200/60 text-xs mt-1">Structure Review</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-right">
              <div className="lg:order-2">
                <h3 className="text-xl font-bold text-white mb-4">2. Contract & IP Cleanup</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We standardize customer contracts, secure IP assignments, and ensure employment agreements are investor-grade.
                </p>
              </div>
              <div className="lg:order-1 h-48 bg-gradient-to-br from-green-500/15 to-emerald-500/10 rounded-md border border-green-500/20 hover:from-green-500/25 hover:to-emerald-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400/30 to-emerald-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <div className="text-green-200/80 text-sm font-medium">Contract Cleanup</div>
                  <div className="text-green-200/60 text-xs mt-1">IP & Employment</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Documentation Package</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We deliver organized legal documentation ready for due diligence, including summaries and compliance matrices.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-green-500/15 to-emerald-500/10 rounded-md border border-green-500/20 hover:from-green-500/25 hover:to-emerald-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400/30 to-emerald-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/>
                    </svg>
                  </div>
                  <div className="text-green-200/80 text-sm font-medium">Documentation</div>
                  <div className="text-green-200/60 text-xs mt-1">Compliance Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Ready to Bulletproof Your Legal Foundation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get your corporate structure and contracts deal-ready with our expert legal review and optimization process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/contact">Start Your Legal Prep</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/who-we-help">See Who We Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .shine-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: linear-gradient(90deg, transparent, white, transparent);
          background-size: 200% 100%;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: borderShine 3s ease-in-out infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }
        
        .shine-card:hover::before {
          opacity: 1;
        }
        
        .shine-delay-1::before {
          animation-delay: 1s;
        }
        
        .shine-delay-2::before {
          animation-delay: 2s;
        }
        
        @keyframes borderShine {
          0% { 
            background-position: -100% 0;
          }
          100% { 
            background-position: 100% 0;
          }
        }
      `}</style>

      <Footer />
    </div>
  )
} 