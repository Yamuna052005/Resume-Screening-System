import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(60,91,166,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30,58,138,0.3) 0%, transparent 50%)'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(93,118,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(93,118,180,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-navy-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <Reveal animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-sm text-navy-100">Available for opportunities</span>
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={100}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-gradient">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal animation="fade-up" delay={200}>
          <p className="text-xl md:text-2xl text-navy-100 font-light mb-4">{profile.title}</p>
        </Reveal>

        <Reveal animation="fade-up" delay={300}>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">{profile.tagline}</p>
        </Reveal>

        <Reveal animation="fade-up" delay={400}>
          <div className="flex items-center justify-center gap-2 text-navy-200 text-sm mb-10">
            <MapPin size={16} /> <span>{profile.location}</span>
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={500}>
          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="px-8 py-3.5 bg-navy-600 hover:bg-navy-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-navy-500/30">
              Get in Touch
            </a>
            <a href="#projects" className="px-8 py-3.5 glass hover:bg-navy-700/40 text-white rounded-full font-medium transition-all duration-300 hover:scale-105">
              View Projects
            </a>
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={600}>
          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, href: profile.github },
              { icon: Linkedin, href: profile.linkedin },
              { icon: Mail, href: `mailto:${profile.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-navy-100 hover:text-white hover:bg-navy-600/40 transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy-200 animate-bounce">
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
