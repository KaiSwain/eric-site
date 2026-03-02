import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About Eric', href: '#biography' },
    { name: 'Books', href: '#books' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Projects', href: '#projects' },
    { name: 'Speaking', href: '#events' },
    { name: 'Press', href: '#articles' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/eric-profile-image.png" 
              alt="Eric Eichinger" 
              className="h-10 sm:h-12 rounded-full border-2 border-red-900/50 group-hover:border-red-700/80 transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-sans text-sm sm:text-base font-bold tracking-wider text-white">
                ERIC EICHINGER
              </span>
              <span className="hidden sm:block text-[9px] tracking-[0.25em] font-medium text-red-400/80">
                AUTHOR &bull; MINISTER &bull; STORYTELLER
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300 uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-red-800 hover:bg-red-700 text-white text-[11px] font-bold tracking-wider transition-all duration-300"
            >
              CONNECT
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}>
          <div className="glass border border-white/5 rounded-lg p-6 space-y-1 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-300 hover:text-red-400 tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-red-800 hover:bg-red-700 text-white text-sm font-bold tracking-wider transition-colors"
              >
                CONNECT WITH ERIC ✦
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
