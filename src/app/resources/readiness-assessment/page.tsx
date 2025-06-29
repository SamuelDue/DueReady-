'use client'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'

interface Question {
  label: string
  field: keyof FormData
  type: string
  options?: string[]
  required?: boolean
}

interface FormData {
  // Business Type & Strategic Context
  businessType: string
  stage: string
  goal: string
  timeline: string
  runway: string
  
  // Financial Readiness
  auditedFinancials: string
  saasMetrics: string
  capTable: string
  financialModel: string
  
  // Legal & Corporate Readiness
  incorporation: string
  ipAssignments: string
  contracts: string
  employment: string
  
  // Technical & Product Readiness (conditional)
  techDocumentation: string
  devProcesses: string
  securityAudits: string
  
  // Data & Compliance Readiness (conditional)
  privacyPolicy: string
  dataCompliance: string
  breachPlan: string
  
  // Data Room & Organization
  virtualDataRoom: string
  dueDiligenceConfidence: string
  
  // Contact Information
  name: string
  company: string
  email: string
  phone: string
  assessmentConsent: string
}

interface AssessmentResult {
  overallScore: number
  categoryScores: {
    strategic: number
    financial: number
    legal: number
    technical: number
    compliance: number
    organization: number
  }
  strengths: string[]
  criticalAreas: string[]
  readinessLevel: string
}

