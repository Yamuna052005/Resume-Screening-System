import { certifications } from '@/data/content';
import { Reveal } from './Reveal';
import { Award, BadgeCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-3">Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            <span className="text-white">Achievements & </span><span className="text-gradient">Credentials</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} animation="fade-up" delay={i * 80}>
              <div className="glass rounded-2xl p-6 card-hover h-full flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-navy-600/40 flex items-center justify-center shrink-0">
                    <Award size={22} className="text-gold-400" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-white leading-snug">{c.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-navy-200">
                  <BadgeCheck size={15} className="text-navy-300" /> {c.issuer}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
