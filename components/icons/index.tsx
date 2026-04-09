/**
 * ─────────────────────────────────────────────────────────────
 *  DroneScape — Central Icon Library
 *  components/icons/index.tsx
 *
 *  ALL SVG icons for the site live here as named exports.
 *  Import anywhere with:
 *
 *    import { CameraIcon, DroneLogoIcon } from '@/components/icons'
 *
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A CUSTOM ICON
 *  ─────────────────────────
 *  1. Find SVG path data from a free source:
 *       • https://heroicons.com       (MIT licence)
 *       • https://lucide.dev          (MIT licence)
 *       • https://phosphoricons.com   (MIT licence)
 *       • Figma / Illustrator export  (your own artwork)
 *
 *  2. Add a new exported function below using this template:
 *
 *       export function MyIcon({ size = 24, stroke = 'currentColor', className }: IconProps) {
 *         return (
 *           <svg
 *             width={size} height={size}
 *             viewBox="0 0 24 24"          // ← keep the same viewBox as your source
 *             fill="none"
 *             stroke={stroke}
 *             strokeWidth="1.8"
 *             strokeLinecap="round"
 *             strokeLinejoin="round"
 *             className={className}
 *           >
 *             <path d="..." />            // ← paste path data here
 *           </svg>
 *         )
 *       }
 *
 *  3. For filled icons (like social logos) use fill="currentColor" and remove stroke props:
 *
 *       export function MyBrandIcon({ size = 24, className }: { size?: number; className?: string }) {
 *         return (
 *           <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
 *             <path d="..." />
 *           </svg>
 *         )
 *       }
 *
 *  4. Use it anywhere:
 *       import { MyIcon } from '@/components/icons'
 *       <MyIcon size={32} stroke="#f5981a" />
 * ─────────────────────────────────────────────────────────────
 */

// Shared prop type used by most stroke-based icons
type IconProps = {
  size?:      number
  stroke?:    string
  className?: string
}

/* ══════════════════════════════════════════════════════════════
   DRONE BRAND ICONS
   ══════════════════════════════════════════════════════════════ */


/** 100×100 animated drone used in the hero section */
export function HeroDroneIcon({ className }: { className?: string }) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="48" stroke="#f5981a" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="50" cy="50" r="12" fill="#f5981a" fillOpacity="0.9" />
      <circle cx="50" cy="50" r="6"  fill="white" />
      <line x1="50" y1="50" x2="20" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="50" y1="50" x2="80" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="50" y1="50" x2="20" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="50" y1="50" x2="80" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
      <ellipse cx="20" cy="20" rx="13" ry="5" fill="white" fillOpacity="0.5" transform="rotate(-45 20 20)" />
      <ellipse cx="80" cy="20" rx="13" ry="5" fill="white" fillOpacity="0.5" transform="rotate(45 80 20)"  />
      <ellipse cx="20" cy="80" rx="13" ry="5" fill="white" fillOpacity="0.5" transform="rotate(45 20 80)"  />
      <ellipse cx="80" cy="80" rx="13" ry="5" fill="white" fillOpacity="0.5" transform="rotate(-45 80 80)" />
      <circle cx="20" cy="20" r="3" fill="#f5981a" />
      <circle cx="80" cy="20" r="3" fill="#f5981a" />
      <circle cx="20" cy="80" r="3" fill="#f5981a" />
      <circle cx="80" cy="80" r="3" fill="#f5981a" />
    </svg>
  )
}

/** 280×280 illustration used in the "Why Us" section */
export function LargeDroneIllustration({ className }: { className?: string }) {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="140" cy="140" r="100" fill="#f5981a" fillOpacity="0.05" />
      <circle cx="140" cy="140" r="70"  fill="#f5981a" fillOpacity="0.08" />
      <circle cx="140" cy="140" r="28"  fill="#f5981a" fillOpacity="0.9" />
      <circle cx="140" cy="140" r="14"  fill="white"   fillOpacity="0.9" />
      <circle cx="140" cy="140" r="6"   fill="#f5981a" />
      <line x1="140" y1="140" x2="55"  y2="55"  stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="140" y1="140" x2="225" y2="55"  stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="140" y1="140" x2="55"  y2="225" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="140" y1="140" x2="225" y2="225" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
      <ellipse cx="55"  cy="55"  rx="34" ry="12" fill="white" fillOpacity="0.25" transform="rotate(-45 55 55)"    />
      <ellipse cx="225" cy="55"  rx="34" ry="12" fill="white" fillOpacity="0.25" transform="rotate(45 225 55)"    />
      <ellipse cx="55"  cy="225" rx="34" ry="12" fill="white" fillOpacity="0.25" transform="rotate(45 55 225)"    />
      <ellipse cx="225" cy="225" rx="34" ry="12" fill="white" fillOpacity="0.25" transform="rotate(-45 225 225)"  />
      <circle cx="55"  cy="55"  r="7" fill="#f5981a" fillOpacity="0.8" />
      <circle cx="225" cy="55"  r="7" fill="#f5981a" fillOpacity="0.8" />
      <circle cx="55"  cy="225" r="7" fill="#f5981a" fillOpacity="0.8" />
      <circle cx="225" cy="225" r="7" fill="#f5981a" fillOpacity="0.8" />
      <rect x="130" y="158" width="20" height="14" rx="4" fill="white" fillOpacity="0.3" />
      <circle cx="140" cy="168" r="5" fill="white" fillOpacity="0.5" />
      <path d="M 140 100 Q 160 85 180 100" stroke="#f5981a" strokeWidth="1.5" strokeOpacity="0.4"  fill="none" strokeDasharray="4 4" />
      <path d="M 140 90  Q 165 70 190 90"  stroke="#f5981a" strokeWidth="1.5" strokeOpacity="0.25" fill="none" strokeDasharray="4 4" />
    </svg>
  )
}


