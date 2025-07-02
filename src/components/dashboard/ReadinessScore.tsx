"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react'

interface ReadinessScoreProps {
  score: number
}

export default function ReadinessScore({ score }: ReadinessScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const getScoreStatus = (score: number) => {
    if (score >= 80) return { text: 'Deal Ready', color: 'bg-green-600', icon: CheckCircle }
    if (score >= 60) return { text: 'Good Progress', color: 'bg-yellow-600', icon: TrendingUp }
    if (score >= 40) return { text: 'Needs Work', color: 'bg-orange-600', icon: TrendingDown }
    return { text: 'Critical Issues', color: 'bg-red-600', icon: AlertTriangle }
  }

  const status = getScoreStatus(score)
  const StatusIcon = status.icon

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Deal Readiness Score
          <Badge className={status.color}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {status.text}
          </Badge>
        </CardTitle>
        <CardDescription className="text-gray-400">
          Your overall readiness for fundraising or M&A
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Score Display */}
        <div className="text-center">
          <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </div>
          <Progress value={score} className="mt-4 h-3" />
        </div>

        {/* Score Breakdown */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-300">Score Breakdown</div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Legal Documents</span>
              <div className="flex items-center gap-2">
                <Progress value={75} className="w-16 h-2" />
                <span className="text-sm text-gray-300 w-8">75%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Financial Records</span>
              <div className="flex items-center gap-2">
                <Progress value={60} className="w-16 h-2" />
                <span className="text-sm text-gray-300 w-8">60%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Compliance</span>
              <div className="flex items-center gap-2">
                <Progress value={80} className="w-16 h-2" />
                <span className="text-sm text-gray-300 w-8">80%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Corporate Structure</span>
              <div className="flex items-center gap-2">
                <Progress value={45} className="w-16 h-2" />
                <span className="text-sm text-gray-300 w-8">45%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-white/10">
          <div className="text-sm font-medium text-gray-300 mb-2">
            Priority Actions
          </div>
          <div className="space-y-1 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              Update cap table with latest equity changes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Complete IP assignment agreements
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Review employment contracts for compliance
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 