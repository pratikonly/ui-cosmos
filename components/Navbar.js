import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({ currentStyle = null }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
      background: scrolled ? 'rgba(4,4,10,0.95)' : 'rgba(4,4,10,0.7)',
      backdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      transition: 'background 0.3s ease',
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.5rem', letterSpacing: '4px', color: '#fff',
        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
        flexShrink: 0,
      }}>
        UI<span style={{ color: '#ff3c6e' }}>·</span>COSMOS
      </Link>

      {/* Current style badge */}
      {currentStyle && (
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem', letterSpacing: '0.15em',
          color: '#888899', display: 'flex', alignItems: 'center', gap: '10px',
          overflow: 'hidden',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/styles/</span>
          <span style={{ color: '#ff3c6e' }}>{currentStyle.slug}</span>
        </div>
      )}

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <Link href="/" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.63rem', letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '6px 14px', borderRadius: '100px',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.45)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        >
          ← All Styles
        </Link>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem', letterSpacing: '0.1em',
          background: '#ff3c6e', color: '#fff',
          padding: '6px 14px', borderRadius: '100px', fontWeight: 700,
          whiteSpace: 'nowrap',
        }}>
          30 STYLES
        </div>
      </div>
    </nav>
  )
}