/* ══════════════════════════════════════════════════════════════
   NAVIGATION ICONS
   ══════════════════════════════════════════════════════════════ */

/** Hamburger / open menu icon */
export function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      className={className}>
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

/** ✕ close icon (used by mobile nav toggle) */
export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      className={className}>
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}

/** Arrow right — used in inline CTAs */
export function ArrowRightIcon({ size = 16, stroke = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/** Animated spinner used in the contact form submit button */
export function Spinner({ className }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className ?? ''}`}
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
    </svg>
  )
}


/* ══════════════════════════════════════════════════════════════
   SERVICE ICONS
   ─────────────────────────────────────────────────────────────
   Default: size=26, stroke='#1f2e4d'  → homepage service cards
   Services detail page passes: size={42} stroke="white"
   ══════════════════════════════════════════════════════════════ */

/** Flag on a pole — Yardage & Green Book Mapping */
export function FlagIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
        </svg>
    )
}

/** Seedling / sprout — Turf Health Monitoring */
export function SproutIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
            <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
            <path d="M5 21h14" />
        </svg>
    )
}

/** Map — Aerial Mapping */
export function MapPlusIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
            <path d="M15 5.764V12" />
            <path d="M18 15v6" />
            <path d="M21 18h-6" />
            <path d="M9 3.236v15" />
        </svg>
    )
}

/** Water droplet — Precision Agriculture & Crop Spraying */
export function DropletIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
    )
}


/** House — Real Estate and Construction */
export function HouseIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    )
}

/* Camera — Videography and Photography */
export function CameraIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}


/** Open eye — Search, Security & Surveillance */
export function EyeIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}

/** Sun with rays — Solar Panel & Roof Inspections */
export function SunIcon({ size = 26, stroke = 'currentColor', className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}

export function InspectionIcon({ size = 26, stroke = '#1f2e4d', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8"  x2="11" y2="14"/>
      <line x1="8"  y1="11" x2="14" y2="11"/>
    </svg>
  )
}

export function HomeIcon({ size = 26, stroke = '#1f2e4d', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

export function PlantIcon({ size = 26, stroke = '#1f2e4d', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M12 22V12"/>
      <path d="M5 12C5 7.029 8.686 3 12 3c3.314 0 7 4.029 7 9"/>
      <path d="M12 12c0-5-3-8-7-8"/>
    </svg>
  )
}

export function SearchIcon({ size = 26, stroke = '#1f2e4d', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

export function StarIcon({ size = 26, stroke = '#1f2e4d', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}


/* ══════════════════════════════════════════════════════════════
   ABOUT / VALUES ICONS
   ══════════════════════════════════════════════════════════════ */

export function ShieldIcon({ size = 26, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

export function GoalIcon({ size = 26, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </svg>
  )
}

export function ChipIcon({ size = 26, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20v2" />
      <path d="M12 2v2" />
      <path d="M17 20v2" />
      <path d="M17 2v2" />
      <path d="M2 12h2" />
      <path d="M2 17h2" />
      <path d="M2 7h2" />
      <path d="M20 12h2" />
      <path d="M20 17h2" />
      <path d="M20 7h2" />
      <path d="M7 20v2" />
      <path d="M7 2v2" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  )
}

export function HandshakeIcon({ size = 26, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════
   CONTACT & LOCATION ICONS
   ══════════════════════════════════════════════════════════════ */

export function LocationIcon({ size = 22, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export function PhoneIcon({ size = 22, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export function EmailIcon({ size = 22, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export function ClockIcon({ size = 22, stroke = '#f5981a', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}


/* ══════════════════════════════════════════════════════════════
   SOCIAL MEDIA ICONS  (filled, not stroked)
   ══════════════════════════════════════════════════════════════ */

export function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

export function YouTubeIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.5 5 12 5 12 5s-4.5 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.6 19 12 19 12 19s4.5 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8zM9.8 15V9l5.4 3-5.4 3z"/>
    </svg>
  )
}

export function LinkedInIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

/** Twitter / X brand icon */
export function TwitterXIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}


/* ══════════════════════════════════════════════════════════════
   ✏️  ADD YOUR CUSTOM ICONS BELOW THIS LINE
   ══════════════════════════════════════════════════════════════

   Example — paste in your own SVG path data:

   export function WindIcon({ size = 24, stroke = 'currentColor', className }: IconProps) {
     return (
       <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
         className={className}>
         <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
       </svg>
     )
   }

   Then use it anywhere:
     import { WindIcon } from '@/components/icons'
     <WindIcon size={32} stroke="#f5981a" />

   ══════════════════════════════════════════════════════════════ */
