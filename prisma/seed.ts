import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@dueready.com' },
    update: {},
    create: {
      email: 'demo@dueready.com',
      name: 'Demo User',
      role: 'FOUNDER',
      password: hashedPassword,
    },
  })

  console.log('✅ Created demo user:', demoUser.email)

  // Create sample documents
  const sampleDocuments = [
    {
      filename: 'cap_table_2024.xlsx',
      originalName: 'Cap Table 2024.xlsx',
      size: 156789,
      category: 'FINANCIAL',
      status: 'ANALYZED',
      analysisComplete: true,
    },
    {
      filename: 'employment_agreement.pdf',
      originalName: 'Employment Agreement - CEO.pdf',
      size: 234567,
      category: 'LEGAL',
      status: 'ANALYZED',
      analysisComplete: true,
    },
    {
      filename: 'privacy_policy.docx',
      originalName: 'Privacy Policy v2.1.docx',
      size: 45678,
      category: 'COMPLIANCE',
      status: 'PROCESSING',
      analysisComplete: false,
    },
  ]

  for (const doc of sampleDocuments) {
    await prisma.document.create({
      data: {
        ...doc,
        userId: demoUser.id,
        filePath: `/uploads/${doc.filename}`,
        encryptionKey: 'demo-encryption-key',
      },
    })
  }

  console.log('✅ Created sample documents')

  // Create sample analysis results
  const analyzedDocs = await prisma.document.findMany({
    where: { analysisComplete: true, userId: demoUser.id },
  })

  for (const doc of analyzedDocs) {
    await prisma.documentAnalysis.create({
      data: {
        documentId: doc.id,
        analysisResult: {
          summary: `Analysis completed for ${doc.originalName}`,
          keyFindings: ['Document structure is compliant', 'Minor formatting issues found'],
          riskLevel: 'LOW',
          completeness: 85,
        },
        aiPrompt: 'Analyze this document for compliance and completeness',
        aiResponse: 'Document analysis completed successfully',
        score: Math.floor(Math.random() * 30) + 70, // Score between 70-100
      },
    })

    // Add some flags for the first document
    if (doc.filename === 'cap_table_2024.xlsx') {
      await prisma.documentFlag.create({
        data: {
          documentId: doc.id,
          flagType: 'MISSING_INFO',
          severity: 'MEDIUM',
          description: 'Consider adding vesting schedules for all equity holders',
          resolved: false,
        },
      })
    }
  }

  console.log('✅ Created sample analysis data')

  // Create a sample report
  await prisma.report.create({
    data: {
      userId: demoUser.id,
      title: 'Q4 2024 Deal Readiness Report',
      status: 'COMPLETED',
      content: {
        overallScore: 78,
        sections: ['Legal Documents', 'Financial Records', 'Compliance'],
        recommendations: ['Update cap table', 'Review employment agreements'],
      },
    },
  })

  console.log('✅ Created sample report')
  console.log('🎉 Database seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 