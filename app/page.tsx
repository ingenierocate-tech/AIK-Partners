// app/page.tsx

import Header from '../components/Header'
import HeroSlider from '../components/hero-slider'
import Footer from '../components/Footer'
import Image from 'next/image'
import WhatsAppButton from '../components/WhatsApp'

export default function Page() {
  return (
    <main>

      {/* HEADER */}
      <Header />

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-semibold text-primary">AIK: tu aliado estratégico en soluciones</h2>

          <div className="mt-6 space-y-6">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <p className="text-ash">Cloud para SAP Business One</p>
                <p className="mt-4 text-ash text-justify">En AIK entendemos que tu empresa no necesita solo tecnología, necesita un socio estratégico que convierta la innovación y la seguridad de datos en tu ventaja competitiva.</p>
                <p className="mt-4 text-ash text-justify">AIKloud es nuestra respuesta, infraestructura cloud diseñada exclusivamente para SAP Business One, con más de 150 servicios especializados que se ajustan exactamente a lo que tu negocio necesita.</p>
                <p className="mt-6 text-ink font-medium">Lo que nos diferencia:</p>
                <ul className="mt-2 list-disc pl-6 text-ink">
                  <li> Seguridad blindada para tus datos críticos</li>
                  <li> Escalabilidad inteligente, creces o reduces capacidad en tiempo real</li>
                  <li> Paga solo lo justo, ni de más, ni de menos</li>
                  <li> Soluciones a medida, cero paquetes genéricos</li>
                </ul>
                <p className="mt-4 text-ash text-justify">El resultado, una plataforma cloud potente y flexible que impulsa tu competitividad desde el día uno.</p>
                <p className="mt-4 text-ash text-justify">¿Listo para el siguiente nivel? Con AIK y AIKloud, tu transformación digital comienza hoy.</p>
              </div>
              <div className="md:col-span-1 relative h-60 sm:h-80 lg:h-96">
                <Image src="/images/aik-cloud.png" alt="AIK Cloud" fill className="object-contain object-top" priority />
              </div>
            </div>

            {/* ¿Por qué ERP en la nube? */}
            <div className="pt-24 border-t border-ash/20">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="relative h-60 sm:h-80 lg:h-96">
                    <Image src="/images/aik-erp.png" alt="AIK Cloud ERP" fill className="object-contain object-top" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-primary">¿Por qué tu ERP debe estar en la nube?</h3>
                  <p className="mt-3 text-ash text-justify">Olvídate de las limitaciones del On-Premise tradicional. Con AIK, tu infraestructura vive en centros de datos de última generación y se conecta desde cualquier lugar con Internet.</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-ink font-medium">Trabajo Sin Fronteras</p>
                    <p className="text-ash text-justify">Tu equipo accede a todo lo que necesita desde cualquier dispositivo: laptop, tablet o smartphone.</p>
                    <p className="text-ink font-medium">Disponibilidad 24/7</p>
                    <p className="text-ash text-justify">Tus datos y aplicaciones siempre disponibles, en cualquier momento y lugar.</p>
                    <p className="text-ink font-medium">Agilidad Real</p>
                    <p className="text-ash text-justify">Cierra negocios desde tu celular, toma decisiones con datos en tiempo real, y dale a tu equipo la libertad de ser productivo desde donde esté.</p>
                  </div>
                  <p className="mt-4 text-ash text-justify">Con AIK, tu ERP te sigue a ti, no al revés. </p>
                </div>
              </div>
              <div className="mt-24 pt-24 border-t border-ash/20 grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-3xl font-semibold text-primary">
                    <span className="block">Los beneficios</span>
                    <span className="block">que marcan la diferencia</span>
                  </h4>
                </div>
                <div className="w-full">
                  <Image src="/images/aik-benefits2.png" alt="Ciclo de Gestión Empresarial con SAP Business One" width={768} height={917} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Tipos de nube */}
            <section className="bg-sky-50 py-24 mt-24">
              <h3 className="text-3xl font-semibold text-primary">Elige la nube que calza con tu negocio</h3>

              <div className="mt-6 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-xl bg-white p-6 border border-[#38BDF8] flex flex-col h-full">
                  <div className="flex justify-center"><span className="text-5xl block mb-4">☁️</span></div>
                  <h4 className="mt-3 text-lg font-semibold text-ink">Nube pública: agilidad y ahorro inteligente</h4>
                  <div className="mt-4 text-ash leading-relaxed text-justify">
                    <p>Perfecta para pymes que buscan máxima flexibilidad sin inversión inicial.</p>
                    <p className="mt-2">Pagas sólo por lo que usas, sin comprar hardware ni contratar equipos técnicos.</p>
                    <p className="mt-2">Implementación rápida y acceso inmediato.</p>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 border border-[#38BDF8] flex flex-col h-full">
                  <div className="flex justify-center"><span className="text-5xl block mb-4">🔐</span></div>
                  <h4 className="mt-3 text-lg font-semibold text-ink">Nube privada: control total, rendimiento dedicado</h4>
                  <div className="mt-4 text-ash leading-relaxed text-justify">
                    <p>Para empresas que necesitan personalización extrema y control absoluto.</p>
                    <p className="mt-2">Toda la potencia del cloud con recursos dedicados exclusivamente a tu operación.</p>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 border border-[#38BDF8] flex flex-col h-full">
                  <div className="flex justify-center"><span className="text-5xl block mb-4">🔄</span></div>
                  <h4 className="mt-3 text-lg font-semibold text-ink">Nube híbrida: lo mejor de ambos mundos</h4>
                  <div className="mt-4 text-ash leading-relaxed text-justify">
                    <p>Combina la seguridad de tu nube privada con la escalabilidad de la nube pública.</p>
                    <p className="mt-2">Tus datos críticos permanecen protegidos mientras aprovechas capacidad extra cuando la necesitas.</p>
                  </div>
                </div>
              </div>

            </section>

            {/* Servicios clave VKloud */}
            <div className="mt-24 pt-24 border-t border-ash/20">
              <h3 className="text-3xl font-semibold text-primary">¿Qué servicios te ofrecemos en AIKloud?</h3>

              <div className="mt-6 grid md:grid-cols-2 gap-6 items-stretch">
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-ash/10 flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-ink"> 1. Seguridad & Cumplimiento</h4>
                  <ul className="mt-3 list-disc pl-6 text-ash">
                    <li> Datos alojados en Chile - Cumplimiento normativo local</li>
                    <li> Seguridad avanzada: datos, conectividad y hosts</li>
                    <li> Respaldo con 2 Datacenters</li>
                    <li> Certificación Tier 3 Uptime Institute</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-ash/10 flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-ink"> 2. Rendimiento Superior</h4>
                  <ul className="mt-3 list-disc pl-6 text-ash">
                    <li> Internet de ultra baja latencia: &lt;10ms</li>
                    <li> MPLS: &lt;5ms para conexiones críticas</li>
                    <li> Escalamiento multinivel (Nivel 2 y 3)</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-ash/10 flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-ink"> 3. Soporte Integral Local</h4>
                  <ul className="mt-3 list-disc pl-6 text-ash">
                    <li> Equipo técnico (TAM) en Chile</li>
                    <li> Soporte profesional 24/7</li>
                    <li> Partner SAP Local certificado</li>
                    <li> Flexibilidad total con proveedores</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-ash/10 flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-ink"> 4. Infraestructura de Futuro</h4>
                  <ul className="mt-3 list-disc pl-6 text-ash">
                    <li> Tercer Datacenter habilitado</li>
                    <li> +70 servicios especializados</li>
                    <li> Personalización total según tu negocio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seguridad */}
            <div className="mt-24 pt-24 border-t border-ash/20">
              <h3 className="text-3xl font-semibold text-primary">Seguridad ante todo</h3>
              <p className="mt-3 text-ash text-justify">En AIK sabemos que la seguridad de tus datos no es negociable. Por eso AIKloud integra protección de nivel empresarial en cada capa de tu infraestructura:</p>

              <div className="mt-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <p className="text-xl font-medium text-ink">
                    Tu información crítica merece protección de clase mundial. Con AIK, duermes tranquilo mientras nosotros vigilamos.
                  </p>
                </div>
                <div className="md:col-span-2 w-full">
                  <Image src="/images/aik-security.png" alt="Seguridad Multicapa para Datos Empresariales" width={768} height={816} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section id="industrias" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-semibold text-primary">Industrias</h2>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Tecnología',
              'Manufactura',
              'Servicios',
              'Retail',
              'Logística',
              'Financiero',
              'Salud'
            ].map((name, i) => (
              <div key={i} className="rounded-xl bg-white p-6 border border-ash/20 flex items-center justify-center">
                <h3 className="text-lg font-medium text-ink">{name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Todos nuestros Partners</h2>
              <p className="mt-3 text-ash text-justify">Nos asociamos con fabricantes y partners de referencia para proporcionar las soluciones que tu organización necesita.</p>

            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'SAP', src: '/images/logo-sap.jpeg' },
                  { name: 'Microsoft', src: '/images/logo-microsoft.jpg' },
                  { name: 'IBM', src: '/images/logo-ibm.png' },
                  { name: 'Adobe', src: '/images/logo-adobe.png' },
                  { name: 'Salesforce', src: '/images/logo-salesforce.png' },
                  { name: 'AWS', src: '/images/logo-aws.png' },
                  { name: 'Google Cloud', src: '/images/logo-googlecloud.png' },
                  { name: 'Huawei', src: '/images/logo-huawei.png' }
                ].map(({ name, src }, i) => (
                  <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-[#38BDF8] h-24 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image src={src} alt={`Logo ${name}`} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIK */}
      <section id="aik" className="bg-white hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-semibold text-primary">AIK Partners</h2>
          <p className="mt-3 text-ash">
            TODO: Aquí va el texto de presentación...
          </p>
          <p className="mt-2 text-ash">
            TODO: Texto adicional sobre capacidades...
          </p>

          <ul className="mt-6 list-disc pl-6 text-ink">
            <li>Consultoría especializada en ERP y cloud.</li>
            <li>Experiencia en SAP Business One.</li>
            <li>Enfoque en seguridad y escalabilidad.</li>
          </ul>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl">
                Si quieres mayor información, escribe a{' '}
                <a href="mailto:administracion@aikpartners.com" className="underline">
                  administracion@aikpartners.com
                </a>
              </h3>
            </div>
            <div className="md:text-right">
              <a
                href="https://wa.me/56979904265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-primary font-medium"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  )
}