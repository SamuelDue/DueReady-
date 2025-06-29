'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function WhoWeHelpPage() {
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
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Who We <span className="text-gray-400">Help</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Supporting high-growth startups on the path to funding, acquisition, or operational clarity.
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We work with founders who are building fast — and need their operations, docs, and risk profile to keep up.
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
                Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you're gearing up for a fundraise, preparing for exit, or just need to get your house in order — we're the team you call when it's time to look sharp, clean up risk, and move fast.
              </p>
            </div>
            <div className="space-y-6 scroll-animate fade-right stagger-children">
              <h3 className="text-xl font-bold text-white mb-4">We've helped:</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Founders raising a Seed or Series A round</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Startups being acquired by strategics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Teams responding to diligence from investors or enterprise clients</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p>Operators getting ahead of legal, compliance, or finance mess before it blocks growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Who We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Startups Raising Capital */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] scroll-animate fade-up group min-h-[320px] flex flex-col overflow-hidden relative">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-32 bg-gradient-to-bl from-blue-500/8 to-cyan-500/4 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 animate-float-1"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-blue-400/6 to-transparent rounded-full blur-xl animate-float-2"></div>
              <div className="absolute top-1/2 right-6 w-3 h-20 bg-gradient-to-b from-blue-400/15 to-transparent rounded-full transform rotate-12 animate-sway-1"></div>
              <div className="absolute top-1/4 left-6 w-1 h-16 bg-gradient-to-b from-cyan-300/20 to-transparent rounded-full animate-sway-2"></div>
              <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/25 rounded-full animate-pulse-slow"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Startups Raising Capital</h3>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg relative z-10">
                From pre-seed to Series B, we get your data room, cap table, legal structure, and financial model clean, tight, and investor-ready.
              </p>
              <div className="mt-auto relative z-10">
                <blockquote className="border-l-4 border-blue-400/50 pl-6 bg-blue-500/5 rounded-r-lg py-4 pr-4">
                  <p className="italic text-gray-300 text-base mb-3 leading-relaxed">
                    "We need to raise, but we're not sure if we're ready. Our cap table is messy and we're missing key documents."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Startups Preparing for Exit */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] scroll-animate fade-up group min-h-[320px] flex flex-col overflow-hidden relative">
              {/* Background Elements */}
              <div className="absolute top-0 left-0 w-32 h-36 bg-gradient-to-br from-purple-500/8 to-indigo-500/4 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 animate-float-3"></div>
              <div className="absolute bottom-0 right-0 w-36 h-24 bg-gradient-to-tl from-purple-400/6 to-transparent rounded-full blur-xl animate-float-1"></div>
              <div className="absolute top-1/3 left-4 w-2 h-12 bg-gradient-to-b from-purple-400/20 to-transparent rounded-full transform -rotate-12 animate-sway-3"></div>
              <div className="absolute bottom-1/4 right-4 w-4 h-16 bg-gradient-to-t from-indigo-300/15 to-transparent rounded-full animate-sway-1"></div>
              <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-indigo-400/25 rounded-full animate-pulse-slow"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Startups Preparing for Exit</h3>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg relative z-10">
                Selling your company or entertaining inbound M&A? We make sure your operational, legal, and compliance foundations won't kill the deal.
              </p>
              <div className="mt-auto relative z-10">
                <blockquote className="border-l-4 border-purple-400/50 pl-6 bg-purple-500/5 rounded-r-lg py-4 pr-4">
                  <p className="italic text-gray-300 text-base mb-3 leading-relaxed">
                    "We got interest from an acquirer, but we're scrambling to respond to their diligence requests. Everything's a mess."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Post-Funding Startups */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] scroll-animate fade-up group min-h-[320px] flex flex-col overflow-hidden relative">
              {/* Background Elements */}
              <div className="absolute top-1/4 right-0 w-28 h-40 bg-gradient-to-l from-green-500/8 to-emerald-500/4 rounded-l-full blur-xl group-hover:scale-110 transition-transform duration-700 animate-float-2"></div>
              <div className="absolute bottom-0 left-1/4 w-36 h-20 bg-gradient-to-tr from-emerald-400/6 to-green-400/4 rounded-full blur-2xl animate-float-3"></div>
              <div className="absolute top-1/2 left-2 w-3 h-14 bg-gradient-to-r from-green-400/18 to-transparent rounded-r-full animate-sway-2"></div>
              <div className="absolute top-1/6 right-1/3 w-1 h-8 bg-gradient-to-b from-emerald-300/25 to-transparent rounded-full transform rotate-12 animate-sway-3"></div>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-400/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse-slow"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Post-Funding Startups Under Pressure</h3>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg relative z-10">
                Just raised and feeling the weight of investor expectations? We help you build structure, clarity, and readiness before your next board meeting or strategic hire.
              </p>
              <div className="mt-auto relative z-10">
                <blockquote className="border-l-4 border-green-400/50 pl-6 bg-green-500/5 rounded-r-lg py-4 pr-4">
                  <p className="italic text-gray-300 text-base mb-3 leading-relaxed">
                    "We closed the round, but our internal systems are messy. Investors are asking for metrics we don't have organized."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Enterprise Deals */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 lg:p-10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] scroll-animate fade-up group min-h-[320px] flex flex-col overflow-hidden relative">
              {/* Background Elements */}
              <div className="absolute top-0 left-1/3 w-32 h-28 bg-gradient-to-br from-orange-500/8 to-red-500/4 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 animate-float-1"></div>
              <div className="absolute bottom-0 right-0 w-24 h-32 bg-gradient-to-tl from-red-400/6 to-orange-400/4 rounded-full blur-xl animate-float-2"></div>
              <div className="absolute top-1/3 left-0 w-4 h-18 bg-gradient-to-r from-orange-400/15 to-transparent rounded-r-full animate-sway-1"></div>
              <div className="absolute bottom-1/4 right-1/4 w-2 h-12 bg-gradient-to-t from-red-300/20 to-transparent rounded-full transform -rotate-12 animate-sway-3"></div>
              <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-orange-400/25 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-red-400/20 rounded-full animate-pulse-slow"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Startups Closing Enterprise Deals</h3>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg relative z-10">
                Big contracts come with big diligence. We help you pass risk reviews, vendor onboarding, and legal redlines without slowing down growth.
              </p>
              <div className="mt-auto relative z-10">
                <blockquote className="border-l-4 border-orange-400/50 pl-6 bg-orange-500/5 rounded-r-lg py-4 pr-4">
                  <p className="italic text-gray-300 text-base mb-3 leading-relaxed">
                    "Our first enterprise customer just asked for 20 policies we don't have. We can't lose this deal over compliance paperwork."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From chaos to confidence in 4 structured steps. We handle the complexity so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Discovery & Onboarding */}
            <div className="scroll-animate fade-up group">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-2 left-2 w-3 h-8 bg-gradient-to-t from-blue-400/20 to-transparent rounded-full animate-sway-1"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Discovery & Onboarding
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We assess your current readiness across legal, financial, compliance, and tech. You get a custom roadmap + client workspace in Notion.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Specialist Review */}
            <div className="scroll-animate fade-up group">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-1/4 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-1/3 right-2 w-2 h-6 bg-gradient-to-t from-purple-400/25 to-transparent rounded-full animate-sway-2"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Specialist Review
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We match you with vetted specialists from our network. Each area is reviewed and flagged for gaps, red flags, or key risks.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Execution & Fix */}
            <div className="scroll-animate fade-up group">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/3 w-18 h-18 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse-slow"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Execution & Fix
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Our team helps you resolve gaps — whether it's cleaning your cap table, refining your data room, or building a financial model investors trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Final Check & Output */}
            <div className="scroll-animate fade-up group">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-1/2 right-0 w-14 h-14 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-2 right-1/3 w-2 h-4 bg-gradient-to-t from-orange-400/20 to-transparent rounded-full animate-sway-3"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Final Check & Investor-Ready Output
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Everything gets QA'd, packaged, and prepared for investor review. You leave with confidence, not chaos.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Small Divider */}
      <div className="border-t border-white/10"></div>
      
      {/* Fluid Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center scroll-animate fade-up">
            <div className="max-w-4xl mx-auto relative">
              {/* Subtle background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl blur-xl"></div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                  Ready to transform chaos into confidence?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  DueReady plugs in fast with trusted financial, legal, and tech readiness services — so you can focus on closing deals, not chasing documents.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-6 py-2 h-auto font-medium text-base"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button 
                    variant="ghost"
                    className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 transition-all duration-300 px-6 py-2 h-auto font-medium text-base border border-transparent hover:border-blue-400/30"
                    asChild
                  >
                    <Link href="/partners">Partner With Us →</Link>
                  </Button>
                </div>
              </div>
            </div>
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
            transform: translateY(-10px) scale(1.02);
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
          }
          33% { 
            transform: translateY(-8px) translateX(3px);
          }
          66% { 
            transform: translateY(3px) translateX(-2px);
          }
        }
        
        @keyframes float-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-12px) rotate(1deg);
          }
        }
        
        @keyframes sway-1 {
          0%, 100% { 
            transform: translateX(0px);
          }
          50% { 
            transform: translateX(3px);
          }
        }
        
        @keyframes sway-2 {
          0%, 100% { 
            transform: translateX(0px) scaleY(1);
          }
          50% { 
            transform: translateX(-2px) scaleY(1.05);
          }
        }
        
        @keyframes sway-3 {
          0%, 100% { 
            transform: rotate(-12deg);
          }
          50% { 
            transform: rotate(-6deg) translateY(-2px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
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
        
        .animate-sway-1 {
          animation: sway-1 4s ease-in-out infinite;
        }
        
        .animate-sway-2 {
          animation: sway-2 5s ease-in-out infinite;
        }
        
        .animate-sway-3 {
          animation: sway-3 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 