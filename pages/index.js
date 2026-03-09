import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { UI_STYLES } from '../lib/styles-data'
import StyleCard from '../components/StyleCard'

const CATS = ['All', 'Tactile', 'Glass', 'Raw', 'Clean', 'System', 'Physical', 'Ambient', 'Dev', 'Nostalgia', 'Visual', 'Functional', 'Niche', 'Editorial', 'Soft', 'Bold', 'Hacker']

export default function Home() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState({})
  const gridRef = useRef(null)

  const filtered = UI_STYLES.filter(s => {
    const matchCat = filter === 'All' || s.category === filter || s.tag === filter
    const matchSearch = search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.slug.includes(search.toLowerCase()) ||
      s.websites.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(prev => ({ ...prev, [e.target.dataset.id]: true }))
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    const cards = document.querySelectorAll('[data-id]')
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [filtered])

  return (
    <>
      <Head>
        <title>UI Cosmos — 30 Design Styles</title>
        <meta name="description" content="Every major UI design style, live rendered and fully interactive. 30 styles from Neumorphism to Pixel Art." />
      </Head>

      {/* Custom cursor */}
      <Cursor />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 40px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(4,4,10,0.85)', backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', letterSpacing: '4px', color: '#fff', display: 'flex', alignItems: 'center', gap: '4px' }}>
          UI<span style={{ color: '#ff3c6e' }}>·</span>COSMOS
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.62rem', color: '#555570', letterSpacing: '0.1em' }}>
            {filtered.length} / 30 STYLES
          </div>
          <div style={{ background: '#ff3c6e', color: '#fff', padding: '6px 16px', borderRadius: '100px', fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>
            v1.0
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '100px 40px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        {/* bg glows */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(255,60,110,0.09) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 80% 25%, rgba(0,229,255,0.06) 0%, transparent 55%), radial-gradient(ellipse 45% 55% at 55% 85%, rgba(124,58,237,0.08) 0%, transparent 55%)' }} />
        {/* grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        {/* watermark */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(8rem,28vw,20rem)', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.035)', pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap', letterSpacing: '10px' }}>30</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Space Mono',monospace", fontSize: '0.68rem', letterSpacing: '0.22em', color: '#ff3c6e', textTransform: 'uppercase', marginBottom: '24px', animation: 'fadeUp 0.8s 0.2s both' }}>
            <span style={{ width: '28px', height: '1px', background: '#ff3c6e', opacity: 0.5 }} />
            The Complete Interactive Encyclopedia
            <span style={{ width: '28px', height: '1px', background: '#ff3c6e', opacity: 0.5 }} />
          </div>

          <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(5rem,15vw,13rem)', lineHeight: 0.88, letterSpacing: '-2px', background: 'linear-gradient(140deg,#fff 0%,#fff 35%,#ff3c6e 55%,#00e5ff 80%,#7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'fadeUp 0.8s 0.4s both' }}>
            UI<br />COSMOS
          </h1>

          <p style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', color: '#888899', marginTop: '20px', maxWidth: '560px', lineHeight: 1.8, animation: 'fadeUp 0.8s 0.6s both' }}>
            Every major UI design style — all <strong style={{ color: '#fff' }}>30</strong>, live rendered and fully interactive.
            From Neumorphism to Pixel Art. Each with a dedicated showcase page.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px', animation: 'fadeUp 0.8s 0.8s both' }}>
            <a href="#styles" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ff3c6e', color: '#fff', padding: '14px 30px', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 8px 24px rgba(255,60,110,0.35)' }}>
              Explore All 30 ↓
            </a>
            <a href="#styles" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 28px', borderRadius: '100px', fontSize: '0.9rem', textDecoration: 'none' }}>
              View on GitHub →
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '64px', animation: 'fadeUp 0.8s 1s both' }}>
            {[['30', 'UI Styles'], ['3', 'Categories'], ['0', 'Dependencies'], ['∞', 'Inspiration']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.8rem', lineHeight: 1, background: 'linear-gradient(135deg,#fff,#00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{num}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#555570', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES SECTION */}
      <section id="styles" style={{ paddingBottom: '120px' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', padding: '60px 20px 40px', position: 'relative' }}>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom,transparent,#ff3c6e)', margin: '0 auto 24px' }} />
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', letterSpacing: '0.22em', color: '#ff3c6e', textTransform: 'uppercase' }}>Browse the Collection</div>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '3px', marginTop: '8px', color: '#fff' }}>All 30 Styles</div>
          <div style={{ fontSize: '0.85rem', color: '#888899', marginTop: '10px', maxWidth: '460px', margin: '10px auto 0', lineHeight: 1.7 }}>
            Click any card to open the full showcase page. Each style has a dedicated URL you can share.
          </div>
        </div>

        {/* Search + Filter */}
        <div style={{ padding: '0 40px 32px', maxWidth: '1500px', margin: '0 auto' }}>
          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '420px', margin: '0 auto 28px' }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search styles, slugs, or website types…"
              style={{
                width: '100%', background: '#0d0d18', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px', padding: '12px 20px 12px 44px',
                color: '#fff', fontFamily: "'DM Sans',sans-serif", fontSize: '0.85rem',
                outline: 'none', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(255,60,110,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#555570', fontSize: '0.9rem' }}>⌕</span>
          </div>

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['All', 'Visual', 'Functional', 'Niche', 'Tactile', 'Dev', 'Glass', 'Raw', 'Nostalgia', 'Editorial', 'Soft', 'Bold'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', letterSpacing: '0.12em',
                  padding: '6px 14px', borderRadius: '100px', border: '1px solid',
                  borderColor: filter === cat ? '#ff3c6e' : 'rgba(255,255,255,0.1)',
                  background: filter === cat ? '#ff3c6e' : 'transparent',
                  color: filter === cat ? '#fff' : '#888899',
                  cursor: 'pointer', transition: 'all 0.2s', textTransform: 'uppercase',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '22px', padding: '0 40px',
          maxWidth: '1500px', margin: '0 auto',
        }}>
          {filtered.map((style, i) => (
            <div
              key={style.id}
              data-id={style.id}
              style={{
                opacity: visible[style.id] ? 1 : 0,
                transform: visible[style.id] ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.5s ${(i % 6) * 0.06}s ease, transform 0.5s ${(i % 6) * 0.06}s ease`,
              }}
            >
              <StyleCard style={style} index={i} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0', color: '#555570', fontFamily: "'Space Mono',monospace", fontSize: '0.8rem' }}>
              No styles match "{search}" — try a different search
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '60px 40px 50px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '2.8rem', letterSpacing: '6px', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.1)', marginBottom: '16px' }}>UI · COSMOS</div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#555570', marginBottom: '24px' }}>// 30 UI DESIGN STYLES // NEXT.JS // ZERO DEPENDENCIES //</div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
          {UI_STYLES.slice(0, 6).map(s => (
            <Link key={s.id} href={`/styles/${s.slug}`} style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#555570', textDecoration: 'none', transition: 'color 0.2s' }}>
              {s.slug}
            </Link>
          ))}
          <span style={{ color: '#333' }}>+24 more</span>
        </div>
        <div style={{ fontSize: '0.7rem', color: '#555570' }}>Built with Next.js · Deploy on Vercel · ui-cosmos.vercel.app</div>
      </footer>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
        body { margin: 0; background: #04040a; color: #e8e8f4; font-family: 'DM Sans', sans-serif; overflow-x: hidden; cursor: none; }
        input::placeholder { color: #555570; }
        @media (max-width: 768px) {
          body { cursor: auto; }
          nav { padding: 0 16px; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; padding: 0 16px !important; }
        }
      `}</style>
    </>
  )
}

function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    if (window.innerWidth <= 768) return
    const move = e => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (curRef.current) curRef.current.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`
    }
    document.addEventListener('mousemove', move)
    const raf = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12
      if (ringRef.current) ringRef.current.style.transform = `translate(${pos.current.rx - 17}px,${pos.current.ry - 17}px)`
      requestAnimationFrame(raf)
    }
    raf()
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={curRef} style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 9999, width: '10px', height: '10px', background: '#ff3c6e', borderRadius: '50%', mixBlendMode: 'difference' }} />
      <div ref={ringRef} style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 9999, width: '34px', height: '34px', border: '1px solid rgba(255,60,110,0.45)', borderRadius: '50%', transition: 'all 0.14s ease' }} />
    </>
  )
}
