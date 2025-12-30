import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#091F35',
        ink: '#111827',
        ash: '#6B7280'
      }
    }
  }
}
export default config