import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';
import { useScrollAnimation } from './useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.4em]">Reach Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight">
              Let's Build<br />
              <span className="text-blue-600">Together</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Ready to start your project? We'd love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Form */}
          <div ref={formRef} className="md:col-span-3 bg-white p-10 shadow-sm border border-slate-100 rounded-sm">
            <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Your Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all rounded-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg shadow-blue-200"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {submitStatus === 'success' && (
                <p className="text-blue-600 text-xs font-bold flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-xs font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Info */}
          <div ref={infoRef} className="md:col-span-2 bg-blue-600 p-10 flex flex-col justify-between rounded-sm">
            <div>
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Contact Info</h3>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@codecraft.com' },
                  { icon: Phone, label: 'Phone', value: '+63 912 345 6789' },
                  { icon: MapPin, label: 'Location', value: 'Philippines' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 group cursor-default">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                      <Icon className="w-4 h-4 text-white group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{label}</p>
                      <p className="text-white text-sm font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-200 text-xs uppercase tracking-[0.2em] font-bold mb-2">Response Time</p>
              <p className="text-white font-black text-3xl">Within 24hrs</p>
              <p className="text-blue-200 text-xs mt-1">We respond to all inquiries promptly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
