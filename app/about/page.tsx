import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldIcon, GoalIcon, ChipIcon, HandshakeIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about DroneScape — our story, our mission, and the team of certified pilots and creative professionals who power every mission.',
}


const values = [
  {
    title: 'Safety First',
    description:
      'Safety is our top priority. We strictly adhere to SACAA regulations, with fully licensed drone pilots ensuring every operation is compliant, controlled, and conducted responsibly.',
    icon: ShieldIcon,
  },
  {
    title: 'Precision and Accuracy',
    description:
      'We deliver highly accurate data and imagery using advanced drone technology, ensuring our clients receive reliable insights they can confidently base decisions on.',
    icon: GoalIcon,
  },
  {
    title: 'Innovation and Technology',
    description:
      'We continuously adopt the latest drone technology and methods to provide smarter, faster, and more efficient solutions across all our services.',
    icon: ChipIcon,
  },
  {
    title: 'Client-Focused Approach',
    description:
      'We are committed to understanding each client’s needs, delivering tailored solutions, clear communication, and consistent results that add real value to their operations.',
    icon: HandshakeIcon,
  },
]

const milestones = [
  { year: '2011', event: 'DroneScape founded by Marcus Avery with a single DJI Phantom.' },
  { year: '2014', event: 'Expanded to a team of 5 pilots and secured our first commercial inspection contract.' },
  { year: '2017', event: 'Launched AgriScan division. First multispectral mapping programme for a Fortune 500 agriculture client.' },
  { year: '2019', event: 'Reached 200 completed projects milestone. Featured in Forbes as a top drone-tech company.' },
  { year: '2021', event: 'Introduced thermal search-and-rescue capabilities. Partnership with LA County Emergency Management.' },
  { year: '2024', event: '500+ projects, 50 certified pilots, operating in 12 US states.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-[#0d1626] via-[#1f2e4d] to-[#0d1626]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Story</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            About DroneScape
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Born from a passion for aviation and visual storytelling, DroneScape has grown
            from a single drone into a full-service aerial intelligence company trusted by
            hundreds of clients across the United States.
          </p>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Story text */}
            <div>
              <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Origin</p>
              <h2 className="text-4xl font-extrabold text-[#1f2e4d] mb-6 tracking-tight">
                The Sky's the Limit
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  DroneScape is a proudly South African drone services company based in the Garden Route, Western Cape. Built on a foundation of innovation, precision, and efficiency, we provide advanced aerial solutions designed to deliver accurate data, powerful insights, and exceptional visual results.
                </p>
                <p>
                  We specialise in a wide range of drone services, from high-quality aerial photography and videography to precision agriculture and crop spraying. Our capabilities also include yardage and green book mapping, turf health monitoring, solar panel and roof inspections, as well as detailed aerial surveying and land analysis. Each service is designed to help clients gain a clearer, more informed understanding of their environment.
                </p>
                <p>
                  We work with farmers, property developers, estate managers, and businesses looking to improve performance, reduce inefficiencies, and elevate their operations. Whether it’s identifying crop stress, enhancing turf quality, or capturing high-impact visuals, Dronescape provides the tools and insights needed to make smarter decisions.
                </p>
                <p>
                  While we are proudly based in the Western Cape, our services extend across South Africa. We are committed to delivering consistent, high-quality results wherever our clients operate.
                </p>
                <p>
                  What sets Dronescape apart is our focus on precision, advanced technology, and efficiency. Our solutions are faster, safer, and more cost-effective than traditional methods, while delivering highly accurate and actionable results.
                </p>
                <p>
                  At our core, we are driven by quality, professionalism, and a commitment to helping our clients achieve better outcomes through innovative aerial technology.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="space-y-0">
                {milestones.map(({ year, event }, i) => (
                  <div key={year} className="flex gap-5 group">
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-xs
                        ${i === milestones.length - 1
                          ? 'bg-[#f5981a] text-white'
                          : 'bg-[#1f2e4d]/10 text-[#1f2e4d] group-hover:bg-[#f5981a] group-hover:text-white transition-colors duration-200'
                        }`}>
                        {year.slice(2)}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 my-1" />
                      )}
                    </div>
                    {/* Event text */}
                    <div className="pb-8">
                      <p className="text-[#f5981a] font-bold text-sm mb-0.5">{year}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section-padding bg-[#1f2e4d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Purpose</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Our Mission
          </h2>
          <p className="text-white/70 text-2xl leading-relaxed font-light italic max-w-4xl mx-auto mb-12">
            &ldquo;To empower every industry with the perspective, precision, and data that
            only the sky can provide — safely, responsibly, and beautifully.&rdquo;
          </p>
          <div className="w-16 h-1 bg-[#f5981a] mx-auto rounded-full" />
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding dot-pattern bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">What Drives Us</p>
            <h2 className="text-4xl font-extrabold text-[#1f2e4d] tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-lift bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-5">
                <div className="w-14 h-14 bg-[#f5981a]/10 rounded-2xl border border-[#f5981a]/20 flex items-center justify-center">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-[#1f2e4d] font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#1f2e4d] to-[#0d1626] section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-5 tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Let&apos;s talk about your project. Our team responds within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#f5981a] hover:bg-[#e8880a] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Value icons ── */
// All icons are imported from @/components/icons
