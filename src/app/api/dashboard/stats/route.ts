import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id

    // Get document counts
    const totalDocuments = await prisma.document.count({
      where: { userId }
    })

    const analyzedDocuments = await prisma.document.count({
      where: { 
        userId,
        analysisComplete: true
      }
    })

    // Get critical flags count
    const criticalFlags = await prisma.documentFlag.count({
      where: {
        document: { userId },
        severity: "CRITICAL",
        resolved: false
      }
    })

    // Get completed reports count
    const completedReports = await prisma.report.count({
      where: {
        userId,
        status: "COMPLETED"
      }
    })

    // Calculate overall score (simplified calculation)
    // In a real app, this would be more sophisticated
    let overallScore = 0
    if (totalDocuments > 0) {
      const analysisRate = (analyzedDocuments / totalDocuments) * 100
      const penaltyForFlags = Math.min(criticalFlags * 10, 50)
      overallScore = Math.max(0, Math.round(analysisRate - penaltyForFlags))
    }

    const stats = {
      totalDocuments,
      analyzedDocuments,
      overallScore,
      criticalFlags,
      completedReports
    }

    return NextResponse.json(stats)

  } catch (error) {
    console.error("Dashboard stats error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 