'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type Slide = { title: string; subtitle: string; ctaLabel: string; ctaHref: string; imageSrc: string; imageAlt: string }

export default function HeroSlider() {
  const slides: Slide[] = useMemo(() => [
    {
      title: 'SAP Business One',
      subtitle: 'Implementación, soporte y optimización de SAP Business One para empresas en crecimiento.',
      ctaLabel: 'Ver más',
      ctaHref: '#servicios',
      imageSrc: '/images/slide1.png',
      imageAlt: 'SAP Business One en acción'
    },
    {
      title: 'AI Cloud',
      subtitle: 'Servicios de infraestructura cloud y analítica inteligente para acelerar la toma de decisiones.',
      ctaLabel: 'Infraestructura Cloud',
      ctaHref: '#servicios',
      imageSrc: '/images/slide2.png',
      imageAlt: 'AI Cloud e infraestructura escalable'
    },
    {
      title: 'Soluciones por industria',
      subtitle: 'Diseñamos soluciones tecnológicas específicas para cada industria, desde el ERP hasta la nube.',
      ctaLabel: 'Explorar industrias',
      ctaHref: '#industrias',
      imageSrc: '/images/slide3.png',
      imageAlt: 'Soluciones tecnológicas por industria'
    }
  ], [])
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % slides.length)
        setFading(false)
      }, 250)
    }, 6000)
    return () => clearInterval(id)
  }, [slides.length])

  const go = (i: number) => {
    setFading(true)
    setTimeout(() => {
      setIndex((i + slides.length) % slides.length)
      setFading(false)
    }, 250)
  }

  return (
    <section className="relative bg-white text-primary">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`${fading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'} transition-all duration-500 ease-in-out`}>
            <h1 className="text-4xl sm:text-5xl font-semibold">{slides[index].title}</h1>
            <p className="mt-5 text-lg text-primary/70">{slides[index].subtitle}</p>
            <div className="mt-8 flex gap-4">
              <Link href={slides[index].ctaHref} className="inline-flex items-center rounded-md bg-[#38BDF8] hover:bg-[#0EA5E9] px-6 py-3 text-white font-medium">
                Ver más
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir al slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-primary' : 'bg-primary/40'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className={`${fading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'} transition-all duration-500 ease-in-out relative w-full h-[240px] md:w-[640px] md:h-[420px] lg:h-[500px] rounded-xl overflow-hidden border-none`}>
              <Image src={slides[index].imageSrc} alt={slides[index].imageAlt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button aria-label="Anterior" onClick={() => go(index - 1)} className="rounded-md border border-[#38BDF8] px-3 py-2 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white">‹</button>
          <button aria-label="Siguiente" onClick={() => go(index + 1)} className="rounded-md border border-[#38BDF8] px-3 py-2 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white">›</button>
        </div>
      </div>
    </section>
  )
}