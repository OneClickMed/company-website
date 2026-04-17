import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Read how ${siteName} collects, uses, and protects personal and health data.`,
  keywords: [
    'OneClickMed privacy policy',
    'health data privacy',
    'digital health privacy',
    'personal data protection',
  ],
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: `${siteName} Privacy Policy`,
    description: `Read how ${siteName} collects, uses, and protects personal and health data.`,
    url: '/privacy-policy',
    type: 'article',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-7xl px-6 pb-8 pt-28">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-dark md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: May 2, 2025</p>
        </div>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">1. Introduction</h2>
            <p className="leading-relaxed">
              OneClickMed (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting the privacy of visitors (&quot;you&quot; or &quot;your&quot;) to our website at
              www.oneclickmed.ng (&quot;Site&quot;) and users of our digital health platform. This Privacy
              Policy explains what information we collect, how we use and share it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">2. Information We Collect</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Personal Data You Provide:</span> When you register for
                an account, join our waitlist, subscribe to newsletters, request demos, or contact us,
                we collect name, email address, phone number, health-ID details, and other information
                you submit.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Usage Data:</span> We automatically gather data about your
                interactions with the Site and app, including pages viewed, features used, device type,
                browser, IP address, and location data.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Health Data:</span> With your consent, we collect and
                store electronic health record data (medical history, prescriptions, lab results) entered
                by you or participating providers.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Cookies &amp; Tracking:</span> We use cookies, web
                beacons, and similar technologies to enhance Site functionality, remember preferences,
                and analyze Site usage. You may disable cookies in your browser settings, though some
                features may cease to function.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">3. How We Use Your Information</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Platform Delivery:</span> To provide, maintain, and
                improve our EHR system, telemedicine, appointment booking, emergency services, and other
                features.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Customer Support:</span> To respond to inquiries,
                troubleshoot issues, and communicate updates.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Personalization &amp; Engagement:</span> To send relevant
                health tips, prescription reminders, appointment confirmations, and marketing
                communications where permitted.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Analytics &amp; Quality Improvement:</span> To analyze
                trends, usage patterns, and enhance platform performance, security, and user experience.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Compliance &amp; Safety:</span> To comply with legal
                obligations, protect user safety, detect and prevent fraud or abuse, and enforce our
                Terms of Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">
              4. Data Sharing &amp; Disclosure
            </h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">With Healthcare Providers:</span> We share your health
                data with your chosen providers to enable continuity of care and treatment coordination.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Emergency Services:</span> With ambulance and
                emergency-response partners when you request urgent care.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Service Providers:</span> With trusted third-party vendors
                (cloud hosts, analytics, payment processors) under strict confidentiality agreements.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Legal Requirements:</span> If required by law, court
                order, or to protect rights, safety, or property of OneClickMed, our users, or the
                public.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement administrative, technical, and physical safeguards, including encryption (in
              transit and at rest), secure access controls, regular security audits, and staff training,
              to protect your information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain personal and health data as long as necessary to fulfill the purposes outlined,
              including account maintenance, legal compliance, dispute resolution, and system improvement.
              You may request deletion of your account and data at any time (see Section 8).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">7. Your Rights &amp; Choices</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <span className="font-medium">Access &amp; Correction:</span> You can view or update
                your profile and health data within the app or by contacting us.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Deletion:</span> Request account closure and data
                deletion; we will erase your data except where retention is required by law.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Communications Preferences:</span> Opt out of marketing
                emails via the unsubscribe link; transactional messages cannot be opted out.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium">Cookie Settings:</span> Manage cookie preferences in your
                browser; see our Cookie Policy for details.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">8. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our platform is not directed to children under 18. We do not knowingly collect personal
              data from minors. If we learn of such collection, we will delete the information promptly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">9. International Transfers</h2>
            <p className="leading-relaxed">
              Data may be processed in Nigeria or in other countries where our service providers reside.
              We ensure appropriate safeguards (standard contractual clauses) to protect data when
              transferred across borders.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">10. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this policy periodically. We will post the revised date at the top and, if
              changes are material, notify you via email or in-app notice before they take effect.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-blue-dark">11. Contact Us</h2>
            <p className="leading-relaxed">For questions, requests, or privacy concerns, please contact:</p>
            <div className="mt-2">
              <p className="leading-relaxed">
                Email:{' '}
                <a href="mailto:privacy@oneclickmed.ng" className="text-blue-600 hover:underline">
                  privacy@oneclickmed.ng
                </a>
              </p>
              <p className="leading-relaxed">Address: Flat 13, Plot 901, Katampe Main, Abuja, Nigeria</p>
            </div>
          </section>

          <div className="border-t pt-6">
            <p className="text-sm">By using OneClickMed, you consent to this Privacy Policy.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
