'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    // Update page metadata
    document.title = "Page Not Found - DueReady"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Get back on track to deal readiness with DueReady - legal, financial & compliance experts for startups.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-96 left-10 w-96 h-96 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-4xl mx-auto px-12 sm:px-10 lg:px-12 text-center">
          
          {/* 404 Visual */}
          <div className="mb-12">
            <div className="text-8xl sm:text-9xl font-bold text-white/10 mb-4 font-[family-name:var(--font-space-grotesk)]">
              404
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
              This page got lost in due diligence
            </div>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't worry — even the best-prepared startups hit unexpected roadblocks. 
              Let's get you back on track to deal readiness.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-6 py-3 h-auto font-medium text-base"
              asChild
            >
              <Link href="/">Go Home</Link>
            </Button>
            
            <Button 
              variant="ghost"
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 px-6 py-3 h-auto font-medium text-base"
              asChild
            >
              <Link href="/contact">Get Help →</Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
              <div className="space-y-2 text-sm">
                <Link href="/services/legal-corporate-readiness" className="block text-gray-300 hover:text-white transition-colors">
                  Legal & Corporate Readiness
                </Link>
                <Link href="/services/financial-due-diligence-prep" className="block text-gray-300 hover:text-white transition-colors">
                  Financial Due Diligence
                </Link>
                <Link href="/services/compliance-risk-audit" className="block text-gray-300 hover:text-white transition-colors">
                  Compliance & Risk Audit
                </Link>
                <Link href="/services/tech-data-room-optimization" className="block text-gray-300 hover:text-white transition-colors">
                  Tech Data Room Optimization
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
              <div className="space-y-2 text-sm">
                <Link href="/resources/readiness-assessment" className="block text-gray-300 hover:text-white transition-colors">
                  Readiness Assessment
                </Link>
                <Link href="/resources/case-studies/chaos-to-closed" className="block text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
                <Link href="/resources/templates/due-diligence-checklist" className="block text-gray-300 hover:text-white transition-colors">
                  Due Diligence Checklist
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Get Started</h3>
              <div className="space-y-2 text-sm">
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Free Consultation
                </Link>
                <Link href="/experts" className="block text-gray-300 hover:text-white transition-colors">
                  Meet Our Experts
                </Link>
                <Link href="/who-we-help" className="block text-gray-300 hover:text-white transition-colors">
                  Who We Help
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Still can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:hello@dueready.com" 
                className="text-white hover:text-blue-400 transition-colors text-sm"
              >
                Email: hello@dueready.com
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="text-gray-400 text-sm">24hr response time</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
