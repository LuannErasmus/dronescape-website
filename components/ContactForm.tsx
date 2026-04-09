'use client'

import { useState, FormEvent } from 'react'
import { Spinner } from '@/components/icons'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const services = [
  'Yardage and Green Book Mapping',
  'Turf health Monitoring and Land Assessment',
  'Aerial Surveying and Land Mapping',
  'Precision Agriculture and Crop Spraying',
  'Real Estate and Construction Progress Monitoring',
  'Search, Security and Surveillance',
  'Cinematic Photography and Videography',
  'Solar Panel and Roof Inspections',
  'Other / Not Sure',
]

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Send failed')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-5">
        <div className="w-20 h-20 rounded-full bg-[#f5981a]/10 border-2 border-[#f5981a]/30 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f5981a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-[#1f2e4d]">Message Received!</h3>
        <p className="text-gray-500 max-w-sm">
          Thank you, <strong>{form.name}</strong>. We&apos;ll review your enquiry and
          get back to you at <strong>{form.email}</strong>
        </p>
        <button
          onClick={() => { setFormState('idle'); setForm({ name:'', email:'', phone:'', company:'', service:'', message:'' }) }}
          className="mt-2 text-sm text-[#f5981a] font-semibold hover:underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
            Full Name <span className="text-[#f5981a]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
            Email Address <span className="text-[#f5981a]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Corp"
            value={form.company}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Service select */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="form-input appearance-none cursor-pointer"
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
          Project Details <span className="text-[#f5981a]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — location, scope, timeline, and any specific requirements…"
          value={form.message}
          onChange={handleChange}
          className="form-input resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-gray-400 leading-relaxed">
        By submitting this form you agree to our{' '}
        <a href="#" className="underline underline-offset-2 hover:text-[#f5981a] transition-colors">Privacy Policy</a>.
        We never share your information with third parties.
      </p>

      {/* Error message */}
      {formState === 'error' && (
        <p className="text-sm text-red-500 font-medium text-center">
          Something went wrong — please try again or email us directly at{' '}
          <a href="mailto:luannerasmus2007@gmail.com" className="underline underline-offset-2">
            luannerasmus2007@gmail.com
          </a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-[#1f2e4d] hover:bg-[#f5981a] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {formState === 'submitting' ? (
          <>
            <Spinner />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

// Spinner is imported from @/components/icons
