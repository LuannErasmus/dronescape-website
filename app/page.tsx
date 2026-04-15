import type { Metadata } from 'next'
import Link from 'next/link'
import Marquee from '../components/Marquee'
import {
  CameraIcon,
  FlagIcon, SproutIcon, DropletIcon, EyeIcon, SunIcon, MapPlusIcon, HouseIcon
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'DroneScape',
}

/* ─────────────────────────────────────────────
   Marquee items — text + small inline icon
───────────────────────────────────────────── */
const marqueeItems = [
  { text: 'Site progress monitoring',          icon: () => <MarqueeDot /> },
  { text: '3D Mapping & Surveying',                       icon: () => <MarqueeDot /> },
  { text: 'Volumetric Measurements',                 icon: () => <MarqueeDot /> },
  { text: 'Aerial Property Photography',                  icon: () => <MarqueeDot /> },
  { text: 'Cinematic Property Videography',                          icon: () => <MarqueeDot /> },
  { text: 'Crop & Land Analysis',                icon: () => <MarqueeDot /> },
  { text: 'Forestry Monitoring & Management',                icon: () => <MarqueeDot /> },
  { text: 'Search & Rescue Support',         icon: () => <MarqueeDot /> },
  { text: 'Roof & Infrastructure Inspections',        icon: () => <MarqueeDot /> },
  { text: 'Power Line & Utility Inspections',    icon: () => <MarqueeDot /> },
  { text: 'Aerial Cinematography & Content Creation',    icon: () => <MarqueeDot /> },
]

/* Tiny helpers used only inside marqueeItems */
function MarqueeDot() {
  return <span className="text-[#1f2e4d] text-base leading-none select-none">✦</span>
}
function MarqueeIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1f2e4d]/15 border border-[#1f2e4d]/25">
      {children}
    </span>
  )
}

/* ─────────────────────────────────────────────
   8 Services that link through to /services
───────────────────────────────────────────── */
const services = [
  {
    id: 'yardage-mapping',
    icon: FlagIcon,
    title: 'Yardage and Green Book Mapping',
    description: 'Detailed golf course mapping for accurate yardage, strategy, and green contour insights.',
    color: 'from-green-600/20 to-green-800/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'turf-monitoring',
    icon: SproutIcon,
    title: 'Turf health Monitoring and Land Assessment',
    description: 'Uses aerial data to analyze turf condition, stress, and overall land health.',
    color: 'from-lime-500/20 to-lime-700/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'aerial-surveying',
    icon: MapPlusIcon,
    title: 'Aerial Surveying and Land Mapping',
    description: 'High-resolution aerial data collection for accurate mapping, measurements, and terrain analysis.',
    color: 'from-sky-400/20 to-sky-600/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'agriculture',
    icon: DropletIcon,
    title: 'Precision Agriculture and Crop Spraying',
    description: 'Targeted spraying and monitoring to optimise crop health, yield, and resource efficiency.',
    color: 'from-emerald-500/20 to-emerald-700/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'real-estate',
    icon: HouseIcon,
    title: 'Real Estate and Construction Progress Monitoring',
    description: 'Tracks site development with aerial imagery for reporting, planning, and project management.',
    color: 'from-orange-400/20 to-orange-600/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'security',
    icon: EyeIcon,
    title: 'Search, Security and Surveillance',
    description: 'Provides aerial monitoring for safety, tracking, inspections, and real-time situational awareness.',
    color: 'from-red-400/20 to-red-600/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'photography',
    icon: CameraIcon,
    title: 'Cinematic Photography and Videography',
    description: 'Captures high-quality aerial visuals for marketing, storytelling, and professional media production.',
    color: 'from-purple-400/20 to-purple-600/20',
    stroke: '#1f2e4d',
  },
  {
    id: 'roof-inspections',
    icon: SunIcon,
    title: 'Solar Panel and Roof Inspections',
    description: 'Inspects panels and roofs for damage, faults, and maintenance needs using aerial imaging.',
    color: 'from-yellow-400/20 to-yellow-600/20',
    stroke: '#1f2e4d',
  },
]

