'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ResourcesPage() {
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

  const resourceCategories = [
    {
      title: "Case Studies",
      description: "Real examples of how we've helped startups become deal-ready",
      resources: [
        { title: "From Chaos to Closed: B2B SaaS Series A", type: "Case Study", readTime: "12 min read", link: "/resources/case-studies/chaos-to-closed", image: "/Gemini_Generated_Image_p9g5dap9g5dap9g5.png", featured: true }
      ]
    },
    {
      title: "Industry Insights",
      description: "Latest trends and insights from the startup fundraising landscape",
      resources: [
        { title: "The Hidden Cost of 'Almost Ready'", type: "Article", readTime: "5 min read", link: "/resources/insights/hidden-cost-almost-ready", image: "/Gemini_Generated_Image_f2debdf2debdf2de.png", featured: true }
      ]
    },
    {
      title: "Templates & Guides",
      description: "Practical templates and checklists to streamline your preparation",
      resources: [
        { title: "The Complete Due Diligence Checklist", type: "Checklist", readTime: "15 min read", link: "/resources/templates/due-diligence-checklist", image: "/new image.png", featured: true }
      ]
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center mx-auto scroll-animate fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Startup <span className="text-gray-400">Resources</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Free guides, templates, and insights to help you prepare your startup for funding, acquisition, and enterprise sales.
            </p>
          </div>
        </div>
      </section>



      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Browse All Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to make your startup investor-ready, organized by category.
            </p>
          </div>

          {/* Featured Assessment Tool */}
          <div className="mb-16 scroll-animate fade-up">
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
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 transition-all duration-300 rounded-md px-6 sm:px-8 py-2 sm:py-3 h-auto font-medium text-base"
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

          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="scroll-animate fade-up stagger-children">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resourceIndex) => {
                    const ResourceCard = (
                      <div className={`bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all duration-300 group cursor-pointer ${
                        resource.featured ? 'md:col-span-2 lg:col-span-1' : ''
                      }`}>
                        {resource.image ? (
                          <div className="overflow-hidden">
                            <div className="aspect-[16/10] overflow-hidden">
                              <img 
                                src={resource.image}
                                alt={resource.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex gap-2">
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                                    resource.type === 'Guide' ? 'bg-blue-500/20 text-blue-300' :
                                    resource.type === 'Template' ? 'bg-green-500/20 text-green-300' :
                                    resource.type === 'Case Study' ? 'bg-purple-500/20 text-purple-300' :
                                    resource.type === 'Report' ? 'bg-orange-500/20 text-orange-300' :
                                    resource.type === 'Article' ? 'bg-cyan-500/20 text-cyan-300' :
                                    resource.type === 'Analysis' ? 'bg-pink-500/20 text-pink-300' :
                                    resource.type === 'Checklist' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-gray-500/20 text-gray-300'
                                  }`}>
                                    {resource.type}
                                  </span>
                                  {resource.featured && (
                                    <span className="px-2 py-1 rounded text-xs font-medium bg-orange-500/20 text-orange-300">
                                      Featured
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <h4 className="text-white font-semibold mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                                {resource.title}
                              </h4>
                              
                              <div className="text-sm text-gray-400">
                                {resource.readTime}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                resource.type === 'Guide' ? 'bg-blue-500/20 text-blue-300' :
                                resource.type === 'Template' ? 'bg-green-500/20 text-green-300' :
                                resource.type === 'Case Study' ? 'bg-purple-500/20 text-purple-300' :
                                resource.type === 'Report' ? 'bg-orange-500/20 text-orange-300' :
                                resource.type === 'Article' ? 'bg-cyan-500/20 text-cyan-300' :
                                resource.type === 'Analysis' ? 'bg-pink-500/20 text-pink-300' :
                                resource.type === 'Checklist' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-gray-500/20 text-gray-300'
                              }`}>
                                {resource.type}
                              </span>
                              <div className="w-4 h-4 bg-white/20 rounded group-hover:bg-white/40 transition-all duration-300 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            
                            <h4 className="text-white font-semibold mb-3 leading-tight group-hover:text-white/90 transition-colors duration-300">
                              {resource.title}
                            </h4>
                            
                            <div className="text-sm text-gray-400">
                              {resource.readTime}
                            </div>
                          </div>
                        )}
                      </div>
                    )

                    return (
                      <div key={resourceIndex}>
                        {resource.link ? (
                          <Link href={resource.link}>
                            {ResourceCard}
                          </Link>
                        ) : (
                          ResourceCard
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get new resources, case studies, and deal readiness insights delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300"
              />
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 h-8 sm:h-10 font-medium text-sm whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animate fade-up">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Need Personalized Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              While our resources are comprehensive, sometimes you need expert guidance tailored to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/contact">Schedule a Consultation</Link>
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

      <Footer />
    </div>
  )
} 