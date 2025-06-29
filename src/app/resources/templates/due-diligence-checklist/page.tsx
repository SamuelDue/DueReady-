'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function DueDiligenceChecklistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
                </svg>
                Checklist
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
                The Complete <span className="text-gray-400">Due Diligence</span> Checklist
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your Seed to Series A Fundraising Survival Guide
              </p>
            </div>

            <div>
              <div className="aspect-[4/3] rounded-md overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src="/new image.png"
                  alt="Due diligence checklist and documentation preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why 73% of Startup Deals Stall During Due Diligence</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              You've crushed the pitch meetings. The term sheet is signed. Your investors are excited about the partnership ahead. Then comes the moment every founder dreads: the due diligence checklist hits your inbox.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              What should be a celebratory sprint to closing suddenly becomes a nightmare of missing documents, scattered financial records, and frantic late-night searches through old email threads. Sound familiar?
            </p>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-md p-8 my-12">
              <p className="text-lg font-semibold text-white leading-relaxed">
                <strong>Here's the brutal reality:</strong> Most startups enter due diligence completely unprepared. They've spent months perfecting their pitch deck while their operational foundation crumbles behind the scenes. The result? Deals that should close in 4-6 weeks drag on for months, valuations get slashed, and worst of all – promising rounds simply collapse under the weight of operational chaos.
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              This comprehensive guide will ensure you never become one of those statistics.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">The Hidden Costs That Kill Deals</h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Before diving into the checklist, understand exactly what's at stake when you're unprepared:
            </p>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Time Equals Burning Cash</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every week spent scrambling for documents is runway consumed. While you're playing document detective, your competitors are closing customers and hitting milestones. Investors notice when momentum stalls.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Valuation Erosion is Real</h3>
                <p className="text-gray-300 leading-relaxed">
                  Disorganization signals operational immaturity to sophisticated investors. Missing IP assignments, messy cap tables, or incomplete financial records give investors leverage to demand lower valuations or additional protective terms.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Deal Fatigue Kills Momentum</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fundraising operates on momentum. Every delayed response, every "we'll get that to you next week," every inconsistency in your records chips away at investor enthusiasm.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-white mb-3">Emergency Professional Fees Skyrocket</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rushing to fix issues during active due diligence means paying premium rates to lawyers, accountants, and consultants for last-minute solutions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-md p-8 my-12">
              <p className="text-lg font-semibold text-white leading-relaxed">
                <strong>The bottom line:</strong> Proactive due diligence preparation isn't an expense – it's insurance that protects your deal, preserves your valuation, and accelerates your fundraising timeline.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">The Complete Due Diligence Checklist</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This checklist covers every document and process investors examine from Seed through Series A. Use it as your preparation roadmap months before you start fundraising.
            </p>
          </div>

          <div className="space-y-12">
            {/* Financial Due Diligence */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-md flex items-center justify-center">
                  <span className="text-blue-300 font-bold">1</span>
                </div>
                Financial Due Diligence: The Foundation of Investor Confidence
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Financial Statements</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Historical Financials (2-3 years or since inception): P&L, Balance sheets, Cash flow statements</li>
                    <li>• Current Year Financials: Up-to-date P&L, balance sheet, monthly management reporting</li>
                    <li>• Audit Documentation: Audited statements, management letters, representation letters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Financial Projections and Business Modeling</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Detailed Financial Model (3-5 years) with clear drivers and assumptions</li>
                    <li>• Unit Economics Analysis: CAC, LTV, payback periods, contribution margins</li>
                    <li>• SaaS Metrics Dashboard: MRR, ARR, NDR, GRR, churn rates, sales efficiency</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Banking and Treasury Management</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Banking Documentation: Statements, reconciliations, cash management policies</li>
                    <li>• Debt and Credit Facilities: Loan agreements, payment schedules, covenant compliance</li>
                    <li>• Tax Documentation: Corporate tax returns, VAT/sales tax, compliance certificates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Due Diligence */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-md flex items-center justify-center">
                  <span className="text-green-300 font-bold">2</span>
                </div>
                Legal and Corporate Due Diligence: Protecting Investor Rights
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Corporate Governance Foundation</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Formation Documents: Certificate of incorporation, articles/bylaws, amendments</li>
                    <li>• Shareholder and Board Documentation: Agreements, meeting minutes, voting agreements</li>
                    <li>• Corporate Registers: Directors, shareholders, charges, significant controllers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Intellectual Property Portfolio</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• IP Assignment agreements from ALL founders, employees, contractors</li>
                    <li>• Patent, trademark, and copyright registrations with prosecution history</li>
                    <li>• Licensing agreements: Inbound/outbound licenses, joint development agreements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Material Commercial Contracts</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Customer Agreements: Top 20% by revenue, master service agreements, SOWs</li>
                    <li>• Vendor and Supplier Contracts: Material vendor agreements, critical service providers</li>
                    <li>• Strategic Partnerships: Channel partners, integrations, joint ventures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Employment and HR Documentation</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Employment contracts with compensation details and equity agreements</li>
                    <li>• Stock option plan documents and grant agreements</li>
                    <li>• Litigation documentation and settlement agreements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Due Diligence */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-md flex items-center justify-center">
                  <span className="text-purple-300 font-bold">3</span>
                </div>
                Technical and Product Due Diligence: Demonstrating Scalability
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Product and Technology Overview</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Product Documentation: Roadmap, specifications, product-market fit evidence</li>
                    <li>• User and Usage Analytics: Acquisition, retention, engagement, support metrics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technology Architecture and Infrastructure</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• System Architecture: Diagrams, database design, API documentation, scalability analysis</li>
                    <li>• Technology Stack Documentation: Complete inventory of languages, frameworks, libraries</li>
                    <li>• Third-Party Dependencies: Critical services, open-source usage, vendor risk assessment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Development and Security</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Software Development Lifecycle: Methodology, code review, testing, CI/CD</li>
                    <li>• Security Framework: Policies, incident response, training, penetration testing</li>
                    <li>• Infrastructure and Operations: Cloud architecture, monitoring, backup, disaster recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-md flex items-center justify-center">
                  <span className="text-orange-300 font-bold">4</span>
                </div>
                Data Privacy and Compliance: Meeting Regulatory Standards
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Data Privacy and Protection</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Privacy Policy Framework: Comprehensive policies, consent management, data subject rights</li>
                    <li>• GDPR and Regional Compliance: ROPA, DPIAs, DPAs, Data Protection Officer appointment</li>
                    <li>• Data Security and Breach Management: Security policies, breach response, training, retention</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Industry-Specific Regulatory Compliance</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Financial Services: Licenses, AML/KYC procedures, consumer protection, PCI compliance</li>
                    <li>• Healthcare and Life Sciences: HIPAA compliance, FDA approvals, clinical trials</li>
                    <li>• Other Industry Regulations: Sector-specific licenses, professional accreditations, export control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HR Due Diligence */}
            <div className="bg-white/5 border border-white/10 rounded-md p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-md flex items-center justify-center">
                  <span className="text-cyan-300 font-bold">5</span>
                </div>
                Management and Human Resources: Team and Culture Assessment
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Organizational Structure and Leadership</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Organization and Reporting: Current org chart, growth plans, succession planning</li>
                    <li>• Leadership Team Documentation: Executive resumes, references, development strategies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Human Resources Policies and Procedures</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• HR Policy Framework: Employee handbook, anti-harassment policies, remote work</li>
                    <li>• Compensation and Benefits: Salary bands, bonus plans, benefits packages, equity policies</li>
                    <li>• Employee Relations: Satisfaction surveys, retention strategies, training programs, DEI initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Beyond the Checklist: Achieving True Deal Readiness</h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Having a comprehensive checklist is the first step, but the real challenge lies in execution. Gathering, organizing, cleaning, and often creating the required documentation is time-intensive work that requires specialized expertise across multiple disciplines.
            </p>

            <h3 className="text-xl font-bold text-white mb-6">The Real Cost of DIY Due Diligence Preparation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Time Investment</h4>
                <p className="text-gray-300 leading-relaxed">
                  Proper preparation typically requires 200-400 hours of focused work across multiple functional areas. For busy founders, this can stretch over 6-12 months.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Expertise Requirements</h4>
                <p className="text-gray-300 leading-relaxed">
                  Each section requires specialized knowledge. Few founding teams have comprehensive expertise across all areas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Opportunity Cost</h4>
                <p className="text-gray-300 leading-relaxed">
                  Every hour spent on document preparation is time not invested in product development, customer acquisition, or strategic planning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-md p-6">
                <h4 className="text-lg font-bold text-white mb-3">Quality Risk</h4>
                <p className="text-gray-300 leading-relaxed">
                  Incomplete or poorly organized documentation signals operational immaturity to sophisticated investors.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">The Strategic Value of Professional Deal Readiness</h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Professional deal readiness services transform due diligence from a painful obligation into a competitive advantage:
            </p>

            <ul className="text-gray-300 space-y-4 mb-12">
              <li><strong className="text-white">Accelerated Timeline:</strong> Professional preparation typically reduces due diligence time from 12-16 weeks to 4-6 weeks</li>
              <li><strong className="text-white">Valuation Protection:</strong> Clean documentation eliminates investor leverage to demand valuation discounts</li>
              <li><strong className="text-white">Competitive Differentiation:</strong> Operational excellence distinguishes your company from less organized competitors</li>
              <li><strong className="text-white">Future Optionality:</strong> Well-prepared companies can pursue multiple funding sources simultaneously</li>
              <li><strong className="text-white">Organizational Asset Creation:</strong> Creates lasting improvements in financial reporting and operational systems</li>
            </ul>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-md p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Take Action: Don't Let Due Diligence Kill Your Next Round</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Due diligence preparation isn't just about avoiding problems – it's about creating competitive advantages that accelerate growth and improve fundraising outcomes. The most successful startups treat operational readiness as a strategic priority, not an afterthought.
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Use this checklist to assess your current readiness level. If you find significant gaps or lack the internal expertise to address them systematically, consider the strategic value of professional deal readiness services.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">Remember:</strong> the cost of preparation is always less than the cost of a failed or delayed fundraising round. In the competitive startup funding environment, operational excellence isn't optional – it's the price of entry for institutional capital.
            </p>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Get Deal Ready?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Start with this checklist, but don't try to tackle it alone. The most successful founders invest in the expertise needed to get it right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/contact">Get Professional Help</Link>
              </Button>
              
              <Button 
                variant="ghost"
                className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                asChild
              >
                <Link href="/resources/readiness-assessment">Take Assessment →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
 