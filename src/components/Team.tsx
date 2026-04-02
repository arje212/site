import { useState } from 'react';
import { X, Linkedin, Github, ExternalLink, Award, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from './useScrollAnimation';

import ryanImg from '../assets/ryan.png';
import frankImg from '../assets/frank.png';

// Use melecio.jpg (graduation photo = 356316... file)
import melecioImg from '../assets/melecio.jpg';
import claireImg from '../assets/claire.jpg';
import ivanImg from '../assets/ivan.jpg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  skills: string[];
  linkedin_url: string;
  github_url: string;
  portfolio_url?: string;
  location: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Rolando M. Melecio Jr.',
    role: 'Lead Developer',
    bio: 'Full-stack engineer and robotics specialist based in Tanauan City, Batangas. Leads the technical direction of CodeCraft with expertise across web development, embedded systems, and automation.',
    image_url: melecioImg,
    skills: ['Python', 'JavaScript', 'C++', 'C Programming', 'React.js', 'Node.js', 'Django', 'Robotics'],
    linkedin_url: '#',
    github_url: 'https://github.com/arje212',
    portfolio_url: 'https://engrmelecio.netlify.app/',
    location: 'Tanauan City, Batangas',
    specialties: ['Full-Stack Development', 'Robotics & Automation', 'System Architecture'],
  },
  {
    id: '2',
    name: 'John Franklin P. Nieras',
    role: 'Developer / Data Analyst',
    bio: 'Versatile developer and data analyst who bridges the gap between software engineering and business intelligence. Expert in building automation tools and powerful data dashboards.',
    image_url: frankImg,
    skills: ['C#', 'Python', 'JavaScript', 'SQL', 'Blazor', 'WPF', 'Power BI', 'Google Apps Script'],
    linkedin_url: '#',
    github_url: '#',
    location: 'Tanauan City, Batangas',
    specialties: ['Data Analytics', 'Business Intelligence', 'Automation Tools'],
  },
  {
    id: '3',
    name: 'Ryan Joshua Navarro',
    role: 'Marketing Specialist',
    bio: 'A results-driven professional with strong expertise in client service, sales, and customer support. Skilled in managing client relationships, handling accounts, and delivering effective solutions to meet business goals. Brings experience in inside sales, account management, and customer engagement, ensuring smooth communication and high client satisfaction across all projects.',
    image_url: ryanImg,
    skills: ['Client Service Coordinator', 'Customer Support Agent', 'Account Executive', 'Inside Sales Representative',],
    linkedin_url: '#',
    github_url: '#',
    location: 'Malvar, Batangas',
    specialties: ['Client Relations', 'Operational Support'],
  },
  {
    id: '4',
    name: 'Claire Mueco',
    role: 'Marketing Specialist',
    bio: 'Drives CodeCraft\'s brand presence and client engagement through creative digital marketing strategies. Skilled in content creation, social media management, and customer relationship building.',
    image_url: claireImg,
    skills: ['Social Media Marketing', 'Content Strategy', 'Customer Engagement', 'Excel'],
    linkedin_url: '#',
    github_url: '#',
    location: 'Tanauan City, Batangas',
    specialties: ['Digital Marketing', 'Brand Strategy', 'Customer Relations'],
  },
  {
    id: '5',
    name: 'Ivan Jethro Mercado',
    role: 'Data & Research Specialist',
    bio: 'A detail-oriented research professional with strong expertise in thesis writing, data analysis, and statistical interpretation. Experienced in guiding students and clients through the research process—from conceptualization to final output—while ensuring accuracy, clarity, and data-driven insights in every project.',
    image_url: ivanImg,
    skills: ['Thesis/Research Writing', 'Thesis Consultant', 'Data Interpretation', 'Statistics'],
    linkedin_url: '#',
    github_url: '#',
    location: 'Tanauan City, Batangas',
    specialties: ['Research Writing',
  'Data Interpretation',
  'Statistical Analysis',
  'Thesis Consultation',
  'Academic Research Support'],
  },
];

const roleColors: Record<string, string> = {
  'Lead Developer': 'bg-blue-100 text-blue-700',
  'Developer / Data Analyst': 'bg-indigo-100 text-indigo-700',
  'Safety Officer': 'bg-emerald-100 text-emerald-700',
  'Marketing Specialist': 'bg-violet-100 text-violet-700',
};

export default function Team() {
  const titleRef = useScrollAnimation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-indigo-50 rounded-full blur-2xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">The People</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Meet the <span className="text-blue-600">Team</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Click on any team member to learn more about their expertise and background.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              delay={index * 100}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </section>
  );
}

function TeamCard({ member, delay, onClick }: { member: TeamMember; delay: number; onClick: () => void }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
      className="group bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60 transition-all duration-500 cursor-pointer overflow-hidden rounded-xl"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={member.image_url}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="p-5">
        <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-2 ${roleColors[member.role] || 'bg-blue-100 text-blue-700'}`}>
          {member.role}
        </span>
        <h3 className="text-slate-900 font-black text-sm leading-tight mb-3">{member.name}</h3>

        {/* Top 3 skills preview */}
        <div className="flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full font-bold">
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <span className="text-[11px] font-black uppercase tracking-[0.18em]">View Profile</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(20px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Top hero area */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl bg-slate-100">
          <img
            src={member.image_url}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="w-4 h-4 text-slate-700" />
          </button>

          {/* Name over photo */}
          <div className="absolute bottom-5 left-6 right-6">
            <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-2 ${roleColors[member.role] || 'bg-blue-100 text-blue-700'}`}>
              {member.role}
            </span>
            <h2 className="text-white font-black text-2xl leading-tight">{member.name}</h2>
            <p className="text-white/60 text-xs mt-1">{member.location}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Bio */}
          <div>
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">About</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
                  <Award className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <span className="text-blue-700 text-xs font-semibold">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Skills & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100">
            {member.linkedin_url && member.linkedin_url !== '#' && (
              <a
                href={member.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#0077b5] text-white text-xs font-bold rounded-lg hover:bg-[#006399] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            )}
            {member.github_url && member.github_url !== '#' && (
              <a
                href={member.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {member.portfolio_url && (
              <a
                href={member.portfolio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View E-Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