/* ─────────────────────────────────────────────
   Stats
───────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '12+',  label: 'Years of Experience' },
  { value: '50+',  label: 'Certified Pilots' },
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />

        {/* Dark overlay so text stays readable over the video */}
        <div className="absolute inset-0 bg-[#0d1626]/60" />

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-40" />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f5981a]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Orange accent rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#f5981a]/10 rounded-full animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#f5981a]/5 rounded-full animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">


          {/* Eyebrow */}
          <div className="animate-fade-up opacity-0-init delay-100 inline-flex items-center gap-2 bg-[#f5981a]/15 border border-[#f5981a]/30 text-[#f5981a] text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5981a] animate-pulse" />
            SACAA Certified Drone Services
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up opacity-0-init delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Elevate Your<br />
            <span className="gradient-text">Perspective</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up opacity-0-init delay-300 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            DroneScape delivers world-class aerial solutions. From professional photography to
            crop spraying and other agricultural needs, powered by cutting-edge technology and expert pilots.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0-init delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto bg-[#f5981a] hover:bg-[#e8880a] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/25 hover:border-white/50 text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/5 backdrop-blur-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

      
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <section className="bg-[#f5981a] py-4 select-none">
        <Marquee speed={40} gap={2.5}>
          {marqueeItems.map(({ text, icon: Icon }, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <span className="text-[#1f2e4d] text-sm font-semibold uppercase tracking-widest whitespace-nowrap">
                {text}
              </span>
              <Icon />
            </div>
          ))}
        </Marquee>
      </section>



      {/* ══════════════════ SERVICES OVERVIEW ══════════════════ */}
      <section className="section-padding dot-pattern bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">What We Offer</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1f2e4d] mb-5 tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              From cinematic video to precision data collection — every DroneScape service is
              delivered with professional-grade equipment and expert pilots.
            </p>
          </div>

          {/* 8-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ id, icon: Icon, title, description, color, stroke }) => (
              <Link
                key={id}
                href={`/services#${id}`}
                className="card-lift group bg-white rounded-2xl p-7 border border-gray-100 flex flex-col gap-4 cursor-pointer"
              >
                {/* Icon bubble */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center border border-[#1f2e4d]/10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon stroke={stroke} />
                </div>

                <div>
                  <h3 className="text-[#1f2e4d] font-bold text-base mb-1.5 group-hover:text-[#f5981a] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Arrow */}
                <div className="mt-auto flex items-center gap-1.5 text-[#f5981a] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA below grid */}
          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#1f2e4d] hover:bg-[#162240] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-navy/20"
            >
              View All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY US ══════════════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text side */}
            <div>
              <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Why DroneScape</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1f2e4d] mb-6 tracking-tight leading-tight">
                Precision. Quality.<br />Results.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                We combine the finest drone hardware with deep technical expertise and creative vision.
                Every mission is planned meticulously and executed with zero compromise.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'SACAA Certified', desc: 'Fully compliant with SACAA regulations, ensuring safe, legal, and professional drone operations.' },
                  { title: 'Advanced Technology', desc: 'We use cutting-edge drone technology to deliver accurate data and high-quality results.' },
                  { title: 'Efficient & Cost-Effective', desc: 'Our solutions save time, reduce costs, and deliver faster results than traditional methods.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#f5981a]/15 border border-[#f5981a]/30 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f2e4d" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#1f2e4d] font-semibold mb-1">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#f5981a] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Learn about us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-square">
                <img
                  src="/why-us-photo.jpg"
                  alt="DroneScape in action"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
                <p className="text-[#f5981a] font-extrabold text-xl">Fully Insured Operations</p>
                <p className="text-gray-500 text-xs font-medium">Complete peace of mind on every project</p>
              </div>
              <div className="absolute -top-5 -right-5 bg-[#f5981a] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-white font-extrabold text-xl">Engineered for Results</p>
                <p className="text-white/80 text-xs font-medium">Built to deliver high-quality results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="bg-gradient-to-r from-[#1f2e4d] to-[#0d1626] section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to take flight?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll craft a custom aerial solution that exceeds your expectations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f5981a] hover:bg-[#e8880a] text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}

// All icons are imported from @/components/icons
