import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { Wrench, Code2, Globe, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'ALL SKILLS' },
    { id: 'Languages', label: 'LANGUAGES' },
    { id: 'Web Technologies', label: 'WEB TECHNOLOGIES' },
    { id: 'Tools & Platforms', label: 'TOOLS & PLATFORMS' },
    { id: 'Core Concepts', label: 'CORE CONCEPTS' },
  ];

  const filteredSkills =
    activeCategory === 'ALL'
      ? TECHNICAL_SKILLS
      : TECHNICAL_SKILLS.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-[#3B82F6]" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-[#06B6D4]" />;
      case 'Tools & Platforms':
        return <Terminal className="w-4 h-4 text-[#8B5CF6]" />;
      case 'Core Concepts':
        return <Sparkles className="w-4 h-4 text-[#10B981]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#60A5FA]" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-[#1E2638] bg-[#080B12] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
                02 // TECHNICAL PROFICIENCIES
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Skills & Technologies
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
              Core programming languages, web development frameworks, developer tools, and computer science foundations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-[4px] border transition-all duration-200 cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#1E2638] text-[#F8FAFC] border-[#3B82F6]'
                    : 'bg-[#101522]/60 text-[#94A3B8] border-[#1E2638] hover:border-[#3B82F6]/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] hover:border-[#3B82F6]/60 transition-all duration-300 backdrop-blur-md relative overflow-hidden"
            >
              {/* Top ambient highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-[4px] bg-[#080B12] border border-[#1E2638]">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <span className="font-mono text-[10px] text-[#64748B] px-2 py-0.5 rounded bg-[#080B12] border border-[#1E2638]">
                  {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1 mb-3">
                <div className="flex justify-between font-mono text-[10px] text-[#64748B]">
                  <span>PROFICIENCY</span>
                  <span className="text-[#06B6D4] font-semibold">{skill.proficiencyPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#080B12] rounded-full overflow-hidden border border-[#1E2638]">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] transition-all duration-700"
                    style={{ width: `${skill.proficiencyPercent}%` }}
                  />
                </div>
              </div>

              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Core Stack Feature Banner */}
        <div className="mt-12 p-6 rounded-[8px] bg-[#161D2E]/60 border border-[#1E2638] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[6px] bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC]">
                Primary Engineering Stack
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mt-0.5">
                C, Python, JavaScript, HTML5, CSS3, Git, and GitHub—applied to embedded IoT systems, web software, and algorithms.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#60A5FA] border border-[#1E2638]">C</span>
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#06B6D4] border border-[#1E2638]">Python</span>
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#F59E0B] border border-[#1E2638]">JavaScript</span>
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#E44D26] border border-[#1E2638]">HTML5</span>
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#264DE4] border border-[#1E2638]">CSS3</span>
            <span className="px-3 py-1 rounded-[4px] bg-[#080B12] text-[#F05032] border border-[#1E2638]">Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
