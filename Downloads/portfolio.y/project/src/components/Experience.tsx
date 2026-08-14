import { experience } from '@/data/content';
import { Reveal } from './Reveal';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Internship </span><span className="text-gradient">Journey</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute right-6 top-2 bottom-2 w-px bg-gradient-to-b from-navy-500 via-navy-600 to-transparent" />

          {experience.map((exp, i) => (
            <Reveal key={exp.role} animation={i % 2 === 0 ? 'slide-right' : 'slide-left'} delay={i * 100}>
              <div className="relative pr-20 pb-12 last:pb-0">
                <div className="absolute right-0 top-0 w-12 h-12 rounded-full glass flex items-center justify-center border-2 border-navy-500">
                  <Briefcase size={22} className="text-gold-400" />
                </div>
                <div className="glass rounded-2xl p-7 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-navy-100 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-navy-200 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs bg-navy-800/50 text-navy-100 border border-navy-600/30">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
