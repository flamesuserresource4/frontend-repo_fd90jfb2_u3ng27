import { useState, useMemo } from 'react'
import { Menu, X } from 'lucide-react'

function LogoMark() {
  return (
    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10" />
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = useMemo(() => [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Sponsors', href: '#sponsors' },
  ], [])

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm sm:text-base font-semibold tracking-wide">Blockchain Club</span>
          </a>

          {/* Desktop nav */}
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

          {/* Mobile button */}
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={close} />
          <div className="ml-auto h-full w-80 max-w-[88%] bg-gradient-to-b from-black to-[#0a1630] border-l border-white/10 shadow-xl p-6 relative">
            <button aria-label="Close menu" onClick={close} className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80">
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-semibold">Blockchain Club</span>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={close} className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/5">
                  {n.label}
                </a>
              ))}
              <a href="#join" onClick={close} className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-cyan-400 transition-all">
                Join
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
