// Inline mini previews rendered inside the card's 180px preview zone
// Each preview is a scaled-down taste of the actual style

export default function StylePreview({ slug, hovered }) {
  const previews = {
    neumorphism: <NeuPreview />,
    glassmorphism: <GlassPreview />,
    'neo-brutalism': <BrutalPreview />,
    'flat-design': <FlatPreview />,
    'material-design': <MaterialPreview />,
    skeuomorphism: <SkeuPreview />,
    aurora: <AuroraPreview hovered={hovered} />,
    'dark-minimal': <DarkPreview />,
    'retro-y2k': <RetroPreview />,
    claymorphism: <ClayPreview />,
    'bento-grid': <BentoPreview />,
    'dopamine-ui': <DopaminePreview />,
    'terminal-cli': <TerminalPreview />,
    'swiss-international': <SwissPreview />,
    'pastel-soft': <PastelPreview />,
    maximalism: <MaxPreview hovered={hovered} />,
    monochromatic: <MonoPreview />,
    typographic: <TypoPreview />,
    'grain-texture': <GrainPreview />,
    geometric: <GeoPreview />,
    'organic-blob': <BlobPreview hovered={hovered} />,
    'card-based': <CardUIPreview />,
    'dashboard-ui': <DashPreview />,
    'magazine-editorial': <MagPreview />,
    'parallax-scroll': <ParallaxPreview />,
    'micro-interaction': <MicroPreview />,
    vaporwave: <VaporPreview />,
    cottagecore: <CottagePreview />,
    'memphis-design': <MemphisPreview />,
    'pixel-art': <PixelPreview />,
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      {previews[slug] || <DefaultPreview />}
    </div>
  )
}

