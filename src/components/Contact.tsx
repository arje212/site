import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';
import { useScrollAnimation } from './useScrollAnimation';

const services = [
  'Full-Stack Web Development',
  'Robotics & Automation',
  'Mobile App Development',
  'PC Formatting & Setup',
  'Software Installation',
  'Data Analysis & Reporting',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission & { service?: string; firstName?: string; lastName?: string }>({
    name: '',
    email: '',
    message: '',
    service: '',
    firstName: '',
    lastName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    try {
      const { error } = await supabase.from('contact_submissions').insert([{
        name: fullName,
        email: formData.email,
        message: `[Service: ${formData.service || 'N/A'}]\n\n${formData.message}`,
      }]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', service: '', firstName: '', lastName: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">Reach Out</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Contact <span className="text-blue-600">Us</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Have a project in mind or need IT support? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {/* Form */}
          <div ref={formRef} className="md:col-span-3 bg-white p-8 md:p-10 shadow-sm border border-slate-100 rounded-2xl">
            <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* First + Last name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Juan"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="dela Cruz"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-xl"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@email.com"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-xl"
                />
              </div>

              {/* Service dropdown */}
              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-xl appearance-none"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project or what you need help with..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-xl resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg shadow-blue-200 rounded-xl w-full justify-center md:w-auto"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                  <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                  <p className="text-blue-700 text-xs font-bold">Message sent! We'll get back to you within 24 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <p className="text-red-600 text-xs font-bold">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}
            </form>
          </div>

          {/* Info panel */}
          <div ref={infoRef} className="md:col-span-2 flex flex-col gap-5">

            {/* Blue contact card */}
            <div className="bg-blue-600 p-8 rounded-2xl flex-1">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Contact Info</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@codecraft.ph' },
                  { icon: Phone, label: 'Phone / Viber', value: '+63 912 345 6789' },
                  { icon: MapPin, label: 'Location', value: 'Tanauan City, Batangas, PH' },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Sat, 9 AM – 6 PM' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 group cursor-default">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                      <Icon className="w-4 h-4 text-white group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] uppercase tracking-[0.3em] font-bold mb-0.5">{label}</p>
                      <p className="text-white text-sm font-semibold leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Currently Active</span>
              </div>
              <p className="text-slate-900 font-black text-2xl mb-1">Within 24hrs</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                We respond to all inquiries promptly. For urgent concerns, message us via Viber.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
