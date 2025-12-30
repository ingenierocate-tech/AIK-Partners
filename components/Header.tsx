'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)
  const [active, setActive] = useState<string>('servicios')
  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const ids = ['aik','servicios','industrias','partners']
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id) setActive(visible.target.id)
    }, { rootMargin: '-112px 0px -40% 0px', threshold: [0.2,0.4,0.6] })
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  const linkClass = (id: string) => active === id ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'
  return (
    <header className={`sticky top-0 inset-x-0 z-50 bg-primary ${hasShadow ? 'shadow-sm' : ''} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/aik-logo.png" alt="AIK Partners" width={140} height={140} />
            <span className="font-semibold">AIK Partners</span>
          </Link>
          <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
            <a href="#aik" className={linkClass('aik')}>AIK</a>
            <a href="#servicios" className={linkClass('servicios')}>Servicios</a>
            <a href="#industrias" className={linkClass('industrias')}>Industrias</a>
            <a href="#partners" className={linkClass('partners')}>Partners</a>
          </nav>
          <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded border border-white/20">
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-primary/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/aik-logo.png" alt="AIK Partners" width={28} height={28} />
                <span className="font-semibold">AIK Partners</span>
              </Link>
              <button aria-label="Cerrar" onClick={() => setOpen(false)} className="p-2 rounded border border-white/20">
                <div className="w-5 h-0.5 bg-white mb-1"></div>
                <div className="w-5 h-0.5 bg-white mb-1"></div>
                <div className="w-5 h-0.5 bg-white"></div>
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-6 text-lg">
              {['aik','servicios','industrias','partners'].map(id => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-white">{id.charAt(0).toUpperCase()+id.slice(1)}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}