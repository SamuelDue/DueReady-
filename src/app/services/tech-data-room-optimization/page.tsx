'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function TechDataRoomOptimizationPage() {
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
        <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
          <div className="max-w-4xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Tech & Data Room <span className="text-gray-400">Optimization</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Build secure, organized data rooms with proper access controls and documentation that accelerate due diligence timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-animate fade-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We create comprehensive, secure data rooms that tell your company's story clearly while protecting sensitive information and enabling efficient investor or acquirer review.
              </p>
            </div>
            <div className="space-y-6 scroll-animate fade-right stagger-children">
              <h3 className="text-xl font-bold text-white mb-4 text-left">Our deliverables include:</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Secure virtual data room setup</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Document organization and indexing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Access control and audit trails</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Executive summary and navigation guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Why Data Room Excellence Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate fade-up stagger-children">
            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card">
              <div className="w-12 h-12 mb-4 text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Faster Reviews</h3>
              <p className="text-gray-300 leading-relaxed">
                Well-organized data rooms reduce due diligence time from months to weeks, accelerating your deal timeline.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-1">
              <div className="w-12 h-12 mb-4 text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Impression</h3>
              <p className="text-gray-300 leading-relaxed">
                Clean, organized documentation demonstrates operational sophistication and attention to detail.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-md p-6 hover:bg-white/10 transition-all duration-300 shine-card shine-delay-2">
              <div className="w-12 h-12 mb-4 text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M9,12L7,10L5.5,11.5L9,15L18.5,5.5L17,4L9,12Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Control</h3>
              <p className="text-gray-300 leading-relaxed">
                Proper access controls and audit trails protect sensitive information while enabling thorough review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Our Data Room Process
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Information Architecture</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We design logical folder structures and create document indices that make information easy to find and review.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-md border border-purple-500/20 hover:from-purple-500/25 hover:to-indigo-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 4H4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8C22 6.89 21.1 6 20 6H12L10 4Z"/>
                    </svg>
                  </div>
                  <div className="text-purple-200/80 text-sm font-medium">Data Architecture</div>
                  <div className="text-purple-200/60 text-xs mt-1">Folder Organization</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-right">
              <div className="lg:order-2">
                <h3 className="text-xl font-bold text-white mb-4">2. Platform Setup & Security</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We configure secure data room platforms with proper access controls, watermarks, and download restrictions.
                </p>
              </div>
              <div className="lg:order-1 h-48 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-md border border-purple-500/20 hover:from-purple-500/25 hover:to-indigo-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                    </svg>
                  </div>
                  <div className="text-purple-200/80 text-sm font-medium">Security Setup</div>
                  <div className="text-purple-200/60 text-xs mt-1">Access Controls</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate fade-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Content Management & Training</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We populate the data room with organized content and train your team on management and user access protocols.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-md border border-purple-500/20 hover:from-purple-500/25 hover:to-indigo-500/20 transition-all duration-300 flex items-center justify-center p-8 group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400/30 to-indigo-400/20 rounded-md flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-300 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16.06L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"/>
                    </svg>
                  </div>
                  <div className="text-purple-200/80 text-sm font-medium">User Management</div>
                  <div className="text-purple-200/60 text-xs mt-1">Training & Protocols</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Ready to Build Your Professional Data Room?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create a secure, organized data room that impresses investors and accelerates your due diligence process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/contact">Optimize Your Data Room</Link>
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