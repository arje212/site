import { useScrollAnimation } from './useScrollAnimation';

export default function Stats() {
  const ref = useScrollAnimation();

  const stats = [
    { number: '50+', label: 'Projects Done', desc: 'Successfully delivered' },
    { number: '100%', label: 'Client Satisfaction', desc: 'Happy clients always' },
    { number: '4', label: 'Team Members', desc: 'Expert engineers' },
    { number: '2022', label: 'Est. Year', desc: 'Active in Tanauan City' },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-blue-950/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-300 text-xs font-black uppercase tracking-[0.4em]">By the Numbers</span>
            <div className="h-px w-8 bg-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Results That <span className="text-blue-300">Speak</span>
          </h2>
          <p className="text-blue-200/60 text-sm max-w-md mx-auto">
            Since 2022, CodeCraft has been delivering quality tech solutions in Tanauan City, Batangas.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} delay={i * 100} />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-white/30 text-xs uppercase tracking-[0.4em]">
            Tanauan City, Batangas, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, delay }: { stat: { number: string; label: string; desc: string }; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 cursor-default"
    >
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors duration-300">
        {stat.number}
      </div>
      <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
      <div className="text-blue-200/50 text-[10px] uppercase tracking-widest">{stat.desc}</div>
    </div>
  );
}
