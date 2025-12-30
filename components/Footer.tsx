// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#091F35] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AIK Partners. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:administracion@aikpartners.com"
              className="text-white/90 underline"
            >
              administracion@aikpartners.com
            </a>
            <a href="#" className="text-white/70">Política de privacidad</a>
            <a href="#" className="text-white/70">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}