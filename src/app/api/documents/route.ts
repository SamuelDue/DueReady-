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

    const documents = await prisma.document.findMany({
      where: {
        userId: session.user.id
      },
      orderBy: {
        uploadedAt: 'desc'
      },
      select: {
        id: true,
        filename: true,
        originalName: true,
        size: true,
        uploadedAt: true,
        status: true,
        category: true,
        analysisComplete: true
      }
    })

    return NextResponse.json({ documents })

  } catch (error) {
    console.error("Documents fetch error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 