const s = {
  c: (bg, extra = {}) => ({ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', flexWrap: 'wrap', gap: '8px', ...extra }),
}

function NeuPreview() {
  return <div style={s.c('#e0e5ec')}>
    <div style={{ background: '#e0e5ec', borderRadius: '10px', padding: '10px 18px', boxShadow: '5px 5px 10px #b8bec7, -5px -5px 10px #fff', fontSize: '0.75rem', color: '#666', fontFamily: 'DM Sans' }}>Button</div>
    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#e0e5ec', boxShadow: '4px 4px 8px #b8bec7, -4px -4px 8px #fff' }} />
    <div style={{ background: '#e0e5ec', borderRadius: '8px', padding: '8px 12px', boxShadow: 'inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #fff', fontSize: '0.7rem', color: '#999', width: '100px', fontFamily: 'DM Sans' }}>Input…</div>
  </div>
}

function GlassPreview() {
  return <div style={{ ...s.c('linear-gradient(135deg,#667eea,#764ba2,#f64f59)', { position: 'relative' }) }}>
    <div style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px', padding: '12px 16px', color: 'white', fontSize: '0.8rem', textAlign: 'center' }}>🌊 Glass</div>
    <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px', padding: '8px 14px', color: 'white', fontSize: '0.72rem' }}>Card</div>
  </div>
}

function BrutalPreview() {
  return <div style={s.c('#f5f500', { gap: '10px' })}>
    <div style={{ background: '#fff', border: '3px solid #000', boxShadow: '4px 4px 0 #000', padding: '8px 16px', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem' }}>CLICK</div>
    <div style={{ background: '#ff3c3c', border: '3px solid #000', boxShadow: '4px 4px 0 #000', padding: '8px 14px', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem' }}>DELETE</div>
    <div style={{ background: '#3c3cff', border: '3px solid #000', boxShadow: '4px 4px 0 #000', padding: '8px 14px', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem' }}>GO</div>
  </div>
}

function FlatPreview() {
  return <div style={s.c('#f7f8fc', { flexDirection: 'column', gap: '10px' })}>
    <div style={{ display: 'flex', gap: '8px' }}>
      <div style={{ background: '#4f46e5', color: '#fff', borderRadius: '8px', padding: '8px 16px', fontSize: '0.75rem', fontFamily: 'DM Sans' }}>Primary</div>
      <div style={{ background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '8px 14px', fontSize: '0.75rem', fontFamily: 'DM Sans' }}>Secondary</div>
    </div>
    <div style={{ display: 'flex', gap: '6px' }}>
      <span style={{ background: '#dcfce7', color: '#166534', borderRadius: '100px', padding: '3px 10px', fontSize: '0.68rem' }}>Success</span>
      <span style={{ background: '#fee2e2', color: '#991b1b', borderRadius: '100px', padding: '3px 10px', fontSize: '0.68rem' }}>Error</span>
    </div>
  </div>
}

function MaterialPreview() {
  return <div style={s.c('#fffbfe', { gap: '10px' })}>
    <div style={{ background: '#6750a4', color: '#fff', borderRadius: '100px', padding: '10px 20px', fontSize: '0.75rem', boxShadow: '0 2px 6px rgba(103,80,164,0.4)', fontFamily: 'DM Sans' }}>Filled</div>
    <div style={{ background: '#e8def8', color: '#21005d', borderRadius: '100px', padding: '10px 18px', fontSize: '0.75rem', fontFamily: 'DM Sans' }}>Tonal</div>
    <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#6750a4', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(103,80,164,0.5)' }}>+</div>
  </div>
}

function SkeuPreview() {
  return <div style={s.c('linear-gradient(180deg,#4a5568,#2d3748)', { gap: '14px' })}>
    <div style={{ background: 'linear-gradient(180deg,#68d391,#38a169,#276749)', border: '1px solid #1a4731', borderRadius: '8px', padding: '10px 18px', color: '#fff', fontSize: '0.78rem', boxShadow: '0 1px 0 rgba(255,255,255,0.3) inset, 0 4px 6px rgba(0,0,0,0.3)', fontFamily: 'DM Sans', fontWeight: 600 }}>▶ Play</div>
    <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%,#718096,#2d3748)', boxShadow: '0 4px 10px rgba(0,0,0,0.5)', border: '2px solid #1a202c' }} />
    <div style={{ background: '#1a3a1a', border: '2px solid #0a1a0a', padding: '8px 12px', color: '#4ade80', fontFamily: 'Space Mono', fontSize: '0.85rem', letterSpacing: '0.1em' }}>88:88</div>
  </div>
}

function AuroraPreview({ hovered }) {
  return <div style={{ width: '100%', height: '100%', background: '#050511', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', width: '120px', height: '120px', background: '#7c3aed', borderRadius: '50%', filter: 'blur(30px)', opacity: 0.6, top: '-30px', left: '-20px', animation: 'pulse 4s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', width: '100px', height: '100px', background: '#06b6d4', borderRadius: '50%', filter: 'blur(28px)', opacity: 0.5, bottom: '-20px', right: '-10px', animation: 'pulse 4s ease-in-out infinite 2s' }} />
    <div style={{ position: 'absolute', width: '70px', height: '70px', background: '#f43f5e', borderRadius: '50%', filter: 'blur(22px)', opacity: 0.5, top: '20px', right: '40px', animation: 'pulse 4s ease-in-out infinite 1s' }} />
    <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '14px', padding: '14px 20px', color: '#fff', backdropFilter: 'blur(14px)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>Aurora UI</div>
      <div style={{ fontSize: '0.65rem', opacity: 0.6, marginTop: '2px' }}>Ethereal depth</div>
    </div>
    <style>{`@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}`}</style>
  </div>
}

function DarkPreview() {
  return <div style={s.c('#09090b', { gap: '8px', flexDirection: 'column' })}>
    <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ background: '#fafafa', color: '#09090b', borderRadius: '7px', padding: '8px 14px', fontSize: '0.73rem', fontFamily: 'DM Sans', fontWeight: 500 }}>Deploy</div>
      <div style={{ background: '#18181b', color: '#fafafa', border: '1px solid #27272a', borderRadius: '7px', padding: '8px 14px', fontSize: '0.73rem', fontFamily: 'DM Sans' }}>Settings</div>
    </div>
    <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '7px', padding: '7px 12px', color: '#71717a', fontSize: '0.7rem', fontFamily: 'DM Sans', width: '140px', textAlign: 'center' }}>Search…</div>
    <div style={{ display: 'flex', gap: '6px' }}>
      <span style={{ background: '#27272a', color: '#a1a1aa', borderRadius: '5px', padding: '2px 8px', fontSize: '0.65rem', fontFamily: 'Space Mono' }}>v2.4.1</span>
      <span style={{ background: '#27272a', color: '#a1a1aa', borderRadius: '5px', padding: '2px 8px', fontSize: '0.65rem', fontFamily: 'Space Mono' }}>main</span>
    </div>
  </div>
}

function RetroPreview() {
  return <div style={{ ...s.c('#1a0030', { position: 'relative', overflow: 'hidden' }) }}>
    <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,transparent 1px,transparent 4px)', pointerEvents: 'none' }} />
    <div style={{ background: 'linear-gradient(135deg,#ff00cc,#3333ff)', border: '2px solid #fff', color: '#fff', padding: '8px 16px', borderRadius: '4px', fontFamily: 'Space Mono', fontSize: '0.7rem', fontWeight: 700, boxShadow: '0 0 10px #ff00cc', textShadow: '0 0 6px #fff', position: 'relative', zIndex: 1 }}>ENTER SYSTEM</div>
    <div style={{ background: 'transparent', border: '1px solid #00ffff', color: '#00ffff', padding: '5px 12px', fontFamily: 'Space Mono', fontSize: '0.65rem', boxShadow: '0 0 8px rgba(0,255,255,0.4)', textShadow: '0 0 6px #00ffff', position: 'relative', zIndex: 1 }}>SYS_ONLINE</div>
  </div>
}

function ClayPreview() {
  return <div style={s.c('linear-gradient(135deg,#fce4ec,#e8f5e9,#e3f2fd)', { gap: '10px' })}>
    <div style={{ background: '#ff6b9d', borderRadius: '14px', padding: '10px 18px', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem', boxShadow: '0 6px 0 #e0527a, 0 10px 16px rgba(255,107,157,0.4)' }}>❤️ Love</div>
    <div style={{ background: '#a78bfa', borderRadius: '18px', padding: '12px 16px', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: '0.78rem', boxShadow: '0 6px 0 #7c5cc4, 0 10px 20px rgba(167,139,250,0.4)' }}>🎮 Play</div>
    <div style={{ background: '#60a5fa', borderRadius: '14px', padding: '10px 16px', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.78rem', boxShadow: '0 6px 0 #2563eb, 0 10px 16px rgba(96,165,250,0.4)' }}>💙 Save</div>
  </div>
}

function BentoPreview() {
  const cells = [
    { span: '1 / 3', rowSpan: '1 / 3', bg: 'linear-gradient(135deg,#7c3aed,#4f46e5)', emoji: '🚀', label: 'Analytics' },
    { bg: '#161b22', emoji: '📈', label: '+24%' },
    { bg: '#06b6d4', emoji: '💬', label: 'Chat', textColor: '#001a1f' },
    { bg: '#161b22', emoji: '🔔', label: 'Alerts' },
    { bg: '#f43f5e', emoji: '❤️', label: 'Liked' },
  ]
  return <div style={{ background: '#0f0f0f', padding: '10px', width: '100%', height: '100%' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: 'repeat(2,1fr)', gap: '5px', height: '100%' }}>
      {cells.map((c, i) => (
        <div key={i} style={{ borderRadius: '10px', background: c.bg, gridColumn: c.span, gridRow: c.rowSpan, padding: '8px', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
          <span style={{ position: 'absolute', top: '6px', right: '7px', fontSize: '0.9rem' }}>{c.emoji}</span>
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: '0.65rem', color: c.textColor || 'rgba(255,255,255,0.9)' }}>{c.label}</span>
        </div>
      ))}
    </div>
  </div>
}

function DopaminePreview() {
  const btns = [{ bg: '#ff3d00', t: '🔥' }, { bg: '#ffe600', t: '⚡', c: '#111' }, { bg: '#00e676', t: '✅', c: '#001' }, { bg: '#2979ff', t: '🎯' }]
  return <div style={s.c('#fff', { gap: '8px' })}>
    {btns.map((b, i) => (
      <div key={i} style={{ background: b.bg, borderRadius: '10px', padding: '10px 14px', color: b.c || '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem' }}>{b.t}</div>
    ))}
    <div style={{ borderRadius: '100px', padding: '5px 12px', border: '2px solid #ff6d00', color: '#ff6d00', fontSize: '0.72rem', fontFamily: 'DM Sans', fontWeight: 600 }}>ENERGY</div>
  </div>
}

function TerminalPreview() {
  return <div style={{ background: '#0d0d0d', width: '100%', height: '100%', padding: '14px', fontFamily: 'Space Mono', color: '#00ff41', fontSize: '0.68rem' }}>
    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
      {['#ff5f57', '#ffbd2e', '#28c940'].map((c, i) => <div key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />)}
    </div>
    <div style={{ color: '#888' }}>$ <span style={{ color: '#00ff41' }}>npm run build</span></div>
    <div style={{ color: '#3fb950', marginTop: '2px' }}>  ✓ Compiled 42ms</div>
    <div style={{ color: '#888', marginTop: '2px' }}>$ <span style={{ color: '#00ff41' }}>git push</span></div>
    <div style={{ color: '#3fb950', marginTop: '2px' }}>  ✓ Deployed</div>
    <div style={{ color: '#888', marginTop: '3px' }}>$ <span style={{ display: 'inline-block', width: '6px', height: '12px', background: '#00ff41', animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom' }} /></div>
    <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
  </div>
}

function SwissPreview() {
  return <div style={{ background: '#fff', width: '100%', height: '100%', padding: '16px', display: 'grid', gridTemplateColumns: '5px 1fr', gap: '14px', alignItems: 'start' }}>
    <div style={{ background: '#ff0000', height: '100%', borderRadius: '2px' }} />
    <div>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '3rem', color: 'transparent', WebkitTextStroke: '2px #000', lineHeight: 1, letterSpacing: '-1px' }}>04</div>
      <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '0.85rem', color: '#000', marginTop: '4px' }}>FORM FOLLOWS<br/>FUNCTION</div>
      <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '7px 0' }} />
      <div style={{ fontFamily: 'DM Sans', fontSize: '0.68rem', color: '#555', lineHeight: 1.6 }}>Typography as architecture.</div>
    </div>
  </div>
}

function PastelPreview() {
  return <div style={s.c('#fdf6ff', { gap: '8px', flexDirection: 'column' })}>
    <div style={{ display: 'flex', gap: '7px' }}>
      <div style={{ background: '#e9d8fd', color: '#553c9a', borderRadius: '12px', padding: '8px 16px', fontSize: '0.75rem', fontFamily: 'DM Sans', fontWeight: 500 }}>✨ Create</div>
      <div style={{ background: '#bee3f8', color: '#2b6cb0', borderRadius: '100px', padding: '5px 12px', fontSize: '0.72rem' }}>Work</div>
    </div>
    <div style={{ display: 'flex', gap: '7px' }}>
      {[['🌸', '#fff'], ['🎨', '#fff'], ['💫', '#fff']].map(([e, bg], i) => (
        <div key={i} style={{ background: bg, borderRadius: '14px', padding: '10px 12px', border: '1px solid #ede9fe', textAlign: 'center', fontSize: '1.1rem' }}>{e}</div>
      ))}
    </div>
  </div>
}

function MaxPreview({ hovered }) {
  return <div style={{ background: '#1a0a2e', width: '100%', height: '100%', padding: '14px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#ff006e,#ffbe0b,#3a86ff,#8338ec,#ff006e)', backgroundSize: '200% 100%', animation: 'slide 2s linear infinite' }} />
    <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '2.2rem', lineHeight: 0.9, background: 'linear-gradient(45deg,#ff006e,#fb5607,#ffbe0b,#8338ec)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>MORE<br/>IS MORE</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
      {['LOUD', 'BOLD', 'LAYERED', 'CHAOS'].map((t, i) => (
        <span key={i} style={{ padding: '2px 7px', fontSize: '0.58rem', fontWeight: 700, border: '1px solid', borderColor: ['#ff006e', '#ffbe0b', '#3a86ff', '#8338ec'][i], color: ['#ff006e', '#ffbe0b', '#3a86ff', '#8338ec'][i], fontFamily: 'Space Mono', borderRadius: '2px', background: `rgba(${[['255,0,110', '255,190,11', '58,134,255', '131,56,236'][i]]},0.1)` }}>{t}</span>
      ))}
    </div>
    <style>{`@keyframes slide{0%{background-position:0%}100%{background-position:200%}}`}</style>
  </div>
}

function MonoPreview() {
  return <div style={{ background: '#1a0a0a', width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{ height: '6px', borderRadius: '100px', background: 'linear-gradient(90deg,#450a0a,#7f1d1d,#b91c1c,#ef4444,#f87171,#fecaca)' }} />
    <div style={{ display: 'flex', gap: '5px' }}>
      {['#450a0a','#7f1d1d','#b91c1c','#dc2626','#f87171','#fca5a5','#fecaca'].map((c, i) => (
        <div key={i} style={{ width: '28px', height: '28px', borderRadius: '6px', background: c }} />
      ))}
    </div>
    <div style={{ display: 'flex', gap: '7px' }}>
      {[['#7f1d1d','Dark'],['#b91c1c','Base'],['#ef4444','Light']].map(([bg, t], i) => (
        <div key={i} style={{ background: bg, borderRadius: '7px', padding: '6px 12px', color: '#fff', fontSize: '0.7rem', fontFamily: 'DM Sans', fontWeight: 600 }}>{t}</div>
      ))}
    </div>
  </div>
}

function TypoPreview() {
  return <div style={{ background: '#f5f0e8', width: '100%', height: '100%', padding: '16px', fontFamily: 'Playfair Display,serif' }}>
    <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 0.9, letterSpacing: '-3px' }}>THE<br/>FUTURE</div>
    <hr style={{ border: 'none', borderTop: '2px solid #1a1a1a', margin: '8px 0 6px' }} />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <div style={{ fontSize: '0.65rem', color: '#333', fontStyle: 'italic', fontFamily: 'DM Sans', lineHeight: 1.6 }}>When typography commands space…</div>
      <div style={{ fontSize: '3rem', fontWeight: 700, color: 'transparent', WebkitTextStroke: '2px #1a1a1a', lineHeight: 1, letterSpacing: '-2px' }}>OF</div>
    </div>
  </div>
}

function GrainPreview() {
  return <div style={{ background: 'linear-gradient(135deg,#2d1b69,#11998e)', width: '100%', height: '100%', padding: '16px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '150px', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.8rem', color: '#fff', letterSpacing: '3px' }}>Analog Soul</div>
      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px', fontFamily: 'DM Sans' }}>Film grain adds warmth.</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.24)', borderRadius: '100px', padding: '6px 12px', fontSize: '0.68rem', color: '#fff', marginTop: '10px', backdropFilter: 'blur(6px)' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
        Live Signal
      </div>
    </div>
  </div>
}

function GeoPreview() {
  return <div style={{ background: '#0a0a14', width: '100%', height: '100%', position: 'relative', overflow: 'hidden', padding: '16px' }}>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice">
      <polygon points="260,0 300,0 300,70" fill="rgba(0,229,255,0.07)" stroke="rgba(0,229,255,0.2)" strokeWidth="1"/>
      <polygon points="0,180 70,180 0,110" fill="rgba(191,90,242,0.07)" stroke="rgba(191,90,242,0.2)" strokeWidth="1"/>
      <circle cx="230" cy="120" r="50" fill="none" stroke="rgba(255,230,0,0.12)" strokeWidth="1"/>
      <circle cx="230" cy="120" r="30" fill="none" stroke="rgba(255,230,0,0.16)" strokeWidth="1"/>
      <polygon points="120,30 150,8 180,30 180,62 150,78 120,62" fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1"/>
    </svg>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.7rem', letterSpacing: '3px', color: '#fff' }}>GEOMETRIC</div>
      <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' }}>
        {[['#00e5ff','△ TRI'],['#ffe600','⬡ HEX'],['#bf5af2','◈ POLY']].map(([c, t], i) => (
          <span key={i} style={{ padding: '3px 9px', border: `1px solid ${c}40`, borderRadius: '3px', color: c, fontSize: '0.62rem', fontFamily: 'Space Mono', background: `${c}0a` }}>{t}</span>
        ))}
      </div>
    </div>
  </div>
}

function BlobPreview({ hovered }) {
  return <div style={{ background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', width: '100%', height: '100%', position: 'relative', overflow: 'hidden', padding: '16px' }}>
    <div style={{ position: 'absolute', width: '120px', height: '120px', background: '#7c3aed', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 70%', filter: 'blur(2px)', opacity: 0.7, top: '-30px', right: '-20px', animation: 'morph 6s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', width: '90px', height: '90px', background: '#ec4899', borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%', filter: 'blur(2px)', opacity: 0.7, bottom: '-20px', left: '10px', animation: 'morph 6s ease-in-out infinite 2s' }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.3rem', color: '#fff', fontStyle: 'italic' }}>Fluid & Free</div>
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', padding: '10px 16px', marginTop: '8px', color: '#fff', fontSize: '0.7rem', lineHeight: 1.6 }}>Shapes that breathe.</div>
    </div>
    <style>{`@keyframes morph{0%,100%{border-radius:60% 40% 70% 30% / 50% 60% 40% 70%}50%{border-radius:40% 60% 30% 70% / 60% 40% 70% 30%}}`}</style>
  </div>
}

function CardUIPreview() {
  return <div style={{ background: '#f8f9fc', width: '100%', height: '100%', padding: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
    {[['💰','Revenue','$48K'],['👥','Users','3.8K'],['📊','Conv.','68%'],['🚀','Growth','+24%']].map(([icon,name,val],i)=>(
      <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '1rem' }}>{icon}</div>
        <div style={{ fontSize: '0.65rem', color: '#666', fontFamily: 'DM Sans', marginTop: '3px' }}>{name}</div>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5', fontFamily: 'DM Sans', marginTop: '1px' }}>{val}</div>
      </div>
    ))}
  </div>
}

function DashPreview() {
  const heights = [30, 55, 45, 80, 65, 90, 70, 100, 60, 75, 50, 40]
  return <div style={{ background: '#0d1117', width: '100%', height: '100%', padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px' }}>
    {[['UPTIME','99.9%','up'],['ERRORS','0.03%','dn'],['P95','142ms','up']].map(([l,v,d],i)=>(
      <div key={i} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', padding: '8px' }}>
        <div style={{ fontSize: '0.52rem', color: '#8b949e', fontFamily: 'Space Mono', letterSpacing: '0.1em' }}>{l}</div>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#c9d1d9', fontFamily: 'Space Mono', marginTop: '2px' }}>{v}</div>
        <div style={{ fontSize: '0.58rem', color: d === 'up' ? '#3fb950' : '#f85149', marginTop: '1px' }}>{d === 'up' ? '▲' : '▼'}</div>
      </div>
    ))}
    <div style={{ gridColumn: 'span 3', background: '#161b22', border: '1px solid #21262d', borderRadius: '8px', padding: '8px' }}>
      <div style={{ fontSize: '0.5rem', color: '#8b949e', fontFamily: 'Space Mono', marginBottom: '5px' }}>REQUESTS</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '32px' }}>
        {heights.map((h,i)=>(
          <div key={i} style={{ flex: 1, height: `${h}%`, background: h === 100 ? '#f85149' : '#1f6feb', borderRadius: '2px 2px 0 0' }} />
        ))}
      </div>
    </div>
  </div>
}

function MagPreview() {
  return <div style={{ background: '#fff', width: '100%', height: '100%', padding: '14px 16px', borderTop: '3px solid #e63946', fontFamily: 'Playfair Display,serif' }}>
    <div style={{ fontFamily: 'Space Mono', fontSize: '0.52rem', letterSpacing: '0.18em', color: '#999', marginBottom: '8px' }}>QUARTERLY REVIEW · ISSUE 047</div>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
      <div>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.15, color: '#1a1a1a' }}>The <span style={{ color: '#e63946' }}>Quiet</span> Revolution</div>
        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '6px 0' }} />
        <div style={{ fontSize: '0.62rem', color: '#444', fontStyle: 'italic', fontFamily: 'DM Sans', lineHeight: 1.6 }}>In an age of algorithmic feeds…</div>
      </div>
      <div style={{ borderLeft: '2px solid #e63946', paddingLeft: '8px' }}>
        <div style={{ fontSize: '0.72rem', color: '#1a1a1a', fontStyle: 'italic', lineHeight: 1.4 }}>"Design is architecture."</div>
      </div>
    </div>
  </div>
}

function ParallaxPreview() {
  return <div style={{ background: '#000', width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,#000511,#0d1b2a,#1b263b)', backgroundImage: 'radial-gradient(1px 1px at 20% 30%,white,transparent),radial-gradient(1px 1px at 70% 15%,white,transparent),radial-gradient(1px 1px at 50% 60%,rgba(255,255,255,0.6),transparent)' }} />
    <div style={{ position: 'absolute', top: '12px', right: '28px', width: '32px', height: '32px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%,#fef3c7,#fbbf24)', boxShadow: '0 0 20px rgba(251,191,36,0.4)' }} />
    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '55px', background: 'linear-gradient(180deg,transparent,#1a2a4a,#0d1b2a)', clipPath: 'polygon(0% 100%,0% 60%,15% 40%,30% 55%,50% 10%,70% 40%,85% 25%,100% 55%,100% 100%)' }} />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.2rem', color: '#fff', letterSpacing: '4px' }}>PARALLAX</div>
      <div style={{ fontFamily: 'DM Sans', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Layered depth</div>
    </div>
  </div>
}

function MicroPreview() {
  return <div style={{ background: '#fafafa', width: '100%', height: '100%', padding: '16px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
      <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid #f43f5e', background: '#fff5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>❤️</div>
      <div style={{ fontSize: '0.6rem', color: '#aaa', fontFamily: 'DM Sans' }}>Liked</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ width: '48px', height: '26px', borderRadius: '100px', background: '#4f46e5', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', top: '3px', right: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
      </div>
      <div style={{ width: '100px' }}>
        <div style={{ height: '6px', background: '#e0e0e0', borderRadius: '100px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '74%', background: 'linear-gradient(90deg,#4f46e5,#7c3aed)', borderRadius: '100px' }} />
        </div>
        <div style={{ fontSize: '0.6rem', color: '#aaa', textAlign: 'right', marginTop: '2px', fontFamily: 'DM Sans' }}>74%</div>
      </div>
    </div>
  </div>
}

function VaporPreview() {
  return <div style={{ background: 'linear-gradient(180deg,#0a001f,#1a0033,#2d0048)', width: '100%', height: '100%', position: 'relative', overflow: 'hidden', padding: '14px' }}>
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', backgroundImage: 'linear-gradient(rgba(255,0,255,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,0,255,0.35) 1px,transparent 1px)', backgroundSize: '22px 22px', transform: 'perspective(160px) rotateX(60deg)', transformOrigin: 'bottom' }} />
    <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(180deg,#ff6ec7,#ff9a3c 50%,#1a0033 51%)', boxShadow: '0 0 30px rgba(255,110,199,0.6)' }} />
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.7rem', letterSpacing: '5px', background: 'linear-gradient(90deg,#ff6ec7,#a78bfa,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ＡＥＳＴＨ</div>
      <div style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', color: '#a78bfa', letterSpacing: '0.25em', marginTop: '3px' }}>VAPORWAVE 90s</div>
    </div>
  </div>
}

function CottagePreview() {
  return <div style={{ background: '#fdf8f0', width: '100%', height: '100%', padding: '16px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '0.85rem', letterSpacing: '4px', opacity: 0.45 }}>🌿 🌸 🍄</div>
    <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.2rem', color: '#5c3d2e', fontStyle: 'italic' }}>A Little Corner<br/><em>of the Garden</em></div>
    <hr style={{ border: 'none', borderTop: '1px dashed #c8a882', margin: '8px 0' }} />
    <div style={{ fontSize: '0.68rem', color: '#7a5c45', fontFamily: 'DM Sans', lineHeight: 1.7 }}>Where every morning smells of fresh bread…</div>
    <div style={{ display: 'flex', gap: '5px', marginTop: '8px', flexWrap: 'wrap' }}>
      {['🌿 Herbal','🍞 Baked','🌸 Bloom'].map((t,i)=>(
        <span key={i} style={{ background: '#f0e8d8', border: '1px solid #c8a882', borderRadius: '100px', padding: '3px 10px', fontSize: '0.65rem', color: '#7a5c45' }}>{t}</span>
      ))}
    </div>
  </div>
}

function MemphisPreview() {
  return <div style={{ background: '#fff', width: '100%', height: '100%', padding: '16px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,#ff0066 2px,transparent 2px),linear-gradient(45deg,#ffcc00 1px,transparent 1px),linear-gradient(-45deg,#00ccff 1px,transparent 1px)', backgroundSize: '24px 24px,16px 16px,16px 16px', opacity: 0.13 }} />
    <div style={{ position: 'absolute', right: '-5px', top: 0, bottom: 0, width: '28px', background: 'repeating-linear-gradient(45deg,#ffcc00 0px,#ffcc00 4px,transparent 4px,transparent 9px)' }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.9rem', letterSpacing: '2px', color: '#1a1a1a' }}>MEMPHIS 1981</div>
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center', margin: '8px 0', flexWrap: 'wrap' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ff0066', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>★</div>
        <div style={{ width: '26px', height: '26px', background: '#ffcc00', transform: 'rotate(15deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>◆</div>
        <div style={{ fontSize: '1.5rem', color: '#ff6600', fontFamily: 'serif' }}>〰</div>
      </div>
      <div style={{ background: '#ff0066', color: '#fff', border: '2.5px solid #1a1a1a', padding: '7px 14px', fontFamily: 'Bebas Neue,sans-serif', fontSize: '0.85rem', letterSpacing: '2px', boxShadow: '3px 3px 0 #1a1a1a', display: 'inline-block' }}>DESIGN NOW</div>
    </div>
  </div>
}

function PixelPreview() {
  const grid = [0,1,1,0,0,1,1,0, 1,1,1,1,1,1,1,1, 1,2,1,1,1,1,2,1, 1,1,1,1,1,1,1,1, 0,1,0,0,0,0,1,0, 0,0,1,1,1,1,0,0]
  const colors = ['transparent','#ff3c3c','#fbbf24']
  return <div style={{ background: '#1a1a2e', width: '100%', height: '100%', padding: '14px', imageRendering: 'pixelated' }}>
    <div style={{ background: '#0d0d1a', border: '3px solid #333', padding: '12px' }}>
      <div style={{ fontFamily: 'Space Mono', fontSize: '0.8rem', letterSpacing: '2px', color: '#00ff41', textShadow: '0 0 6px #00ff41', marginBottom: '8px' }}>&gt; PLAYER ONE</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,9px)', gap: '1px', margin: '0 auto 8px', width: 'fit-content' }}>
        {grid.map((c, i) => <div key={i} style={{ width: '9px', height: '9px', background: colors[c] }} />)}
      </div>
      <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
        {['ATTACK','MAGIC','RUN'].map((t,i)=>(
          <div key={i} style={{ background: '#333', color: '#00ff41', border: '1.5px solid #555', padding: '3px 8px', fontFamily: 'Space Mono', fontSize: '0.52rem', letterSpacing: '0.08em' }}>{t}</div>
        ))}
      </div>
    </div>
  </div>
}

function DefaultPreview() {
  return <div style={{ width: '100%', height: '100%', background: '#0d0d18', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555570', fontFamily: 'Space Mono', fontSize: '0.7rem' }}>Preview</div>
}
