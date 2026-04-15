import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore DroneScape\'s full range of professional drone services — aerial photography, videography, mapping, inspection, real estate, agriculture, search & rescue, and event coverage.',
}

const services = [
  {
    id: 'yardage-mapping',
    title: 'Yardage and Green Book Mapping',
    description:
      'High-precision aerial mapping delivers detailed yardage guides and professional green books, including accurate contours, slopes, and distances. Designed for golf courses seeking to enhance player experience, improve course strategy, and provide visually refined, data-driven insights for both recreational players and tournament-level play. Supports modern course management and branding.',
    features: [
      'Centimetre-level mapping accuracy',
      'Tournament-standard green books',
      'Slope and contour heatmaps',
      'Custom-branded course visuals',
      'Elevates player experience',
    ],
    gradient: 'from-green-600/20 to-green-800/20',
  },
  {
    id: 'turf-monitoring',
    title: 'Turf health Monitoring and Land Assessment',
    description:
      'Advanced drone-based imaging assesses turf and land health using multispectral data to detect stress, disease, and irrigation issues early. Provides actionable insights for proactive maintenance, cost reduction, and consistently high-quality landscapes across sports fields, estates, golf courses, and agricultural environments, ensuring optimal performance and long-term sustainability.',
    features: [
      'Early stress and disease detection',
      'Multispectral data analysis',
      'Optimised irrigation planning',
      'Bespoke shot lists & storyboarding',
      'Actionable health reports',
    ],
    gradient: 'from-purple-600/20 to-purple-800/20',
  },
  {
    id: 'aerial-surveying',
    title: 'Aerial Surveying and Land Mapping',
    description:
      'Drone-powered aerial surveying captures high-resolution imagery to produce accurate maps, measurements, and 3D models. Ideal for construction, agriculture, and land development projects requiring efficient data collection, improved planning, and precise analysis while reducing time, labour, and safety risks associated with traditional surveying methods.',
    features: [
      'High-resolution orthomosaic maps',
      'Accurate volumetric calculations',
      '3D terrain modelling',
      'Faster project turnaround',
      'Safer than manual surveying',
    ],
    gradient: 'from-green-600/20 to-green-800/20',
  },
  {
    id: 'agriculture',
    title: 'Precision Agriculture and Crop Spraying',
    description:
      'Drone technology enables precise crop spraying and monitoring, reducing chemical usage while maximising efficiency and yield. Provides targeted application, real-time data insights, and improved crop management, helping farmers lower costs, minimise environmental impact, and maintain healthier crops through advanced, technology-driven agricultural practices.',
    features: [
      'Targeted, low-waste spraying',
      'Increased crop productivity',
      'GPS-guided precision control',
      'Reduced labour costs',
      'Eco-conscious farming solutions',
    ],
    gradient: 'from-yellow-600/20 to-yellow-800/20',
  },
  {
    id: 'real-estate',
    title: 'Real Estate and Construction Progress Monitoring',
    description:
      'Aerial imaging delivers consistent, high-quality updates on construction and development projects. Enables better planning, communication, and reporting through visual progress tracking. Ideal for developers, investors, and stakeholders needing accurate, up-to-date insights to monitor timelines, improve decision-making, and showcase project milestones professionally.',
    features: [
      'Time-lapse progress visuals',
      'Enhanced stakeholder reporting',
      'Marketing-ready imagery',
      'Non-intrusive site monitoring',
      'Clear milestone tracking',
    ],
    gradient: 'from-red-600/20 to-red-800/20',
  },
  {
    id: 'security',
    title: 'Search, Security and Surveillance',
    description:
      'Drone surveillance provides real-time aerial monitoring for security, search operations, and site management. Covers large areas quickly, enhancing situational awareness and response times. Ideal for estates, events, and security teams requiring efficient, reliable, and high-visibility monitoring solutions in both routine and emergency scenarios.',
    features: [
      'Real-time aerial oversight',
      'Rapid area coverage',
      'Thermal imaging capability',
      'Improved incident response',
      'Enhanced security visibility',
    ],
    gradient: 'from-lime-600/20 to-lime-800/20',
  },
  {
    id: 'photography',
    title: 'Cinematic Photography and Videography',
    description:
      'Professional drone cinematography captures visually striking aerial footage for marketing, branding, and storytelling. Ideal for real estate, tourism, events, and commercial campaigns, delivering high-quality visuals that elevate brand perception, engage audiences, and provide unique perspectives that stand out across digital and media platforms.',
    features: [
      'Ultra-HD cinematic footage',
      'Dynamic aerial perspectives',
      'Professional colour grading',
      'Brand-enhancing visuals',
      'Perfect for digital marketing',
    ],
    gradient: 'from-orange-600/20 to-orange-800/20',
  },
  {
    id: 'roof-inspections',
    title: 'Solar Panel and Roof Inspections',
    description:
      'Drone inspections provide fast, safe, and detailed analysis of roofs and solar installations. Utilising high-resolution and thermal imaging, they identify faults, damage, and inefficiencies without manual access, reducing risk while delivering accurate reports that support maintenance planning, system performance optimisation, and long-term asset protection.',
    features: [
      'Thermal fault detection',
      'No scaffolding required',
      'Fast, non-invasive process',
      'Detailed inspection reports',
      'Improved system efficiency',
    ],
    gradient: 'from-pink-600/20 to-pink-800/20',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#0f2e1a] via-[#1a5631] to-[#0f2e1a]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-4">What We Do</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Every DroneScape service is engineered for precision, delivered with care, and
            backed by our satisfaction guarantee. Choose from our full suite below.
          </p>
        </div>
      </section>

      {/* ── Service sections ── */}
      <div className="bg-white">
        {services.map((service, i) => {
          const { id, title, description, features, gradient } = service
          const isEven = i % 2 === 0

          return (
            <section
              key={id}
              id={id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-gray-50 dot-pattern'}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Visual card */}
                  <div className={isEven ? 'order-2 lg:order-1' : 'order-2'}>
                    <div className="rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      {/* Image Background */}
                      <Image
                        src={`/images/services/${id}.jpg`}
                        alt={title}
                        fill
                        className="object-cover"
                      />

                      {/* Decorative circles */}
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f5981a]/5 rounded-full translate-x-1/3 translate-y-1/3" />
                      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={isEven ? 'order-1 lg:order-2' : 'order-1'}>
                    <p className="text-[#f5981a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Service</p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a5631] mb-4 tracking-tight">
                      {title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">{description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-10">
                      {features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-[#f5981a]/15 border border-[#f5981a]/30 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f5981a" strokeWidth="3.5">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </span>
                          <span className="text-gray-600 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1a5631] hover:bg-[#f5981a] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
                    >
                      Request a Quote
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── CTA banner ── */}
      <section className="bg-[#f5981a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Not sure which service you need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your project and our team will recommend the perfect aerial solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#f5981a] hover:bg-gray-50 font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  )
}