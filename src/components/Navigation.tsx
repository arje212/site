import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'team', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-200/60 rounded-lg group-hover:shadow-blue-300/60 transition-shadow duration-300">
              <span className="text-white font-black text-xs tracking-tight">CC</span>
            </div>
            <span className={`text-xl font-black tracking-[0.08em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
            }`}>
              Code<span className="text-blue-500">Craft</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/15'
                    : isScrolled
                    ? 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${
                  activeSection === link.id ? 'w-4' : 'w-0'
                }`} />
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 px-5 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-200/60 rounded-lg"
            >
              Hire Us
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl">
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2.5 flex-shrink-0" />
                )}
                {link.name}
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Hire Us — It's Free to Ask
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}