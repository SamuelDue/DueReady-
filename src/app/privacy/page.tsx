import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      <Navbar />
      
      {/* Privacy Policy Content */}
      <section className="pt-32 pb-20 px-12 sm:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
            Privacy <span className="text-gray-400">Policy</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-gray-300 mb-8">
              <strong>Last Updated:</strong> December 20, 2024
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy explains how DueReady Collective ("DueReady," "we," "us," or "our") collects, uses, stores, protects, and shares your personal data when you use our website at dueready.com (the "Website"), our Readiness Assessment Tool, and our deal readiness services (collectively, the "Services").
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              We are committed to protecting your privacy and handling your personal data in a transparent and lawful manner, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">1. Who We Are</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                DueReady Collective is a deal readiness firm that provides specialized consulting and implementation services to startups, helping them prepare their financials, legal documentation, tech stack, and compliance for funding rounds, acquisitions, and enterprise deals.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our registered address is 3rd Floor, 86-90, Paul Street, London, England, United Kingdom, EC2A 4NE.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We are registered with the Information Commissioner's Office (ICO) under registration number ZB924306.
              </p>
            </section>
            
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">2. What Personal Data We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We may collect and process various types of personal data, depending on how you interact with our Services:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Identity & Contact Data:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">Name, email address, phone number, company name, job title, startup stage, and message content.</p>
                  <p className="text-gray-400 text-sm">Source: Directly from you via contact forms, inquiries, or assessment tool submissions.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Website Usage Data:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">Information about how you use our Website, including your IP address, browser type and version, time zone setting, operating system and platform, and other technology on the devices you use to access this Website.</p>
                  <p className="text-gray-400 text-sm">Source: Automatically collected via cookies and analytics tools (e.g., Google Analytics).</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Readiness Assessment Data:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">All information and answers you provide when using our online Readiness Assessment Tool, which may include sensitive details about your startup's financial practices, legal setup, tech infrastructure, compliance status, business strategy, and personal/company information. This is stored locally in your browser and may be processed to generate customized results.</p>
                  <p className="text-gray-400 text-sm">Source: Directly from you via the assessment tool with explicit consent.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client Project Data (Highly Sensitive):</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">If you become a client, we will collect and process highly sensitive personal and business data necessary to provide our deal readiness services. This may include:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-2">
                    <li>Detailed financial records (P&L, balance sheets, cap tables, payroll data).</li>
                    <li>Legal documents (contracts, intellectual property assignments, corporate governance records, employee agreements).</li>
                    <li>Technical documentation (system architectures, security policies).</li>
                    <li>Compliance records (GDPR, ISO readiness, HR policies, data breach plans).</li>
                    <li>Personal data of founders, employees, and potentially customers of your startup contained within these documents.</li>
                  </ul>
                  <p className="text-gray-400 text-sm">Source: Directly from you, often via a secure Virtual Data Room (VDR).</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collective Member Data:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">For individuals who join our "Collective" as independent contractors/consultants, we collect professional profiles, contact details, payment information, vetting documentation (e.g., certifications, references), and project performance data.</p>
                  <p className="text-gray-400 text-sm">Source: Directly from the individual.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marketing & Communication Data:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">Your preferences in receiving marketing from us and your communication preferences.</p>
                  <p className="text-gray-400 text-sm">Source: Directly from you.</p>
                </div>
              </div>
            </section>
            
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">3. How We Collect Your Personal Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use different methods to collect data from and about you, including:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Direct Interactions:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">You provide data directly when you:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Fill out forms on our Website (e.g., contact form, Readiness Assessment).</li>
                    <li>Communicate with us via email, phone, or live chat.</li>
                    <li>Sign up for our services as a client.</li>
                    <li>Apply to join our Collective as an expert.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automated Technologies or Interactions:</h3>
                  <p className="text-gray-300 leading-relaxed">As you interact with our Website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies and other similar technologies.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Third Parties or Publicly Available Sources:</h3>
                  <p className="text-gray-300 leading-relaxed">We may receive personal data about you from various third parties and public sources, such as analytics providers (e.g., Google Analytics), information providers (e.g., Crunchbase, PitchBook, LinkedIn).</p>
                </div>
              </div>
            </section>
            
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">4. How We Use Your Personal Data and Our Legal Bases</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 text-sm">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-700 px-4 py-2 text-left text-white">Purpose of Processing</th>
                      <th className="border border-gray-700 px-4 py-2 text-left text-white">Type of Data Collected</th>
                      <th className="border border-gray-700 px-4 py-2 text-left text-white">Legal Basis for Processing</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">To provide and manage our Services</td>
                      <td className="border border-gray-700 px-4 py-2">Identity & Contact Data, Client Project Data, Collective Member Data</td>
                      <td className="border border-gray-700 px-4 py-2">Performance of a contract with you (or to take steps at your request before entering into a contract).</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="border border-gray-700 px-4 py-2">To respond to your inquiries and requests</td>
                      <td className="border border-gray-700 px-4 py-2">Identity & Contact Data, Readiness Assessment Data</td>
                      <td className="border border-gray-700 px-4 py-2">Our legitimate interests (to respond to queries, build relationships, and grow our business).</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">To process your Readiness Assessment submission</td>
                      <td className="border border-gray-700 px-4 py-2">Identity & Contact Data, Readiness Assessment Data</td>
                      <td className="border border-gray-700 px-4 py-2">Your consent (when you submit the assessment) and our legitimate interests (to provide you with tailored insights and potentially offer our services).</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="border border-gray-700 px-4 py-2">To process contact form submissions</td>
                      <td className="border border-gray-700 px-4 py-2">Identity & Contact Data (name, email, company, startup stage, message content)</td>
                      <td className="border border-gray-700 px-4 py-2">Your consent (provided when submitting the form) and our legitimate interests (to respond to inquiries and provide requested information).</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">To send you marketing communications</td>
                      <td className="border border-gray-700 px-4 py-2">Identity & Contact Data, Marketing & Communication Data</td>
                      <td className="border border-gray-700 px-4 py-2">Your consent (where required) or our legitimate interests (for existing clients, to inform them about relevant services). You can opt-out at any time.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            {/* Section 5 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>
            
            {/* Section 6 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p className="text-gray-300 leading-relaxed">
                To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
              </p>
            </section>
            
            {/* Section 7 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">7. Disclosure of Your Personal Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your personal data with the following parties for the purposes outlined in Section 4:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Members of our Collective:</h3>
                  <p className="text-gray-300 leading-relaxed">Specific expert consultants and contractors within the DueReady Collective who are assigned to your project, on a strict need-to-know basis, and subject to robust confidentiality and data processing agreements.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Third-Party Service Providers:</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">External providers who perform services on our behalf, such as:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Virtual Data Room (VDR) providers (Digify)</li>
                    <li>Project management software providers (Notion)</li>
                    <li>Website analytics providers (Google Analytics)</li>
                    <li>Email marketing service providers</li>
                    <li>Payment processors</li>
                    <li>IT and system administration services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Professional Advisors:</h3>
                  <p className="text-gray-300 leading-relaxed">Including lawyers, accountants, and insurers who provide consulting, banking, legal, insurance, and accounting services.</p>
                </div>
              </div>
            </section>
            
            {/* Section 9 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">9. Your Legal Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing of your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed">
                You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance.
              </p>
            </section>
            
            {/* Section 11 - Contact */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data protection practices, please contact us at:
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-md p-6">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> hello@dueready.com</p>
                <p className="text-gray-300"><strong>Postal Address:</strong> 3rd Floor, 86-90, Paul Street, London, England, United Kingdom, EC2A 4NE</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 