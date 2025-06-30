'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center pt-2 md:pt-0">
              <Link href="/" className="text-xl font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)] hover:text-gray-200 transition-colors duration-300">
                <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Due</span><span className="text-white">Ready</span><span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">.</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className="flex items-center gap-1 text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                  <div 
                    className="fixed left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-white/20 shadow-2xl z-50"
                    style={{ top: '80px' }}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
                      {/* Header */}
                      <div className="py-6 border-b border-white/10">
                        <div className="text-center">
                          <h3 className="text-white font-bold text-xl mb-2">Our Services</h3>
                          <p className="text-gray-300 text-sm max-w-2xl mx-auto">Comprehensive deal readiness solutions for startups and scale-ups</p>
                        </div>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <Link href="/services/financial-due-diligence-prep" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-blue-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-blue-500/30">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-md flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-blue-600/30 transition-all duration-300 mb-3">
                              <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                            </div>
                                                      <div className="flex-1">
                            <div className="font-bold text-base mb-2">Financial Due Diligence Prep</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Clean financial models and investor-ready reporting systems</div>
                            <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">Learn More →</div>
                          </div>
                          </Link>
                          
                          <Link href="/services/legal-corporate-readiness" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-green-500/15 hover:to-green-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-green-500/30">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-md flex items-center justify-center group-hover:from-green-500/40 group-hover:to-green-600/30 transition-all duration-300 mb-3">
                              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:bg-green-300 transition-colors duration-300"></div>
                            </div>
                                                      <div className="flex-1">
                            <div className="font-bold text-base mb-2">Legal & Corporate Readiness</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Bulletproof legal foundations and IP protection</div>
                            <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">Learn More →</div>
                          </div>
                          </Link>
                          
                          <Link href="/services/tech-data-room-optimization" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/15 hover:to-purple-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-purple-500/30">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-md flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-600/30 transition-all duration-300 mb-3">
                              <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></div>
                            </div>
                                                      <div className="flex-1">
                            <div className="font-bold text-base mb-2">Tech & Data Room Optimization</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Secure data rooms that accelerate due diligence</div>
                            <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">Learn More →</div>
                          </div>
                          </Link>
                          
                          <Link href="/services/compliance-risk-audit" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-orange-500/15 hover:to-orange-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-orange-500/30">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-md flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-orange-600/30 transition-all duration-300 mb-3">
                              <div className="w-3 h-3 bg-orange-400 rounded-full group-hover:bg-orange-300 transition-colors duration-300"></div>
                            </div>
                                                      <div className="flex-1">
                            <div className="font-bold text-base mb-2">Compliance & Risk Audit</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Enterprise compliance and risk assessments</div>
                            <div className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">Learn More →</div>
                          </div>
                          </Link>
                        </div>
                      </div>
                      
                      {/* Footer CTA */}
                      <div className="py-4 border-t border-white/10 text-center">
                        <Link href="/contact" className="inline-flex px-4 sm:px-6 py-2 bg-white text-black hover:bg-white/90 font-medium rounded-md transition-all duration-300 text-sm">
                          Book Consultation →
                </Link>
              </div>
            </div>
                  </div>
                )}
              </div>
              <Link href="/who-we-help" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Who We Help
              </Link>
              <Link href="/experts" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Our Experts
              </Link>
              <Link href="/resources" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Resources
              </Link>
              <Button className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-1.5" asChild>
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'border-b border-white/20 backdrop-blur-md' : 'border-b border-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center pt-2 md:pt-0">
            <Link href="/" className="text-xl font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)] hover:text-gray-200 transition-colors duration-300">
              <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Due</span><span className="text-white">Ready</span><span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
                      <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  className="flex items-center gap-1 text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="fixed left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-y border-white/20 shadow-2xl z-50"
                  style={{ top: '80px' }}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12">
                    {/* Header */}
                    <div className="py-6 border-b border-white/10">
                      <div className="text-center">
                        <h3 className="text-white font-bold text-xl mb-2">Our Services</h3>
                        <p className="text-gray-300 text-sm max-w-2xl mx-auto">Comprehensive deal readiness solutions for startups and scale-ups</p>
                      </div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="py-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link href="/services/financial-due-diligence-prep" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-blue-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-blue-500/30">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-md flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-blue-600/30 transition-all duration-300 mb-3">
                            <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base mb-2">Financial Due Diligence Prep</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Clean financial models and investor-ready reporting systems</div>
                            <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">Learn More →</div>
                          </div>
                        </Link>
                        
                        <Link href="/services/legal-corporate-readiness" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-green-500/15 hover:to-green-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-green-500/30">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-md flex items-center justify-center group-hover:from-green-500/40 group-hover:to-green-600/30 transition-all duration-300 mb-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:bg-green-300 transition-colors duration-300"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base mb-2">Legal & Corporate Readiness</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Bulletproof legal foundations and IP protection</div>
                            <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">Learn More →</div>
                          </div>
                        </Link>
                        
                        <Link href="/services/tech-data-room-optimization" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/15 hover:to-purple-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-purple-500/30">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-md flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-600/30 transition-all duration-300 mb-3">
                            <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base mb-2">Tech & Data Room Optimization</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Secure data rooms that accelerate due diligence</div>
                            <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">Learn More →</div>
                          </div>
                  </Link>
                        
                        <Link href="/services/compliance-risk-audit" className="group flex flex-col items-start p-4 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-orange-500/15 hover:to-orange-600/10 transition-all duration-300 rounded-md border border-transparent hover:border-orange-500/30">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-md flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-orange-600/30 transition-all duration-300 mb-3">
                            <div className="w-3 h-3 bg-orange-400 rounded-full group-hover:bg-orange-300 transition-colors duration-300"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base mb-2">Compliance & Risk Audit</div>
                            <div className="text-sm text-gray-400 leading-relaxed mb-3">Enterprise compliance and risk assessments</div>
                            <div className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">Learn More →</div>
                          </div>
                  </Link>
                      </div>
                    </div>
                    
                    {/* Footer CTA */}
                    <div className="py-4 border-t border-white/10 text-center">
                      <Link href="/contact" className="inline-flex px-4 sm:px-6 py-2 bg-white text-black hover:bg-white/90 font-medium rounded-md transition-all duration-300 text-sm">
                        Book Consultation →
                  </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
                          <Link href="/who-we-help" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Who We Help
              </Link>
              <Link href="/experts" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Our Experts
              </Link>
              <Link href="/resources" className="text-base text-gray-300 hover:text-white hover:bg-white/30 transition-all duration-300 px-3 py-1.5 rounded-md">
                Resources
              </Link>
            <Button className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-1.5" asChild>
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
                  <Button
                    variant="ghost"
                    size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-white/30 text-white hover:bg-transparent hover:text-white hover:border-white/50 transition-all duration-300 rounded-md p-1.5"
                  >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </Button>
                </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-gray-900/95 backdrop-blur-md mobile-menu">
            <div className="px-3 pt-3 pb-4 space-y-2">
              <Link href="/" className="block px-4 py-3 text-base text-gray-300 hover:bg-white/30 hover:text-white transition-all duration-300 rounded-md">
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base text-gray-300 hover:bg-white/30 hover:text-white transition-all duration-300 rounded-md"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link href="/services/financial-due-diligence-prep" className="block px-4 py-3 text-base text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-md">
                      Financial Due Diligence Prep
                    </Link>
                    <Link href="/services/legal-corporate-readiness" className="block px-4 py-3 text-base text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-md">
                      Legal & Corporate Readiness
                    </Link>
                    <Link href="/services/tech-data-room-optimization" className="block px-4 py-3 text-base text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-md">
                      Tech & Data Room Optimization
                    </Link>
                    <Link href="/services/compliance-risk-audit" className="block px-4 py-3 text-base text-gray-400 hover:bg-white/20 hover:text-white transition-all duration-300 rounded-md">
                      Compliance & Risk Audit
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/who-we-help" className="block px-4 py-3 text-base text-gray-300 hover:bg-white/30 hover:text-white transition-all duration-300 rounded-md">
                Who We Help
              </Link>
              <Link href="/experts" className="block px-4 py-3 text-base text-gray-300 hover:bg-white/30 hover:text-white transition-all duration-300 rounded-md">
                Our Experts
              </Link>
              <Link href="/resources" className="block px-4 py-3 text-base text-gray-300 hover:bg-white/30 hover:text-white transition-all duration-300 rounded-md">
                Resources
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-base border border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/40 rounded-md transition-all duration-300">
                Book a Call
              </Link>
              </div>
          </div>
        )}
      </div>
    </nav>
  )
} 