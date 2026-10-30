import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Code2, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E2638] bg-[#0b0e15] pt-12 pb-8 text-xs font-mono text-[#64748B]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#1E2638]">
          {/* Identity col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC]">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded-[2px] bg-[#1E2638] text-[10px] text-[#06B6D4]">
                {PERSONAL_INFO.university}
              </span>
            </div>
            <p className="font-sans text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.educationBrief}
            </p>
            <p className="font-sans text-xs text-[#64748B] italic max-w-sm">
              "{PERSONAL_INFO.careerGoal}"
            </p>
          </div>

          {/* Navigation sections */}
          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-[#F8FAFC] block mb-2">
              Sections
            </span>
            <ul className="space-y-1.5 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#60A5FA] cursor-pointer">
                  01. About Me
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-[#60A5FA] cursor-pointer">
                  02. Technical Skills
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#60A5FA] cursor-pointer">
                  03. Projects (IoT & Web)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education')} className="hover:text-[#60A5FA] cursor-pointer">
                  04. Education (Reva University)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activity')} className="hover:text-[#60A5FA] cursor-pointer">
                  05. Developer Activity
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terminal')} className="hover:text-[#60A5FA] cursor-pointer">
                  06. Interactive Terminal
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-2">
            <span className="font-bold uppercase tracking-wider text-[#F8FAFC] block mb-2">
              Profiles & Coordinates
            </span>
            <div className="space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>github.com/PradeepAheri</span>
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F59E0B] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>leetcode.com/u/PradeepAheri/</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</span>
            <span className="text-[#1E2638] hidden sm:inline">|</span>
            <span className="text-[#64748B] hidden sm:inline">REVA UNIVERSITY • BENGALURU</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#101522] hover:bg-[#1E2638] border border-[#1E2638] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
