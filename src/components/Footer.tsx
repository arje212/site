import { Code2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top CTA */}
        <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10">
          <div>
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-2">Ready to Start?</p>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Let's Build Something <span className="text-blue-400">Great</span>
            </h3>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-colors flex-shrink-0 shadow-lg"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white uppercase tracking-[0.1em]">
                Code<span className="text-blue-400">Craft</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-xs">
              Innovating Digital Solutions Through Engineering Excellence. We turn ideas into reality.
            </p>
            <div className="flex gap-2">
              {[
                { label: 'LI', href: '#' },
                { label: 'GH', href: '#' },
                { label: 'TW', href: '#' },
                { label: 'FB', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-[10px] font-black text-slate-500 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <button onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-slate-400 text-xs hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Services</h3>
            <ul className="space-y-3">
              {['Website Development', 'Web Applications', 'System Development', 'UI/UX Design', 'IT Consulting', 'Maintenance'].map((s) => (
                <li key={s} className="text-slate-400 text-xs hover:text-blue-400 transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'contact@codecraft.com' },
                { icon: Phone, text: '+63 912 345 6789' },
                { icon: MapPin, text: 'Philippines' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 group cursor-default">
                  <Icon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            &copy; {currentYear} CodeCraft. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            Built with passion in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
