import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { supabase, type Project } from '../lib/supabase';
import { useScrollAnimation } from './useScrollAnimation';

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'ShopPH Online Store',
    description: 'Full-stack e-commerce platform with inventory management, payment gateway, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image_url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 1,
  },
  {
    id: '2',
    title: 'Line-Following Robot',
    description: 'Autonomous robot built for competition with obstacle detection and precision speed control.',
    technologies: ['Arduino', 'C++', 'Sensors'],
    image_url: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 2,
  },
  {
    id: '3',
    title: 'Student Portal System',
    description: 'Enrollment, grading, and scheduling web system with teacher and parent portals.',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    image_url: 'https://images.pexels.com/photos/1503676260728/pexels-photo-1503676260728.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 3,
  },
  {
    id: '4',
    title: 'Sales Analytics App',
    description: 'Real-time sales and inventory analytics with data visualization and PDF report exports.',
    technologies: ['Vue.js', 'Chart.js', 'Laravel'],
    image_url: 'https://images.pexels.com/photos/551488/pexels-photo-551488.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 4,
  },
  {
    id: '5',
    title: 'Smart Home Controller',
    description: 'IoT-based home automation with mobile app control for lights, fans, and door locks.',
    technologies: ['ESP32', 'MQTT', 'Flutter'],
    image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 5,
  },
  {
    id: '6',
    title: 'Employee Management System',
    description: 'Complete HR system with payroll, attendance tracking, and leave management modules.',
    technologies: ['React', 'Express', 'PostgreSQL'],
    image_url: 'https://images.pexels.com/photos/600880292203/pexels-photo-600880292203.jpeg?auto=compress&cs=tinysrgb&w=800',
    project_url: '#',
    display_order: 6,
  },
];

// Safe fallback images in case some URLs fail
const safeImages: Record<string, string> = {
  '1': 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  '2': 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  '3': 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
  '4': 'https://images.pexels.com/photos/551488/pexels-photo-551488.jpeg?auto=compress&cs=tinysrgb&w=800',
  '5': 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  '6': 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const categoryColors: Record<string, string> = {
  'React': 'bg-blue-100 text-blue-700',
  'Arduino': 'bg-green-100 text-green-700',
  'PHP': 'bg-purple-100 text-purple-700',
  'Vue.js': 'bg-emerald-100 text-emerald-700',
  'ESP32': 'bg-orange-100 text-orange-700',
  'Flutter': 'bg-sky-100 text-sky-700',
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const titleRef = useScrollAnimation();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from('projects').select('*').order('display_order');
        if (error || !data || data.length === 0) {
          setProjects(fallbackProjects);
        } else {
          setProjects(data);
        }
      } catch {
        setProjects(fallbackProjects);
      }
    }
    fetchProjects();
  }, []);

  // Fix image URLs with safe fallbacks
  const safeProjects = projects.map((p) => ({
    ...p,
    image_url: safeImages[p.id] || p.image_url,
  }));

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">Our Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            A selection of projects we have delivered across various industries and use cases.
          </p>
        </div>

        {/* Featured large + 2 stacked */}
        {safeProjects.length >= 3 && (
          <div className="grid lg:grid-cols-5 gap-5 mb-5">
            <div className="lg:col-span-3">
              <ProjectCard project={safeProjects[0]} delay={0} large />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5">
              <ProjectCard project={safeProjects[1]} delay={100} />
              <ProjectCard project={safeProjects[2]} delay={200} />
            </div>
          </div>
        )}

        {/* Bottom row */}
        {safeProjects.length >= 6 && (
          <div className="grid md:grid-cols-3 gap-5">
            {safeProjects.slice(3, 6).map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 100} />
            ))}
          </div>
        )}

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">Want to see more of our work?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, large = false }: { project: Project; delay: number; large?: boolean }) {
  const ref = useScrollAnimation();
  const firstTech = project.technologies[0];
  const tagColor = categoryColors[firstTech] || 'bg-slate-100 text-slate-600';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer h-full ${large ? 'lg:col-span-3' : ''}`}
    >
      <div className={`relative overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-50 group-hover:opacity-95 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          <span className={`text-[10px] px-2.5 py-1 font-black uppercase tracking-wider rounded-full ${tagColor} backdrop-blur-sm`}>
            {firstTech}
          </span>
          {project.technologies[1] && (
            <span className="text-[10px] bg-white/90 text-slate-600 px-2.5 py-1 font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
              {project.technologies[1]}
            </span>
          )}
        </div>

        {/* Arrow button on hover */}
        <a
          href={project.project_url}
          onClick={(e) => e.preventDefault()}
          className="absolute top-4 right-4 w-9 h-9 bg-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white"
        >
          <ArrowUpRight className="w-4 h-4 text-blue-600 group-hover:text-white" />
        </a>

        {/* Bottom info on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card footer */}
      <div className="bg-white p-5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-slate-900 font-black text-sm tracking-tight mb-1 truncate">{project.title}</h3>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((t, i) => (
              <span key={i} className="text-[10px] text-slate-400 font-medium">
                {t}{i < project.technologies.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
        <div className="w-8 h-8 bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center rounded-lg transition-colors duration-300 flex-shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}