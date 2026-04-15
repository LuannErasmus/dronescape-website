import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with DroneScape for a free project consultation, quote request, or general enquiry. We respond within one business day.',
}

const contactDetails = [
  {
    label: 'Address',
    value: 'George,\nWestern Cape, South Africa\n6529',
    icon: LocationIcon,
    href: 'https://maps.google.com',
  },
  {
    label: 'Phone',
    value: ' 010 510 4399',
    icon: PhoneIcon,
    href: 'tel:+27105104399',
  },
  {
    label: 'Email',
    value: 'info@dronescape.co.za',
    icon: EmailIcon,
    href: 'mailto:info@dronescape.co.za',
  },
  {
    label: 'Hours',
    value: 'Mon – Fri: 8am – 6pm SAST\nSat: 9am – 3pm SAST',
    icon: ClockIcon,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#0f2e1a] via-[#1a5631] to-[#0f2e1a]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Let&apos;s Connect</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Need a quote? We&apos;d love to hear from you.
            Fill out the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="section-padding bg-gray-50 dot-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Contact Form (wider col) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
                <h2 className="text-2xl font-extrabold text-[#1a5631] mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  We respond to every enquiry within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* ── Info sidebar ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact cards */}
              {contactDetails.map(({ label, value, icon: Icon, href }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 items-start card-lift">
                  <div className="w-12 h-12 bg-[#f5981a]/10 border border-[#f5981a]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#1a5631] font-medium text-sm hover:text-[#f5981a] transition-colors duration-200 whitespace-pre-line"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#1a5631] font-medium text-sm whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Quick Answers</p>
            <h2 className="text-3xl font-extrabold text-[#1a5631] tracking-tight">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you respond to my enquiry?',
                a: 'We aim to respond to all enquiries within one business day. For urgent projects, call us directly at 010 510 4399.',
              },
              {
                q: 'Do you travel for projects outside of George?',
                a: 'Yes! We operate across South Africa and can arrange travel for large-scale or high-value projects. Additional travel fees may apply.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'It depends on scope. A real estate shoot is typically a half-day with 48-hour delivery. Mapping or inspection projects may span multiple days.',
              },
              {
                q: 'Are you SACAA certified?',
                a: 'All DroneScape pilots hold SACAA Remote Pilot Certificates and carry comprehensive liability insurance for every mission.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group border border-gray-100 rounded-2xl bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-[#1a5631] font-semibold text-sm">{q}</span>
                  <svg
                    className="shrink-0 ml-4 text-[#f5981a] transition-transform duration-200 group-open:rotate-45"
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5"  y1="12" x2="19" y2="12"/>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// All icons are imported from @/components/icons
