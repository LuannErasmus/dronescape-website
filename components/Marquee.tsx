'use client'

/**
 * Marquee — infinite horizontal scrolling ticker.
 *
 * Props
 *   speed     — loop duration in seconds (lower = faster). Default 40.
 *   gap       — spacing between items in rem. Default 3.
 *   reverse   — false (default) = scrolls left→right. true = right→left.
 *   className — extra classes on the outer wrapper.
 */

type MarqueeProps = {
  children:   React.ReactNode
  speed?:     number
  gap?:       number
  reverse?:   boolean
  className?: string
}

export default function Marquee({
  children,
  speed     = 40,
  gap       = 3,
  reverse   = false,
  className = '',
}: MarqueeProps) {
  const duration = `${speed}s`
  const gapStyle = { gap: `${gap}rem` }

  /*
   * Two identical copies sit side-by-side inside one animated track.
   *
   * Left→right (default, reverse=false):
   *   keyframe runs in 'reverse' CSS direction → translateX(-50%) → translateX(0)
   *   The content appears to move rightward; items enter from the left edge.
   *
   * Right→left (reverse=true):
   *   keyframe runs 'normal' → translateX(0) → translateX(-50%)
   */
  const animDirection = reverse ? 'normal' : 'reverse'

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center w-max"
        style={{
          ...gapStyle,
          animation: `ds-marquee ${duration} linear infinite ${animDirection}`,
        }}
      >
        <div className="flex items-center shrink-0" style={gapStyle}>
          {children}
        </div>
        <div className="flex items-center shrink-0" style={gapStyle}>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes ds-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
