import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
            Partner with <span className="text-gray-400">DueReady</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our network of trusted advisors helping startups become deal-ready faster
          </p>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Why Partner with DueReady?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We help you deliver better outcomes for your clients while focusing on what you do best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For VCs */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-md flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For VCs</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Streamlined diligence process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>De-risked portfolio companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Faster follow-on funding rounds</span>
                </li>
              </ul>
            </div>

            {/* For M&A Advisors */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-md flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For M&A Advisors</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cleaner acquisition targets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Faster exit processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced deal friction</span>
                </li>
              </ul>
            </div>

            {/* For Lawyers/Accountants */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-md flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16.06L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">For Lawyers/Accountants</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Focus on high-value legal/financial work</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved client satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complementary service offering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Partner with DueReady?
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join our network of trusted advisors and start earning commissions while helping startups succeed.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-6 py-2 h-auto font-medium text-base"
              asChild
            >
              <a href="mailto:hello@dueready.com">Apply to Partner</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 