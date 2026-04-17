import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `Review the terms and conditions for using ${siteName} services.`,
  keywords: [
    'OneClickMed terms',
    'terms and conditions',
    'digital health terms',
    'healthcare platform legal terms',
  ],
  alternates: {
    canonical: '/terms-condition',
  },
  openGraph: {
    title: `${siteName} Terms and Conditions`,
    description: `Review the terms and conditions for using ${siteName} services.`,
    url: '/terms-condition',
    type: 'article',
  },
}

export default function TermsConditionPage() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-7xl px-6 pb-8 pt-28">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-dark md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-gray-600">Last updated: May 2, 2025</p>
        </div>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the
              OneClickMed website (www.oneclickmed.ng) and related services, applications, and platforms
              (together, the &quot;Service&quot;). By accessing or using the Service, you agree to be
              bound by these Terms and our Privacy Policy. If you do not agree, please refrain from using
              the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">2. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 18 years old and capable of entering into legally binding contracts.
              By using the Service, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">
              3. Account Registration &amp; Security
            </h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Registration:</span> To access certain features, you must
                create an account and provide accurate, complete information.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Credentials:</span> You are responsible for safeguarding
                your username, password, and any authentication methods. You agree to notify us
                immediately of any unauthorized use.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Account Use:</span> You may not share your account or
                transfer your rights under these Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">4. Use of the Service</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Permitted Use:</span> You may use the Service solely for
                lawful purposes and in accordance with these Terms.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Prohibited Conduct:</span> You agree not to (a) violate
                any laws or regulations; (b) infringe intellectual property or privacy rights; (c)
                transmit harmful code; (d) interfere with the Service&apos;s operation or security; (e)
                scrape or mine data; or (f) impersonate any person or entity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">
              5. Healthcare Information &amp; Disclaimer
            </h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">No Medical Advice:</span> The Service provides
                health-related information, tools, and telemedicine features. This information is not a
                substitute for professional medical advice, diagnosis, or treatment. Always seek the
                advice of a qualified healthcare provider.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">User Responsibility:</span> You are solely responsible for
                any reliance on information obtained through the Service. We do not guarantee accuracy,
                completeness, or timeliness of health content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">6. Fees &amp; Payment</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Pricing:</span> Certain features (e.g., premium
                subscriptions, paid scans) require payment. Pricing is as published on the Service.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Billing:</span> By subscribing, you authorize recurring
                charges to your chosen payment method until cancellation.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Refunds:</span> Refund policies are described in our Refund
                Policy. Unless required by applicable law, fees are non-refundable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">7. Intellectual Property</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Our Rights:</span> OneClickMed and its licensors own all
                rights, title, and interest in the Service, including software, content, trademarks, and
                logos.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Your Content:</span> You retain ownership of data and
                content you upload (&quot;Your Content&quot;). By submitting Your Content, you grant us a
                non-exclusive, worldwide, royalty-free license to use, store, and display it to provide
                the Service.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Restrictions:</span> You may not copy, modify, distribute,
                reverse engineer, or create derivative works of the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">
              8. Third-Party Services &amp; Links
            </h2>
            <p className="leading-relaxed">
              The Service may contain links to third-party websites or services. We do not control and
              are not responsible for their content, privacy practices, or terms. Your interactions with
              third parties are solely between you and the third party.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">9. Confidentiality</h2>
            <p className="leading-relaxed">
              We will treat your personal and health data in accordance with our Privacy Policy. You
              agree not to disclose confidential information you learn through the Service about other
              users or our operations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">
              10. Disclaimers &amp; Limitation of Liability
            </h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">&quot;As Is&quot; Disclaimer:</span> The Service is
                provided &quot;as is&quot; without warranties of any kind. We disclaim all implied
                warranties, including merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Limitation of Liability:</span> To the maximum extent
                permitted by law, OneClickMed&apos;s total liability for any claim arising out of or
                relating to these Terms or the Service will not exceed the fees you paid in the prior 12
                months. We are not liable for indirect, incidental, special, or consequential damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">11. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold OneClickMed, its affiliates, officers, directors,
              employees, and agents harmless from any claim, loss, liability, damages, or expenses
              (including legal fees) arising from your use of the Service, violation of these Terms, or
              infringement of any rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">12. Termination</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">By You:</span> You may close your account at any time via
                account settings or by contacting us.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">By Us:</span> We may suspend or terminate your access for
                violation of these Terms or if we cease operation of the Service.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Effect:</span> Upon termination, your right to use the
                Service ends, but Sections 7 (Intellectual Property), 10 (Limitation of Liability), 11
                (Indemnification), and 13 (General) survive.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">13. General Provisions</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Governing Law:</span> These Terms are governed by the laws
                of the Federal Republic of Nigeria, without regard to conflicts of law principles.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Dispute Resolution:</span> Any dispute arising under these
                Terms will be subject to the exclusive jurisdiction of courts in Abuja, Nigeria.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Severability:</span> If any provision is invalid or
                unenforceable, the remainder will remain in full force.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Waiver:</span> No waiver of any right will be effective
                unless in writing.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Entire Agreement:</span> These Terms, together with the
                Privacy Policy and any documents they incorporate, constitute the entire agreement between
                you and OneClickMed regarding the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">14. Changes to Terms</h2>
            <p className="leading-relaxed">
              We may revise these Terms from time to time. We will post the updated Terms at
              www.oneclickmed.ng/terms and update the &quot;Last updated&quot; date. Continued use after
              changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">15. Contact Information</h2>
            <p className="leading-relaxed">
              For questions or concerns about these Terms, please contact us at:
            </p>
            <div className="mt-2">
              <p className="leading-relaxed">
                Email:{' '}
                <a href="mailto:support@oneclickmed.ng" className="text-blue-600 hover:underline">
                  support@oneclickmed.ng
                </a>
              </p>
              <p className="leading-relaxed">Address: Flat 13, Plot 901, Katampe Main, Abuja, Nigeria</p>
            </div>
          </section>

          <div className="border-t pt-6">
            <p className="text-sm">
              By using OneClickMed, you acknowledge that you have read, understood, and agree to these
              Terms &amp; Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
