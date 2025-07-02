"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Target, 
  Database, 
  Shield, 
  Building, 
  Scale,
  ChevronDown,
  ChevronRight,
  Upload,
  ExternalLink,
  Settings,
  Download
} from 'lucide-react'

export default function DueDiligencePage() {
  const [expandedCategories, setExpandedCategories] = useState(new Set())
  
  // Mock session data
  const session = {
    user: {
      initials: 'DK',
      name: 'David Kim',
      email: 'david@techflow.com',
      role: 'Founder & CEO'
    }
  }

  // Due Diligence Categories
  const ddCategories = [
    {
      id: 'corporate',
      name: 'Corporate & Legal',
      icon: Scale,
      total: 10,
      complete: 8,
      missing: 2,
      items: [
        { id: 'cert-incorporation', name: 'Certificate of Incorporation', status: 'complete' },
        { id: 'bylaws', name: 'Company Bylaws', status: 'complete' },
        { id: 'cap-table', name: 'Cap Table (Current)', status: 'complete' },
        { id: 'shareholder-agreements', name: 'Shareholder Agreements', status: 'needs-review' },
        { id: 'board-resolutions', name: 'Board Resolutions', status: 'complete' },
        { id: 'equity-grants', name: 'Equity Grant Agreements', status: 'complete' },
        { id: 'ip-assignments', name: 'IP Assignment Agreements', status: 'missing' },
        { id: 'trademarks-patents', name: 'Registered Trademarks', status: 'complete' },
        { id: 'entity-structure', name: 'Legal Entity Structure', status: 'complete' },
        { id: 'legal-disputes', name: 'Legal Disputes Summary', status: 'complete' }
      ]
    },
    {
      id: 'financial',
      name: 'Financial',
      icon: BarChart3,
      total: 9,
      complete: 8,
      missing: 1,
      items: [
        { id: 'audited-financials', name: 'Audited Financials (3 Years)', status: 'complete' },
        { id: 'ytd-accounts', name: 'YTD Management Accounts', status: 'complete' },
        { id: 'financial-model', name: 'Financial Model', status: 'needs-review' },
        { id: 'cash-flow', name: 'Cash Flow Statement', status: 'complete' },
        { id: 'revenue-breakdown', name: 'Revenue Breakdown', status: 'complete' },
        { id: 'unit-economics', name: 'Unit Economics', status: 'complete' },
        { id: 'funding-docs', name: 'Previous Funding Docs', status: 'complete' },
        { id: 'debt-summary', name: 'Outstanding Debt Summary', status: 'complete' },
        { id: 'tax-filings', name: 'Tax Filings (3 Years)', status: 'complete' }
      ]
    },
    {
      id: 'hr-people',
      name: 'HR & People',
      icon: Users,
      total: 8,
      complete: 6,
      missing: 2,
      items: [
        { id: 'org-chart', name: 'Org Chart', status: 'complete' },
        { id: 'key-contracts', name: 'Key Employment Contracts', status: 'complete' },
        { id: 'contractor-agreements', name: 'Contractor Agreements', status: 'needs-review' },
        { id: 'hiring-plan', name: 'Hiring Plan', status: 'complete' },
        { id: 'esop-plan', name: 'ESOP Plan', status: 'complete' },
        { id: 'hr-policies', name: 'HR Policies', status: 'complete' },
        { id: 'employee-disputes', name: 'Employee Disputes Summary', status: 'complete' },
        { id: 'dei-policies', name: 'DEI Policies', status: 'missing' }
      ]
    },
    {
      id: 'commercial',
      name: 'Commercial & Sales',
      icon: TrendingUp,
      total: 7,
      complete: 6,
      missing: 1,
      items: [
        { id: 'top-customer-contracts', name: 'Top Customer Contracts', status: 'complete' },
        { id: 'pricing-model', name: 'Pricing Model', status: 'complete' },
        { id: 'sales-pipeline', name: 'Sales Pipeline', status: 'complete' },
        { id: 'distribution-agreements', name: 'Distribution Agreements', status: 'complete' },
        { id: 'partnership-contracts', name: 'Partnership Contracts', status: 'needs-review' },
        { id: 'customer-metrics', name: 'Customer Metrics', status: 'complete' },
        { id: 'case-studies', name: 'Case Studies', status: 'complete' }
      ]
    },
    {
      id: 'product-strategy',
      name: 'Product & Strategy',
      icon: Target,
      total: 7,
      complete: 7,
      missing: 0,
      items: [
        { id: 'product-roadmap', name: 'Product Roadmap', status: 'complete' },
        { id: 'strategic-planning', name: 'Strategic Planning Docs', status: 'complete' },
        { id: 'market-research', name: 'Market Research', status: 'complete' },
        { id: 'competitive-analysis', name: 'Competitive Analysis', status: 'complete' },
        { id: 'pitch-deck', name: 'Pitch Deck', status: 'complete' },
        { id: 'vision-mission', name: 'Vision/Mission Docs', status: 'complete' },
        { id: 'product-metrics', name: 'Product Metrics', status: 'complete' }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Documentation',
      icon: Database,
      total: 8,
      complete: 6,
      missing: 2,
      items: [
        { id: 'architecture-diagram', name: 'System Architecture', status: 'complete' },
        { id: 'api-docs', name: 'API Documentation', status: 'complete' },
        { id: 'devops-pipeline', name: 'DevOps Pipeline', status: 'complete' },
        { id: 'infrastructure-summary', name: 'Infrastructure Summary', status: 'complete' },
        { id: 'backup-recovery', name: 'Backup & Recovery', status: 'needs-review' },
        { id: 'tech-vendors', name: 'Tech Vendors List', status: 'complete' },
        { id: 'tech-dd-report', name: 'Technical DD Report', status: 'missing' },
        { id: 'open-source-audit', name: 'Open Source Audit', status: 'complete' }
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Risk',
      icon: Shield,
      total: 9,
      complete: 7,
      missing: 2,
      items: [
        { id: 'gdpr-ccpa', name: 'GDPR/CCPA Compliance', status: 'complete' },
        { id: 'privacy-policy', name: 'Privacy Policy', status: 'complete' },
        { id: 'terms-service', name: 'Terms of Service', status: 'complete' },
        { id: 'soc2-iso', name: 'SOC 2 Reports', status: 'missing' },
        { id: 'data-processing', name: 'Data Processing Agreements', status: 'complete' },
        { id: 'risk-register', name: 'Risk Register', status: 'needs-review' },
        { id: 'insurance-certs', name: 'Insurance Certificates', status: 'complete' },
        { id: 'security-policies', name: 'Security Policies', status: 'complete' },
        { id: 'audit-reports', name: 'Internal Audit Reports', status: 'complete' }
      ]
    },
    {
      id: 'corporate-info',
      name: 'Corporate Information',
      icon: Building,
      total: 6,
      complete: 6,
      missing: 0,
      items: [
        { id: 'board-minutes', name: 'Board Meeting Minutes', status: 'complete' },
        { id: 'governance-structure', name: 'Governance Structure', status: 'complete' },
        { id: 'founding-docs', name: 'Founding Documents', status: 'complete' },
        { id: 'annual-returns', name: 'Annual Returns', status: 'complete' },
        { id: 'org-charts', name: 'Organizational Charts', status: 'complete' },
        { id: 'voting-rights', name: 'Voting Rights Summary', status: 'complete' }
      ]
    }
  ]

  // Calculate overall statistics
  const totalItems = ddCategories.reduce((sum, cat) => sum + cat.total, 0)
  const completedItems = ddCategories.reduce((sum, cat) => sum + cat.complete, 0)
  const missingItems = ddCategories.reduce((sum, cat) => sum + cat.missing, 0)
  const overallProgress = Math.round((completedItems / totalItems) * 100)

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'complete': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'needs-review': return <Clock className="w-4 h-4 text-orange-500" />
      case 'missing': return <AlertTriangle className="w-4 h-4 text-red-500" />
      default: return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DR</span>
            </div>
            <span className="font-semibold text-gray-900">DueReady</span>
          </div>
          
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/documents" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <FileText className="w-5 h-5" />
              <span>Documents</span>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 text-gray-900 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>Due Diligence</span>
            </div>
            <Link href="/data-room" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Database className="w-5 h-5" />
              <span>Data Room</span>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Target className="w-5 h-5" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <AlertTriangle className="w-5 h-5" />
              <span>Issues</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <FileText className="w-5 h-5" />
              <span>Reports</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Users className="w-5 h-5" />
              <span>Team</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </nav>
        </div>
        
        {/* User Profile */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{session.user.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{session.user.name}</div>
              <div className="text-xs text-gray-500 truncate">{session.user.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Due Diligence</h1>
              <p className="text-sm text-gray-500 mt-1">Track your fundraising readiness</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600 mb-2">{overallProgress}%</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Ready</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{completedItems}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Complete</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{missingItems}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Missing</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{totalItems}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total</div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            {ddCategories.map((category) => {
              const isExpanded = expandedCategories.has(category.id)
              const categoryProgress = Math.round((category.complete / category.total) * 100)
              const CategoryIcon = category.icon
              
              return (
                <div key={category.id} className="bg-white border border-gray-100 rounded-lg">
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center">
                        <CategoryIcon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.complete} of {category.total} complete</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{categoryProgress}%</div>
                        {category.missing > 0 && (
                          <div className="text-xs text-red-500">{category.missing} missing</div>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-50">
                      <div className="space-y-2 pt-4">
                        {category.items.map((item) => (
                          <div 
                            key={item.id} 
                            className="flex items-center justify-between py-3 px-4 rounded border border-gray-50 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {getStatusIcon(item.status)}
                              <span className="text-sm text-gray-900">{item.name}</span>
                            </div>
                            
                            {item.status !== 'complete' && (
                              <Button size="sm" variant="outline" className="text-xs h-7 px-3">
                                Upload
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
} 