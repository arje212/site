import { Globe, Cpu, Smartphone, Monitor, Package, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

export default function Services() {
  const titleRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Complete web applications from frontend UI to backend APIs and databases — responsive, scalable, and production-ready.',
      features: ['React / Vue / Django', 'C# Blazor & WPF', 'MySQL / MS SQL', 'WordPress & Bootstrap'],
      number: '01',
    },
    {
      icon: Cpu,
      title: 'Robotics & Automation',
      description: 'Design and build robotic systems and automation solutions for industrial, educational, and commercial use cases.',
      features: ['Arduino & Raspberry Pi', 'IoT Systems', 'Embedded Programming', 'Sensor Integration'],
      number: '02',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for Android and iOS with modern UI/UX design and optimized performance.',
      features: ['Flutter', 'React Native', 'Cross-Platform', 'Performance Optimized'],
      number: '03',
    },
    {
      icon: Monitor,
      title: 'PC Formatting & Setup',
      description: 'Professional PC formatting, OS installation, driver setup, and system optimization for personal and business use.',
      features: ['Windows & macOS', 'Driver Installation', 'System Optimization', 'Data Backup'],
      number: '04',
    },
    {
      icon: Package,
      title: 'Software Installation',
      description: 'Complete software setup, configuration, licensing, and deployment for any system or business environment.',
      features: ['Microsoft Office 365', 'Business Software', 'License Management', 'Configuration'],
      number: '05',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Reporting',
      description: 'Comprehensive data analysis, visualization, and reporting services to drive informed decision-making.',
      features: ['Power BI Dashboards', 'Excel Automation', 'SQL Reporting', 'Google Apps Script'],
      number: '06',
    },
  ];

  return (
    <section id="services" className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">What We Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Our <span className="text-blue-600">Services</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            A complete range of technology services — from web apps and robotics to IT support and data analytics.
          </p>
        </div>

        {/* Big image banner */}
        <div ref={imageRef} className="relative rounded-2xl overflow-hidden mb-12 min-h-[420px] sm:min-h-[360px] md:h-80">
          <img
            src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="CodeCraft team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/15 flex items-end sm:items-center px-5 py-6 sm:px-8 md:px-16">
            <div className="max-w-[18rem] sm:max-w-md md:max-w-lg">
              <p className="text-blue-100 text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] sm:tracking-[0.4em] mb-2 sm:mb-3">Based in Tanauan City, Batangas</p>
              <h3 className="text-white font-black text-[clamp(2rem,8vw,3.5rem)] leading-[0.95] sm:leading-tight">
                <span className="block">From Your First</span>
                <span className="block">Idea to Final</span>
                <span className="block">Deployment</span>
              </h3>
              <p className="text-blue-50/80 text-sm sm:text-[15px] mt-3 max-w-xs sm:max-w-sm leading-relaxed">
                CodeCraft is your end-to-end technology partner — we handle everything so you can focus on your business.
              </p>
            </div>
          </div>

          {/* Floating stat badges */}
          <div className="absolute top-6 right-6 hidden md:flex flex-col gap-3">
            <div className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg text-center">
              <div className="text-blue-600 font-black text-xl leading-none">50+</div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider mt-0.5">Projects Done</div>
            </div>
            <div className="bg-blue-600 rounded-xl px-4 py-3 shadow-lg text-center">
              <div className="text-white font-black text-xl leading-none">100%</div>
              <div className="text-blue-200 text-[10px] uppercase tracking-wider mt-0.5">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 80} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-1">Ready to Start?</p>
            <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight">
              Book a Free Consultation
            </h3>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-8 py-4 bg-white text-blue-600 font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: {
  service: { icon: React.ElementType; title: string; description: string; features: string[]; number: string };
  delay: number;
}) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="group relative bg-white border border-slate-100 p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-500 cursor-default rounded-xl overflow-hidden"
    >
      {/* Number watermark */}
      <span className="absolute top-4 right-5 text-6xl font-black text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-500">
        {service.number}
      </span>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-6 rounded-xl transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
          <service.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-500" />
        </div>

        {/* Title & desc */}
        <h3 className="text-slate-900 text-sm font-black uppercase tracking-[0.1em] mb-2 leading-tight">{service.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-5">{service.description}</p>

        {/* Features */}
        <div className="space-y-2 pt-4 border-t border-slate-100 group-hover:border-blue-50 transition-colors duration-500">
          {service.features.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 group-hover:bg-blue-500 rounded-full flex-shrink-0 transition-colors duration-500" />
              <span className="text-slate-500 text-xs group-hover:text-slate-600 transition-colors">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-700" />
    </div>
  );
}
