"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { FileText, BarChart3, AlertTriangle, TrendingUp, Users, Clock } from 'lucide-react'
import ReadinessScore from '@/components/dashboard/ReadinessScore'
import RecentActivity from '@/components/dashboard/RecentActivity'

interface DashboardStats {
  totalDocuments: number
  analyzedDocuments: number
  overallScore: number
  criticalFlags: number
  completedReports: number
}

export default function DashboardDemoPage() {
  const [stats] = useState<DashboardStats>({
    totalDocuments: 12,
    analyzedDocuments: 9,
    overallScore: 78,
    criticalFlags: 3,
    completedReports: 2
  })

  // Mock session for demo
  const session = {
    user: {
      name: "Demo User",
      email: "demo@dueready.com",
      role: "Founder"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="/dueready-logo-dark.png" 
                alt="DueReady" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  AutoDiligence
                </h1>
                <p className="text-gray-400 text-sm">AI-Powered Deal Readiness Platform</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-white">{session?.user?.name}</div>
                <div className="text-xs text-gray-400">
                  {session?.user?.role} • Demo Mode
                </div>
              </div>
              
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Users className="w-4 h-4 mr-2" />
                Invite Team
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
          <h2 className="text-xl font-bold text-white mb-2">Welcome to DueReady AutoDiligence</h2>
          <p className="text-gray-300">
            Your AI-powered platform for deal readiness assessment. Upload documents, get instant analysis, and prepare for your next funding round.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Documents</p>
                  <p className="text-3xl font-bold text-white">{stats.totalDocuments}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Analyzed</p>
                  <p className="text-3xl font-bold text-white">{stats.analyzedDocuments}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Readiness Score</p>
                  <p className="text-3xl font-bold text-white">{stats.overallScore}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Critical Flags</p>
                  <p className="text-3xl font-bold text-white">{stats.criticalFlags}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Reports</p>
                  <p className="text-3xl font-bold text-white">{stats.completedReports}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Score & Upload */}
          <div className="lg:col-span-1 space-y-6">
            <ReadinessScore score={stats.overallScore} />
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Upload Documents</CardTitle>
                <CardDescription className="text-gray-400">
                  Add new documents for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 text-lg mb-2">
                    Drag & drop files here
                  </p>
                  <p className="text-gray-500 text-sm">
                    Supports PDF, DOCX, XLSX, CSV files up to 10MB
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Documents & Activity */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="space-y-4">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Document Library</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage and review your uploaded documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Mock Documents */}
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          <FileText className="w-8 h-8 text-gray-400" />
                          <div>
                            <h4 className="text-white font-medium">Cap Table 2024.xlsx</h4>
                            <p className="text-sm text-gray-400">2.1 MB • Uploaded 2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Analyzed</span>
                          <Button variant="ghost" size="sm" className="text-gray-400">
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          <FileText className="w-8 h-8 text-gray-400" />
                          <div>
                            <h4 className="text-white font-medium">Employment Agreement.pdf</h4>
                            <p className="text-sm text-gray-400">1.8 MB • Uploaded 1 day ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">Processing</span>
                          <Button variant="ghost" size="sm" className="text-gray-400">
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-4">
                          <FileText className="w-8 h-8 text-gray-400" />
                          <div>
                            <h4 className="text-white font-medium">Financial Model Q4.xlsx</h4>
                            <p className="text-sm text-gray-400">3.2 MB • Uploaded 3 days ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Analyzed</span>
                          <Button variant="ghost" size="sm" className="text-gray-400">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-4">
                <RecentActivity />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
} 