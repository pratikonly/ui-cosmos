import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UI_STYLES } from '../../lib/styles-data'
import { useEffect, useRef } from 'react'

// ─── Showcase content for every style ───────────────────────────────────────
const SHOWCASES = {

  // ── 01 NEUMORPHISM ──────────────────────────────────────────────────────
  neumorphism: () => (
    <ShowcaseShell bg="#e0e5ec" textColor="#444">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', width: '100%', maxWidth: '600px' }}>
        {/* Hero Card */}
        <div style={{ background: '#e0e5ec', borderRadius: '24px', padding: '40px', boxShadow: '12px 12px 24px #b8bec7, -12px -12px 24px #fff', width: '100%', textAlign: 'center' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#e0e5ec', boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #fff', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🎵</div>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#444', margin: '0 0 8px' }}>Now Playing</h2>
          <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Soft UI · Ambient Mix</p>
        </div>
        {/* Controls */}
        <div style={{ background: '#e0e5ec', borderRadius: '20px', padding: '28px 36px', boxShadow: '10px 10px 20px #b8bec7, -10px -10px 20px #fff', display: 'flex', alignItems: 'center', gap: '28px' }}>
          {['⏮', '⏸', '⏭'].map((icon, i) => (
            <button key={i} style={{ width: i === 1 ? '68px' : '52px', height: i === 1 ? '68px' : '52px', borderRadius: '50%', background: '#e0e5ec', border: 'none', fontSize: i === 1 ? '1.5rem' : '1.1rem', color: i === 1 ? '#6c8ebf' : '#888', cursor: 'pointer', boxShadow: i === 1 ? '6px 6px 12px #b8bec7, -6px -6px 12px #fff' : '4px 4px 8px #b8bec7, -4px -4px 8px #fff' }}>
              {icon}
            </button>
          ))}
        </div>
        {/* Progress + Volume */}
        <div style={{ background: '#e0e5ec', borderRadius: '20px', padding: '28px', boxShadow: '10px 10px 20px #b8bec7, -10px -10px 20px #fff', width: '100%' }}>
          <div style={{ background: '#e0e5ec', borderRadius: '100px', height: '8px', boxShadow: 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #fff', marginBottom: '20px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '62%', background: 'linear-gradient(90deg,#6c8ebf,#8eafd4)', borderRadius: '100px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '0.78rem', fontFamily: 'Space Mono,monospace' }}>
            <span>1:54</span><span>3:07</span>
          </div>
        </div>
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Shuffle', 'Like', 'Add to Queue', 'Share'].map((btn, i) => (
            <button key={i} style={{ background: '#e0e5ec', border: 'none', borderRadius: '14px', padding: '12px 22px', fontFamily: 'DM Sans,sans-serif', fontWeight: 500, fontSize: '0.88rem', color: '#666', cursor: 'pointer', boxShadow: '5px 5px 10px #b8bec7, -5px -5px 10px #fff' }}>
              {btn}
            </button>
          ))}
        </div>
        {/* Toggle row */}
        <div style={{ background: '#e0e5ec', borderRadius: '20px', padding: '24px 28px', boxShadow: '10px 10px 20px #b8bec7, -10px -10px 20px #fff', width: '100%' }}>
          <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', color: '#888', marginBottom: '16px' }}>Settings</div>
          {['Crossfade', 'Equalizer', 'Gapless Playback'].map((label, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: i < 2 ? '14px' : 0 }}>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', color: '#555' }}>{label}</span>
              <NeuToggle on={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </ShowcaseShell>
  ),

  // ── 02 GLASSMORPHISM ────────────────────────────────────────────────────
  glassmorphism: () => (
    <ShowcaseShell bg="linear-gradient(135deg,#0f0c29 0%,#302b63 40%,#24243e 100%)" textColor="#fff" extraBg>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '640px' }}>
        {/* Blobs */}
        {['#7c3aed','#06b6d4','#f43f5e','#fbbf24'].map((c, i) => (
          <div key={i} style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.5, width: ['200px','160px','130px','100px'][i], height: ['200px','160px','130px','100px'][i], background: c, top: ['-80px','40%','-20px','60%'][i], left: ['-60px','-40px','auto','auto'][i], right: i > 1 ? ['-40px','-20px'][i-2] : 'auto', animation: `pulse${i} ${[5,7,6,8][i]}s ease-in-out infinite` }} />
        ))}
        {/* Main glass card */}
        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '28px', padding: '36px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontFamily: 'Space Mono,monospace', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '12px' }}>Premium Dashboard</div>
          <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '2.4rem', letterSpacing: '2px', color: '#fff', marginBottom: '6px' }}>Portfolio Value</div>
          <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '3.8rem', letterSpacing: '-1px', color: '#fff' }}>$124,890<span style={{ fontSize: '1.5rem', opacity: 0.6 }}>.42</span></div>
          <div style={{ color: '#4ade80', fontSize: '0.88rem', marginTop: '6px' }}>↑ +12.4% this month</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginTop: '24px' }}>
            {[['📈','Stocks','$54.2K'],['₿','Crypto','$38.1K'],['🏠','Real Estate','$32.6K']].map(([icon, name, val]) => (
              <div key={name} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Mono,monospace' }}>{name}</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {['Deposit Funds', 'Withdraw'].map((btn, i) => (
            <button key={i} style={{ background: i === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: `1px solid ${i === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.2)'}`, borderRadius: '16px', padding: '16px', color: '#fff', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
              {btn}
            </button>
          ))}
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['backdrop-filter: blur(20px)', 'rgba(255,255,255,0.1)', '1px solid rgba(255,255,255,0.2)'].map(t => (
            <span key={t} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '6px 12px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Mono,monospace' }}>{t}</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse0{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-15px)}}@keyframes pulse1{0%,100%{transform:translate(0,0)}50%{transform:translate(-15px,20px)}}@keyframes pulse2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,-10px)}}@keyframes pulse3{0%,100%{transform:translate(0,0)}50%{transform:translate(15px,20px)}}`}</style>
    </ShowcaseShell>
  ),

  // ── 03 NEO-BRUTALISM ────────────────────────────────────────────────────
  'neo-brutalism': () => (
    <ShowcaseShell bg="#f5f500" textColor="#000">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '580px' }}>
        <div style={{ background: '#fff', border: '3px solid #000', boxShadow: '8px 8px 0 #000', padding: '32px' }}>
          <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '3rem', letterSpacing: '2px', lineHeight: 1, marginBottom: '12px' }}>LAUNCH YOUR STARTUP<br/>IN 14 DAYS</div>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', color: '#333', lineHeight: 1.7, marginBottom: '20px' }}>No fluff, no filler. Just raw tools, brutal honesty, and a framework that actually ships.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ background: '#000', color: '#fff', border: '3px solid #000', padding: '14px 28px', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '4px 4px 0 #555', letterSpacing: '1px' }}>GET STARTED →</button>
            <button style={{ background: '#f5f500', color: '#000', border: '3px solid #000', padding: '14px 24px', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '4px 4px 0 #888' }}>SEE DEMO</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          {[['🔥','14','Day Sprint'],['⚡','200+','Tools Included'],['💀','0%','Bullshit']].map(([icon, num, label]) => (
            <div key={label} style={{ background: '#fff', border: '3px solid #000', boxShadow: '4px 4px 0 #000', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem' }}>{icon}</div>
              <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '2rem', lineHeight: 1.1, marginTop: '6px' }}>{num}</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', color: '#555', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#ff3c3c', border: '3px solid #000', boxShadow: '6px 6px 0 #000', padding: '24px' }}>
          <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '1.4rem', letterSpacing: '1px', color: '#fff', marginBottom: '10px' }}>EMAIL WAITLIST</div>
          <div style={{ display: 'flex', gap: '0' }}>
            <input placeholder="your@email.com" style={{ flex: 1, border: '3px solid #000', padding: '12px 16px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', outline: 'none', background: '#fff' }} />
            <button style={{ background: '#000', color: '#fff', border: '3px solid #000', borderLeft: 'none', padding: '12px 20px', fontFamily: 'Syne,sans-serif', fontWeight: 800, cursor: 'pointer', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>JOIN →</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['SHIP IT', 'MOVE FAST', 'NO EXCUSES', 'BUILD NOW'].map(tag => (
            <span key={tag} style={{ background: '#fff', border: '2.5px solid #000', boxShadow: '3px 3px 0 #000', padding: '6px 14px', fontFamily: 'Space Mono,monospace', fontWeight: 700, fontSize: '0.72rem' }}>{tag}</span>
          ))}
        </div>
      </div>
    </ShowcaseShell>
  ),

  // ── 04 FLAT DESIGN 2.0 ──────────────────────────────────────────────────
  'flat-design': () => (
    <ShowcaseShell bg="#f7f8fc" textColor="#1a1a2e">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '640px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#1a1a2e' }}>Project Board</div>
            <button style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '10px', padding: '8px 18px', fontFamily: 'DM Sans,sans-serif', fontWeight: 500, fontSize: '0.85rem', cursor: 'pointer' }}>+ New Task</button>
          </div>
          {[
            { title: 'Design system audit', tag: 'In Progress', tagBg: '#dbeafe', tagColor: '#1e40af', due: 'Due today', avatar: '#4f46e5' },
            { title: 'API integration tests', tag: 'Review', tagBg: '#fef3c7', tagColor: '#92400e', due: 'Due tomorrow', avatar: '#0891b2' },
            { title: 'Deploy to staging', tag: 'Done', tagBg: '#dcfce7', tagColor: '#166534', due: 'Completed', avatar: '#059669' },
            { title: 'User interviews Q3', tag: 'Todo', tagBg: '#f3f4f6', tagColor: '#374151', due: 'Next week', avatar: '#7c3aed' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: i < 3 ? '1px solid #f0f0f5' : 'none' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: item.avatar, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.72rem', fontWeight: 600 }}>{item.title[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#1a1a2e' }}>{item.title}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', color: '#888', marginTop: '2px' }}>{item.due}</div>
              </div>
              <span style={{ background: item.tagBg, color: item.tagColor, borderRadius: '100px', padding: '4px 12px', fontSize: '0.72rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.tag}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}>
          {[['Total Tasks','24','📋'],['Completed','18','✅'],['In Progress','4','⚡'],['Overdue','2','🔴']].map(([label, num, icon]) => (
            <div key={label} style={{ background: '#fff', borderRadius: '14px', padding: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem' }}>{icon}</div>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#4f46e5', marginTop: '4px' }}>{num}</div>
              <div style={{ fontSize: '0.68rem', color: '#888', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseShell>
  ),

  // ── 05 MATERIAL DESIGN 3 ────────────────────────────────────────────────
  'material-design': () => (
    <ShowcaseShell bg="#fffbfe" textColor="#1c1b1f">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <div style={{ background: '#fffbfe', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(103,80,164,0.12)' }}>
          <div style={{ background: 'linear-gradient(135deg,#6750a4,#9c27b0)', padding: '32px', color: '#fff' }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'Space Mono,monospace', letterSpacing: '0.18em', opacity: 0.7, marginBottom: '8px' }}>MUSIC FOR YOU</div>
            <div style={{ fontFamily: 'Bebas Neue,sans-serif', fontSize: '2.2rem', letterSpacing: '2px' }}>Daily Mix 1</div>
            <div style={{ fontSize: '0.88rem', opacity: 0.75, marginTop: '4px' }}>Based on your recent listening</div>
          </div>
          <div style={{ padding: '24px' }}>
            {['Blinding Lights', 'Levitating', 'Stay', 'Peaches'].map((song, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: i < 3 ? '1px solid #f3edf7' : 'none' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: ['#e8def8','#d0bcff','#ccc2dc','#b0a4c7'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>🎵</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 500, fontSize: '0.9rem', color: '#1c1b1f' }}>{song}</div>
                  <div style={{ fontSize: '0.75rem', color: '#49454f', marginTop: '2px' }}>{'3:2' + (i + 4)}</div>
                </div>
                {i === 1 && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6750a4' }} />}
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 24px 24px', display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
            {['⏮', '⏸', '⏭'].map((icon, i) => (
              <button key={i} style={{ width: i === 1 ? '64px' : '48px', height: i === 1 ? '64px' : '48px', borderRadius: '50%', background: i === 1 ? '#6750a4' : '#e8def8', color: i === 1 ? '#fff' : '#6750a4', border: 'none', fontSize: i === 1 ? '1.4rem' : '1rem', cursor: 'pointer', boxShadow: i === 1 ? '0 4px 14px rgba(103,80,164,0.4)' : 'none' }}>{icon}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['🎵 Music', '🎤 Podcasts', '📻 Radio', '🎸 Live'].map(t => (
            <div key={t} style={{ background: '#e8def8', color: '#21005d', borderRadius: '100px', padding: '8px 18px', fontSize: '0.82rem', fontFamily: 'DM Sans,sans-serif', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {t} <span style={{ opacity: 0.6 }}>×</span>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseShell>
  ),

  // ── 06 SKEUOMORPHISM ────────────────────────────────────────────────────
  skeuomorphism: () => (
    <ShowcaseShell bg="linear-gradient(180deg,#3a3f4b 0%,#1a1e28 100%)" textColor="#fff">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '560px', alignItems: 'center' }}>
        <div style={{ background: 'linear-gradient(180deg,#2a2f3b,#1a1e28)', border: '2px solid #0a0c10', borderRadius: '28px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)', width: '100%', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Space Mono,monospace', fontSize: '2.8rem', color: '#4ade80', letterSpacing: '4px', marginBottom: '8px', textShadow: '0 0 20px rgba(74,222,128,0.5)' }}>3:47 PM</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', letterSpacing: '0.2em', fontFamily: 'Space Mono,monospace' }}>MONDAY · AUG 12</div>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {['⏮', '⏸', '⏭', '🔀', '🔁'].map((icon, i) => (
            <button key={i} style={{ width: i === 1 ? '72px' : '52px', height: i === 1 ? '72px' : '52px', borderRadius: '50%', background: `radial-gradient(circle at 35% 35%, ${i === 1 ? '#68d391,#2f855a' : '#718096,#2d3748'})`, border: `2px solid ${i === 1 ? '#1a4731' : '#1a202c'}`, boxShadow: `0 6px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)`, fontSize: i === 1 ? '1.4rem' : '1rem', cursor: 'pointer', color: '#fff' }}>{icon}</button>
          ))}
        </div>
        <div style={{ width: '100%', background: 'linear-gradient(180deg,#2a2f3b,#1a1e28)', border: '2px solid #0a0c10', borderRadius: '20px', padding: '28px', boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.78rem', color: '#4ade80' }}>2:14</span>
            <span style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.78rem', color: '#555' }}>4:32</span>
          </div>
          <div style={{ height: '8px', background: '#0a0c10', borderRadius: '100px', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '48%', background: 'linear-gradient(90deg,#38a169,#68d391)', borderRadius: '100px' }} />
            <div style={{ position: 'absolute', left: '48%', top: '50%', transform: 'translate(-50%,-50%)', width: '16px', height: '16px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%,#a0aec0,#4a5568)', border: '2px solid #1a202c', boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', width: '100%' }}>
          {[['BASS', '60%'], ['MID', '78%'], ['TREBLE', '55%']].map(([label, val]) => (
            <div key={label} style={{ background: 'linear-gradient(180deg,#2a2f3b,#1a1e28)', border: '2px solid #0a0c10', borderRadius: '16px', padding: '16px', textAlign: 'center', boxShadow: '0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: 'Space Mono,monospace', fontSize: '0.58rem', color: '#4ade80', letterSpacing: '0.2em', marginBottom: '8px' }}>{label}</div>
              <div style={{ height: '60px', background: '#0a0c10', borderRadius: '8px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                <div style={{ width: '100%', background: 'linear-gradient(180deg,#68d391,#2f855a)', height: val, borderRadius: '6px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseShell>
  ),

  // For brevity, remaining styles use a template that still looks great
  // Each gets a proper themed full-page showcase

  aurora: () => <AuroraShowcase />,
  'dark-minimal': () => <DarkShowcase />,
  'retro-y2k': () => <RetroShowcase />,
  claymorphism: () => <ClayShowcase />,
  'bento-grid': () => <BentoShowcase />,
  'dopamine-ui': () => <DopamineShowcase />,
  'terminal-cli': () => <TerminalShowcase />,
  'swiss-international': () => <SwissShowcase />,
  'pastel-soft': () => <PastelShowcase />,
  maximalism: () => <MaxShowcase />,
  monochromatic: () => <MonoShowcase />,
  typographic: () => <TypoShowcase />,
  'grain-texture': () => <GrainShowcase />,
  geometric: () => <GeoShowcase />,
  'organic-blob': () => <BlobShowcase />,
  'card-based': () => <CardShowcase />,
  'dashboard-ui': () => <DashShowcase />,
  'magazine-editorial': () => <MagShowcase />,
  'parallax-scroll': () => <ParallaxShowcase />,
  'micro-interaction': () => <MicroShowcase />,
  vaporwave: () => <VaporShowcase />,
  cottagecore: () => <CottageShowcase />,
  'memphis-design': () => <MemphisShowcase />,
  'pixel-art': () => <PixelShowcase />,
}

// ─── Sub-showcases ────────────────────────────────────────────────────────────

function AuroraShowcase() {
  return <ShowcaseShell bg="#050511" textColor="#fff" extraBg>
    <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '640px' }}>
      {[['#7c3aed','-60px','-40px'],['#06b6d4','auto','-30px'],['#f43f5e','30px','auto']].map(([c,top,right],i)=>
        <div key={i} style={{position:'absolute',width:['200px','170px','120px'][i],height:['200px','170px','120px'][i],background:c,borderRadius:'50%',filter:'blur(55px)',opacity:0.5,top,right,left:i===0?'-60px':'auto',bottom:i===1?'-30px':'auto',animation:`aFloat ${[5,7,6][i]}s ease-in-out infinite`}}/>
      )}
      <div style={{background:'rgba(255,255,255,0.07)',backdropFilter:'blur(24px)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'28px',padding:'40px',position:'relative',zIndex:1,marginBottom:'20px'}}>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',marginBottom:'16px'}}>AI PRODUCT · LANDING PAGE</div>
        <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3rem',letterSpacing:'2px',color:'#fff',marginBottom:'12px',lineHeight:1}}>MEET AURORA<br/>YOUR AI COMPANION</h2>
        <p style={{color:'rgba(255,255,255,0.65)',fontSize:'0.95rem',lineHeight:1.8,marginBottom:'28px'}}>The most intuitive AI assistant, wrapped in the most beautiful interface ever designed.</p>
        <div style={{display:'flex',gap:'14px'}}>
          <button style={{background:'linear-gradient(135deg,#7c3aed,#06b6d4)',border:'none',borderRadius:'100px',padding:'14px 28px',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',cursor:'pointer',boxShadow:'0 8px 24px rgba(124,58,237,0.4)'}}>Get Started Free</button>
          <button style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'100px',padding:'14px 24px',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:'0.9rem',cursor:'pointer'}}>Watch Demo</button>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px'}}>
        {[['✨','Smart','Context-aware AI'],['🔒','Private','Zero data retention'],['⚡','Fast','Sub-100ms responses']].map(([icon,title,desc])=>
          <div key={title} style={{background:'rgba(255,255,255,0.06)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'20px',padding:'22px',textAlign:'center'}}>
            <div style={{fontSize:'1.8rem',marginBottom:'10px'}}>{icon}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.92rem',color:'#fff',marginBottom:'4px'}}>{title}</div>
            <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.5)'}}>{desc}</div>
          </div>
        )}
      </div>
    </div>
    <style>{`@keyframes aFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(15px,-12px) scale(1.05)}}`}</style>
  </ShowcaseShell>
}

function DarkShowcase() {
  return <ShowcaseShell bg="#09090b" textColor="#fafafa">
    <div style={{width:'100%',maxWidth:'680px',display:'flex',flexDirection:'column',gap:'16px'}}>
      <div style={{background:'#18181b',border:'1px solid #27272a',borderRadius:'16px',padding:'28px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
          <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.1rem',color:'#fafafa'}}>Deployments</div>
          <button style={{background:'#fafafa',color:'#09090b',border:'none',borderRadius:'8px',padding:'8px 16px',fontFamily:'DM Sans,sans-serif',fontWeight:600,fontSize:'0.82rem',cursor:'pointer'}}>Deploy</button>
        </div>
        {[{name:'ui-cosmos',branch:'main',status:'Live',time:'2m ago',color:'#3fb950'},{name:'api-server',branch:'feat/auth',status:'Building',time:'5m ago',color:'#fbbf24'},{name:'dashboard',branch:'staging',status:'Error',time:'12m ago',color:'#f85149'},{name:'docs-site',branch:'main',status:'Live',time:'1h ago',color:'#3fb950'}].map((d,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',gap:'14px',padding:'14px 0',borderBottom:i<3?'1px solid #27272a':'none'}}>
            <div style={{width:'8px',height:'8px',borderRadius:'50%',background:d.color,flexShrink:0,boxShadow:`0 0 8px ${d.color}`}}/>
            <div style={{flex:1}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.82rem',color:'#fafafa'}}>{d.name}</div>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.65rem',color:'#52525b',marginTop:'3px'}}>↳ {d.branch}</div>
            </div>
            <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.65rem',color:d.color,background:`${d.color}15`,border:`1px solid ${d.color}30`,borderRadius:'6px',padding:'3px 10px'}}>{d.status}</span>
            <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',color:'#52525b',whiteSpace:'nowrap'}}>{d.time}</span>
          </div>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
        {[['99.9%','Uptime','#3fb950'],['142ms','P95 Latency','#fafafa'],['0.03%','Error Rate','#f85149']].map(([val,label,color])=>(
          <div key={label} style={{background:'#18181b',border:'1px solid #27272a',borderRadius:'14px',padding:'20px',textAlign:'center'}}>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'1.6rem',fontWeight:700,color,letterSpacing:'-1px'}}>{val}</div>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#52525b',marginTop:'4px',letterSpacing:'0.1em'}}>{label.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#18181b',border:'1px solid #27272a',borderRadius:'14px',padding:'20px',display:'flex',alignItems:'center',gap:'12px'}}>
        <span style={{color:'#52525b',fontSize:'0.9rem'}}>⌕</span>
        <input placeholder="Search deployments, branches, commits…" style={{flex:1,background:'transparent',border:'none',color:'#fafafa',fontFamily:'DM Sans,sans-serif',fontSize:'0.85rem',outline:'none'}}/>
        <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#3f3f46',border:'1px solid #27272a',padding:'3px 7px',borderRadius:'5px'}}>⌘K</span>
      </div>
    </div>
  </ShowcaseShell>
}

function RetroShowcase() {
  return <ShowcaseShell bg="#1a0030" textColor="#fff">
    <div style={{position:'relative',zIndex:1,width:'100%',maxWidth:'620px'}}>
      <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,transparent 1px,transparent 4px)',pointerEvents:'none',zIndex:0}}/>
      <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',gap:'20px'}}>
        <div style={{border:'1px solid #3333ff',padding:'32px',background:'rgba(0,0,80,0.4)'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',color:'#00ffff',letterSpacing:'0.2em',marginBottom:'16px'}}>&gt;_ SYSTEM v2.077 — NEURAL LINK ACTIVE</div>
          <h1 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3.2rem',letterSpacing:'4px',background:'linear-gradient(90deg,#ff00cc,#3333ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',marginBottom:'12px',lineHeight:1}}>ENTER THE GRID</h1>
          <p style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem',color:'rgba(255,255,255,0.6)',lineHeight:1.8,marginBottom:'24px'}}>Your identity has been verified. Access to the digital realm is granted. Proceed with caution.</p>
          <div style={{display:'flex',gap:'14px'}}>
            <button style={{background:'linear-gradient(135deg,#ff00cc,#3333ff)',border:'2px solid #fff',color:'#fff',padding:'12px 24px',fontFamily:'Space Mono,monospace',fontSize:'0.8rem',fontWeight:700,cursor:'pointer',boxShadow:'0 0 16px #ff00cc',textShadow:'0 0 8px #fff'}}>JACK IN →</button>
            <button style={{background:'transparent',border:'1px solid #00ffff',color:'#00ffff',padding:'12px 22px',fontFamily:'Space Mono,monospace',fontSize:'0.78rem',cursor:'pointer',boxShadow:'0 0 10px rgba(0,255,255,0.3)'}}>VIEW MAP</button>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
          {[['USERS_ONLINE','1,337'],['DATA_STREAMS','44,200'],['THREATS_BLOCKED','99.7%']].map(([key,val])=>(
            <div key={key} style={{border:'1px solid rgba(51,51,255,0.5)',background:'rgba(0,0,80,0.3)',padding:'18px'}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',color:'#00ffff',letterSpacing:'0.1em',marginBottom:'6px'}}>{key}</div>
              <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'1.6rem',letterSpacing:'2px',color:'#fff',textShadow:'0 0 10px rgba(255,255,255,0.3)'}}>{val}</div>
            </div>
          ))}
        </div>
        <div style={{border:'1px solid #ff00cc',background:'rgba(80,0,40,0.3)',padding:'20px'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.65rem',color:'#ff00cc',letterSpacing:'0.15em',marginBottom:'10px'}}>&gt; TERMINAL OUTPUT</div>
          {['Establishing secure connection…','AUTH: ████████████ [VERIFIED]','Loading neural interface…','Connection established. Welcome back.'].map((line,i)=>(
            <div key={i} style={{fontFamily:'Space Mono,monospace',fontSize:'0.7rem',color:i===3?'#00ffff':'rgba(255,255,255,0.5)',marginBottom:'4px',lineHeight:1.7}}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function ClayShowcase() {
  return <ShowcaseShell bg="linear-gradient(135deg,#fce4ec,#e8f5e9,#e3f2fd)" textColor="#333">
    <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'100%',maxWidth:'580px',alignItems:'center'}}>
      <div style={{background:'#fff',borderRadius:'32px',padding:'36px',boxShadow:'0 10px 0 #d0d0d0, 0 16px 32px rgba(0,0,0,0.1)',width:'100%',textAlign:'center'}}>
        <div style={{fontSize:'3.5rem',marginBottom:'12px'}}>🍔</div>
        <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.6rem',color:'#333',marginBottom:'6px'}}>Yummy Delivery</h2>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',color:'#888',marginBottom:'0'}}>Your food, delivered with love 💛</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px',width:'100%'}}>
        {[['🍕','Pizza','#ff6b9d','#e0527a'],['🍜','Ramen','#60a5fa','#2563eb'],['🥗','Salad','#4ade80','#16a34a'],['🌮','Tacos','#fbbf24','#d97706'],['🍱','Bento','#a78bfa','#7c5cc4'],['🍦','Dessert','#f472b6','#db2777']].map(([icon,name,bg,shadow])=>(
          <button key={name} style={{background:bg,border:'none',borderRadius:'22px',padding:'20px 14px',display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',cursor:'pointer',boxShadow:`0 7px 0 ${shadow}, 0 12px 20px rgba(0,0,0,0.12)`,transition:'all 0.15s'}}>
            <span style={{fontSize:'1.8rem'}}>{icon}</span>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.8rem',color:'#fff'}}>{name}</span>
          </button>
        ))}
      </div>
      <div style={{background:'#fff',borderRadius:'28px',padding:'28px',boxShadow:'0 8px 0 #d0d0d0, 0 14px 28px rgba(0,0,0,0.09)',width:'100%'}}>
        <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.1rem',color:'#333',marginBottom:'16px'}}>Your Order 🛒</div>
        {[['Margherita Pizza','$14.99'],['Miso Ramen','$12.50'],['Green Salad','$8.99']].map(([item,price])=>(
          <div key={item} style={{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #f5f5f5',fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',color:'#555'}}>
            <span>{item}</span><span style={{fontWeight:600,color:'#ff6b9d'}}>{price}</span>
          </div>
        ))}
        <button style={{marginTop:'20px',width:'100%',background:'#ff6b9d',border:'none',borderRadius:'20px',padding:'16px',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1rem',cursor:'pointer',boxShadow:'0 7px 0 #e0527a, 0 12px 20px rgba(255,107,157,0.35)'}}>
          Place Order · $36.48
        </button>
      </div>
    </div>
  </ShowcaseShell>
}

function BentoShowcase() {
  return <ShowcaseShell bg="#0f0f0f" textColor="#fff">
    <div style={{width:'100%',maxWidth:'700px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridTemplateRows:'repeat(3,130px)',gap:'12px'}}>
      <div style={{gridColumn:'span 2',gridRow:'span 2',background:'linear-gradient(135deg,#7c3aed,#4f46e5)',borderRadius:'24px',padding:'28px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'0.65rem',fontFamily:'Space Mono,monospace',color:'rgba(255,255,255,0.5)',letterSpacing:'0.15em'}}>ANALYTICS</div>
        <div>
          <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3.2rem',letterSpacing:'-1px',lineHeight:1}}>1.2M</div>
          <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.82rem',color:'rgba(255,255,255,0.7)',marginTop:'4px'}}>Monthly Active Users</div>
          <div style={{color:'#4ade80',fontSize:'0.78rem',marginTop:'6px'}}>↑ 24.1% vs last month</div>
        </div>
      </div>
      <div style={{background:'#1a1a2e',border:'1px solid #27272a',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'1.6rem'}}>🚀</div>
        <div><div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem'}}>Ship Rate</div><div style={{color:'#3fb950',fontFamily:'Space Mono,monospace',fontSize:'0.75rem'}}>98.4%</div></div>
      </div>
      <div style={{background:'#06b6d4',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'1.6rem'}}>💬</div>
        <div><div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem',color:'#001a1f'}}>Messages</div><div style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem',color:'#001a1f'}}>4,200 / day</div></div>
      </div>
      <div style={{background:'#f43f5e',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'1.6rem'}}>❤️</div>
        <div><div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem'}}>Satisfaction</div><div style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem'}}>4.9 / 5.0</div></div>
      </div>
      <div style={{background:'#fbbf24',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'1.6rem'}}>⚡</div>
        <div><div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.85rem',color:'#1a1a1a'}}>Speed</div><div style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem',color:'#1a1a1a'}}>142ms</div></div>
      </div>
      <div style={{gridColumn:'span 2',background:'linear-gradient(135deg,#0d1117,#161b22)',border:'1px solid #21262d',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',gap:'8px'}}>
        <div style={{fontSize:'0.58rem',fontFamily:'Space Mono,monospace',color:'#8b949e',letterSpacing:'0.12em'}}>DAILY COMMITS</div>
        <div style={{display:'flex',alignItems:'flex-end',gap:'4px',flex:1}}>
          {[40,70,55,90,65,80,100,60,75,45,85,70].map((h,i)=>(
            <div key={i} style={{flex:1,height:`${h}%`,background:i===7?'#f85149':'#1f6feb',borderRadius:'3px 3px 0 0'}}/>
          ))}
        </div>
      </div>
      <div style={{background:'linear-gradient(135deg,#065f46,#047857)',borderRadius:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{fontSize:'1.4rem'}}>🌱</div>
        <div><div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.82rem'}}>Eco Score</div><div style={{fontFamily:'Space Mono,monospace',fontSize:'0.72rem',color:'#6ee7b7'}}>A+</div></div>
      </div>
    </div>
  </ShowcaseShell>
}

function DopamineShowcase() {
  return <ShowcaseShell bg="#ffffff" textColor="#111">
    <div style={{display:'flex',flexDirection:'column',gap:'20px',width:'100%',maxWidth:'600px'}}>
      <div style={{background:'#ff3d00',borderRadius:'24px',padding:'36px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'-40px',right:'-40px',width:'150px',height:'150px',borderRadius:'50%',background:'rgba(255,255,255,0.1)'}}/>
        <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3.2rem',letterSpacing:'2px',color:'#fff',lineHeight:1,marginBottom:'8px'}}>GAME ON.<br/>LEVEL UP.</div>
        <p style={{fontFamily:'Syne,sans-serif',fontWeight:600,color:'rgba(255,255,255,0.85)',fontSize:'0.95rem',marginBottom:'24px'}}>Your ultimate gaming companion. No limits.</p>
        <button style={{background:'#ffe600',color:'#1a1a1a',border:'none',borderRadius:'100px',padding:'14px 28px',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1rem',cursor:'pointer',boxShadow:'0 6px 20px rgba(255,230,0,0.5)'}}>🎮 PLAY NOW →</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'14px'}}>
        {[['🏆','Your Rank','#2',true],['⚡','Win Rate','74%',false],['🎯','Accuracy','89%',true],['💜','Squad','Online',false]].map(([icon,label,val,accent])=>(
          <div key={label} style={{background:accent?'#ffe600':'#2979ff',borderRadius:'20px',padding:'22px',display:'flex',alignItems:'center',gap:'14px'}}>
            <div style={{fontSize:'2rem'}}>{icon}</div>
            <div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.4rem',color:accent?'#1a1a1a':'#fff'}}>{val}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.78rem',color:accent?'rgba(0,0,0,0.6)':'rgba(255,255,255,0.7)'}}>{label}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:'10px',flexWrap:'wrap',justifyContent:'center'}}>
        {[['🔥 Hot','#ff3d00'],['⚡ Fast','#ffe600'],['✅ Win','#00e676'],['🎯 Pro','#2979ff'],['💜 Squad','#d500f9']].map(([t,bg])=>(
          <button key={t} style={{background:bg,border:'none',borderRadius:'100px',padding:'10px 20px',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'0.85rem',color:bg==='#ffe600'?'#1a1a1a':'#fff',cursor:'pointer'}}>{t}</button>
        ))}
      </div>
    </div>
  </ShowcaseShell>
}

function TerminalShowcase() {
  return <ShowcaseShell bg="#0d0d0d" textColor="#00ff41">
    <div style={{width:'100%',maxWidth:'680px',fontFamily:'Space Mono,monospace'}}>
      <div style={{background:'#0d0d0d',border:'1px solid #333',borderRadius:'12px',overflow:'hidden'}}>
        <div style={{background:'#1a1a1a',padding:'12px 16px',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid #333'}}>
          {['#ff5f57','#ffbd2e','#28c940'].map(c=><div key={c} style={{width:'12px',height:'12px',borderRadius:'50%',background:c}}/>)}
          <span style={{color:'#555',fontSize:'0.7rem',marginLeft:'12px',letterSpacing:'0.1em'}}>terminal — ui-cosmos ~ bash</span>
        </div>
        <div style={{padding:'24px',fontSize:'0.78rem',lineHeight:1.9}}>
          {[
            {prompt:true,cmd:'npx create-next-app@latest ui-cosmos'},
            {out:'✓ Creating a new Next.js app in /ui-cosmos',color:'#3fb950'},
            {out:'✓ Installing dependencies (next, react, react-dom)',color:'#3fb950'},
            {out:'✓ Initializing git repository',color:'#3fb950'},
            {prompt:true,cmd:'cd ui-cosmos && npm run dev'},
            {out:'▲ Next.js 14.2.5',color:'#00e5ff'},
            {out:'  - Local:        http://localhost:3000',color:'rgba(255,255,255,0.4)'},
            {out:'  - Network:      http://192.168.1.1:3000',color:'rgba(255,255,255,0.4)'},
            {out:'✓ Ready in 842ms',color:'#3fb950'},
            {prompt:true,cmd:'git add . && git commit -m "🚀 initial commit"'},
            {out:'[main (root-commit) a4f2d8c] 🚀 initial commit',color:'rgba(255,255,255,0.4)'},
            {out:' 42 files changed, 1,284 insertions(+)',color:'rgba(255,255,255,0.4)'},
            {prompt:true,cmd:'vercel --prod',cursor:true},
          ].map((line,i)=>(
            <div key={i} style={{color:line.color||line.prompt?undefined:undefined}}>
              {line.prompt&&<span style={{color:'#888'}}>user@cosmos:~$ </span>}
              <span style={{color:line.prompt?'#00ff41':line.color||'rgba(255,255,255,0.35)'}}>{line.cmd||line.out}</span>
              {line.cursor&&<span style={{display:'inline-block',width:'8px',height:'14px',background:'#00ff41',verticalAlign:'text-bottom',marginLeft:'2px',animation:'blink 1s step-end infinite'}}/>}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  </ShowcaseShell>
}

function SwissShowcase() {
  return <ShowcaseShell bg="#ffffff" textColor="#000">
    <div style={{width:'100%',maxWidth:'680px'}}>
      <div style={{display:'grid',gridTemplateColumns:'5px 1fr',gap:'28px',marginBottom:'32px'}}>
        <div style={{background:'#ff0000'}}/>
        <div>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.22em',color:'#999',marginBottom:'16px'}}>HELVETICA · GRID SYSTEM · 1957</div>
          <h1 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(3rem,8vw,5rem)',letterSpacing:'-2px',lineHeight:0.9,color:'#000',marginBottom:'20px'}}>FORM<br/>FOLLOWS<br/>FUNCTION</h1>
          <hr style={{border:'none',borderTop:'2px solid #000',marginBottom:'16px'}}/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
            <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',color:'#333',lineHeight:1.75}}>The grid is not a cage. It is a foundation from which all meaningful design decisions can be made with intention and precision.</p>
            <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',color:'#666',lineHeight:1.75}}>White space is not empty. It is the breathing room that allows content to exist with dignity and be read with ease.</p>
          </div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2px',marginBottom:'24px'}}>
        {['Architecture','Typography','Grid Systems','White Space','Hierarchy','Clarity'].map((t,i)=>(
          <div key={t} style={{background:i===0?'#ff0000':i===1?'#000':'#f5f5f5',padding:'20px',fontFamily:i<2?'Bebas Neue,sans-serif':'DM Sans,sans-serif',fontWeight:i>=2?500:undefined,fontSize:i<2?'1rem':'0.82rem',color:i===0||i===1?'#fff':'#333',letterSpacing:i<2?'1px':undefined}}>{t}</div>
        ))}
      </div>
      <div style={{display:'flex',gap:'0'}}>
        <button style={{background:'#000',color:'#fff',border:'none',padding:'14px 28px',fontFamily:'Space Mono,monospace',fontSize:'0.72rem',letterSpacing:'0.1em',cursor:'pointer'}}>READ MANIFESTO →</button>
        <button style={{background:'transparent',color:'#000',border:'2px solid #000',borderLeft:'none',padding:'14px 24px',fontFamily:'Space Mono,monospace',fontSize:'0.72rem',letterSpacing:'0.1em',cursor:'pointer'}}>DOWNLOAD GRID</button>
      </div>
    </div>
  </ShowcaseShell>
}

function PastelShowcase() {
  return <ShowcaseShell bg="#fdf6ff" textColor="#553c9a">
    <div style={{display:'flex',flexDirection:'column',gap:'20px',width:'100%',maxWidth:'600px'}}>
      <div style={{background:'#fff',borderRadius:'28px',padding:'32px',boxShadow:'0 4px 24px rgba(167,139,250,0.12)',border:'1px solid #ede9fe'}}>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:'1.8rem',fontStyle:'italic',color:'#553c9a',marginBottom:'20px'}}>Good morning, Maya ☀️</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px',marginBottom:'20px'}}>
          {[['🧘','Meditate','10 min'],['📖','Read','30 min'],['💧','Hydrate','2L today']].map(([icon,label,sub])=>(
            <div key={label} style={{background:'#fdf6ff',borderRadius:'18px',padding:'16px',textAlign:'center',border:'1px solid #ede9fe'}}>
              <div style={{fontSize:'1.6rem',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.82rem',color:'#553c9a'}}>{label}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.68rem',color:'#9f7aea',marginTop:'2px'}}>{sub}</div>
            </div>
          ))}
        </div>
        <div style={{background:'linear-gradient(135deg,#e9d8fd,#bee3f8)',borderRadius:'18px',padding:'20px'}}>
          <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',color:'#553c9a',marginBottom:'10px'}}>Today's Focus ✨</div>
          {['Finish design system docs','Review PRs from team','Plan Q4 roadmap'].map((task,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 0',borderBottom:i<2?'1px solid rgba(255,255,255,0.5)':'none'}}>
              <div style={{width:'18px',height:'18px',borderRadius:'50%',border:'2px solid #9f7aea',background:i===2?'#9f7aea':'transparent',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}>{i===2&&<span style={{color:'#fff',fontSize:'10px'}}>✓</span>}</div>
              <span style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.85rem',color:i===2?'#c4b5fd':'#553c9a',textDecoration:i===2?'line-through':'none'}}>{task}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:'flex',gap:'12px'}}>
        <button style={{flex:1,background:'#e9d8fd',color:'#553c9a',border:'none',borderRadius:'16px',padding:'14px',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',cursor:'pointer'}}>✨ New Note</button>
        <button style={{flex:1,background:'#fff',color:'#553c9a',border:'1.5px solid #c4b5fd',borderRadius:'16px',padding:'14px',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',cursor:'pointer'}}>📅 Schedule</button>
      </div>
    </div>
  </ShowcaseShell>
}

function MaxShowcase() {
  return <ShowcaseShell bg="#1a0a2e" textColor="#fff">
    <div style={{width:'100%',maxWidth:'640px',position:'relative'}}>
      <div style={{position:'absolute',top:0,left:0,right:0,height:'5px',background:'linear-gradient(90deg,#ff006e,#ffbe0b,#3a86ff,#8338ec,#ff006e)',backgroundSize:'200%',animation:'slide 2s linear infinite'}}/>
      <div style={{padding:'32px 0 20px'}}>
        <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(3rem,10vw,6rem)',lineHeight:0.85,background:'linear-gradient(45deg,#ff006e,#fb5607,#ffbe0b,#8338ec,#3a86ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',marginBottom:'16px'}}>MORE<br/>IS<br/>MORE</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'20px'}}>
          {[['LOUD','#ff006e'],['BOLD','#ffbe0b'],['LAYERED','#3a86ff'],['CHAOS','#8338ec'],['MAX','#fb5607'],['NOISE','#00e676'],['INTENSE','#ff006e']].map(([t,c])=>(
            <span key={t} style={{padding:'5px 12px',fontSize:'0.7rem',fontWeight:700,border:`1.5px solid ${c}`,borderRadius:'3px',color:c,fontFamily:'Space Mono,monospace',background:`${c}12`}}>{t}</span>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'14px'}}>
          {[['🔥','47,293','Screams today'],['⚡','99.9%','Chaos level'],['🎸','∞','Volume'],['💀','0','F**ks given']].map(([icon,val,label])=>(
            <div key={label} style={{border:'2px solid',borderColor:'rgba(255,0,110,0.4)',background:'rgba(255,0,110,0.06)',padding:'20px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:'-10px',right:'-10px',fontSize:'3rem',opacity:0.08}}>{icon}</div>
              <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'2.2rem',color:'#fff',lineHeight:1}}>{val}</div>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',color:'rgba(255,255,255,0.4)',marginTop:'4px',letterSpacing:'0.1em'}}>{label.toUpperCase()}</div>
            </div>
          ))}
        </div>
        <button style={{marginTop:'20px',width:'100%',background:'linear-gradient(90deg,#ff006e,#ffbe0b,#3a86ff,#8338ec)',border:'3px solid #fff',padding:'16px',fontFamily:'Bebas Neue,sans-serif',fontSize:'1.4rem',letterSpacing:'3px',color:'#fff',cursor:'pointer',boxShadow:'6px 6px 0 rgba(255,0,110,0.3)'}}>TURN IT UP TO 11 →</button>
      </div>
      <style>{`@keyframes slide{0%{background-position:0%}100%{background-position:200%}}`}</style>
    </div>
  </ShowcaseShell>
}

function MonoShowcase() {
  return <ShowcaseShell bg="#1a0a0a" textColor="#fff">
    <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'100%',maxWidth:'600px'}}>
      <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3.5rem',letterSpacing:'2px',background:'linear-gradient(90deg,#450a0a,#991b1b,#ef4444,#fecaca)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1}}>RED.<br/>ONLY RED.</div>
      <div style={{height:'10px',borderRadius:'100px',background:'linear-gradient(90deg,#450a0a,#7f1d1d,#b91c1c,#ef4444,#f87171,#fca5a5,#fecaca)'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'8px'}}>
        {['#450a0a','#7f1d1d','#991b1b','#b91c1c','#dc2626','#ef4444','#f87171','#fca5a5','#fecaca','#fee2e2','#fff1f2','#fef2f2','#fff5f5','#ffe0e0'].map((c,i)=>(
          <div key={c} style={{aspectRatio:'1',borderRadius:'10px',background:c,cursor:'pointer',transition:'transform 0.2s'}}/>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
        {[['#7f1d1d','Dark','900'],['#b91c1c','Base','600'],['#ef4444','Light','400'],['#fca5a5','Pale','300'],['#fee2e2','Ghost','100'],['#fff1f2','White','50']].map(([bg,label,shade])=>(
          <div key={label} style={{background:bg,borderRadius:'14px',padding:'18px'}}>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',color:'rgba(255,255,255,0.5)',letterSpacing:'0.1em',marginBottom:'4px'}}>RED-{shade}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',color:parseInt(shade)>400?'#1a1a1a':'#fff'}}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </ShowcaseShell>
}

function TypoShowcase() {
  return <ShowcaseShell bg="#f5f0e8" textColor="#1a1a1a">
    <div style={{width:'100%',maxWidth:'680px',fontFamily:'Playfair Display,serif'}}>
      <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.22em',color:'#999',marginBottom:'20px'}}>THE QUARTERLY TYPOGRAPHIC REVIEW · ISSUE NO. 14</div>
      <h1 style={{fontSize:'clamp(4rem,12vw,7rem)',fontWeight:700,lineHeight:0.88,letterSpacing:'-4px',color:'#1a1a1a',marginBottom:'20px'}}>THE ART<br/>OF WORDS</h1>
      <hr style={{border:'none',borderTop:'3px solid #1a1a1a',marginBottom:'20px'}}/>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'28px',marginBottom:'28px'}}>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'1rem',color:'#333',lineHeight:1.85,fontStyle:'italic'}}>In the tradition of the great Swiss masters, we believe that typography is not merely a vessel for content — it is the content itself, shaped and formed to convey meaning beyond the literal.</p>
        <div>
          <div style={{fontSize:'7rem',fontWeight:700,color:'transparent',WebkitTextStroke:'2px #1a1a1a',lineHeight:1,letterSpacing:'-4px'}}>Aa</div>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',color:'#999',letterSpacing:'0.15em',marginTop:'6px'}}>PLAYFAIR DISPLAY<br/>REGULAR · ITALIC · BOLD</div>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2px',marginBottom:'20px'}}>
        {['Display / 96px','Headline / 32px','Body / 16px'].map((t,i)=>(
          <div key={t} style={{background:['#1a1a1a','#333','#f0e8d8'][i],padding:'20px',color:i<2?'#fff':'#333'}}>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.55rem',letterSpacing:'0.15em',opacity:0.5,marginBottom:'8px'}}>{t}</div>
            <div style={{fontFamily:'Playfair Display,serif',fontSize:['2rem','1.1rem','0.82rem'][i],fontWeight:700,lineHeight:1.2}}>The quick<br/>brown fox</div>
          </div>
        ))}
      </div>
    </div>
  </ShowcaseShell>
}

function GrainShowcase() {
  return <ShowcaseShell bg="linear-gradient(135deg,#2d1b69,#11998e)" textColor="#fff">
    <div style={{position:'relative',zIndex:1,width:'100%',maxWidth:'620px'}}>
      <div style={{position:'absolute',inset:0,opacity:0.25,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundSize:'200px',mixBlendMode:'overlay',pointerEvents:'none',borderRadius:'28px'}}/>
      <div style={{background:'rgba(255,255,255,0.08)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.18)',borderRadius:'28px',padding:'40px',position:'relative',zIndex:1}}>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)',marginBottom:'16px'}}>INDIE MUSIC PLATFORM</div>
        <h2 style={{fontFamily:'Playfair Display,serif',fontStyle:'italic',fontSize:'2.8rem',color:'#fff',lineHeight:1.1,marginBottom:'12px'}}>The Sound<br/>of Imperfect</h2>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.9rem',color:'rgba(255,255,255,0.7)',lineHeight:1.8,marginBottom:'24px'}}>Where analog warmth meets digital distribution. Your music, with soul and grain intact.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'14px',marginBottom:'24px'}}>
          {[['🎵','Now Playing','Midnight in Paris'],['🎸','Genre','Indie Folk'],['👥','Listeners','12,847 today'],['⭐','Rating','4.9 / 5.0']].map(([icon,label,val])=>(
            <div key={label} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.14)',borderRadius:'16px',padding:'16px'}}>
              <div style={{fontSize:'1.2rem',marginBottom:'6px'}}>{icon}</div>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',color:'rgba(255,255,255,0.4)',letterSpacing:'0.1em',marginBottom:'3px'}}>{label.toUpperCase()}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.85rem',color:'#fff',fontWeight:500}}>{val}</div>
            </div>
          ))}
        </div>
        <button style={{width:'100%',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.3)',borderRadius:'100px',padding:'14px',color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.9rem',cursor:'pointer'}}>▶ Stream Now</button>
      </div>
    </div>
  </ShowcaseShell>
}

function GeoShowcase() {
  return <ShowcaseShell bg="#0a0a14" textColor="#fff">
    <div style={{width:'100%',maxWidth:'680px',position:'relative'}}>
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} viewBox="0 0 680 400" preserveAspectRatio="xMidYMid slice">
        <polygon points="600,0 680,0 680,120" fill="rgba(0,229,255,0.06)" stroke="rgba(0,229,255,0.2)" strokeWidth="1"/>
        <polygon points="0,400 120,400 0,280" fill="rgba(191,90,242,0.06)" stroke="rgba(191,90,242,0.2)" strokeWidth="1"/>
        <circle cx="560" cy="300" r="100" fill="none" stroke="rgba(255,230,0,0.12)" strokeWidth="1"/>
        <circle cx="560" cy="300" r="65" fill="none" stroke="rgba(255,230,0,0.16)" strokeWidth="1"/>
        <circle cx="560" cy="300" r="30" fill="rgba(255,230,0,0.04)" stroke="rgba(255,230,0,0.2)" strokeWidth="1"/>
        <polygon points="180,50 240,10 300,50 300,110 240,140 180,110" fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1"/>
        <line x1="0" y1="0" x2="680" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        <line x1="680" y1="0" x2="0" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
      </svg>
      <div style={{position:'relative',zIndex:1,padding:'20px 0'}}>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.2em',color:'rgba(0,229,255,0.6)',marginBottom:'16px'}}>ARCHITECTURE · ENGINEERING · PRECISION</div>
        <h1 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(3rem,8vw,5rem)',letterSpacing:'2px',lineHeight:0.9,marginBottom:'20px'}}>STRUCTURE<br/><span style={{color:'transparent',WebkitTextStroke:'2px #00e5ff'}}>IS</span><br/>EVERYTHING</h1>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'28px'}}>
          {[['△ Triangle','#00e5ff'],['⬡ Hexagon','#ffe600'],['◈ Polygon','#bf5af2'],['● Circle','rgba(255,255,255,0.5)']].map(([t,c])=>(
            <span key={t} style={{padding:'7px 14px',border:`1px solid ${c}40`,borderRadius:'4px',color:c,fontSize:'0.72rem',fontFamily:'Space Mono,monospace',background:`${c}0a`}}>{t}</span>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px'}}>
          {[['Precision','Every angle calculated','◎'],['Structure','Form from function','◫'],['Clarity','Geometry as language','◬']].map(([title,desc,icon])=>(
            <div key={title} style={{border:'1px solid rgba(0,229,255,0.15)',background:'rgba(0,229,255,0.04)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'2rem',color:'#00e5ff',marginBottom:'8px'}}>{icon}</div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.88rem',marginBottom:'4px'}}>{title}</div>
              <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.45)',lineHeight:1.6}}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function BlobShowcase() {
  return <ShowcaseShell bg="linear-gradient(135deg,#0f0c29,#302b63,#24243e)" textColor="#fff">
    <div style={{width:'100%',maxWidth:'620px',position:'relative'}}>
      {[[140,'#7c3aed','-40px','auto','-30px','auto'],[100,'#ec4899','auto','-20px','auto','-20px'],[75,'#06b6d4','35px','auto','auto','15px']].map(([size,bg,top,bottom,right,left],i)=>(
        <div key={i} style={{position:'absolute',width:`${size}px`,height:`${size}px`,background:bg,borderRadius:'60% 40% 70% 30% / 50% 60% 40% 70%',filter:'blur(2px)',opacity:0.65,top,bottom,right,left,animation:`morph${i} ${[6,8,7][i]}s ease-in-out infinite`}}/>
      ))}
      <div style={{position:'relative',zIndex:1,padding:'20px 0',display:'flex',flexDirection:'column',gap:'24px'}}>
        <div style={{fontFamily:'Playfair Display,serif',fontStyle:'italic',fontSize:'3rem',lineHeight:1.1,color:'#fff'}}>Beauty lives<br/>in the<br/>undefined.</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          {[['Wellness','Shapes that breathe with you 🌊','rgba(124,58,237,0.2)','rgba(124,58,237,0.4)'],['Balance','Organic flow, no rigid edges 🌸','rgba(236,72,153,0.2)','rgba(236,72,153,0.4)']].map(([title,desc,bg,border])=>(
            <div key={title} style={{background:bg,border:`1px solid ${border}`,borderRadius:'30% 70% 70% 30% / 30% 30% 70% 70%',padding:'28px 22px',backdropFilter:'blur(16px)'}}>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1rem',marginBottom:'8px'}}>{title}</div>
              <div style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.65)',lineHeight:1.7}}>{desc}</div>
            </div>
          ))}
        </div>
        <button style={{background:'linear-gradient(135deg,#7c3aed,#ec4899)',border:'none',borderRadius:'50% 30% 50% 30% / 30% 50% 30% 50%',padding:'20px 40px',color:'#fff',fontFamily:'Playfair Display,serif',fontSize:'1rem',fontStyle:'italic',cursor:'pointer',boxShadow:'0 10px 30px rgba(124,58,237,0.4)',alignSelf:'center'}}>Flow with us →</button>
      </div>
      <style>{`@keyframes morph0{0%,100%{border-radius:60% 40% 70% 30% / 50% 60% 40% 70%}50%{border-radius:40% 60% 30% 70% / 60% 40% 70% 30%}}@keyframes morph1{0%,100%{border-radius:40% 60% 30% 70% / 60% 40% 70% 30%}50%{border-radius:70% 30% 60% 40% / 30% 70% 40% 60%}}@keyframes morph2{0%,100%{border-radius:70% 30% 50% 50% / 30% 70% 50% 50%}50%{border-radius:30% 70% 60% 40% / 70% 30% 40% 60%}}`}</style>
    </div>
  </ShowcaseShell>
}

function CardShowcase() {
  return <ShowcaseShell bg="#f0f2f8" textColor="#1a1a2e">
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',width:'100%',maxWidth:'780px'}}>
      {[
        {icon:'💼',title:'Senior Designer',company:'Stripe',loc:'Remote · $140–180K',tag:'Featured',tagBg:'#dbeafe',tagColor:'#1e40af'},
        {icon:'⚡',title:'React Engineer',company:'Vercel',loc:'SF / Remote · $160K+',tag:'New',tagBg:'#dcfce7',tagColor:'#166534'},
        {icon:'🎨',title:'Brand Designer',company:'Linear',loc:'NYC · $120–150K',tag:'Hot',tagBg:'#fee2e2',tagColor:'#991b1b'},
        {icon:'📊',title:'Data Scientist',company:'Anthropic',loc:'Remote · $170K+',tag:'Urgent',tagBg:'#fef3c7',tagColor:'#92400e'},
        {icon:'🔐',title:'Security Lead',company:'1Password',loc:'Toronto · $155K',tag:'New',tagBg:'#dcfce7',tagColor:'#166534'},
        {icon:'🚀',title:'PM – Growth',company:'Figma',loc:'Remote · $145K',tag:'Featured',tagBg:'#dbeafe',tagColor:'#1e40af'},
      ].map((job,i)=>(
        <div key={i} style={{background:'#fff',borderRadius:'20px',padding:'22px',boxShadow:'0 2px 12px rgba(0,0,0,0.06)',cursor:'pointer',transition:'transform 0.2s, box-shadow 0.2s',display:'flex',flexDirection:'column',gap:'10px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
            <div style={{fontSize:'1.8rem'}}>{job.icon}</div>
            <span style={{background:job.tagBg,color:job.tagColor,fontSize:'0.62rem',fontWeight:600,padding:'4px 10px',borderRadius:'100px'}}>{job.tag}</span>
          </div>
          <div>
            <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'0.95rem',color:'#1a1a2e'}}>{job.title}</div>
            <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.8rem',color:'#4f46e5',fontWeight:500,marginTop:'2px'}}>{job.company}</div>
          </div>
          <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.75rem',color:'#888',lineHeight:1.5}}>{job.loc}</div>
          <button style={{background:'#f0f2f8',color:'#4f46e5',border:'none',borderRadius:'10px',padding:'9px',fontFamily:'DM Sans,sans-serif',fontWeight:600,fontSize:'0.78rem',cursor:'pointer',marginTop:'auto'}}>Apply Now →</button>
        </div>
      ))}
    </div>
  </ShowcaseShell>
}

function DashShowcase() {
  return <ShowcaseShell bg="#0d1117" textColor="#c9d1d9">
    <div style={{width:'100%',maxWidth:'780px',display:'flex',flexDirection:'column',gap:'14px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px'}}>
        {[['REVENUE','$124.8K','↑ 12.4%','#3fb950'],['USERS','48,291','↑ 8.1%','#3fb950'],['ERRORS','0.03%','↓ good','#3fb950'],['UPTIME','99.97%','stable','#fbbf24']].map(([label,val,delta,c])=>(
          <div key={label} style={{background:'#161b22',border:'1px solid #21262d',borderRadius:'12px',padding:'18px'}}>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.55rem',color:'#8b949e',letterSpacing:'0.14em',marginBottom:'6px'}}>{label}</div>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'1.4rem',fontWeight:700,color:'#c9d1d9'}}>{val}</div>
            <div style={{fontSize:'0.66rem',color:c,marginTop:'4px',fontFamily:'Space Mono,monospace'}}>{delta}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#161b22',border:'1px solid #21262d',borderRadius:'12px',padding:'20px'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'14px'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',color:'#8b949e',letterSpacing:'0.12em'}}>REQUESTS / HOUR</div>
          <div style={{display:'flex',gap:'8px'}}>
            {['1D','1W','1M'].map(p=><button key={p} style={{background:p==='1W'?'#21262d':'transparent',border:'1px solid #30363d',borderRadius:'6px',padding:'3px 10px',color:p==='1W'?'#c9d1d9':'#8b949e',fontFamily:'Space Mono,monospace',fontSize:'0.6rem',cursor:'pointer'}}>{p}</button>)}
          </div>
        </div>
        <div style={{display:'flex',alignItems:'flex-end',gap:'5px',height:'80px'}}>
          {[30,55,45,80,65,90,70,100,60,75,50,40,85,60,90,75,50,65,80,42,70,90,55,40].map((h,i)=>(
            <div key={i} style={{flex:1,height:`${h}%`,background:i===7||i===22?'#f85149':'#1f6feb',borderRadius:'3px 3px 0 0',transition:'opacity 0.2s'}}/>
          ))}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'12px'}}>
        <div style={{background:'#161b22',border:'1px solid #21262d',borderRadius:'12px',padding:'18px'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#8b949e',letterSpacing:'0.1em',marginBottom:'12px'}}>RECENT DEPLOYMENTS</div>
          {[['ui-cosmos','main','Live','2m'],['api-v2','feat/auth','Building','8m'],['docs','staging','Error','15m']].map(([name,branch,status,time])=>(
            <div key={name} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 0',borderBottom:'1px solid #21262d'}}>
              <div style={{width:'6px',height:'6px',borderRadius:'50%',background:status==='Live'?'#3fb950':status==='Building'?'#fbbf24':'#f85149',flexShrink:0}}/>
              <div style={{flex:1,fontFamily:'Space Mono,monospace',fontSize:'0.7rem',color:'#c9d1d9'}}>{name}</div>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem',color:'#8b949e'}}>{branch}</div>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#8b949e'}}>{time} ago</div>
            </div>
          ))}
        </div>
        <div style={{background:'#161b22',border:'1px solid #21262d',borderRadius:'12px',padding:'18px'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'#8b949e',letterSpacing:'0.1em',marginBottom:'12px'}}>STATUS</div>
          {[['API','Operational'],['CDN','Operational'],['DB','Degraded'],['Auth','Operational']].map(([service,status])=>(
            <div key={service} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',borderBottom:'1px solid #21262d',fontFamily:'Space Mono,monospace',fontSize:'0.66rem'}}>
              <span style={{color:'#8b949e'}}>{service}</span>
              <span style={{color:status==='Operational'?'#3fb950':'#fbbf24'}}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function MagShowcase() {
  return <ShowcaseShell bg="#fff" textColor="#1a1a1a">
    <div style={{width:'100%',maxWidth:'720px',fontFamily:'Playfair Display,serif'}}>
      <div style={{borderTop:'5px solid #e63946',paddingTop:'24px',marginBottom:'32px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'28px'}}>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',letterSpacing:'0.22em',color:'#999'}}>THE COSMOS REVIEW</div>
          <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.58rem',color:'#999'}}>ISSUE 047 · AUGUST 2025</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'3fr 1fr',gap:'32px',alignItems:'start',marginBottom:'28px'}}>
          <div>
            <h1 style={{fontSize:'3.5rem',fontWeight:700,lineHeight:0.9,letterSpacing:'-2px',marginBottom:'16px'}}>The <em style={{color:'#e63946'}}>Quiet</em><br/>Revolution of<br/>Digital Type</h1>
            <hr style={{border:'none',borderTop:'1px solid #ddd',margin:'16px 0'}}/>
            <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'1rem',color:'#333',lineHeight:1.85,fontStyle:'italic'}}>In an age of algorithmic feeds and infinite scroll, the art of considered typographic layout has become a radical act of resistance against the tyranny of the unremarkable.</p>
          </div>
          <div style={{borderLeft:'2px solid #e63946',paddingLeft:'16px'}}>
            <p style={{fontSize:'1.1rem',fontStyle:'italic',color:'#1a1a1a',lineHeight:1.6,marginBottom:'8px'}}>"Design is not decoration. It is the architecture of information itself."</p>
            <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.55rem',letterSpacing:'0.14em',color:'#999'}}>— EDITORIAL, P.12</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'#ddd'}}>
          {[['By the Numbers','Design spending up 34% globally in 2025'],['In This Issue','Typography, grid theory, and the future of editorial'],['Next Month','The return of print in a digital world']].map(([title,desc])=>(
            <div key={title} style={{background:'#fff',padding:'16px'}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.56rem',letterSpacing:'0.16em',color:'#e63946',marginBottom:'6px'}}>{title.toUpperCase()}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.8rem',color:'#333',lineHeight:1.6}}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function ParallaxShowcase() {
  return <ShowcaseShell bg="#000" textColor="#fff">
    <div style={{width:'100%',maxWidth:'680px',position:'relative',minHeight:'450px',overflow:'hidden',borderRadius:'20px'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,#000511 0%,#0d1b2a 50%,#1b263b 100%)',backgroundImage:'radial-gradient(1px 1px at 15% 25%,white,transparent),radial-gradient(1px 1px at 75% 10%,white,transparent),radial-gradient(1px 1px at 45% 60%,rgba(255,255,255,0.6),transparent),radial-gradient(2px 2px at 85% 40%,rgba(255,255,255,0.4),transparent),radial-gradient(1px 1px at 30% 75%,rgba(255,255,255,0.5),transparent),radial-gradient(1px 1px at 60% 20%,white,transparent)'}}/>
      <div style={{position:'absolute',top:'30px',right:'80px',width:'70px',height:'70px',borderRadius:'50%',background:'radial-gradient(circle at 35% 35%,#fef3c7,#fbbf24)',boxShadow:'0 0 50px rgba(251,191,36,0.5)'}}/>
      <div style={{position:'absolute',top:'80px',left:'60px',fontFamily:'Bebas Neue,sans-serif',fontSize:'0.8rem',letterSpacing:'5px',color:'rgba(255,255,255,0.2)'}}>LAYER 1 · SKY</div>
      <div style={{position:'absolute',top:'140px',left:'50%',transform:'translateX(-50%)',textAlign:'center',width:'100%',padding:'0 40px',zIndex:2}}>
        <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'3.5rem',letterSpacing:'5px',color:'#fff',textShadow:'0 4px 30px rgba(0,0,0,0.8)'}}>SCROLL THE<br/>WORLD</div>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.85rem',color:'rgba(255,255,255,0.55)',marginTop:'8px',lineHeight:1.7}}>Layers at different speeds create an illusion of infinite depth — the cinematic web.</p>
      </div>
      <div style={{position:'absolute',bottom:'80px',left:'40px',fontFamily:'Bebas Neue,sans-serif',fontSize:'0.75rem',letterSpacing:'4px',color:'rgba(255,255,255,0.25)'}}>LAYER 2 · CLOUDS</div>
      <div style={{position:'absolute',bottom:'60px',right:'50px',fontFamily:'Bebas Neue,sans-serif',fontSize:'0.75rem',letterSpacing:'4px',color:'rgba(255,255,255,0.2)'}}>LAYER 3 · MOUNTAINS</div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'100px',background:'linear-gradient(180deg,transparent,#1a2a4a 40%,#0d1b2a)',clipPath:'polygon(0% 100%,0% 60%,8% 40%,18% 55%,28% 25%,40% 45%,50% 10%,62% 38%,72% 22%,82% 52%,92% 38%,100% 55%,100% 100%)'}}/>
      <div style={{position:'absolute',bottom:'24px',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'4px'}}>
        <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.52rem',color:'rgba(255,255,255,0.25)',letterSpacing:'0.2em'}}>SCROLL</span>
        <div style={{width:'1px',height:'24px',background:'linear-gradient(to bottom,rgba(255,255,255,0.25),transparent)',animation:'pulse 1.5s ease-in-out infinite'}}/>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scaleY(1)}50%{opacity:0.2;transform:scaleY(0.6)}}`}</style>
    </div>
  </ShowcaseShell>
}

