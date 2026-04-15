import Link from 'next/link'
import Image from "next/image";
import {
  InstagramIcon, YouTubeIcon, LinkedInIcon, TwitterXIcon,
  LocationIcon, PhoneIcon, EmailIcon,
} from '@/components/icons'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

const services = [
  'Aerial Photography',
  'Aerial Videography',
  'Mapping & Surveying',
  'Infrastructure Inspection',
  'Real Estate Photography',
  'Agricultural Monitoring',
]

const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'YouTube',   href: '#', icon: YouTubeIcon   },
  { label: 'LinkedIn',  href: '#', icon: LinkedInIcon  },
  { label: 'X / Twitter', href: '#', icon: TwitterXIcon },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a5631] text-white">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* ── Footer Logo ── */}
              <Link href="/" className="block mb-4 -ml-3 mt-2">
                <Image
                  src="/footerlogo.png"
                  alt="DroneScape Logo"
                  width={220}
                  height={70}
                  className="w-auto opacity-90 hover:opacity-100 transition duration-300"
                />
              </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Elevating perspectives with professional drone services. SACAA certified pilots,
              cutting-edge technology, and cinematic results.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f5981a] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-[#f5981a] text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-[#f5981a] text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <LocationIcon size={16} stroke="currentColor" className="shrink-0 mt-0.5" />
                <span>George,<br />Western Cape, South Africa<br />6529</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={16} stroke="currentColor" className="shrink-0" />
                <a href="tel:+27105104399" className="hover:text-[#f5981a] transition-colors duration-200">
                  010 510 4399
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon size={16} stroke="currentColor" className="shrink-0" />
                <a href="mailto:info@dronescape.co.za" className="hover:text-[#f5981a] transition-colors duration-200">
                  info@dronescape.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} DroneScape. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Icons are imported from @/components/icons
