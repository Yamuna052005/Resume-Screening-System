import { projects } from '@/data/content';
import { Reveal } from './Reveal';
import { GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { GraduationCap };

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Featured </span><span className="text-gradient">Work</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? GraduationCap;
            return (
              <Reveal key={p.title} animation="fade-up" delay={i * 120}>
                <div className="group glass rounded-2xl p-8 card-hover h-full relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-navy-500/20 rounded-full blur-2xl group-hover:bg-navy-500/30 transition-colors duration-500" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-navy-600/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-gold-400" />
                      </div>
                      <ArrowUpRight size={24} className="text-navy-300 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-white mb-3">{p.title}</h3>
                    <p className="text-navy-200 leading-relaxed mb-5">{p.description}</p>

                    <ul className="space-y-2 mb-5">
                      {p.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-sm text-navy-100 leading-relaxed">
                          <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs bg-navy-800/50 text-navy-100 border border-navy-600/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