function MicroShowcase() {
  return <ShowcaseShell bg="#fafafa" textColor="#1a1a1a">
    <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'100%',maxWidth:'580px'}}>
      <div style={{background:'#fff',borderRadius:'24px',padding:'32px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
        <div style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.1rem',marginBottom:'24px',color:'#1a1a1a'}}>Interactive Elements</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',alignItems:'center',justifyItems:'center'}}>
          {[['❤️','Liked!'],['🔔','Active'],['⭐','Saved']].map(([icon,label])=>(
            <div key={label} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'8px'}}>
              <div style={{width:'60px',height:'60px',borderRadius:'50%',background:'#fff5f7',border:'2px solid #f43f5e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.4rem',cursor:'pointer',boxShadow:'0 4px 14px rgba(244,63,94,0.2)'}}>{icon}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.7rem',color:'#f43f5e',fontWeight:500}}>{label}</div>
            </div>
          ))}
        </div>
        <hr style={{border:'none',borderTop:'1px solid #f0f0f0',margin:'24px 0'}}/>
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          {[['Dark Mode','on'],['Notifications','on'],['Auto-save','off'],['Analytics','on']].map(([label,state])=>(
            <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.9rem',color:'#333'}}>{label}</span>
              <div style={{width:'52px',height:'28px',borderRadius:'100px',background:state==='on'?'#4f46e5':'#e0e0e0',position:'relative',cursor:'pointer',transition:'background 0.3s'}}>
                <div style={{position:'absolute',width:'22px',height:'22px',borderRadius:'50%',background:'#fff',top:'3px',left:state==='on'?'27px':'3px',transition:'left 0.3s cubic-bezier(0.34,1.56,0.64,1)',boxShadow:'0 2px 6px rgba(0,0,0,0.15)'}}/>
              </div>
            </div>
          ))}
        </div>
        <hr style={{border:'none',borderTop:'1px solid #f0f0f0',margin:'24px 0'}}/>
        <div>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
            <span style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.85rem',color:'#333'}}>Upload Progress</span>
            <span style={{fontFamily:'Space Mono,monospace',fontSize:'0.72rem',color:'#4f46e5'}}>74%</span>
          </div>
          <div style={{height:'8px',background:'#e0e7ff',borderRadius:'100px',overflow:'hidden'}}>
            <div style={{height:'100%',width:'74%',background:'linear-gradient(90deg,#4f46e5,#7c3aed)',borderRadius:'100px',boxShadow:'0 0 8px rgba(79,70,229,0.4)'}}/>
          </div>
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function VaporShowcase() {
  return <ShowcaseShell bg="linear-gradient(180deg,#0a001f 0%,#1a0033 50%,#2d0048 100%)" textColor="#fff">
    <div style={{width:'100%',maxWidth:'640px',position:'relative'}}>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'120px',backgroundImage:'linear-gradient(rgba(255,0,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,0,255,0.3) 1px,transparent 1px)',backgroundSize:'32px 32px',transform:'perspective(250px) rotateX(55deg)',transformOrigin:'bottom'}}/>
      <div style={{position:'absolute',bottom:'80px',left:'50%',transform:'translateX(-50%)',width:'110px',height:'110px',borderRadius:'50%',background:'linear-gradient(180deg,#ff6ec7 0%,#ff9a3c 50%,#2d0048 51%)',boxShadow:'0 0 60px rgba(255,110,199,0.7)'}}/>
      <div style={{position:'relative',zIndex:1,textAlign:'center',paddingBottom:'140px'}}>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.35em',color:'#a78bfa',marginBottom:'16px'}}>Ｄ Ｉ Ｇ Ｉ Ｔ Ａ Ｌ　Ｄ Ｒ Ｅ Ａ Ｍ Ｓ</div>
        <h1 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(3rem,10vw,5.5rem)',letterSpacing:'8px',background:'linear-gradient(90deg,#ff6ec7,#a78bfa,#67e8f9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',lineHeight:1,marginBottom:'12px'}}>ＡＥＳＴＨＥＴＩＣ</h1>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'0.7rem',color:'rgba(167,139,250,0.8)',letterSpacing:'0.3em',marginBottom:'28px'}}>Ｖ Ａ P O R W A V E · 1988</div>
        <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap',marginBottom:'24px'}}>
          {['ENTER VOID','VIEW GRID','TUNE IN'].map((t,i)=>(
            <button key={t} style={{background:'transparent',border:`1px solid ${['#ff6ec7','#a78bfa','#67e8f9'][i]}`,color:['#ff6ec7','#a78bfa','#67e8f9'][i],padding:'10px 22px',fontFamily:'Space Mono,monospace',fontSize:'0.7rem',letterSpacing:'0.1em',cursor:'pointer',boxShadow:`0 0 14px rgba(${[['255,110,199','167,139,250','103,232,249'][i]]},0.3)`,transition:'box-shadow 0.2s'}}>{t}</button>
          ))}
        </div>
        <div style={{display:'flex',gap:'14px',justifyContent:'center'}}>
          {['RETRO','NOSTALGIC','DIGITAL','DREAMY'].map((t,i)=>(
            <span key={t} style={{fontFamily:'Space Mono,monospace',fontSize:'0.6rem',color:'rgba(167,139,250,0.5)',letterSpacing:'0.15em'}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function CottageShowcase() {
  return <ShowcaseShell bg="#fdf8f0" textColor="#5c3d2e">
    <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'100%',maxWidth:'580px'}}>
      <div style={{fontFamily:'Playfair Display,serif',fontSize:'3rem',fontStyle:'italic',color:'#5c3d2e',lineHeight:1.1}}>A Little Corner<br/>of the Garden</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px'}}>
        {[['🌿','Herbs','Fresh from the garden'],['🍞','Bread','Baked this morning'],['🌸','Flowers','Arranged with love'],['🫖','Tea','Brewed slowly'],['🍯','Honey','Local wildflower'],['🕯️','Candles','Hand-poured']].map(([icon,name,desc])=>(
          <div key={name} style={{background:'#fff8ee',border:'1px dashed #c8a882',borderRadius:'16px',padding:'16px',textAlign:'center'}}>
            <div style={{fontSize:'1.8rem',marginBottom:'8px'}}>{icon}</div>
            <div style={{fontFamily:'Playfair Display,serif',fontSize:'0.9rem',color:'#5c3d2e',fontStyle:'italic',fontWeight:700,marginBottom:'4px'}}>{name}</div>
            <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.7rem',color:'#a07850',lineHeight:1.5}}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{background:'#fff8ee',border:'1px dashed #c8a882',borderRadius:'20px',padding:'24px'}}>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:'1.2rem',fontStyle:'italic',color:'#5c3d2e',marginBottom:'12px'}}>Today's Journal ✍️</div>
        <p style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.88rem',color:'#7a5c45',lineHeight:1.9}}>The morning mist settled low over the lavender beds. I took my tea outside and listened to the bees. There is something deeply right about slow mornings.</p>
        <div style={{display:'flex',gap:'8px',marginTop:'14px',flexWrap:'wrap'}}>
          {['🌿 Herbal','🍞 Homemade','🌸 In Bloom','🦋 Peaceful','☕ Cozy'].map(t=>(
            <span key={t} style={{background:'#f0e8d8',border:'1px solid #c8a882',borderRadius:'100px',padding:'5px 12px',fontSize:'0.7rem',color:'#7a5c45'}}>{t}</span>
          ))}
        </div>
      </div>
      <button style={{background:'#8b5e3c',color:'#fdf8f0',border:'none',borderRadius:'100px',padding:'14px',fontFamily:'Playfair Display,serif',fontSize:'1rem',fontStyle:'italic',cursor:'pointer'}}>Come inside, the kettle's on →</button>
    </div>
  </ShowcaseShell>
}

function MemphisShowcase() {
  return <ShowcaseShell bg="#fff9f0" textColor="#1a1a1a">
    <div style={{width:'100%',maxWidth:'640px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle,#ff0066 2px,transparent 2px),linear-gradient(45deg,#ffcc00 1px,transparent 1px),linear-gradient(-45deg,#00ccff 1px,transparent 1px)',backgroundSize:'28px 28px,20px 20px,20px 20px',opacity:0.13}}/>
      <div style={{position:'absolute',right:'-10px',top:0,bottom:0,width:'44px',background:'repeating-linear-gradient(45deg,#ffcc00 0px,#ffcc00 5px,transparent 5px,transparent 13px)'}}/>
      <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',gap:'20px'}}>
        <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(3rem,8vw,5rem)',letterSpacing:'2px',lineHeight:0.9,color:'#1a1a1a'}}>MEMPHIS<br/>STUDIO</div>
        <div style={{display:'flex',gap:'14px',alignItems:'center',flexWrap:'wrap'}}>
          {[['#ff0066','★'],['#ffcc00','◆','rotate(15deg)'],['#00ccff','▲'],['#ff6600','●'],['#9c27b0','■']].map(([bg,sym,tr],i)=>(
            <div key={i} style={{width:'40px',height:'40px',background:bg,borderRadius:i===3?'50%':i===0?'50%':'0',border:'2.5px solid #1a1a1a',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800,fontSize:'1.1rem',transform:tr}}>{sym}</div>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'14px'}}>
          {[['1981','Year Founded','#ff0066'],['Milano','Origin','#ffcc00'],['Radical','Design Ethos','#00ccff'],['$∞','Influence','#9c27b0']].map(([val,label,color])=>(
            <div key={label} style={{background:'#fff',border:'3px solid #1a1a1a',boxShadow:'5px 5px 0 #1a1a1a',padding:'20px'}}>
              <div style={{fontFamily:'Bebas Neue,sans-serif',fontSize:'2rem',letterSpacing:'1px',color}}>{val}</div>
              <div style={{fontFamily:'DM Sans,sans-serif',fontSize:'0.78rem',color:'#555',marginTop:'2px'}}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:'12px'}}>
          <button style={{flex:2,background:'#ff0066',color:'#fff',border:'3px solid #1a1a1a',padding:'14px',fontFamily:'Bebas Neue,sans-serif',fontSize:'1.1rem',letterSpacing:'3px',cursor:'pointer',boxShadow:'5px 5px 0 #1a1a1a'}}>SHOP NOW →</button>
          <button style={{flex:1,background:'#ffcc00',color:'#1a1a1a',border:'3px solid #1a1a1a',padding:'14px',fontFamily:'Bebas Neue,sans-serif',fontSize:'1.1rem',letterSpacing:'2px',cursor:'pointer',boxShadow:'5px 5px 0 #1a1a1a'}}>EXPLORE</button>
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

function PixelShowcase() {
  return <ShowcaseShell bg="#1a1a2e" textColor="#00ff41">
    <div style={{width:'100%',maxWidth:'640px',imageRendering:'pixelated'}}>
      <div style={{background:'#0d0d1a',border:'4px solid #555',borderRadius:'0',padding:'28px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,transparent 1px,transparent 3px)',pointerEvents:'none'}}/>
        <div style={{fontFamily:'Space Mono,monospace',fontSize:'1.1rem',letterSpacing:'3px',color:'#00ff41',textShadow:'0 0 10px #00ff41',marginBottom:'20px'}}>&gt; PIXEL QUEST III</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(12,14px)',gap:'1px',margin:'0 auto 20px',width:'fit-content'}}>
          {[0,0,1,1,1,1,1,1,0,0,0,0, 0,1,1,2,1,1,1,1,1,0,0,0, 1,1,1,1,1,1,1,1,1,1,0,0, 1,1,3,1,1,1,1,3,1,1,1,0, 1,1,1,1,1,1,1,1,1,1,1,1, 0,1,1,1,1,1,1,1,1,1,1,0, 0,0,1,1,0,0,0,0,1,1,0,0, 0,0,1,1,0,0,0,0,1,1,0,0].map((c,i)=>(
            <div key={i} style={{width:'14px',height:'14px',background:[null,'#ff3c3c','#fbbf24','#fff'][c]||'transparent'}}/>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',marginBottom:'20px'}}>
          {[['HP','████████░░','80/100','#ff3c3c'],['MP','██████████','100/100','#60a5fa'],['EXP','████░░░░░░','40%','#fbbf24']].map(([label,bar,val,c])=>(
            <div key={label} style={{fontFamily:'Space Mono,monospace',fontSize:'0.62rem'}}>
              <div style={{color:'#8b949e',marginBottom:'3px'}}>{label}</div>
              <div style={{height:'8px',background:'#1a1a2e',border:'2px solid #333',marginBottom:'3px'}}>
                <div style={{height:'100%',width:['80%','100%','40%'][['HP','MP','EXP'].indexOf(label)],background:c}}/>
              </div>
              <div style={{color:c}}>{val}</div>
            </div>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'8px',marginBottom:'16px'}}>
          {['⚔️ ATTACK','🛡️ DEFEND','✨ MAGIC','🏃 ESCAPE'].map((t)=>(
            <button key={t} style={{background:'#333',color:'#00ff41',border:'2px solid #555',padding:'10px',fontFamily:'Space Mono,monospace',fontSize:'0.7rem',letterSpacing:'0.05em',cursor:'pointer',transition:'background 0.1s'}}>{t}</button>
          ))}
        </div>
        <div style={{background:'#0a0a1a',border:'2px solid #333',padding:'12px',fontFamily:'Space Mono,monospace',fontSize:'0.68rem',color:'rgba(0,255,65,0.7)',lineHeight:1.8}}>
          <div>&gt; A wild BOSS appeared!</div>
          <div>&gt; BOSS used LASER BEAM!</div>
          <div style={{color:'#f85149'}}>&gt; You lost 20 HP!</div>
          <div style={{color:'#fbbf24'}}>&gt; Your turn...</div>
        </div>
      </div>
    </div>
  </ShowcaseShell>
}

// ─── Reusable shell wrapper ──────────────────────────────────────────────────
function ShowcaseShell({ bg, textColor, children, extraBg }) {
  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  )
}

function NeuToggle({ on }) {
  return (
    <div style={{ width: '48px', height: '26px', borderRadius: '100px', background: '#e0e5ec', boxShadow: on ? 'inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #fff' : '3px 3px 6px #b8bec7, -3px -3px 6px #fff', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
      <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#e0e5ec,#cbd2da)', boxShadow: '2px 2px 4px #b8bec7, -1px -1px 3px #fff', top: '3px', left: on ? '25px' : '3px', transition: 'left 0.3s' }} />
    </div>
  )
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function StylePage() {
  const router = useRouter()
  const { slug } = router.query
  const style = UI_STYLES.find(s => s.slug === slug)
  const currentIndex = UI_STYLES.findIndex(s => s.slug === slug)
  const prev = UI_STYLES[currentIndex - 1]
  const next = UI_STYLES[currentIndex + 1]
  const ShowcaseComponent = slug ? SHOWCASES[slug] : null

  if (!style || !ShowcaseComponent) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#04040a', color: '#fff', fontFamily: 'Space Mono, monospace' }}>
        {router.isFallback ? 'Loading…' : '404 — Style not found'}
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{style.name} — UI Cosmos</title>
        <meta name="description" content={`${style.name}: ${style.desc}. Best for: ${style.websites}.`} />
      </Head>

      {/* Fixed top nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(4,4,10,0.92)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href="/" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.3rem', letterSpacing: '4px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          UI<span style={{ color: '#ff3c6e' }}>·</span>COSMOS
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Space Mono,monospace', fontSize: '0.62rem', color: '#555570' }}>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/styles/</span>
          <span style={{ color: '#ff3c6e' }}>{slug}</span>
        </div>
        <Link href="/" style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.62rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', padding: '7px 16px', borderRadius: '100px', transition: 'all 0.2s' }}>
          ← All Styles
        </Link>
      </nav>

      {/* Style meta bar */}
      <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99, padding: '12px 32px', background: '#0d0d18', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.3rem', letterSpacing: '2px', color: '#fff' }}>{style.name}</div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', letterSpacing: '0.14em', color: '#ff3c6e', border: '1px solid rgba(255,60,110,0.3)', borderRadius: '100px', padding: '3px 10px' }}>{style.category} · {style.tag}</div>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', color: '#555570', letterSpacing: '0.1em' }}>BEST FOR:</span>
          {style.bestFor.slice(0, 3).map(use => (
            <span key={use} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '3px 10px', fontSize: '0.65rem', color: '#888899', fontFamily: "'DM Sans',sans-serif" }}>{use}</span>
          ))}
        </div>
      </div>

      {/* Showcase */}
      <div style={{ paddingTop: '110px' }}>
        <ShowcaseComponent />
      </div>

      {/* Prev / Next navigation */}
      <div style={{ background: '#04040a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
        {prev ? (
          <Link href={`/styles/${prev.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '22px', background: '#0d0d18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', color: '#555570', letterSpacing: '0.12em' }}>← PREVIOUS</span>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', letterSpacing: '1px', color: '#fff' }}>{prev.name}</span>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', color: '#ff3c6e' }}>/styles/{prev.slug}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/styles/${next.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '22px', background: '#0d0d18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', textDecoration: 'none', textAlign: 'right', transition: 'border-color 0.2s' }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', color: '#555570', letterSpacing: '0.12em' }}>NEXT →</span>
            <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.2rem', letterSpacing: '1px', color: '#fff' }}>{next.name}</span>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', color: '#ff3c6e' }}>/styles/{next.slug}</span>
          </Link>
        ) : <div />}
      </div>

      {/* Back to home */}
      <div style={{ textAlign: 'center', padding: '0 40px 60px', background: '#04040a' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ff3c6e', color: '#fff', padding: '14px 30px', borderRadius: '100px', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 8px 24px rgba(255,60,110,0.35)' }}>
          ← Back to All 30 Styles
        </Link>
      </div>

      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #04040a; } a { transition: opacity 0.2s; }`}</style>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: UI_STYLES.map(s => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return { props: {} }
}
