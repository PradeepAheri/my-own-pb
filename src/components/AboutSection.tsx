import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, Target, GraduationCap, Code, Cpu, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#1E2638] bg-[#101522]/30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
              01 // BIOGRAPHY & ASPIRATION
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            About Me
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
            Blending computer science principles, artificial intelligence, and hands-on systems development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] backdrop-blur-md">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#3B82F6]" />
                <span>Engineering With Purpose</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-4">
                I am <strong className="text-[#F8FAFC]">Pradeep Aheri</strong>, an aspiring Software Development Engineer currently pursuing my Bachelor of Technology in <strong className="text-[#06B6D4]">Artificial Intelligence and Machine Learning</strong> at <strong className="text-[#F8FAFC]">Reva University</strong>.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-4">
                My passion lies at the intersection of core computer science fundamentals and modern technology. Whether I am writing memory-efficient routines in <span className="text-[#60A5FA] font-mono">C</span>, implementing machine learning models and problem-solving scripts in <span className="text-[#60A5FA] font-mono">Python</span>, or crafting responsive, user-centered web applications in <span className="text-[#60A5FA] font-mono">JavaScript, HTML, and CSS</span>, I approach engineering with rigor, curiosity, and craftsmanship.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                I believe the most meaningful engineering projects solve tangible problems. That mindset drove me to design and build an <strong className="text-[#F8FAFC]">IoT Harmful Gas Detection System</strong> to protect human lives from toxic gas exposure, and engineer a <strong className="text-[#F8FAFC]">Subscription Management Web Application</strong> that brings clarity and control to recurring personal finance.
              </p>
            </div>

            {/* Career Goal Box */}
            <div className="p-6 rounded-[8px] bg-[#161D2E]/90 border border-[#3B82F6]/40 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#3B82F6]/20 border border-[#3B82F6]/50 flex items-center justify-center flex-shrink-0 text-[#3B82F6]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#60A5FA] font-semibold block mb-1">
                    PRIMARY CAREER GOAL
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#F8FAFC] leading-relaxed font-medium">
                    "{PERSONAL_INFO.careerGoal}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Trajectory Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
                    Reva University
                  </h4>
                  <span className="text-xs font-mono text-[#06B6D4]">B.Tech in AI & ML</span>
                </div>
              </div>
              <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                Gaining deep theoretical foundations in data structures, design & analysis of algorithms, database systems, and modern artificial intelligence pipelines.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
                    Algorithmic Problem Solving
                  </h4>
                  <span className="text-xs font-mono text-[#60A5FA]">LeetCode & GitHub</span>
                </div>
              </div>
              <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                Active problem solver sharpening algorithmic acuity across arrays, pointers, linked lists, trees, and dynamic programming patterns.
              </p>
            </div>

            <div className="p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#F8FAFC]">
                    Hardware & IoT Experience
                  </h4>
                  <span className="text-xs font-mono text-[#8B5CF6]">Sensors & Microcontrollers</span>
                </div>
              </div>
              <p className="text-xs font-sans text-[#94A3B8] leading-relaxed">
                Hands-on integration with MQ gas sensors, analog-to-digital telemetry calibration, hardware interrupts, and automated relay triggers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
