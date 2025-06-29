import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-950/30 border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">DueReady</h3>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/compliance-risk-audit" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Compliance & Risk Audit</Link></li>
              <li><Link href="/services/tech-data-room-optimization" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Tech & Data Room Optimization</Link></li>
              <li><Link href="/services/legal-corporate-readiness" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Legal & Corporate Readiness</Link></li>
              <li><Link href="/services/financial-due-diligence-prep" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Financial Due Diligence Prep</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/who-we-help" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Who We Help</Link></li>
              <li><Link href="/experts" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Our Experts</Link></li>
              <li><Link href="/resources" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Resources</Link></li>
              <li><Link href="/partners" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Partners</Link></li>
              <li><Link href="/join-us" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Join Our Team</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 DueReady. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 