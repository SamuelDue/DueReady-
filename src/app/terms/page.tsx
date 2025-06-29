import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white">
      <Navbar />
      
      {/* Terms and Conditions Content */}
      <section className="pt-32 pb-20 px-12 sm:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight font-[family-name:var(--font-space-grotesk)] leading-tight">
            Terms and Conditions <span className="text-gray-400">of Service</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-gray-300 leading-relaxed">
              These Terms and Conditions ("Terms") govern your access to and use of the services provided by DueReady Ltd. (trading as "DueReady Collective," "DueReady," "we," "us," or "our"), a company registered in England and Wales under company number 16546398, with its registered office at 3rd Floor, 86-90, Paul Street, London, England, United Kingdom, EC2A 4NE.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              By engaging our Services, you ("Client," "you," or "your") agree to be bound by these Terms. Please read them carefully. If you do not agree to these Terms, you must not use our Services.
            </p>
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">1. Definitions</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Agreement:</strong> These Terms and Conditions, together with any Statement of Work (SOW) or proposal mutually agreed upon and signed by both DueReady and the Client.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Client:</strong> The individual, company, or legal entity engaging DueReady for Services.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Collective:</strong> The network of independent, senior financial, legal, technical, and compliance experts engaged by DueReady to deliver the Services.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Confidential Information:</strong> Any non-public information disclosed by one party to the other, whether directly or indirectly, in writing, orally, or by inspection of tangible objects, including but not limited to trade secrets, business plans, financial data, intellectual property, customer data, and personal data.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Services:</strong> The deal readiness services provided by DueReady, including but not limited to pre-due diligence audits, data room preparation, compliance cleanup, financial reconciliation, legal readiness, and technical assessments, as specified in the SOW.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">2. Scope of Services</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>2.1</strong> DueReady agrees to provide the Services to the Client as described in the mutually agreed and signed SOW.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>2.2</strong> The Services are provided on a fixed-fee, project-based model. Any work falling outside the agreed scope of Services in the SOW will require a new SOW or an agreed change order, which may incur additional fees.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>2.3</strong> DueReady utilises its Collective of independent experts to deliver the Services. The Client acknowledges and agrees that individual Collective members are engaged by DueReady and are not employees of the Client.
                </p>
              </div>
            </section>
            
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">3. Client Responsibilities</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>3.1</strong> The Client agrees to provide all necessary information, access to systems (where agreed), documents, data, and personnel (including founders, employees, and advisors) promptly and accurately as reasonably required by DueReady for the provision of the Services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>3.2</strong> The Client acknowledges that the accuracy, completeness, and timeliness of the information provided by the Client are critical to DueReady's ability to deliver the Services effectively. DueReady shall not be liable for any delays or deficiencies in the Services resulting from the Client's failure to meet its responsibilities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>3.3</strong> The Client is responsible for making all ultimate business decisions related to its fundraising, acquisition, or compliance strategies. DueReady provides preparatory and advisory services; DueReady does not make investment decisions for the Client, nor does it guarantee the success of any funding round or acquisition.
                </p>
              </div>
            </section>
            
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">4. Fees and Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>4.1</strong> The Client shall pay DueReady the Fixed Fee for the Services as specified in the SOW.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>4.2</strong> Unless otherwise agreed in the SOW, the payment schedule shall be 50% of the Fixed Fee upfront upon signing the SOW, and the remaining 50% upon delivery of the final Deliverables.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>4.3</strong> All fees are exclusive of VAT, which shall be added at the prevailing rate where applicable.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>4.4</strong> Invoices are due and payable within 7 days from the date of invoice.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>4.5</strong> If any payment is not made by the due date, DueReady reserves the right to suspend the Services until payment is received, and to charge interest on overdue amounts at a rate of 5% per annum above the Bank of England base rate, compounded daily.
                </p>
              </div>
            </section>
            
            {/* Section 5 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">5. Confidentiality</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>5.1</strong> Both parties agree to keep all Confidential Information received from the other party strictly confidential and shall not disclose it to any third party without the prior written consent of the disclosing party, except as required by law or as necessary for the performance of the Services (subject to appropriate confidentiality undertakings).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>5.2</strong> DueReady will ensure that all members of its Collective engaged on your project are bound by confidentiality agreements consistent with these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>5.3</strong> The confidentiality obligations shall survive the termination of this Agreement for a period of 3 years.
                </p>
              </div>
            </section>
            
            {/* Section 8 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">8. Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>8.1</strong> Nothing in these Terms limits or excludes our liability for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Death or personal injury caused by our negligence;</li>
                  <li>Fraud or fraudulent misrepresentation;</li>
                  <li>Any other liability that cannot be limited or excluded by law.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  <strong>8.2</strong> Subject to Clause 8.1, DueReady's total aggregate liability to the Client arising under or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall in no circumstances exceed the total Fixed Fees paid by the Client to DueReady under the relevant SOW for the Services giving rise to the claim in the 6-month period preceding the event giving rise to the claim.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>8.4</strong> DueReady is not responsible for the ultimate success of any funding round, acquisition, or regulatory approval. Our Services are limited to preparing the Client for these events.
                </p>
              </div>
            </section>
            
            {/* Section 10 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">10. Termination</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>10.1</strong> Either party may terminate this Agreement by providing 20 days' written notice to the other party if there is no active SOW in place.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>10.2</strong> Either party may terminate a specific SOW or this Agreement immediately by written notice if the other party:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Commits a material breach of these Terms or the SOW and (if such breach is remediable) fails to remedy that breach within 14 days of being notified in writing to do so.</li>
                  <li>Becomes insolvent or enters into any form of insolvency proceedings.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  <strong>10.3</strong> Upon termination of an SOW or this Agreement:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>The Client shall immediately pay any outstanding fees owed to DueReady for Services rendered up to the date of termination.</li>
                  <li>DueReady shall cease providing Services and return or securely delete (as per instructions) any Client Confidential Information.</li>
                </ul>
              </div>
            </section>
            
            {/* Section 13 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">13. Governing Law and Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed">
                This Agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales. Each party irrevocably agrees that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this Agreement or its subject matter or formation (including non-contractual disputes or claims).
              </p>
            </section>
            
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
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