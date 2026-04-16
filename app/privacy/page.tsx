import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DroneScape Privacy Policy — how we collect, use, and protect your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you interact with DroneScape through our website, contact forms, or service enquiries, we may collect the following types of personal information:',
      '**Contact Information:** Your full name, email address, phone number, and company or organisation name, as provided when submitting an enquiry or booking a service.',
      '**Service Details:** Information relating to your project, including location, scope of work, preferred timelines, and any specific requirements you share with us.',
      '**Technical Data:** When you visit our website, we may automatically collect certain technical information, including your IP address, browser type and version, operating system, pages visited, and time spent on the site. This data is collected through standard web technologies and is used solely for website performance and analytics purposes.',
      '**Communication Records:** Records of correspondence between you and DroneScape, including emails, form submissions, and any follow-up communications.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'DroneScape collects and uses your personal information for the following purposes:',
      '**Service Delivery:** To respond to your enquiries, prepare proposals, schedule drone operations, and deliver the aerial services you have requested.',
      '**Communication:** To keep you informed about the progress of your project, share relevant updates, and respond to any questions or concerns you may have.',
      '**Legal Compliance:** To comply with applicable South African legislation, including the Protection of Personal Information Act (POPIA), Civil Aviation Authority (SACAA) regulations, and any other relevant legal obligations.',
      '**Business Improvement:** To analyse how our services are used and improve the quality of our offerings, website experience, and customer support.',
      '**Marketing (with consent):** If you have opted in to receive marketing communications, we may occasionally send you relevant news, service updates, or promotional information. You may withdraw this consent at any time.',
    ],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [
      'DroneScape processes your personal information on the following legal grounds, in accordance with the Protection of Personal Information Act (POPIA) No. 4 of 2013:',
      '**Contractual Necessity:** Processing required to fulfil a service agreement or to take steps at your request prior to entering into such an agreement.',
      '**Legal Obligation:** Processing necessary to comply with applicable South African law, including SACAA regulations governing drone operations.',
      '**Legitimate Interests:** Processing that is necessary for our legitimate business interests, such as maintaining records, improving our services, and ensuring the security of our operations, provided such interests are not overridden by your rights.',
      '**Consent:** Where we rely on your consent to process your information — for example, for marketing communications — you may withdraw that consent at any time by contacting us.',
    ],
  },
  {
    title: '4. Data Sharing and Disclosure',
    content: [
      'DroneScape does not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:',
      '**Service Providers:** We may share information with trusted third-party service providers who assist us in operating our business, such as email hosting providers, cloud storage services, or scheduling platforms. These parties are contractually obligated to handle your data securely and only for the purposes we specify.',
      '**Legal Requirements:** We may disclose your information if required to do so by law, court order, or regulatory authority, or where we believe disclosure is necessary to protect the rights, property, or safety of DroneScape, our clients, or the public.',
      '**Business Transfers:** In the event of a merger, acquisition, or sale of business assets, your personal information may be transferred as part of that transaction. We will notify you of any such change and ensure your data remains protected.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law.',
      'Client project records are typically retained for a period of five (5) years following the completion of services, in accordance with standard business and legal requirements.',
      'Website enquiry data and contact form submissions are retained for a period of two (2) years, after which they are securely deleted.',
      'You may request the deletion of your personal information at any time, subject to any overriding legal obligations that require us to retain certain records.',
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'DroneScape takes the security of your personal information seriously. We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, alteration, or disclosure.',
      'These measures include secure data storage, access controls, encrypted communications, and regular review of our security practices.',
      'While we take all reasonable precautions, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your data, but we are committed to responding promptly to any security incidents.',
    ],
  },
  {
    title: '7. Your Rights Under POPIA',
    content: [
      'As a data subject under the Protection of Personal Information Act (POPIA), you have the following rights regarding your personal information:',
      '**Right of Access:** You have the right to request a copy of the personal information we hold about you.',
      '**Right to Correction:** You may request that we correct any inaccurate, incomplete, or outdated information.',
      '**Right to Deletion:** You may request that we delete your personal information, subject to any legal obligations requiring its retention.',
      '**Right to Object:** You have the right to object to the processing of your personal information in certain circumstances, including for direct marketing purposes.',
      '**Right to Complain:** If you believe your rights under POPIA have been violated, you have the right to lodge a complaint with the Information Regulator of South Africa.',
      'To exercise any of these rights, please contact us using the details provided in Section 9 below.',
    ],
  },
  {
    title: '8. Cookies and Website Analytics',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather anonymised usage statistics.',
      'Cookies are small text files stored on your device when you visit a website. We use cookies for the following purposes: remembering your preferences, understanding how visitors use our site, and improving website performance.',
      'You may configure your browser to refuse cookies or to alert you when cookies are being sent. Please note that some features of our website may not function correctly if cookies are disabled.',
      'We do not use cookies to collect personally identifiable information without your knowledge or consent.',
    ],
  },
  {
    title: '9. Contact and Complaints',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us:',
      '**DroneScape (Pty) Ltd**',
      'George, Western Cape, 6529, South Africa',
      'Email: info@dronescape.co.za',
      'Phone: 010 510 4399',
      'We will respond to all privacy-related requests within 10 business days. If you are not satisfied with our response, you may contact the Information Regulator of South Africa at inforeg.org.za.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'DroneScape reserves the right to update or amend this Privacy Policy at any time to reflect changes in our business practices, legal obligations, or applicable regulations.',
      'Any significant changes will be communicated by updating the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.',
      'Your continued use of our website or services after any changes to this policy constitutes your acceptance of the updated terms.',
    ],
  },
]

export default function PrivacyPage() {
  const effectiveDate = 'April 2025'

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#0f2e1a] via-[#1a5631] to-[#0f2e1a]">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 bg-[#f5981a]/15 border border-[#f5981a]/30 text-[#f5981a] text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            Legal Document
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Effective date: {effectiveDate} &nbsp;·&nbsp; DroneScape (Pty) Ltd
          </p>
        </div>
      </section>

      {/* ── Intro banner ── */}
      <div className="bg-[#f5981a]/8 border-b border-[#f5981a]/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-6">
          <p className="text-[#1a5631] text-sm leading-relaxed">
            At DroneScape, we are committed to protecting your privacy and handling your personal
            information responsibly. This Privacy Policy explains what information we collect, how
            we use it, and your rights under the Protection of Personal Information Act (POPIA).
            Please read it carefully.
          </p>
        </div>
      </div>

      {/* ── Policy content ── */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">

          {/* Table of contents */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-14">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.title}>
                  <a
                    href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-sm text-[#1a5631] hover:text-[#f5981a] transition-colors duration-150 font-medium"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-14">
            {sections.map((s) => (
              <div
                key={s.title}
                id={s.title.replace(/\s+/g, '-').toLowerCase()}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 bg-[#f5981a] rounded-full shrink-0" />
                  <h2 className="text-xl font-extrabold text-[#1a5631] tracking-tight">{s.title}</h2>
                </div>
                <div className="space-y-4 pl-4 border-l border-gray-100">
                  {s.content.map((para, i) => {
                    // Render **bold** segments
                    const parts = para.split(/\*\*(.*?)\*\*/g)
                    return (
                      <p key={i} className="text-gray-500 text-sm leading-relaxed">
                        {parts.map((part, j) =>
                          j % 2 === 1
                            ? <strong key={j} className="text-[#1a5631] font-semibold">{part}</strong>
                            : part
                        )}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} DroneScape (Pty) Ltd · All rights reserved
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#f5981a] font-semibold hover:underline underline-offset-2"
            >
              Contact us with questions →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
