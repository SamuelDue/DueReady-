'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'

// Note: This metadata will be added to the page component once we convert it to server component
// For now, we'll add it via head tags in useEffect
export const contactMetadata: Metadata = {
  title: "Contact DueReady – Startup Deal Readiness & Due Diligence Experts",
  description: "Connect with deal readiness specialists for a free consultation. Legal, financial & compliance experts ready to help prepare your startup for funding or acquisition.",
  keywords: "contact DueReady, free consultation, startup consultation, deal readiness consultation, due diligence consultation",
  openGraph: {
    title: "Contact DueReady - Free Deal Readiness Consultation",
    description: "Schedule a free consultation to prepare your startup for investors, acquirers & auditors. 24hr response time.",
    url: "https://dueready.com/contact",
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    // Update page metadata for better SEO
    document.title = "Contact DueReady – Startup Deal Readiness & Due Diligence Experts"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connect with deal readiness specialists for a free consultation. Legal, financial & compliance experts ready to help prepare your startup for funding or acquisition.')
    }

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear any previous status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
        // Clear form
        setFormData({
          name: '',
          email: '',
          company: '',
          stage: '',
          message: '',
          consent: false
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try emailing us directly at hello@dueready.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly can you help us get deal-ready?",
      answer: "Timeline depends on your current state and goals. Most engagements are completed within 4-8 weeks, but we can work on accelerated timelines for urgent fundraises or acquisitions."
    },
    {
      question: "Do you work with pre-revenue startups?",
      answer: "Absolutely. We help startups at all stages, from pre-seed to growth stage. Our approach is tailored to your current situation and future goals."
    },
    {
      question: "What's included in the initial consultation?",
      answer: "We'll assess your current readiness, identify potential red flags, discuss your timeline and goals, and outline a customized approach for your situation."
    },
    {
      question: "Can you help with ongoing compliance after the initial project?",
      answer: "Yes, we offer ongoing advisory services to help you maintain compliance and readiness as you grow and face new challenges."
    },
    {
      question: "What types of companies do you typically work with?",
      answer: "We work with B2B SaaS companies, fintech startups, healthtech, and other high-growth technology companies preparing for funding, acquisition, or enterprise sales."
    }
  ]

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
          <div className="max-w-5xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Let's Make Your Startup <span className="text-gray-400">Deal-Ready</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss your goals and discover how we can prepare you for your next milestone.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24hr</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-400">Startups Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4-8wk</div>
                <div className="text-sm text-gray-400">Typical Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Free</div>
                <div className="text-sm text-gray-400">Initial Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to make your startup deal-ready? Choose how you'd like to connect with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info & Testimonial */}
            <div className="scroll-animate fade-left">
              <div className="space-y-8">
                {/* Preferred Contact */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Prefer to Email Directly?</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Send us a detailed message about your situation and we'll respond within 24 hours with a personalized assessment and next steps.
                  </p>
                  <div className="bg-white/10 border border-white/20 rounded-md p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email us at</p>
                        <a href="mailto:hello@dueready.com" className="text-white font-medium hover:text-blue-400 transition-colors duration-300">
                          hello@dueready.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-md p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-white/10 rounded-md border border-white/20 flex items-center justify-center flex-shrink-0 animate-[iconGlow1_4s_ease-in-out_infinite]">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Free 30-minute discovery call</p>
                        <p className="text-gray-400 text-sm">Within 48 hours of your inquiry</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-white/10 rounded-md border border-white/20 flex items-center justify-center flex-shrink-0 animate-[iconGlow2_4s_ease-in-out_infinite]">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Customized roadmap</p>
                        <p className="text-gray-400 text-sm">Based on your timeline and goals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-white/10 rounded-md border border-white/20 flex items-center justify-center flex-shrink-0 animate-[iconGlow3_4s_ease-in-out_infinite]">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">No obligation assessment</p>
                        <p className="text-gray-400 text-sm">Of your current readiness level</p>
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes iconGlow1 {
                    0% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                    20% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    25% { box-shadow: 0 0 35px rgba(34, 197, 94, 0.9); }
                    30% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                  }
                  
                  @keyframes iconGlow2 {
                    0% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                    45% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    50% { box-shadow: 0 0 35px rgba(34, 197, 94, 0.9); }
                    55% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                  }
                  
                  @keyframes iconGlow3 {
                    0% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                    70% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    75% { box-shadow: 0 0 35px rgba(34, 197, 94, 0.9); }
                    80% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.7); }
                    100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
                  }
                `}</style>


              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="scroll-animate fade-right">
                              <div className="bg-white/5 border border-white/10 rounded-md p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Tell Us About Your Startup</h3>
                 
                  <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="stage" className="block text-sm font-medium text-white mb-2">
                  Current Stage
                </label>
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="bg-gray-900">Select your stage</option>
                  <option value="pre-seed" className="bg-gray-900">Pre-seed</option>
                  <option value="seed" className="bg-gray-900">Seed</option>
                  <option value="series-a" className="bg-gray-900">Series A</option>
                  <option value="series-b+" className="bg-gray-900">Series B+</option>
                  <option value="preparing-exit" className="bg-gray-900">Preparing for Exit</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your current situation, timeline, and specific goals..."
                />
              </div>

              {/* GDPR Consent Checkbox */}
              <div className="flex items-start gap-3 pt-4 pb-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 text-white bg-white/10 border border-white/30 rounded focus:ring-white/40 focus:ring-2 accent-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                  I consent to DueReady processing my personal data (name, email, company, stage, and message) to respond to my inquiry and provide information about services. I understand I can withdraw consent at any time by emailing <a href="mailto:hello@dueready.com" className="text-white hover:text-blue-400 transition-colors">hello@dueready.com</a>. For full details, see our <Link href="/privacy" className="text-white hover:text-blue-400 transition-colors">Privacy Policy</Link>. *
                </label>
              </div>

              {/* Success/Error Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-md border ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 flex-shrink-0 ${
                      submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {submitStatus === 'success' ? (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <Button 
                  type="submit"
                  disabled={!formData.consent || isSubmitting}
                  className="w-full bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </Button>
                
                <Button 
                  type="button"
                  variant="ghost"
                  className="w-full text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                  asChild
                >
                  <Link href="/who-we-help">Learn More First</Link>
                </Button>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same... */}
      {/* FAQ Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get answers to the most frequently asked questions about our process and services.
            </p>
          </div>

          <div className="space-y-4 scroll-animate fade-up stagger-children">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className={`w-0.5 h-4 bg-white absolute transition-opacity duration-300 ${
                      openFaq === index ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait until you're in the middle of a deal to discover issues. Get ahead of the game and make your startup truly deal-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="#contact-form">Send Us a Message</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/experts">Meet Our Team</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/join-us">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