export default function ReadinessAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    businessType: '', stage: '', goal: '', timeline: '', runway: '',
    auditedFinancials: '', saasMetrics: '', capTable: '', financialModel: '',
    incorporation: '', ipAssignments: '', contracts: '', employment: '',
    techDocumentation: '', devProcesses: '', securityAudits: '',
    privacyPolicy: '', dataCompliance: '', breachPlan: '',
    virtualDataRoom: '', dueDiligenceConfidence: '',
    name: '', company: '', email: '', phone: '', assessmentConsent: ''
  })

  // Persistent state using localStorage
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState<AssessmentResult | null>(null)

  // Load results from localStorage on mount
  useEffect(() => {
    const savedResults = localStorage.getItem('assessmentResults')
    const savedSubmitted = localStorage.getItem('assessmentSubmitted')
    
    if (savedResults && savedSubmitted === 'true') {
      console.log('Loading saved results from localStorage')
      setResults(JSON.parse(savedResults))
      setIsSubmitted(true)
    }
  }, [])

  // Save results to localStorage whenever they change
  useEffect(() => {
    if (results && isSubmitted) {
      console.log('Saving results to localStorage')
      localStorage.setItem('assessmentResults', JSON.stringify(results))
      localStorage.setItem('assessmentSubmitted', 'true')
    }
  }, [results, isSubmitted])

  useEffect(() => {
    // Only run scroll animations if not showing results
    if (isSubmitted && results) {
      return
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

    const animatedElements = document.querySelectorAll('.scroll-animate')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isSubmitted, results])

  // Helper functions - simplified without useCallback to avoid circular dependencies
  const isTechBusiness = () => {
    return ['Technology/Software', 'SaaS', 'Fintech', 'Healthtech', 'E-commerce'].includes(formData.businessType)
  }

  const needsComplianceQuestions = () => {
    return ['Technology/Software', 'SaaS', 'Fintech', 'Healthtech', 'E-commerce', 'Financial Services'].includes(formData.businessType)
  }

  const calculateResults = (): AssessmentResult => {
    // Improved scoring logic - "Not Applicable" should not penalize
    const scoreQuestion = (value: string, positiveAnswers: string[]) => {
      if (!value) return 0 // Empty answer
      if (positiveAnswers.includes(value)) return 100
      if (value === 'Not Applicable') return 100 // Don't penalize for irrelevant questions
      if (value.includes('Partially') || value.includes('In Progress')) return 50
      if (value === 'Unsure') return 25 // Partial credit for uncertainty
      return 0
    }

    // Calculate category scores
    const strategic = (
      (formData.businessType ? 100 : 0) +
      (formData.stage ? 100 : 0) +
      (formData.goal ? 100 : 0) +
      (formData.timeline && formData.timeline !== 'Unsure' ? 100 : 
       formData.timeline === 'Unsure' ? 50 : 0) +
      (formData.runway === '12+ months' ? 100 :
       formData.runway === '6-12 months' ? 75 :
       formData.runway === '<6 months' ? 25 : 0)
    ) / 5

    const financial = (
      scoreQuestion(formData.auditedFinancials, ['Yes']) +
      scoreQuestion(formData.saasMetrics, ['Yes']) +
      scoreQuestion(formData.capTable, ['Yes']) +
      scoreQuestion(formData.financialModel, ['Yes'])
    ) / 4

    const legal = (
      scoreQuestion(formData.incorporation, ['Yes']) +
      scoreQuestion(formData.ipAssignments, ['Yes']) +
      scoreQuestion(formData.contracts, ['Yes']) +
      scoreQuestion(formData.employment, ['Yes'])
    ) / 4

    // Technical scoring - properly handle "Not Applicable" for non-tech businesses
    const technical = (
      scoreQuestion(formData.techDocumentation, ['Yes']) +
      scoreQuestion(formData.devProcesses, ['Yes']) +
      scoreQuestion(formData.securityAudits, ['Yes'])
    ) / 3

    // Compliance scoring - properly handle "Not Applicable" 
    const compliance = (
      scoreQuestion(formData.privacyPolicy, ['Yes']) +
      scoreQuestion(formData.dataCompliance, ['Yes']) +
      scoreQuestion(formData.breachPlan, ['Yes'])
    ) / 3

    const organization = (
      scoreQuestion(formData.virtualDataRoom, ['Yes']) +
      (formData.dueDiligenceConfidence === 'Very Confident' ? 100 : 
       formData.dueDiligenceConfidence === 'Somewhat Confident' ? 75 : 
       formData.dueDiligenceConfidence === 'Not Confident' ? 25 : 0)
    ) / 2

    const overallScore = (strategic + financial + legal + technical + compliance + organization) / 6

    // Determine readiness level
    let readinessLevel = ''
    if (overallScore >= 80) readinessLevel = 'Deal Ready'
    else if (overallScore >= 60) readinessLevel = 'Nearly Ready'
    else if (overallScore >= 40) readinessLevel = 'Some Gaps'
    else readinessLevel = 'Needs Major Work'

    // Identify strengths and critical areas
    const categories = [
      { name: 'Strategic Planning', score: strategic },
      { name: 'Financial Systems', score: financial },
      { name: 'Legal Foundation', score: legal },
      { name: 'Technical Documentation', score: technical },
      { name: 'Compliance & Data', score: compliance },
      { name: 'Organization & Process', score: organization }
    ]

    const strengths = categories
      .filter(cat => cat.score >= 75)
      .map(cat => cat.name)
      .slice(0, 3)

    const criticalAreas = categories
      .filter(cat => cat.score < 60)
      .sort((a, b) => a.score - b.score)
      .map(cat => cat.name)
      .slice(0, 5)

    return {
      overallScore: Math.round(overallScore),
      categoryScores: {
        strategic: Math.round(strategic),
        financial: Math.round(financial),
        legal: Math.round(legal),
        technical: Math.round(technical),
        compliance: Math.round(compliance),
        organization: Math.round(organization)
      },
      strengths,
      criticalAreas,
      readinessLevel
    }
  }

  const handleSubmit = async () => {
    // Check GDPR consent before submission
    if (!formData.assessmentConsent || formData.assessmentConsent !== 'true') {
      alert('Please provide consent to process your assessment data before submitting.')
      return
    }
    
    console.log('HandleSubmit called - calculating and saving results')
    const assessmentResults = calculateResults()
    console.log('Calculated results:', assessmentResults)
    
    // Immediately save to localStorage
    localStorage.setItem('assessmentResults', JSON.stringify(assessmentResults))
    localStorage.setItem('assessmentSubmitted', 'true')
    
    // Set results and submission status
    setResults(assessmentResults)
    setIsSubmitted(true)
    
    console.log('Assessment completed and saved')
    
    // Send assessment data as a lead to the contact API
    try {
      // Format the assessment data into a comprehensive message
      const assessmentSummary = `
Assessment Results:
Overall Score: ${assessmentResults.overallScore}% (${assessmentResults.readinessLevel})

Category Scores:
- Strategic Planning: ${assessmentResults.categoryScores.strategic}%
- Financial Systems: ${assessmentResults.categoryScores.financial}%
- Legal Foundation: ${assessmentResults.categoryScores.legal}%
- Technical Documentation: ${assessmentResults.categoryScores.technical}%
- Compliance & Data: ${assessmentResults.categoryScores.compliance}%
- Organization & Process: ${assessmentResults.categoryScores.organization}%

Business Details:
- Business Type: ${formData.businessType}
- Stage: ${formData.stage}
- Primary Goal: ${formData.goal}
- Timeline: ${formData.timeline}
- Cash Runway: ${formData.runway}

${assessmentResults.strengths.length > 0 ? `Strengths: ${assessmentResults.strengths.join(', ')}` : ''}
${assessmentResults.criticalAreas.length > 0 ? `Critical Areas: ${assessmentResults.criticalAreas.join(', ')}` : ''}

Contact requested assessment consultation based on these results.
      `.trim()

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          stage: formData.stage,
          message: assessmentSummary,
          consent: true // Assessment consent already verified above
        })
      })

      if (response.ok) {
        console.log('Assessment lead sent successfully')
      } else {
        console.error('Failed to send assessment lead:', await response.text())
      }
    } catch (error) {
      console.error('Error sending assessment lead:', error)
      // Don't fail the assessment if lead submission fails
    }
    
    console.log('Assessment submitted:', { formData, results: assessmentResults })
  }

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    if (typeof input !== 'string') return ''
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .substring(0, 500) // Limit length for assessment responses
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Don't allow changes after submission
    if (isSubmitted) {
      return
    }
    
    // Sanitize input before storing
    const sanitizedValue = sanitizeInput(value)
    setFormData(prev => ({ ...prev, [field]: sanitizedValue }))
  }

  // Static steps configuration - no dynamic content to prevent re-renders
  const getAllSteps = () => {
    return [
      {
        title: "Business & Strategic Context",
        questions: [
          {
            label: "What type of business do you have?",
            field: "businessType" as keyof FormData,
            type: "select",
            options: [
              "Technology/Software", 
              "SaaS", 
              "Fintech", 
              "Healthtech", 
              "E-commerce",
              "Financial Services",
              "Professional Services", 
              "Manufacturing", 
              "Retail/Consumer Goods", 
              "Other"
            ]
          },
          {
            label: "What stage is your startup?",
            field: "stage" as keyof FormData,
            type: "select",
            options: ["Pre-Seed", "Seed", "Series A", "Series B+", "Pre-Acquisition", "Operational Cleanup"]
          },
          {
            label: "What is your primary goal for seeking readiness support?",
            field: "goal" as keyof FormData,
            type: "select",
            options: ["Raise funding", "Prepare for acquisition", "Improve internal operations/compliance", "Close a large enterprise deal", "Other"]
          },
          {
            label: "What is your target timeline for this goal?",
            field: "timeline" as keyof FormData,
            type: "select",
            options: ["0-3 months", "3-6 months", "6-12 months", "Unsure"]
          },
          {
            label: "What's your current cash runway?",
            field: "runway" as keyof FormData,
            type: "select",
            options: ["<6 months", "6-12 months", "12+ months"]
          }
        ]
      },
      {
        title: "Financial Readiness",
        questions: [
          {
            label: "Do you have audited financials? If not, are your books maintained on an accrual basis?",
            field: "auditedFinancials" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Unsure"]
          },
          {
            label: "Do you have key business metrics and unit economics clearly defined?",
            field: "saasMetrics" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Not Applicable"]
          },
          {
            label: "Is your cap table (ownership structure) fully reconciled and accurate?",
            field: "capTable" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Unsure"]
          },
          {
            label: "Do you have a detailed 3-5 year financial model, including clear assumptions?",
            field: "financialModel" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "In Progress"]
          }
        ]
      },
      {
        title: "Legal & Corporate Readiness",
        questions: [
          {
            label: "Are your company incorporation documents up-to-date and easily accessible?",
            field: "incorporation" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Unsure"]
          },
          {
            label: "Are all founder and employee IP assignments signed and documented?",
            field: "ipAssignments" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially"]
          },
          {
            label: "Do you have standard, signed customer and vendor contracts that are centrally organized?",
            field: "contracts" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially"]
          },
          {
            label: "Are all employment contracts and HR policies legally compliant and centrally organized?",
            field: "employment" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially"]
          }
        ]
      },
      {
        title: "Technical & Product Readiness",
        questions: [
          {
            label: "Do you have clear documentation of your product architecture, tech stack, and key integrations?",
            field: "techDocumentation" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Not Applicable"]
          },
          {
            label: "Are your development processes (CI/CD, testing, code review) documented and followed consistently?",
            field: "devProcesses" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Not Applicable"]
          },
          {
            label: "Have you had any external security audits or penetration tests?",
            field: "securityAudits" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Unsure", "Not Applicable"]
          }
        ]
      },
      {
        title: "Data & Compliance Readiness",
        questions: [
          {
            label: "Do you have a clear Privacy Policy and Data Processing Agreements with all relevant vendors/partners?",
            field: "privacyPolicy" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Partially", "Not Applicable"]
          },
          {
            label: "Are you confident your data handling practices are fully GDPR/local data protection compliant?",
            field: "dataCompliance" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Unsure", "Not Applicable"]
          },
          {
            label: "Do you have a documented data breach response plan?",
            field: "breachPlan" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "Not Applicable"]
          }
        ]
      },
      {
        title: "Data Room & Organization",
        questions: [
          {
            label: "Do you have a Virtual Data Room (VDR) set up and organized with key diligence documents?",
            field: "virtualDataRoom" as keyof FormData,
            type: "select",
            options: ["Yes", "No", "In Progress"]
          },
          {
            label: "How confident are you in responding to comprehensive due diligence requests quickly?",
            field: "dueDiligenceConfidence" as keyof FormData,
            type: "select",
            options: ["Very Confident", "Somewhat Confident", "Not Confident", "Overwhelmed"]
          }
        ]
      },
      {
        title: "Contact Information & Consent",
        questions: [
          {
            label: "Your Name",
            field: "name" as keyof FormData,
            type: "text",
            required: true
          },
          {
            label: "Company Name",
            field: "company" as keyof FormData,
            type: "text",
            required: true
          },
          {
            label: "Email Address",
            field: "email" as keyof FormData,
            type: "email",
            required: true
          },
          {
            label: "Phone Number",
            field: "phone" as keyof FormData,
            type: "text"
          },
          {
            label: "I consent to DueReady processing my business and personal data provided in this assessment to generate results and potentially contact me about services. This includes sensitive business information about my company's financial, legal, and compliance status. I understand I can request deletion of this data at any time by emailing hello@dueready.com. See our Privacy Policy for full details.",
            field: "assessmentConsent" as keyof FormData,
            type: "consent",
            required: true
          }
        ]
      }
    ]
  }

  // Use all steps to avoid re-render issues - just show "Not Applicable" for irrelevant questions
  const steps = getAllSteps()

  // Don't render the form if we have results - COMPLETELY STATIC VERSION
  if (isSubmitted && results) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, black, rgb(3 7 18), rgb(17 24 39))', color: 'white', position: 'relative' }}>
        <Navbar />
        
        <div style={{ paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Your Results
              </h1>
              <div style={{ 
                background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '0.375rem',
                padding: '2rem',
                opacity: 1,
                visibility: 'visible'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                    {results.overallScore}%
                  </div>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: results.readinessLevel === 'Deal Ready' ? 'rgb(74 222 128)' :
                           results.readinessLevel === 'Nearly Ready' ? 'rgb(96 165 250)' :
                           results.readinessLevel === 'Some Gaps' ? 'rgb(250 204 21)' :
                           'rgb(248 113 113)'
                  }}>
                    {results.readinessLevel}
                  </div>
                  <p style={{ color: 'rgb(209 213 219)' }}>Overall Deal Readiness Score</p>
                  {formData.businessType && (
                    <p style={{ fontSize: '0.75rem', color: 'rgb(107 114 128)', marginTop: '0.5rem' }}>
                      Assessment customized for {formData.businessType} business
                    </p>
                  )}
                </div>

                {/* Category Breakdown */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.strategic}%</div>
                    <div className="text-sm text-gray-400">Strategic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.financial}%</div>
                    <div className="text-sm text-gray-400">Financial</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.legal}%</div>
                    <div className="text-sm text-gray-400">Legal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.technical}%</div>
                    <div className="text-sm text-gray-400">Technical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.compliance}%</div>
                    <div className="text-sm text-gray-400">Compliance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{results.categoryScores.organization}%</div>
                    <div className="text-sm text-gray-400">Organization</div>
                  </div>
                </div>

                {/* Strengths */}
                {results.strengths.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-green-400 mb-4">Your Strengths</h3>
                    <div className="space-y-2">
                      {results.strengths.map((strength, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Critical Areas */}
                {results.criticalAreas.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Critical Areas for Improvement</h3>
                    <div className="space-y-2">
                      {results.criticalAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="text-center pt-6 border-t border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Address These Gaps?</h3>
                  <p className="text-gray-300 mb-6">
                                          Book a free 30-minute deep dive with a DueReady Expert to discuss your specific results and create an action plan.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                    <a 
                      href="/contact"
                      style={{ 
                        backgroundColor: 'white', 
                        color: 'black', 
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0.375rem',
                        textDecoration: 'none',
                        fontWeight: '500',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      Book Free Consultation
                    </a>
                    <a 
                      href="/resources"
                      style={{ 
                        color: 'white', 
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0.375rem',
                        textDecoration: 'none',
                        fontWeight: '500',
                        border: '1px solid transparent'
                      }}
                    >
                      Explore Resources
                    </a>
                    <button 
                      onClick={() => {
                        console.log('Resetting assessment')
                        localStorage.removeItem('assessmentResults')
                        localStorage.removeItem('assessmentSubmitted')
                        setIsSubmitted(false)
                        setResults(null)
                        setCurrentStep(0)
                        // Reset form data
                        setFormData({
                          businessType: '', stage: '', goal: '', timeline: '', runway: '',
                          auditedFinancials: '', saasMetrics: '', capTable: '', financialModel: '',
                          incorporation: '', ipAssignments: '', contracts: '', employment: '',
                          techDocumentation: '', devProcesses: '', securityAudits: '',
                          privacyPolicy: '', dataCompliance: '', breachPlan: '',
                          virtualDataRoom: '', dueDiligenceConfidence: '',
                          name: '', company: '', email: '', phone: '', assessmentConsent: ''
                        })
                      }}
                      style={{ 
                        color: 'rgb(156 163 175)', 
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0.375rem',
                        background: 'transparent',
                        border: '1px solid transparent',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Take Assessment Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-x-hidden">
      <Navbar />
      
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                          <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)]">
              DueReady Assessment
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover your startup's readiness for funding, acquisition, or enterprise deals with our comprehensive assessment.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mb-8">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mb-8">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              {formData.businessType && (
                <span className="block text-xs mt-1 text-gray-500">
                  Assessment customized for {formData.businessType} businesses
                </span>
              )}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-md p-8">
            <h2 className="text-2xl font-bold text-white mb-8">{steps[currentStep].title}</h2>
            
            <div className="space-y-6">
              {steps[currentStep].questions.map((question: Question, index) => (
                <div key={index}>
                  <label className="block text-lg font-medium text-white mb-3">
                    {question.label}
                    {question.required && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  
                  {question.type === 'consent' ? (
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={`consent-${index}`}
                        checked={formData[question.field] === 'true'}
                        onChange={(e) => handleInputChange(question.field, e.target.checked ? 'true' : '')}
                        className="mt-1 w-4 h-4 text-white bg-white/10 border border-white/30 rounded focus:ring-white/40 focus:ring-2 accent-white"
                        required={question.required}
                      />
                      <label 
                        htmlFor={`consent-${index}`} 
                        className="text-sm text-gray-300 leading-relaxed cursor-pointer"
                        style={{ marginTop: '-0.25rem' }}
                      >
                        {question.label}
                      </label>
                    </div>
                  ) : question.type === 'select' && question.options ? (
                    <select
                      value={formData[question.field]}
                      onChange={(e) => handleInputChange(question.field, e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300"
                      required={question.required}
                    >
                      <option value="" className="bg-gray-900">Select an option</option>
                      {question.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option} className="bg-gray-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={question.type}
                      value={formData[question.field]}
                      onChange={(e) => handleInputChange(question.field, e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300"
                      required={question.required}
                      placeholder={`Enter your ${question.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <Button 
                  variant="ghost"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-white hover:bg-white/30 hover:text-white transition-all duration-300 px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                >
                  Previous
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < steps.length - 1 ? (
                  <Button 
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="bg-white border border-white/30 text-black hover:bg-white/90 hover:text-black hover:border-white/40 transition-all duration-300 rounded-md px-4 sm:px-6 py-1 sm:py-2 h-auto font-medium text-base"
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 transition-all duration-300 rounded-md px-6 sm:px-8 py-1 sm:py-2 h-auto font-medium text-base"
                  >
                    Get My Results
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 