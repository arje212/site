import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [leftRef.current, rightRef.current, statsRef.current];
    items.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = i === 1 ? 'translateX(40px)' : 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translate(0)';
      }, 200 + i * 200);
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-white flex flex-col">
      {/* Main hero split layout */}
      <div className="flex-1 grid lg:grid-cols-2 min-h-screen">

        {/* LEFT — Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-28 pb-16 bg-white relative">
          {/* Decorative vertical line */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

          <div ref={leftRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">
                Engineers
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1] mb-6 tracking-tight">
              We Build<br />
              <span className="text-blue-600">Digital</span><br />
              Experiences
            </h1>

            <p className="text-slate-400 text-base max-w-md mb-10 leading-relaxed">
              A team of elite Engineers crafting innovative websites,
              web applications, and IT solutions that drive business growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-3 px-7 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-7 py-4 border-2 border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-[0.2em] hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                View Portfolio
              </button>
            </div>

            {/* Stats row */}
            <div ref={statsRef} className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Clients' },
                { number: '5', label: 'Members' },
                { number: '5+', label: 'Years' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-blue-600 tracking-tight">{stat.number}</div>
                  <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Image collage */}
        <div ref={rightRef} className="relative bg-slate-50 overflow-hidden hidden lg:block">
          {/* Main large image */}
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team working"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Floating card 1 — top left */}
          <div className="absolute top-16 left-8 bg-white rounded-xl shadow-2xl p-4 w-48 z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">Projects Done</div>
                <div className="text-[10px] text-slate-400">This year</div>
              </div>
            </div>
            <div className="text-2xl font-black text-blue-600">50+</div>
            <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>

          {/* Floating card 2 — bottom right */}
          <div className="absolute bottom-24 right-8 bg-white rounded-xl shadow-2xl p-4 w-52 z-10">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Client Satisfaction</div>
            <div className="flex items-end gap-1 mb-2">
              {[60, 80, 55, 90, 75, 95, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-100 rounded-sm overflow-hidden" style={{ height: '40px' }}>
                  <div
                    className="bg-blue-500 rounded-sm w-full transition-all"
                    style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="text-xl font-black text-slate-900">98% <span className="text-blue-500">Happy</span></div>
          </div>

          {/* Floating card 3 — middle left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 bg-blue-600 rounded-xl shadow-2xl p-4 w-40 z-10">
            <div className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Team</div>
            <div className="text-white font-black text-2xl mb-2">6</div>
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-blue-600 object-cover" />
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-blue-600 bg-blue-800 flex items-center justify-center text-white text-[9px] font-black">+3</div>
            </div>
          </div>

          {/* Dark overlay at bottom for gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300 hover:text-blue-500 transition-colors hidden lg:flex"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
