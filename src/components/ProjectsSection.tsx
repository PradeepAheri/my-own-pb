import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers, Code, Check } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const getTagColorStyle = (color: 'cyan' | 'blue' | 'violet') => {
    switch (color) {
      case 'cyan':
        return 'text-[#4cd7f6] border-[#06B6D4]/40 bg-[#06B6D4]/5';
      case 'violet':
        return 'text-[#d0bcff] border-[#8B5CF6]/40 bg-[#8B5CF6]/5';
      case 'blue':
      default:
        return 'text-[#adc6ff] border-[#3B82F6]/40 bg-[#3B82F6]/5';
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-[#1E2638] bg-[#101522]/30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
                03 // FEATURED ENGINEERING WORK
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Projects & Implementations
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
              From IoT hardware sensor stations to responsive full-stack applications and algorithmic frameworks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <a
              href="https://github.com/PradeepAheri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#101522] border border-[#1E2638] hover:border-[#3B82F6] text-[#F8FAFC] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>EXPLORE GITHUB REPOSITORIES →</span>
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-[8px] bg-[#101522]/85 p-6 sm:p-8 border border-[#1E2638] hover:border-transparent transition-all duration-300 hover:shadow-[0_0_28px_-4px_rgba(59,130,246,0.22)] cursor-pointer backdrop-blur-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Hairline gradient sweep on hover */}
              <div className="absolute inset-0 rounded-[8px] p-[1px] bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#1E2638] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

              {/* Subtle top radial highlight */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[80px] bg-gradient-to-b from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Tag and Status */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-[4px] border ${getTagColorStyle(
                      project.tagColor
                    )}`}
                  >
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded-[2px] border border-[#06B6D4]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                      <span>FEATURED PROJECT</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors mb-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#64748B] group-hover:text-[#60A5FA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-2" />
                </h3>

                <p className="font-mono text-xs text-[#06B6D4] mb-3">
                  {project.tagline}
                </p>

                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metrics ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 mb-6 border-y border-[#1E2638] bg-[#080B12]/50 rounded-[4px] px-3">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx}>
                      <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider block">
                        {h.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#F8FAFC] mt-0.5 block line-clamp-1">
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Code preview snippet */}
                <div className="rounded-[6px] bg-[#080B12] border border-[#1E2638] overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#1E2638] bg-[#101522]/90">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#1E2638]" />
                      <div className="w-2 h-2 rounded-full bg-[#1E2638]" />
                      <div className="w-2 h-2 rounded-full bg-[#1E2638]" />
                      <span className="ml-2 font-mono text-[11px] text-[#94A3B8]">
                        {project.codeSnippet.fileName}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#64748B] uppercase">
                      {project.codeSnippet.language}
                    </span>
                  </div>

                  <div className="p-3 font-mono text-[11px] leading-relaxed text-[#94A3B8] overflow-x-auto">
                    {project.codeSnippet.lines.slice(0, 5).map((line, lIdx) => (
                      <div key={lIdx} className="flex">
                        <span className="w-6 text-[#424754] select-none text-right pr-2">
                          {lIdx + 1}
                        </span>
                        <span className="text-[#C2C6D6] whitespace-pre">{line}</span>
                      </div>
                    ))}
                    <div className="text-[10px] text-[#64748B] pl-6 pt-1">
                      ... [CLICK TO INSPECT FULL ARCHITECTURE FLOW & CODE]
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips & Action */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-[4px] bg-[#1E2638]/50 border border-[#1E2638] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs text-[#3B82F6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>VIEW DETAILS</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
