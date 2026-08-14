import { profile } from '@/data/profile';
import { Reveal } from './Reveal';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'yamuna-palepogu', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'yamuna-77', href: profile.github },
  ];

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Let's </span><span className="text-gradient">Connect</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal animation="slide-left">
            <div className="space-y-4">
              <p className="text-navy-100 text-lg leading-relaxed mb-6">
                I'm always open to discussing new opportunities, collaborations, or just a friendly chat about
                technology. Feel free to reach out through any of the channels below.
              </p>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 glass rounded-2xl p-4 card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-600/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-navy-300 uppercase tracking-wider">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal animation="slide-right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm text-navy-200 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-navy-600/30 text-white placeholder-navy-300 focus:outline-none focus:border-navy-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-navy-200 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-navy-600/30 text-white placeholder-navy-300 focus:outline-none focus:border-navy-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-navy-200 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-navy-600/30 text-white placeholder-navy-300 focus:outline-none focus:border-navy-400 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-600 hover:bg-navy-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-navy-500/30"
              >
                {sent ? 'Message sent!' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
