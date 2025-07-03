'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import { Metadata } from 'next'
import ClientHomepage from './ClientHomepage'

// Simplified scrolling words component
function ScrollingWords({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  if (!isClient) {
    return <span className="text-gray-400">fundable</span>
  }

  return (
    <span className="scrolling-words-container inline-block relative">
      <span 
        key={currentWordIndex}
        className="scrolling-words-text text-gray-400 absolute left-0 animate-slide-up whitespace-nowrap"
      >
        {words[currentWordIndex]}
      </span>
      
      <style jsx>{`
        .scrolling-words-container {
          width: 240px;
          height: 1.2em;
          overflow: visible;
          vertical-align: baseline;
        }
        
        .scrolling-words-text {
          top: 0.36em;
          line-height: inherit;
          display: inline-block;
        }
        
        @media (max-width: 768px) {
          .scrolling-words-container {
            width: 200px;
            height: 1.1em;
            vertical-align: baseline;
          }
          
          .scrolling-words-text {
            top: 0.25em;
            bottom: auto;
            font-size: 0.95em;
          }
        }
        
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          15% {
            transform: translateY(0%);
            opacity: 1;
          }
          85% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 3s ease-in-out;
        }
      `}</style>
    </span>
  )
}

// Homepage data hook
function useHomepageData() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch('/api/homepage')
        if (response.ok) {
          const data = await response.json()
          setContent(data)
        } else {
          setError('Failed to fetch CMS content')
        }
      } catch (err) {
        setError('Error connecting to CMS')
        console.error('Homepage data fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const content = await getHomepageContent()
    const seo = content?.seo || defaultContent.seo
    
    return {
      title: seo.title || defaultContent.seo.title,
      description: seo.description || defaultContent.seo.description,
      keywords: seo.keywords || defaultContent.seo.keywords,
      openGraph: {
        title: seo.ogTitle || seo.title || defaultContent.seo.title,
        description: seo.ogDescription || seo.description || defaultContent.seo.description,
        type: 'website',
        url: 'https://dueready.com',
        siteName: 'DueReady',
        images: seo.ogImage ? [
          {
            url: seo.ogImage,
            width: 1200,
            height: 630,
            alt: seo.ogTitle || seo.title || defaultContent.seo.title,
          },
        ] : undefined,
      },
      twitter: {
        card: seo.twitterCard || 'summary_large_image',
        title: seo.ogTitle || seo.title || defaultContent.seo.title,
        description: seo.ogDescription || seo.description || defaultContent.seo.description,
        images: seo.ogImage ? [seo.ogImage] : undefined,
      },
      robots: {
        index: !seo.noindex,
        follow: !seo.nofollow,
      },
      alternates: {
        canonical: seo.canonicalUrl || 'https://dueready.com',
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: defaultContent.seo.title,
      description: defaultContent.seo.description,
      keywords: defaultContent.seo.keywords,
    }
  }
}

export default function Home() {
  const { content, loading, error } = useHomepageData()

  // Default content
  const defaultContent = {
    heroTitle: 'The fastest way to become',
    heroSubtitle: 'Financial, legal, and compliance readiness for startups - so you can focus on building, not chasing documents.',
    scrollingWords: ['fundable.', 'acquirable.', 'compliant.', 'deal-ready.', 'audit-ready.'],
    primaryCTA: { text: 'Get Deal Ready', url: '/contact' },
    secondaryCTA: { text: 'Take Assessment →', url: '/resources/readiness-assessment' },
    seo: {
      title: 'DueReady - Startup Deal Readiness & Due Diligence Prep',
      description: 'Prepare your startup for fundraising, acquisition, or compliance. Legal, financial & technical due diligence — expert-led, clear scope, investor-ready.',
      keywords: ['due diligence', 'startup fundraising', 'deal readiness', 'legal compliance', 'financial modeling'],
    }
  }

  // Use CMS content if available, otherwise use defaults
  const pageContent = content || defaultContent

  // Status message
  const getStatusMessage = () => {
    if (loading) return '⏳ Loading CMS content...'
    if (error) return `🔴 ${error} - Using fallback content`
    if (content) return '🟢 Content from CMS'
    return '🔴 No CMS content found - Using fallback content'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Animated Glow Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="floating-glow-1 absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-2 absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-3 absolute top-80 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="floating-glow-4 absolute top-[600px] left-10 w-72 h-72 bg-gradient-to-br from-emerald-500/8 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="flex items-center min-h-screen pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-12 sm:px-10 lg:px-12 w-full">
          <div className="max-w-4xl scroll-animate fade-up">
            {/* CMS Status */}
            <div className="mb-4 text-sm text-gray-400">
              {getStatusMessage()}
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight animate-blur-in font-[family-name:var(--font-space-grotesk)] leading-tight hero-glow" style={{ overflow: 'visible' }}>
              <span className="block">{pageContent.heroTitle}</span>
              <span className="inline">
                <ScrollingWords words={pageContent.scrollingWords} />
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-blur-in-delayed">
              {pageContent.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-blur-in-delayed-2">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                asChild
              >
                <Link href={pageContent.primaryCTA.url}>{pageContent.primaryCTA.text}</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-2 h-auto font-medium text-base flex items-center justify-center min-h-[40px]"
                asChild
              >
                <Link href={pageContent.secondaryCTA.url}>{pageContent.secondaryCTA.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Instructions Section */}
      <section className="py-20 px-12 sm:px-10 lg:px-12 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            🎉 CMS Integration Status
          </h2>
          <div className="text-gray-300 space-y-4 mb-8">
            <p className="text-lg">{getStatusMessage()}</p>
            <p>To set up CMS content:</p>
            <ol className="text-left max-w-2xl mx-auto space-y-2">
              <li>1. Go to <Link href="/studio" className="text-blue-400 hover:text-blue-300">/studio</Link></li>
              <li>2. Click "Homepage" to create homepage content</li>
              <li>3. Fill in the hero title, subtitle, and scrolling words</li>
              <li>4. Click "Publish" to save</li>
              <li>5. Refresh this page to see changes</li>
            </ol>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/studio">Go to CMS Studio</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/blog">View Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rest of the static content will go here */}
      <div className="text-center py-20 text-gray-400">
        <p>Rest of the homepage content (static sections) will be here...</p>
        <p className="mt-4">
          <Link href="/page-static" className="text-blue-400 hover:text-blue-300">
            View original static homepage →
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  )
} 