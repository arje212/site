import { useScrollAnimation } from './useScrollAnimation';

export default function Stats() {
  const ref = useScrollAnimation();

  const stats = [
    { number: '50+', label: 'Projects Done', desc: 'Successfully delivered' },
    { number: '30+', label: 'Happy Clients', desc: 'Across the Philippines' },
    { number: '6', label: 'Team Members', desc: 'Expert engineers' },
    { number: '5+', label: 'Years Experience', desc: 'In the industry' },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-300" />
            <span className="text-blue-200 text-xs font-black uppercase tracking-[0.4em]">By the Numbers</span>
            <div className="h-px w-8 bg-blue-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Results That <span className="text-blue-300">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} delay={i * 100} />
          ))}
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
      className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center rounded-xl hover:bg-white/20 transition-colors duration-500 group"
    >
      <div className="text-5xl font-black text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">{stat.number}</div>
      <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
      <div className="text-blue-200/60 text-[10px] uppercase tracking-widest">{stat.desc}</div>
    </div>
  );
}
