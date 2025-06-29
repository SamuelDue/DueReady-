'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function FinancialDueDiligencePrepPage() {
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
              Financial Due Diligence <span className="text-gray-400">Prep</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get your financial records investor-ready with clean models, forecasts, and reporting systems that instill confidence.
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
                We transform messy financial data into clean, professional documentation that tells your growth story and demonstrates sound unit economics to investors and acquirers.
              </p>
            </div>
            <div className="space-y-6 scroll-animate fade-right stagger-children">
              <h3 className="text-xl font-bold text-white mb-4">Our process includes:</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Financial model review and optimization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Revenue recognition and accounting cleanup</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>KPI dashboard creation and validation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Historical data reconciliation</p>
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
              Why It Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate fade-up stagger-children">
            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card">
              <div className="w-12 h-12 mb-4 text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3v18h18v-2H5V3H3zm16 13H9V8h10v8zM7 6v2h12V6H7zm2 4h8v6H9v-6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Faster Due Diligence</h3>
              <p className="text-gray-300 leading-relaxed">
                Clean financial documentation accelerates investor review process and reduces back-and-forth questions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-1">
              <div className="w-12 h-12 mb-4 text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Higher Valuations</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional financial presentation demonstrates operational maturity and reduces perceived risk.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-2">
              <div className="w-12 h-12 mb-4 text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 13.9,13.5 12.8,13.5H11.2C10.1,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.5H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deal Certainty</h3>
              <p className="text-gray-300 leading-relaxed">
                Bulletproof financials eliminate surprises that could derail your fundraise or acquisition.
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
              Our Process
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Financial Health Check</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We audit your current financial systems, identify gaps, and create a roadmap for improvement.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-md border border-blue-500/20 hover:from-blue-500/25 hover:to-cyan-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <div className="text-blue-200/80 text-sm font-medium">Financial Analysis</div>
                  <div className="text-blue-200/60 text-xs mt-1">Health Check & Review</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-right">
              <div className="lg:order-2">
                <h3 className="text-xl font-bold text-white mb-4">2. Model & Reporting Optimization</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We rebuild your financial models with proper assumptions, add scenario planning, and create investor-grade reports.
                </p>
              </div>
              <div className="lg:order-1 h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-md border border-blue-500/20 hover:from-blue-500/25 hover:to-cyan-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <div className="text-blue-200/80 text-sm font-medium">Model Optimization</div>
                  <div className="text-blue-200/60 text-xs mt-1">Reports & Forecasting</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Data Room Package</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We deliver a complete financial package ready for due diligence, including executive summaries and supporting documentation.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-md border border-blue-500/20 hover:from-blue-500/25 hover:to-cyan-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                  </div>
                  <div className="text-blue-200/80 text-sm font-medium">Data Room Package</div>
                  <div className="text-blue-200/60 text-xs mt-1">Documentation Ready</div>
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
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Ready to Get Your Financials Deal-Ready?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let our financial experts prepare your data for investor scrutiny and accelerate your fundraising process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button 
                  className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                  asChild
                >
                  <Link href="/contact">Start Your Financial Audit</Link>
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