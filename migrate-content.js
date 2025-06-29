const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '75ssrg0n',
  dataset: 'production',
  apiVersion: '2025-06-28',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

console.log('🚀 Starting simplified content migration...')

async function createBasicContent() {
  try {
    // Create site settings
    console.log('📝 Creating site settings...')
    const settings = await client.create({
      _type: 'settings',
      title: 'DueReady',
      description: 'The fastest way to become fundable, acquirable and compliant',
      contactEmail: 'hello@dueready.com',
      ctaText: 'Book Your Free Readiness Assessment',
      tagline: 'The fastest way to become fundable, acquirable and compliant',
    })
    console.log('✅ Settings created')

    // Create a sample page
    console.log('📄 Creating sample page...')
    const page = await client.create({
      _type: 'page',
      title: 'Contact Us',
      slug: { current: 'contact' },
      description: 'Get in touch with our deal readiness experts.',
      heroTitle: 'Let\'s Make Your Startup Deal-Ready',
      heroSubtitle: 'Schedule a free consultation to discuss your goals.',
      published: true,
    })
    console.log('✅ Page created')

    // Create sample resources
    console.log('�� Creating sample resources...')
    const resource1 = await client.create({
      _type: 'resource',
      title: 'From Chaos to Closed: B2B SaaS Series A Case Study',
      slug: { current: 'chaos-to-closed' },
      type: 'case-study',
      category: 'case-studies',
      description: 'How professional deal readiness accelerated a Series A close.',
      readTime: '12 min read',
      featured: true,
      published: true,
      publishedAt: new Date().toISOString(),
    })

    const resource2 = await client.create({
      _type: 'resource',
      title: 'The Hidden Cost of Almost Ready',
      slug: { current: 'hidden-cost-almost-ready' },
      type: 'article',
      category: 'insights',
      description: 'Why last-minute due diligence prep kills deals.',
      readTime: '5 min read',
      featured: true,
      published: true,
      publishedAt: new Date().toISOString(),
    })

    const resource3 = await client.create({
      _type: 'resource',
      title: 'Complete Due Diligence Checklist',
      slug: { current: 'due-diligence-checklist' },
      type: 'checklist',
      category: 'templates',
      description: 'Comprehensive checklist for startup due diligence.',
      readTime: '15 min read',
      featured: true,
      published: true,
      publishedAt: new Date().toISOString(),
    })

    console.log('✅ Resources created')

    console.log('\n🎉 Content migration completed!')
    console.log('📋 Created:')
    console.log('• 1 site settings document')
    console.log('• 1 contact page')
    console.log('• 3 resource documents')
    console.log('\n🌐 Visit your studio: http://localhost:3005/studio')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    
    if (error.message.includes('token')) {
      console.log('\n🔑 You need to create a Sanity auth token:')
      console.log('1. Visit: https://manage.sanity.io/projects/75ssrg0n/settings/api')
      console.log('2. Create a new token with Editor permissions')
      console.log('3. Add to .env.local: SANITY_AUTH_TOKEN="your-token-here"')
      console.log('4. Then run: node migrate-content.js')
    }
  }
}

createBasicContent()
