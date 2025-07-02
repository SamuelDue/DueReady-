"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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

  // Simplified Due Diligence Categories
  const ddCategories = [
    {
      id: 'corporate',
      name: 'Corporate & Legal',
      icon: Scale,
      complete: 8,
      total: 10,
      items: [
        { name: 'Certificate of Incorporation', status: 'complete' },
        { name: 'Company Bylaws', status: 'complete' },
        { name: 'Cap Table', status: 'complete' },
        { name: 'Shareholder Agreements', status: 'needs-review' },
        { name: 'Board Resolutions', status: 'complete' },
        { name: 'Equity Grant Agreements', status: 'complete' },
        { name: 'IP Assignment Agreements', status: 'missing' },
        { name: 'Registered Trademarks', status: 'complete' },
        { name: 'Legal Entity Structure', status: 'complete' },
        { name: 'Legal Disputes Summary', status: 'complete' }
      ]
    },
    {
      id: 'financial',
      name: 'Financial',
      icon: BarChart3,
      complete: 8,
      total: 9,
      items: [
        { name: 'Audited Financials (3 Years)', status: 'complete' },
        { name: 'YTD Management Accounts', status: 'complete' },
        { name: 'Financial Model', status: 'needs-review' },
        { name: 'Cash Flow Statement', status: 'complete' },
        { name: 'Revenue Breakdown', status: 'complete' },
        { name: 'Unit Economics', status: 'complete' },
        { name: 'Previous Funding Docs', status: 'complete' },
        { name: 'Outstanding Debt Summary', status: 'complete' },
        { name: 'Tax Filings (3 Years)', status: 'complete' }
      ]
    },
    {
      id: 'hr-people',
      name: 'HR & People',
      icon: Users,
      complete: 6,
      total: 8,
      items: [
        { name: 'Org Chart', status: 'complete' },
        { name: 'Key Employment Contracts', status: 'complete' },
        { name: 'Contractor Agreements', status: 'needs-review' },
        { name: 'Hiring Plan', status: 'complete' },
        { name: 'ESOP Plan', status: 'complete' },
        { name: 'HR Policies', status: 'complete' },
        { name: 'Employee Disputes Summary', status: 'complete' },
        { name: 'DEI Policies', status: 'missing' }
      ]
    },
    {
      id: 'commercial',
      name: 'Commercial & Sales',
      icon: TrendingUp,
      complete: 6,
      total: 7,
      items: [
        { name: 'Top Customer Contracts', status: 'complete' },
        { name: 'Pricing Model', status: 'complete' },
        { name: 'Sales Pipeline', status: 'complete' },
        { name: 'Distribution Agreements', status: 'complete' },
        { name: 'Partnership Contracts', status: 'needs-review' },
        { name: 'Customer Metrics', status: 'complete' },
        { name: 'Case Studies', status: 'complete' }
      ]
    },
    {
      id: 'product-strategy',
      name: 'Product & Strategy',
      icon: Target,
      complete: 7,
      total: 7,
      items: [
        { name: 'Product Roadmap', status: 'complete' },
        { name: 'Strategic Planning Docs', status: 'complete' },
        { name: 'Market Research', status: 'complete' },
        { name: 'Competitive Analysis', status: 'complete' },
        { name: 'Pitch Deck', status: 'complete' },
        { name: 'Vision/Mission Docs', status: 'complete' },
        { name: 'Product Metrics', status: 'complete' }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Documentation',
      icon: Database,
      complete: 6,
      total: 8,
      items: [
        { name: 'System Architecture', status: 'complete' },
        { name: 'API Documentation', status: 'complete' },
        { name: 'DevOps Pipeline', status: 'complete' },
        { name: 'Infrastructure Summary', status: 'complete' },
        { name: 'Backup & Recovery', status: 'needs-review' },
        { name: 'Tech Vendors List', status: 'complete' },
        { name: 'Technical DD Report', status: 'missing' },
        { name: 'Open Source Audit', status: 'complete' }
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Risk',
      icon: Shield,
      complete: 7,
      total: 9,
      items: [
        { name: 'GDPR/CCPA Compliance', status: 'complete' },
        { name: 'Privacy Policy', status: 'complete' },
        { name: 'Terms of Service', status: 'complete' },
        { name: 'SOC 2 Reports', status: 'missing' },
        { name: 'Data Processing Agreements', status: 'complete' },
        { name: 'Risk Register', status: 'needs-review' },
        { name: 'Insurance Certificates', status: 'complete' },
        { name: 'Security Policies', status: 'complete' },
        { name: 'Internal Audit Reports', status: 'complete' }
      ]
    },
    {
      id: 'corporate-info',
      name: 'Corporate Information',
      icon: Building,
      complete: 6,
      total: 6,
      items: [
        { name: 'Board Meeting Minutes', status: 'complete' },
        { name: 'Governance Structure', status: 'complete' },
        { name: 'Founding Documents', status: 'complete' },
        { name: 'Annual Returns', status: 'complete' },
        { name: 'Organizational Charts', status: 'complete' },
        { name: 'Voting Rights Summary', status: 'complete' }
      ]
    }
  ]

  // Calculate overall statistics
  const totalItems = ddCategories.reduce((sum, cat) => sum + cat.total, 0)
  const completedItems = ddCategories.reduce((sum, cat) => sum + cat.complete, 0)
  const missingItems = totalItems - completedItems
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
      case 'complete': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'needs-review': return <Clock className="w-4 h-4 text-orange-500" />
      case 'missing': return <AlertTriangle className="w-4 h-4 text-red-500" />
      default: return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/documents" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <FileText className="w-5 h-5" />
              <span>Documents</span>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>Due Diligence</span>
            </div>
            <Link href="/data-room" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
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
        <main className="p-8 max-w-6xl">
          {/* Clean Overview */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-4xl font-light text-purple-600 mb-2">{overallProgress}%</div>
              <div className="text-sm text-gray-500">Ready</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">{completedItems}</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">{missingItems}</div>
              <div className="text-sm text-gray-500">Missing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">{totalItems}</div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>

          {/* Ultra Clean Categories */}
          <div className="space-y-1">
            {ddCategories.map((category) => {
              const isExpanded = expandedCategories.has(category.id)
              const categoryProgress = Math.round((category.complete / category.total) * 100)
              const CategoryIcon = category.icon
              
              return (
                <div key={category.id}>
                  <div 
                    className="flex items-center justify-between py-4 px-6 hover:bg-gray-50 cursor-pointer border-b border-gray-50"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center gap-4">
                      <CategoryIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.complete}/{category.total}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-900">{categoryProgress}%</span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="bg-gray-50 px-6 py-4">
                      <div className="space-y-2">
                        {category.items.map((item, index) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex items-center gap-3">
                              {getStatusIcon(item.status)}
                              <span className="text-sm text-gray-700">{item.name}</span>
                            </div>
                            
                            {item.status !== 'complete' && (
                              <Button size="sm" variant="outline" className="text-xs h-7">
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