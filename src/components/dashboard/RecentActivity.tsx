"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, AlertTriangle, CheckCircle, Upload, Download } from 'lucide-react'

interface ActivityItem {
  id: string
  type: 'upload' | 'analysis' | 'flag' | 'report'
  title: string
  description: string
  timestamp: string
  status?: 'success' | 'warning' | 'error'
}

export default function RecentActivity() {
  // Mock data - in real app, this would come from API
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'upload',
      title: 'Document uploaded',
      description: 'Cap table_2024.xlsx',
      timestamp: '2 minutes ago',
      status: 'success'
    },
    {
      id: '2',
      type: 'analysis',
      title: 'Analysis completed',
      description: 'Employment agreement analyzed',
      timestamp: '15 minutes ago',
      status: 'success'
    },
    {
      id: '3',
      type: 'flag',
      title: 'Issue flagged',
      description: 'Missing IP assignment in contract',
      timestamp: '1 hour ago',
      status: 'warning'
    },
    {
      id: '4',
      type: 'report',
      title: 'Report generated',
      description: 'Q4 2024 Readiness Report',
      timestamp: '3 hours ago',
      status: 'success'
    },
    {
      id: '5',
      type: 'analysis',
      title: 'Analysis failed',
      description: 'Could not process financial_model.pdf',
      timestamp: '5 hours ago',
      status: 'error'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'upload':
        return <Upload className="w-4 h-4" />
      case 'analysis':
        return <FileText className="w-4 h-4" />
      case 'flag':
        return <AlertTriangle className="w-4 h-4" />
      case 'report':
        return <Download className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'warning':
        return 'text-yellow-400'
      case 'error':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <CardDescription className="text-gray-400">
          Latest updates and actions on your documents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`flex-shrink-0 p-2 rounded-full bg-white/10 ${getStatusColor(activity.status)}`}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-white truncate">
                    {activity.title}
                  </h4>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {activity.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <button className="text-sm text-blue-400 hover:text-blue-300">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  )
} 