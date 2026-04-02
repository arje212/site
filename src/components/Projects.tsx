import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

// IMPORT LOCAL IMAGE
import roomImg from '../assets/Roombooking1.png';
import fishImg from '../assets/Fishfeeder.jpeg';
import resortImg from '../assets/resort.png';

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  project_url: string;
  display_order: number;
};

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Room Booking System',
    description:
      'A full-stack web app for managing room reservations with real-time availability.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image_url: roomImg,
    project_url: '#',
    display_order: 1,
  },
  {
    id: '2',
    title: 'Autonomous Fish Feeder',
    description:
      'IoT-powered automatic fish feeder built with Arduino Uno and ESP8266 WiFi module. Uses an ultrasonic sensor to monitor food/water level in real time, an IR sensor to detect fish feeding activity, and a servo motor to dispense food on scheduled intervals. Sends instant push notifications to your phone.',
    technologies: ['Arduino', 'C++', 'Ultrasonic Sensor, Ir Sensor, Servo Motor, ESP8266'],
    image_url: fishImg,
    project_url: '#',
    display_order: 2,
  },
  {
    id: '3',
    title: 'Paradise Resort Management System',
    description:
      'Experience world-class hospitality in our stunning resort. Indulge in luxury, tranquility, and unforgettable moments.',
    technologies: ['React', 'MySQL', 'Node.js'],
    image_url: resortImg,
    project_url: '#',
    display_order: 3,
  },

  
];

export default function Projects() {
  const [projects] = useState<Project[]>(fallbackProjects);
  const titleRef = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div ref={titleRef} className="mb-12">
          <h2 className="text-4xl font-black text-slate-900">
            My <span className="text-blue-600">Projects</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <div className="relative h-[260px]">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg';
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* TEXT */}
        <div className="absolute bottom-14 left-4 right-4">
          <p className="text-white text-sm font-medium line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <a
            href={project.project_url}
            target="_blank"
            className="px-3 py-1.5 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

          <button className="px-3 py-1.5 text-xs font-bold bg-white/90 text-slate-800 rounded-lg">
            Details
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 bg-white">
        <h3 className="font-bold text-slate-900 text-sm mb-1">
          {project.title}
        </h3>

        <div className="text-xs text-slate-400">
          {project.technologies.join(' • ')}
        </div>
      </div>
    </div>
  );
}