import { skillCategories } from '@/data/skills';
import { Reveal } from './Reveal';
import { Code2, Globe, Layers, Brain, Sparkles, Library, Users } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Layers, Brain, Sparkles, Library, Users,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Technical </span><span className="text-gradient">Expertise</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.title} animation="fade-up" delay={i * 80}>
                <div className="glass rounded-2xl p-7 card-hover h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-600/40 flex items-center justify-center">
                      <Icon size={24} className="text-gold-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full text-sm bg-navy-800/50 text-navy-100 border border-navy-600/30 hover:bg-navy-600/40 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
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
