import { profile } from '@/data/profile';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-navy-700/30 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <a href="#home" className="font-display text-2xl font-bold">
          <span className="text-white">Yamuna</span>
          <span className="text-gradient-gold">.</span>
        </a>

        <div className="flex items-center gap-4">
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
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-navy-100 hover:text-white hover:bg-navy-600/40 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <a href="#home" className="flex items-center gap-2 text-sm text-navy-200 hover:text-white transition-colors">
          Back to top <ArrowUp size={16} />
        </a>

        <p className="text-sm text-navy-300">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
