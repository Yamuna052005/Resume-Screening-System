import { profile } from '@/data/profile';
import { Reveal } from './Reveal';
import { Briefcase, GraduationCap, Trophy, Code2 } from 'lucide-react';

export function About() {
  const icons = [Code2, GraduationCap, Trophy, Briefcase];
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Who I </span><span className="text-gradient">Am</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-3" animation="slide-left">
            <p className="text-lg text-navy-100 leading-relaxed mb-6">{profile.summary}</p>
            <p className="text-lg text-navy-200 leading-relaxed">
              I enjoy turning complex problems into clean, efficient solutions. My journey in technology
              has been driven by curiosity and a desire to build things that make a difference. I thrive
              in collaborative environments and am always eager to learn new tools and frameworks.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-2" animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((s, i) => {
                const Icon = icons[i];
                return (
                  <div key={s.label} className="glass rounded-2xl p-6 card-hover text-center">
                    <Icon size={28} className="text-gold-400 mx-auto mb-3" />
                    <div className="font-display text-4xl font-bold text-white mb-1">{s.value}+</div>
                    <div className="text-sm text-navy-200">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
