"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, BarChart3, AlertTriangle, CheckCircle, Upload, Search, Filter, Plus, MoreHorizontal, Users, Clock, Target, Folder, Database, Settings, Bell, ChevronDown, ChevronRight, RefreshCw } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

export default function DashboardPage() {
  const [stats] = useState({
    readinessScore: 74,
    documentsComplete: 67,
    totalDocuments: 89,
    dataRoomProgress: 82,
    criticalIssues: 3,
    daysToReady: 18,
    lastUpdated: '2024-01-15T14:30:00Z'
  })

  const [domainScores] = useState({
    Legal: 85,
    Finance: 62,
    Technical: 78,
    Corporate: 71,
    IP: 89,
    HR: 74
  })

  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'Legal-Raise': false,
    'Finance-Raise': false,
    'Technical-Raise': false,
    'Corporate-Raise': false
  })

  const [filters, setFilters] = useState({
    domain: 'All',
    milestone: 'All',
    status: 'All',
    priority: 'All'
  })

  const session = {
    user: {
      name: "Amy Prawnson",
      email: "amy@startup.com",
      role: "Founder",
      initials: "AP"
    }
  }

  const dueDiligenceByDomain = {
    'Legal': {
      'Raise': [
        {
          id: 'L-R-1',
          item: 'Cap table and equity documentation',
          description: 'Current capitalization table with all equity grants and ownership details',
          owner: 'Legal Team',
          status: 'Complete',
          priority: 'Critical',
          progress: 100
        },
        {
          id: 'L-R-2',
          item: 'Articles of incorporation and bylaws',
          description: 'Corporate formation documents and governance structure',
          owner: 'Legal Team',
          status: 'Complete',
          priority: 'High',
          progress: 100
        }
      ],
      'Exit': [
        {
          id: 'L-E-1',
          item: 'Material contracts review',
          description: 'All significant customer, vendor, and partnership agreements',
          owner: 'Legal Team',
          status: 'In Progress',
          priority: 'High',
          progress: 40
        }
      ]
    },
    'Finance': {
      'Raise': [
        {
          id: 'F-R-1',
          item: 'Audited financial statements (3 years)',
          description: 'Complete audited financials including P&L, balance sheet, and cash flow',
          owner: 'Finance Team',
          status: 'In Progress',
          priority: 'Critical',
          progress: 60
        },
        {
          id: 'F-R-2',
          item: 'Financial projections and model',
          description: '5-year financial projections with scenario analysis',
          owner: 'Finance Team',
          status: 'Pending',
          priority: 'High',
          progress: 20
        }
      ]
    },
    'Technical': {
      'Raise': [
        {
          id: 'T-R-1',
          item: 'Technical architecture documentation',
          description: 'System architecture, security protocols, and scalability plans',
          owner: 'CTO',
          status: 'In Progress',
          priority: 'Medium',
          progress: 70
        }
      ],
      'Enterprise': [
        {
          id: 'T-E-1',
          item: 'Security compliance certifications',
          description: 'SOC 2, ISO 27001, and other enterprise security requirements',
          owner: 'Security Team',
          status: 'Pending',
          priority: 'Critical',
          progress: 30
        }
      ]
    },
    'Corporate': {
      'Raise': [
        {
          id: 'C-R-1',
          item: 'Board resolutions and meeting minutes',
          description: 'All board meeting minutes and major corporate resolutions since inception',
          owner: 'Corporate Secretary',
          status: 'Pending',
          priority: 'Medium',
          progress: 25
        }
      ]
    }
  }

  const getStatusBadge = (status: string) => {
    const badges: Record<string, string> = {
      'Complete': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Pending': 'bg-orange-100 text-orange-800'
    }
    return <Badge className={badges[status] || 'bg-gray-100 text-gray-800'}>{status}</Badge>
  }

  const getPriorityBadge = (priority: string) => {
    const badges: Record<string, string> = {
      'Critical': 'bg-red-100 text-red-800',
      'High': 'bg-orange-100 text-orange-800',
      'Medium': 'bg-yellow-100 text-yellow-800'
    }
    return <Badge className={badges[priority] || 'bg-gray-100 text-gray-800'}>{priority}</Badge>
  }

  const getDomainColor = (domain: string) => {
    const colors: Record<string, string> = {
      'Legal': 'bg-purple-100 text-purple-600',
      'Finance': 'bg-green-100 text-green-600',
      'Technical': 'bg-blue-100 text-blue-600',
      'Corporate': 'bg-indigo-100 text-indigo-600'
    }
    return colors[domain] || 'bg-gray-100 text-gray-600'
  }

  const getMilestoneColor = (milestone: string) => {
    const colors: Record<string, string> = {
      'Raise': 'bg-emerald-50 border-emerald-200',
      'Exit': 'bg-amber-50 border-amber-200',
      'Enterprise': 'bg-sky-50 border-sky-200'
    }
    return colors[milestone] || 'bg-gray-50 border-gray-200'
  }

  const toggleSection = (sectionKey: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
  }

  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffMinutes < 60) return `${diffMinutes} min ago`
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)} hours ago`
    
    // Use a consistent date format to avoid hydration mismatch
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  // Flatten all checklist items into a single array
  const getAllChecklistItems = () => {
    const allItems: any[] = []
    Object.entries(dueDiligenceByDomain).forEach(([domain, milestones]) => {
      Object.entries(milestones).forEach(([milestone, items]) => {
        items.forEach(item => {
          allItems.push({
            ...item,
            domain,
            milestone
          })
        })
      })
    })
    return allItems
  }

  // Filter items based on current filters
  const getFilteredItems = () => {
    const allItems = getAllChecklistItems()
    return allItems.filter(item => {
      return (filters.domain === 'All' || item.domain === filters.domain) &&
             (filters.milestone === 'All' || item.milestone === filters.milestone) &&
             (filters.status === 'All' || item.status === filters.status) &&
             (filters.priority === 'All' || item.priority === filters.priority)
    })
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
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
            <div className="flex items-center gap-3 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <Link href="/due-diligence" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <CheckCircle className="w-5 h-5" />
              <span>Due Diligence</span>
            </Link>
            <Link href="/data-room" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Database className="w-5 h-5" />
              <span>Data Room</span>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Users className="w-5 h-5" />
              <span>Team</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </nav>
        </div>
        
        {/* User Profile - Bottom of Sidebar */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{session.user.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{session.user.name}</div>
              <div className="text-xs text-gray-500 truncate">{session.user.email}</div>
              <div className="text-xs text-purple-600">{session.user.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Deal Readiness Dashboard</h1>
              <p className="text-sm text-gray-500">Track your fundraising preparation progress</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Document
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Upload className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Clean Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* Primary Score */}
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-2">
                  <div className="text-4xl font-light text-gray-900">{stats.readinessScore}<span className="text-2xl text-gray-500">%</span></div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Readiness Score</div>
                </div>
              </CardContent>
            </Card>

            {/* Document Progress */}
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-3">
                  <div className="text-4xl font-light text-gray-900">{stats.documentsComplete}<span className="text-2xl text-gray-400">/{stats.totalDocuments}</span></div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Documents Complete</div>
                  <div className="pt-1">
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className="bg-gray-900 h-1.5 rounded-full transition-all duration-300" 
                        style={{ width: `${(stats.documentsComplete / stats.totalDocuments) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Critical Issues */}
            <Card className="bg-white border border-gray-100 hover:border-red-100 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-2">
                  <div className="text-4xl font-light text-red-600">{stats.criticalIssues}</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Critical Issues</div>
                </div>
              </CardContent>
            </Card>

            {/* Days to Ready */}
            <Card className="bg-white border border-gray-100 hover:border-orange-100 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-2">
                  <div className="text-4xl font-light text-orange-600">{stats.daysToReady}</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Days to Ready</div>
                </div>
              </CardContent>
            </Card>

            {/* Domain Risk Overview */}
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Risk by Domain</div>
                  <div className="space-y-3">
                    {Object.entries(domainScores).slice(0, 3).map(([domain, score]) => (
                      <div key={domain} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{domain}</span>
                        <span className={`text-sm font-semibold tabular-nums ${getScoreColor(score)}`}>{score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-4">
                <div className="text-center space-y-1">
                  <div className="text-xl font-light text-gray-900">{stats.dataRoomProgress}<span className="text-sm text-gray-500">%</span></div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Data Room Progress</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-4">
                <div className="text-center space-y-1">
                  <div className="text-xl font-light text-gray-900">7</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Team Members</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-100 hover:border-gray-200 transition-colors">
              <CardContent className="p-4">
                <div className="text-center space-y-1">
                  <div className="text-xl font-light text-gray-900">{formatLastUpdated(stats.lastUpdated)}</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last Updated</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clean Due Diligence Checklist Table */}
          <Card className="bg-white border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Due Diligence Checklist</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{getFilteredItems().length} items</CardDescription>
                </div>
                
                {/* Filter Dropdowns */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search items..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                    />
                  </div>
                  
                  <select 
                    value={filters.domain} 
                    onChange={(e) => handleFilterChange('domain', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All">All Domains</option>
                    <option value="Legal">Legal</option>
                    <option value="Finance">Finance</option>
                    <option value="Technical">Technical</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                  
                  <select 
                    value={filters.milestone} 
                    onChange={(e) => handleFilterChange('milestone', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All">All Milestones</option>
                    <option value="Raise">Raise</option>
                    <option value="Exit">Exit</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                  
                  <select 
                    value={filters.status} 
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All">All Status</option>
                    <option value="Complete">Complete</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </select>
                  
                  <select 
                    value={filters.priority} 
                    onChange={(e) => handleFilterChange('priority', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="All">All Priority</option>
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Item</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Domain</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Milestone</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Owner</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Priority</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700">Progress</th>
                      <th className="text-left py-4 px-4 text-sm font-medium text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {getFilteredItems().map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 max-w-md">
                          <div>
                            <div className="font-medium text-gray-900 text-sm mb-1">{item.item}</div>
                            <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className={getDomainColor(item.domain)} variant="secondary">
                            {item.domain}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-700">{item.milestone}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-gray-900">{item.owner}</span>
                        </td>
                        <td className="py-4 px-4">
                          {getPriorityBadge(item.priority)}
                        </td>
                        <td className="py-4 px-4">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Progress value={item.progress} className="w-16 h-2" />
                            <span className="text-xs text-gray-600 w-10">{item.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {getFilteredItems().length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-500 text-sm">No items match your current filters</div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => setFilters({ domain: 'All', milestone: 'All', status: 'All', priority: 'All' })}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
