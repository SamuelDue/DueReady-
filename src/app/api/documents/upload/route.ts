import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import crypto from "crypto"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/csv',
  'application/msword',
  'application/vnd.ms-excel'
]

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large. Max size is 10MB" }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "File type not supported" }, { status: 400 })
    }

    // Generate encryption key and storage key
    const encryptionKey = crypto.randomBytes(32).toString('hex')
    const storageKey = `${session.user.id}/${Date.now()}-${crypto.randomUUID()}`

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // TODO: Encrypt and store file (AWS S3 or similar)
    // For now, we'll simulate file storage
    console.log(`File would be stored at: ${storageKey}`)

    // Save document record to database
    const document = await prisma.document.create({
      data: {
        filename: `${Date.now()}-${file.name}`,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        storageKey,
        encryptionKey,
        userId: session.user.id,
        status: "UPLOADED"
      }
    })

    // TODO: Trigger async document processing
    // processDocumentAsync(document.id)

    return NextResponse.json({
      success: true,
      document: {
        id: document.id,
        filename: document.filename,
        originalName: document.originalName,
        size: document.size,
        status: document.status,
        uploadedAt: document.uploadedAt
      }
    })

  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 