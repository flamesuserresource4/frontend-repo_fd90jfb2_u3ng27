import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-white/60 mt-1">{label}</div>
    </div>
  )
}

function LogoMark() {
  return (
    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" />
  )
}

export default function App() {
  const navItems = useMemo(() => [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Sponsors', href: '#sponsors' },
  ], [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-[#071229] text-white">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <LogoMark />
              <span className="text-sm sm:text-base font-semibold tracking-wide">Blockchain Club</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#join" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-cyan-400 transition-all">
                Join
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative pt-24">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Subtle gradient and vignette overlay - don't block Spline interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#061021]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[78vh] flex flex-col items-center justify-center text-center gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              • technology • modern • dynamic • minimalist
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Building the Future on Chain
            </h1>
            <p className="max-w-2xl text-white/70 text-sm sm:text-base">
              A community of builders, researchers, and creators exploring blockchain, cryptography, and decentralized systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a href="#join" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-blue-500 hover:to-cyan-400 transition-all">
                Join the Club
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-all">
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-4">
              <Stat value="500+" label="Members" />
              <Stat value="40+" label="Events / yr" />
              <Stat value="12" label="Active projects" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(0,153,255,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">What we do</h2>
            <p className="mt-4 text-white/70">
              We run weekly workshops, talks with industry leaders, hands-on hack nights, and collaborative research sprints. Whether you’re a beginner or an OG, there’s a path for you to learn and build.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Smart contract workshops</li>
              <li>• Zero-knowledge study group</li>
              <li>• Chain toolings and infrastructure</li>
              <li>• Startup and sponsor partnerships</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card title="Workshops" desc="Hands-on sessions led by peers and guests." />
            <Card title="Hack Nights" desc="Weekly build sessions to ship real things." />
            <Card title="Research" desc="Explore ZK, MEV, L2s, and cryptography." />
            <Card title="Careers" desc="Internships and pathways with sponsors." />
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Upcoming highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <EventCard title="Intro to Solidity" date="Nov 22" tag="Workshop" />
            <EventCard title="ZK Reading Group" date="Nov 27" tag="Study" />
            <EventCard title="Build on L2s" date="Dec 3" tag="Talk" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['zk-auth', 'campus-pay', 'dao-toolkit'].map((p) => (
              <ProjectCard key={p} name={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors / Join */}
      <section id="sponsors" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Sponsors & Partners</h2>
              <p className="mt-4 text-white/70">We collaborate with protocols, funds, and companies to create meaningful opportunities for students.</p>
              <div className="mt-6 flex flex-wrap gap-3 opacity-80">
                {['Arbitrum', 'Polygon', 'Phantom', 'Alchemy', 'Solana'].map((s) => (
                  <span key={s} className="text-xs rounded border border-white/10 bg-white/5 px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
            <div id="join" className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1a33] p-6">
              <h3 className="text-xl font-semibold">Join the community</h3>
              <p className="mt-2 text-white/70 text-sm">Drop your email and we’ll send you meeting times, resources, and opportunities.</p>
              <form className="mt-4 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="you@university.edu" className="flex-1 rounded-md bg-black/40 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
                <button type="button" className="rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all">Subscribe</button>
              </form>
              <p className="mt-2 text-xs text-white/50">We’ll never share your email.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-white/70 text-sm">© {new Date().getFullYear()} Blockchain Club</span>
          </div>
          <div className="text-white/50 text-xs">Made by builders, for builders</div>
        </div>
      </footer>
    </div>
  )
}

function Card({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-[#0a1a33] p-5 hover:border-cyan-400/30 transition-colors">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function EventCard({ title, date, tag }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7.5 transition-colors">
      <div className="text-xs text-cyan-300/90">{tag}</div>
      <div className="mt-1 text-lg font-semibold">{title}</div>
      <div className="text-white/60 text-sm mt-2">{date}</div>
    </div>
  )
}

function ProjectCard({ name }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0a1a33] to-slate-900 p-5">
      <div className="text-lg font-semibold capitalize">{name.replace('-', ' ')}</div>
      <p className="mt-2 text-sm text-white/70">Open-source initiative by club members. Get involved and contribute.</p>
      <button className="mt-4 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors">Explore</button>
    </div>
  )
}
