import { education } from '@/data/content';
import { Reveal } from './Reveal';
import { GraduationCap, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Education</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Academic </span><span className="text-gradient">Background</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-navy-500 via-navy-600 to-transparent" />

          {education.map((edu, i) => (
            <Reveal key={edu.institution} animation={i % 2 === 0 ? 'slide-left' : 'slide-right'} delay={i * 100}>
              <div className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full glass flex items-center justify-center border-2 border-navy-500">
                  <GraduationCap size={22} className="text-gold-400" />
                </div>
                <div className="glass rounded-2xl p-7 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">{edu.institution}</h3>
                    <span className="text-sm text-gold-400 font-medium px-3 py-1 rounded-full bg-navy-800/50">{edu.period}</span>
                  </div>
                  <p className="text-navy-100 mb-3">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-gold-400 font-medium">{edu.grade}</span>
                    <span className="flex items-center gap-1 text-navy-200"><MapPin size={14} />{edu.location}</span>
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
