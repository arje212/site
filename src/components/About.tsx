import { Globe, Cpu, BarChart3, Shield, CheckCircle, MapPin } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

export default function About() {
  const titleRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const features = [
    { icon: Globe, title: 'Web Development', description: 'Full-stack web apps built with React, Django, C# Blazor, and more — responsive and production-ready.' },
    { icon: Cpu, title: 'Robotics & IoT', description: 'Arduino, Raspberry Pi, and IoT systems for industrial, educational, and commercial applications.' },
    { icon: BarChart3, title: 'Data Analytics', description: 'Power BI dashboards, Excel automation, and SQL reporting to drive smarter business decisions.' },
    { icon: Shield, title: 'Secure by Default', description: 'Security is built into everything we create — from web applications to network infrastructure.' },
  ];

  const checkpoints = [
    'Mission-driven — every project delivers real value',
    'Fast & reliable — on-time delivery without compromise',
    'Full-stack capable — web, mobile, robotics, and data',
    'Post-launch support and ongoing maintenance',
  ];

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">Who We Are</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              About <span className="text-blue-600">CodeCraft</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            A team of passionate professionals based in Tanauan City, Batangas, crafting technology solutions that solve real-world problems.
          </p>
        </div>

        {/* Main 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: image collage */}
          <div ref={leftRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Working together"
                className="w-full h-64 object-cover rounded-xl shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Development work"
                className="w-full h-48 object-cover rounded-xl shadow-lg -mt-4"
              />
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Planning session"
                className="w-full h-48 object-cover rounded-xl shadow-lg mt-4"
              />
            </div>

            {/* Floating location badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-2xl shadow-blue-200 z-10">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-blue-200" />
                <span className="text-blue-200 text-[10px] uppercase tracking-widest font-bold">Based in</span>
              </div>
              <div className="text-white font-black text-base leading-tight">Tanauan City</div>
              <div className="text-blue-200 text-xs font-semibold">Batangas, PH</div>
            </div>

            {/* Floating since badge */}
            <div className="absolute -top-4 -left-4 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 z-10">
              <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">Active Since</div>
              <div className="text-blue-600 font-black text-2xl leading-none">2022</div>
            </div>
          </div>

          {/* Right: text content */}
          <div ref={rightRef}>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
              We Build. We Craft.<br />
              <span className="text-blue-600">We Deliver.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              CodeCraft is a team of passionate professionals based in Tanauan City, Batangas, Philippines.
              We craft technology solutions that solve real-world problems — from full-stack web applications
              to robotics, mobile apps, and data analytics.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              From your first idea to final deployment — and beyond — CodeCraft is your complete digital partner.
              We handle everything so you can focus on growing your business.
            </p>

            <div className="space-y-3 mb-8">
              {checkpoints.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Values strip */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              {[
                { label: '50+', sub: 'Projects Done' },
                { label: '100%', sub: 'Satisfaction' },
                { label: '4', sub: 'Expert Members' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-blue-600 font-black text-xl leading-none">{s.label}</div>
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{s.sub}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 rounded-xl"
            >
              Work With Us
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: { icon: React.ElementType; title: string; description: string }; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="group bg-slate-50 border border-slate-100 p-7 hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all duration-500 cursor-default rounded-xl"
    >
      <div className="w-11 h-11 bg-blue-100 group-hover:bg-white/20 flex items-center justify-center mb-5 rounded-xl transition-colors duration-500">
        <feature.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-500" />
      </div>
      <h4 className="text-slate-900 group-hover:text-white text-xs font-black uppercase tracking-[0.2em] mb-2 transition-colors duration-500">{feature.title}</h4>
      <p className="text-slate-400 group-hover:text-blue-100 text-xs leading-relaxed transition-colors duration-500">{feature.description}</p>
    </div>
  );
}