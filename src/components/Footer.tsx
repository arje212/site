import { Code2, Mail, Phone, MapPin, ArrowUpRight, Facebook, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top CTA strip */}
        <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10">
          <div>
            <p className="text-blue-400 text-xs font-black uppercase tracking-[0.4em] mb-2">Ready to Start?</p>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Let's Build Something <span className="text-blue-400">Great</span>
            </h3>
            <p className="text-slate-500 text-sm mt-2">Book a free consultation — no commitments.</p>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-colors flex-shrink-0 shadow-lg rounded-xl"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Main grid */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white uppercase tracking-[0.1em]">
                Code<span className="text-blue-400">Craft</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-2">
              Full-stack web development, robotics, mobile apps, and IT solutions.
            </p>
            <p className="text-slate-500 text-xs mb-6">📍 Tanauan City, Batangas, PH</p>

            {/* Social links */}
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-slate-400 text-xs hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Full-Stack Web Development',
                'Robotics & Automation',
                'Mobile App Development',
                'PC Formatting & Setup',
                'Software Installation',
                'Data Analysis & Reporting',
              ].map((s) => (
                <li
                  key={s}
                  className="text-slate-400 text-xs hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => scrollToSection('services')}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'hello@codecraft.ph' },
                { icon: Phone, text: '+63 912 345 6789' },
                { icon: MapPin, text: 'Tanauan City, Batangas, PH' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 group cursor-default">
                  <Icon className="w-3 h-3 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Rolando's portfolio link */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-2">Lead Dev Portfolio</p>
              <a
                href="https://engrmelecio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-bold hover:text-blue-300 transition-colors"
              >
                engrmelecio.netlify.app
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            &copy; {currentYear} CodeCraft. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            Built with passion in Tanauan City, Batangas 🇵🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
