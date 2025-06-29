'use client'

export default function CoreReadinessScope() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white print:bg-white print:text-gray-900">
      
      {/* Floating Glow Elements - hidden in print */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/18 via-pink-500/12 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* PAGE 1 - Title Page */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center print:page-break-after-always print:justify-center overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/8 via-blue-500/6 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 print:px-12 relative z-10">
          {/* Logo - Matching website styling */}
          <h1 className="text-8xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)] print:text-7xl print:mb-6">
            <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Due</span><span className="text-white">Ready</span><span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">.</span>
          </h1>
          
          {/* Tagline */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 print:mb-6"></div>
          <p className="text-xl text-gray-300 mb-6 print:mb-4">
            The fastest way to become
          </p>
          <p className="text-2xl font-bold text-white mb-16 print:mb-12">
            fundable, acquirable and compliant
          </p>
          
          {/* Document Title */}
          <h2 className="text-6xl font-bold text-white mb-8 print:text-5xl print:text-white print:mb-6 font-[family-name:var(--font-space-grotesk)]">
            Core Readiness Scope
          </h2>
          <p className="text-3xl text-gray-300 mb-12 print:text-gray-300 print:mb-8">(Standard Package)</p>
          
          {/* Subtitle */}
          <div className="border-t border-b border-blue-400/30 py-8 mb-16 print:border-blue-400/30 print:py-6 print:mb-12">
            <p className="text-2xl font-medium text-blue-200 print:text-blue-200">
              Preparing Your Startup for Seed to Series A Success
            </p>
          </div>
        </div>
      </div>

      {/* PAGE 2 - Executive Summary */}
      <div className="relative z-10 min-h-screen print:page-break-after-always print:h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-8 print:px-12 py-16 print:py-0">
          
          <h2 className="text-5xl font-bold text-white mb-12 print:text-4xl print:text-white print:mb-8 font-[family-name:var(--font-space-grotesk)]">
            Executive Summary
          </h2>
          
          <div className="space-y-8 text-xl text-gray-300 leading-relaxed print:text-lg print:space-y-6 print:text-gray-300 print:leading-relaxed">
            <p>
              This document outlines the scope of DueReady's <strong className="text-white print:text-white">Core Readiness Package</strong>, our comprehensive service designed for startups navigating Seed to Series A funding rounds, or those building foundations for future acquisition.
            </p>
            
            <p>
              We transform your internal operations and documentation into an <strong className="text-white print:text-white">investor-grade, acquirer-ready asset</strong>. Our approach cuts through complexity, de-risks potential deal-breakers, and ensures you can focus on building your vision, not chasing documents.
            </p>
            
            <div className="border-l-4 border-blue-400 pl-8 py-6 mt-12 print:border-blue-400 print:mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 print:text-xl print:text-white print:mb-4">Our Commitment</h3>
              <p className="text-lg text-blue-200 mb-6 print:text-blue-200 print:mb-4">
                Accelerating Your Deal with Confidence
              </p>
              <p className="text-lg text-gray-300 print:text-gray-300">
                At DueReady, we understand the immense pressure of fundraising and the meticulous demands of due diligence. Our Core Readiness Package is specifically crafted to provide <strong className="text-white print:text-white">clarity, structure, and peace of mind</strong> by systematically preparing your startup across all critical areas.
              </p>
            </div>
            
            <div className="mt-12 print:mt-8">
              <h4 className="text-xl font-bold text-white mb-6 print:text-lg print:text-white print:mb-4">Ideal for startups who:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg print:text-base">
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3 print:text-blue-400">→</span>
                  <span>Are preparing for Seed or Series A funding</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3 print:text-blue-400">→</span>
                  <span>Need to professionalize internal documentation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3 print:text-blue-400">→</span>
                  <span>Want to eliminate due diligence red flags</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3 print:text-blue-400">→</span>
                  <span>Seek to accelerate fundraising timelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3 - Service Scope Overview */}
      <div className="relative z-10 min-h-screen print:page-break-after-always print:h-screen flex flex-col">
        <div className="max-w-5xl mx-auto px-8 print:px-12 py-16 print:py-12 flex-grow">
          
          <h2 className="text-5xl font-bold text-white mb-8 print:text-4xl print:text-white print:mb-6 font-[family-name:var(--font-space-grotesk)]">
            Service Scope
          </h2>
          <p className="text-xl text-blue-200 mb-12 print:text-lg print:text-blue-200 print:mb-8">
            Four Foundational Pillars of Due Diligence
          </p>
          
          <p className="text-xl text-gray-300 mb-16 print:text-lg print:text-gray-300 print:mb-12">
            The DueReady Core Readiness Package covers a holistic assessment, cleanup, and organization across these critical areas:
          </p>

          {/* Four Pillars Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-8">
            
            {/* Financial Pillar */}
            <div>
              <div className="flex items-center mb-6 print:mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 print:bg-blue-400"></div>
                <h3 className="text-2xl font-bold text-blue-400 print:text-xl print:text-blue-400">01</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 print:text-lg print:text-white print:mb-3">
                Financial Readiness & Optimization
              </h4>
              <p className="text-gray-300 mb-4 print:text-gray-300 print:mb-3">
                Presenting accurate, investor-grade financial data and models
              </p>
              <ul className="text-sm text-gray-400 space-y-2 print:text-gray-400 print:text-sm">
                <li>• Historical Financials Review</li>
                <li>• Cap Table Reconciliation</li>
                <li>• SaaS Metrics Analysis</li>
                <li>• Financial Model Review</li>
              </ul>
            </div>

            {/* Legal Pillar */}
            <div>
              <div className="flex items-center mb-6 print:mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-4 print:bg-green-400"></div>
                <h3 className="text-2xl font-bold text-green-400 print:text-xl print:text-green-400">02</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 print:text-lg print:text-white print:mb-3">
                Legal & Corporate Readiness
              </h4>
              <p className="text-gray-300 mb-4 print:text-gray-300 print:mb-3">
                Robust legal foundations and protected intellectual property
              </p>
              <ul className="text-sm text-gray-400 space-y-2 print:text-gray-400 print:text-sm">
                <li>• Corporate Governance Audit</li>
                <li>• IP Audit & Assignment</li>
                <li>• Material Contract Review</li>
                <li>• Founder Agreement Review</li>
              </ul>
            </div>

            {/* Technical Pillar */}
            <div>
              <div className="flex items-center mb-6 print:mb-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 print:bg-purple-400"></div>
                <h3 className="text-2xl font-bold text-purple-400 print:text-xl print:text-purple-400">03</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 print:text-lg print:text-white print:mb-3">
                Technical & Data Room Optimization
              </h4>
              <p className="text-gray-300 mb-4 print:text-gray-300 print:mb-3">
                Showcasing technology strength in investor-friendly format
              </p>
              <ul className="text-sm text-gray-400 space-y-2 print:text-gray-400 print:text-sm">
                <li>• Tech Stack Documentation</li>
                <li>• Security Posture Overview</li>
                <li>• Development Process Assessment</li>
                <li>• Virtual Data Room Structuring</li>
              </ul>
            </div>

            {/* Compliance Pillar */}
            <div>
              <div className="flex items-center mb-6 print:mb-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-4 print:bg-orange-400"></div>
                <h3 className="text-2xl font-bold text-orange-400 print:text-xl print:text-orange-400">04</h3>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 print:text-lg print:text-white print:mb-3">
                Compliance & Risk Overview
              </h4>
              <p className="text-gray-300 mb-4 print:text-gray-300 print:mb-3">
                Core compliance adherence and regulatory risk identification
              </p>
              <ul className="text-sm text-gray-400 space-y-2 print:text-gray-400 print:text-sm">
                <li>• GDPR/Data Privacy Review</li>
                <li>• Compliance Scan</li>
                <li>• Risk Identification</li>
                <li>• Regulatory Assessment</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* PAGE 4 - Our Process */}
      <div className="relative z-10 min-h-screen print:page-break-after-always print:h-screen flex flex-col">
        <div className="max-w-5xl mx-auto px-8 print:px-12 py-16 print:py-12 flex-grow">
          
          <h2 className="text-5xl font-bold text-white mb-8 print:text-4xl print:text-white print:mb-6 font-[family-name:var(--font-space-grotesk)]">
            Our Process
          </h2>
          <p className="text-xl text-blue-200 mb-16 print:text-lg print:text-blue-200 print:mb-12">
            Your Journey to Deal Readiness
          </p>

          <div className="space-y-12 print:space-y-8">
            
            {/* Process Steps */}
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Initial consultation to understand your goals and current state, complemented by our proprietary Readiness Assessment Tool."
              },
              {
                step: "02", 
                title: "Scope Definition",
                description: "We create a precise Statement of Work (SOW) outlining all deliverables and timelines."
              },
              {
                step: "03",
                title: "Expert Team Mobilization", 
                description: "We assemble the optimal blend of senior financial, legal, and tech experts from the DueReady Collective."
              },
              {
                step: "04",
                title: "Integrated Preparation",
                description: "Our Collective members execute specialized tasks, collaborating seamlessly, while our Project Manager oversees quality and progress."
              },
              {
                step: "05",
                title: "Data Room Finalization",
                description: "All cleaned and organized documents are uploaded to your secure Virtual Data Room."
              },
              {
                step: "06",
                title: "Readiness Review",
                description: "Final review session to ensure all findings are clear and actionable."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-8 print:mr-6">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl border-2 border-blue-400 print:w-12 print:h-12 print:text-lg print:bg-blue-500 print:border-blue-400">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 print:text-lg print:text-white print:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 print:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAGE 5 - The DueReady Advantage */}
      <div className="relative z-10 min-h-screen print:page-break-after-always print:h-screen flex flex-col">
        <div className="max-w-5xl mx-auto px-8 print:px-12 py-16 print:py-12 flex-grow">
          
          <h2 className="text-5xl font-bold text-white mb-8 print:text-4xl print:text-white print:mb-6 font-[family-name:var(--font-space-grotesk)]">
            The DueReady Advantage
          </h2>
          <p className="text-xl text-blue-200 mb-12 print:text-lg print:text-blue-200 print:mb-8">
            Your Strategic Investment
          </p>
          
          <p className="text-xl text-gray-300 mb-16 print:text-lg print:text-gray-300 print:mb-12">
            Choosing DueReady means investing in a partnership that delivers measurable value:
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-8">
            
            {[
              {
                title: "Predictable Costs",
                description: "Fixed-fee packages with no hidden surprises or scope creep. You know exactly what you're investing upfront.",
                color: "blue"
              },
              {
                title: "Integrated Expertise", 
                description: "Multi-disciplinary team of senior financial, legal, and technical experts working in perfect harmony.",
                color: "green"
              },
              {
                title: "Speed & Efficiency",
                description: "Accelerate your fundraising or acquisition timeline significantly through our streamlined processes.",
                color: "purple"
              },
              {
                title: "Risk Mitigation",
                description: "Proactively identify and resolve issues before they become deal-breakers in due diligence.",
                color: "orange"
              },
              {
                title: "Founder Focus",
                description: "Liberate your time to build your business, not chase documents. We handle the complexity.",
                color: "cyan"
              },
              {
                title: "Valuation Protection",
                description: "Maintain and enhance your company's valuation through professional readiness and presentation.",
                color: "pink"
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-6 print:border-blue-400">
                <h3 className="text-xl font-bold text-white mb-4 print:text-lg print:text-white print:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 print:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAGE 6 - Call to Action */}
      <div className="relative z-10 min-h-screen print:page-break-after-avoid flex flex-col justify-center overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 via-blue-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/8 via-purple-500/6 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 print:px-12 text-center relative z-10">
          
          <h2 className="text-6xl font-bold text-white mb-12 print:text-5xl print:text-white print:mb-8 font-[family-name:var(--font-space-grotesk)]">
            Ready to Get Started?
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-12 print:mb-8"></div>
          
          <p className="text-3xl text-gray-300 mb-16 print:text-2xl print:text-gray-300 print:mb-12">
            Transform your readiness into a competitive advantage
          </p>
          
          <div className="border-t border-b border-blue-400/30 py-12 mb-16 print:border-blue-400/30 print:py-8 print:mb-12">
            <h3 className="text-4xl font-bold text-white mb-6 print:text-3xl print:text-white print:mb-4">
              Book Your Free Readiness Assessment
            </h3>
          </div>
          
          {/* Contact Info */}
          <div className="text-lg text-gray-400 print:text-gray-400">
            <h4 className="text-2xl font-bold text-white mb-6 print:text-xl print:text-white print:mb-4">
              DueReady
            </h4>
            <p className="mb-2">Financial, Legal & Compliance Readiness Specialists</p>
            <p className="mb-2">hello@dueready.com</p>
            <p className="mb-8">www.dueready.com</p>
            
            <div className="border-t border-gray-600 pt-6 print:border-gray-600">
              <p className="text-sm text-gray-500 print:text-gray-500">
                © 2024 DueReady. All rights reserved. This document contains confidential and proprietary information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Page setup with counter */
          @page {
            margin: 0.75in 0.75in 1in 0.75in;
            size: A4;
            counter-increment: page;
            @bottom-center {
              content: counter(page);
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 10pt;
              color: #9ca3af;
            }
          }
          
          /* Reset page counter */
          body {
            counter-reset: page;
            font-size: 12pt !important;
            line-height: 1.4 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          /* Preserve gradients and dark backgrounds for print */
          .bg-gradient-to-br {
            background: linear-gradient(to bottom right, #000000, #111827, #1f2937) !important;
          }
          
          .bg-gradient-to-r {
            background: linear-gradient(to right, var(--tw-gradient-stops)) !important;
          }
          
          /* Ensure gradient text works in print */
          .bg-clip-text {
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
          }
          
          /* Preserve all colors for print */
          .text-white {
            color: #ffffff !important;
          }
          
          .text-gray-300 {
            color: #d1d5db !important;
          }
          
          .text-gray-400 {
            color: #9ca3af !important;
          }
          
          .text-gray-500 {
            color: #6b7280 !important;
          }
          
          .text-blue-200 {
            color: #bfdbfe !important;
          }
          
          .text-blue-400 {
            color: #60a5fa !important;
          }
          
          .text-green-400 {
            color: #4ade80 !important;
          }
          
          .text-purple-400 {
            color: #c084fc !important;
          }
          
          .text-orange-400 {
            color: #fb923c !important;
          }
          
          /* Preserve border colors */
          .border-blue-400 {
            border-color: #60a5fa !important;
          }
          
          .border-blue-600 {
            border-color: #2563eb !important;
          }
          
          .border-gray-600 {
            border-color: #4b5563 !important;
          }
          
          /* Preserve background colors */
          .bg-blue-500 {
            background-color: #3b82f6 !important;
          }
          
          .bg-blue-600 {
            background-color: #2563eb !important;
          }
          
          .bg-blue-400 {
            background-color: #60a5fa !important;
          }
          
          .bg-green-600 {
            background-color: #16a34a !important;
          }
          
          .bg-purple-600 {
            background-color: #9333ea !important;
          }
          
          .bg-orange-600 {
            background-color: #ea580c !important;
          }
          
          /* Remove shadows but keep other effects */
          * {
            text-shadow: none !important;
          }
          
          /* Keep box shadows for depth */
          .shadow, .shadow-sm, .shadow-lg {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
          }
          
          /* Page breaks */
          .print\\:page-break-after-always {
            page-break-after: always !important;
          }
          
          .print\\:page-break-after-avoid {
            page-break-after: avoid !important;
          }
          
          .print\\:h-screen {
            height: 100vh !important;
          }
          
          /* Typography for print */
          h1 { 
            font-size: 36pt !important; 
            page-break-after: avoid !important;
            margin-bottom: 24pt !important;
          }
          h2 { 
            font-size: 24pt !important; 
            page-break-after: avoid !important;
            margin-bottom: 18pt !important;
          }
          h3 { 
            font-size: 18pt !important; 
            page-break-after: avoid !important;
            margin-bottom: 12pt !important;
          }
          h4 { 
            font-size: 14pt !important; 
            page-break-after: avoid !important;
            margin-bottom: 8pt !important;
          }
          
          /* Hide decorative elements */
          .print\\:hidden {
            display: none !important;
          }
          
          /* Ensure animations are disabled for print */
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        }
      `}</style>
    </div>
  )
} 