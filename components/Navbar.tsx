'use client'

import Image from "next/image";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BurgerIcon, CloseIcon } from '@/components/icons'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] h-16 md:h-24">

          {/* ── Logo (left) ── */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/footerlogo.png"
              alt="DroneScape Logo"
              width={240}
              height={80}
              className="h-10 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* ── Desktop nav (centre) ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? 'text-[#f5981a] active'
                    : 'text-[#1a5631]/80 hover:text-[#1a5631]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + hamburger (right) ── */}
          <div className="flex items-center justify-end">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#f5981a] hover:bg-[#e8880a] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden text-[#1a5631] p-2 -mr-2"
            >
              {mobileOpen ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-6 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 text-base font-medium border-b border-white/5 transition-colors duration-150 ${
                pathname === href ? 'text-[#f5981a]' : 'text-[#1a5631]/80 hover:text-[#1a5631]'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block bg-[#f5981a] hover:bg-[#e8880a] text-white text-center font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

// Icons are imported from @/components/icons
