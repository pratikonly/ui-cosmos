import Link from 'next/link'
import { useState } from 'react'
import StylePreview from './StylePreview'

export default function StyleCard({ style, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#0d0d18',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'}`,
        transition: 'transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s',
        transform: hovered ? 'translateY(-8px) scale(1.015)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.6)' : '0 4px 20px rgba(0,0,0,0.3)',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        animationDelay: `${index * 0.04}s`,
      }}
    >
      {/* Style number */}
      <div style={{
        position: 'absolute', top: '14px', right: '14px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.1em', zIndex: 10,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }}>
        {String(style.id).padStart(2, '0')}
      </div>

      {/* Preview area */}
      <div style={{
        height: '180px',
        background: style.previewBg,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Live mini preview */}
        <StylePreview slug={style.slug} hovered={hovered} />

        {/* Overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,24,0.9) 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          display: 'flex', alignItems: 'flex-end', padding: '16px',
        }}>
          <Link href={`/styles/${style.slug}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#ff3c6e', color: '#fff',
            padding: '8px 18px', borderRadius: '100px',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: '0.78rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            transition: 'transform 0.15s, box-shadow 0.15s',
            boxShadow: '0 4px 14px rgba(255,60,110,0.4)',
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          }}>
            View Showcase →
          </Link>
        </div>
      </div>

      {/* Card info */}
      <div style={{ padding: '18px 20px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Header */}
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem', letterSpacing: '0.18em',
            color: '#ff3c6e', textTransform: 'uppercase', marginBottom: '4px',
          }}>
            {style.category} · {style.tag}
          </div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1.45rem', letterSpacing: '1px', color: '#fff', lineHeight: 1,
          }}>
            {style.name}
          </div>
          <div style={{
            fontSize: '0.76rem', color: '#888899', marginTop: '5px', lineHeight: 1.6,
          }}>
            {style.desc}
          </div>
        </div>

        {/* Slug URL */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '8px', padding: '7px 11px',
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem', color: 'rgba(255,255,255,0.25)',
          }}>
            /styles/
          </span>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.62rem', color: '#ff3c6e',
          }}>
            {style.slug}
          </span>
        </div>

        {/* Best for */}
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.56rem', letterSpacing: '0.14em',
            color: '#555570', textTransform: 'uppercase', marginBottom: '7px',
          }}>
            Best for websites →
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {style.bestFor.slice(0, 3).map((use, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px', padding: '3px 10px',
                fontSize: '0.68rem', color: '#888899',
              }}>
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom action */}
        <Link href={`/styles/${style.slug}`} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 'auto', paddingTop: '10px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textDecoration: 'none',
          color: '#888899',
          fontSize: '0.74rem',
          fontFamily: "'DM Sans', sans-serif",
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#888899'}
        >
          <span>{style.websites}</span>
          <span style={{ color: '#ff3c6e', fontSize: '1rem' }}>→</span>
        </Link>
      </div>
    </div>
  )
}
