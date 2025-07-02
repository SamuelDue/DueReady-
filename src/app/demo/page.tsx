export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="/dueready-logo-dark.png" 
            alt="DueReady" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4">
            DueReady AutoDiligence
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            AI-Powered Deal Readiness Platform - Demo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-white font-medium">Documents Uploaded</div>
            <div className="text-gray-400 text-sm">Ready for analysis</div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-white font-medium">Analyzed</div>
            <div className="text-gray-400 text-sm">AI processing complete</div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">78%</div>
            <div className="text-white font-medium">Readiness Score</div>
            <div className="text-gray-400 text-sm">Deal ready status</div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-400 mb-2">3</div>
            <div className="text-white font-medium">Critical Flags</div>
            <div className="text-gray-400 text-sm">Need attention</div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚀 SaaS Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">✅ Implemented</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• User Authentication (NextAuth.js)</li>
                <li>• Document Upload & Validation</li>
                <li>• Database Schema (Prisma)</li>
                <li>• Dashboard Components</li>
                <li>• AI Analysis Pipeline</li>
                <li>• Secure File Handling</li>
                <li>• Role-based Access Control</li>
                <li>• Progress Tracking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">🔧 Setup Required</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PostgreSQL Database</li>
                <li>• OpenAI API Key</li>
                <li>• Environment Variables</li>
                <li>• Database Migration</li>
                <li>• File Storage Setup</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-600/20 border border-blue-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">🎯 Ready for Production</h3>
            <p className="text-gray-300 mb-4">
              The DueReady SaaS platform foundation is complete! All core components are built and ready for deployment.
            </p>
            <div className="flex gap-4">
              <a 
                href="/dashboard" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                View Dashboard
              </a>
              <a 
                href="/auth/signin" 
                className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 