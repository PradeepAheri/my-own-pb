import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Download, Github, Code2, Terminal, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenContact }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const roles = PERSONAL_INFO.subRoles;

  // Animated typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const handleCopyCommand = () => {
    const cmd = `curl -s https://pradeep.aheri/bio.json`;
    navigator.clipboard?.writeText(cmd);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2200);
  };

  const handleDownloadResume = () => {
    const resumeText = `================================================================================
PRADEEP AHERI
Aspiring Software Development Engineer | AI/ML Enthusiast | Problem Solver
Bengaluru, India • pradeepaheri663@gmail.com
GitHub: https://github.com/PradeepAheri
LeetCode: https://leetcode.com/u/PradeepAheri/
================================================================================

CAREER OBJECTIVE:
To become a skilled Software Engineer and solve real-world problems through
technology, innovative software development, intelligent algorithms, and
disciplined engineering.

EDUCATION:
Bachelor of Technology (B.Tech) in Artificial Intelligence and Machine Learning
Reva University, Bengaluru, Karnataka, India
Status: In Progress / Undergraduate

CORE COURSEWORK:
- Data Structures & Algorithms (C & Python)
- Object-Oriented Programming (OOP)
- Machine Learning Foundations
- Database Management Systems (DBMS)
- Operating Systems & Computer Organization
- Web Development & Software Engineering

TECHNICAL SKILLS:
- Programming Languages: C, Python, JavaScript (ES6+), HTML5, CSS3
- Tools & Platforms: Git, GitHub, VS Code, Linux Shell, Arduino IDE
- Domains: Data Structures & Algorithms, Artificial Intelligence, IoT Systems

PROJECTS:
1. Harmful Gas Detection System (IoT)
   - Real-time environmental hazard and toxic gas monitoring device engineered with
     MQ-2/MQ-135 sensors, microcontrollers, and IoT telemetry.
   - Continuously measures gas concentrations (CO, LPG, Smoke, Methane) with sub-second latency.
   - Automated multi-stage threshold logic: local high-decibel piezo buzzer alarm,
     relay-activated exhaust ventilation, and remote cloud alert transmission.
   - Technologies: C/Embedded C, Arduino/ESP8266, IoT Sensors, Python, MQTT, Git.

2. Subscription Management Web Application
   - Full-stack web application designed to help users track recurring memberships,
     subscription renewals, and monthly/annual expenditure burn rates.
   - Implements automated renewal notification warnings 3-7 days prior to card deductions.
   - Category spending breakdown and interactive budget threshold analytics.
   - Technologies: JavaScript, HTML5, CSS3 / Modern CSS, Python, Git & GitHub.

3. Algorithmic Problem Solving & Data Structures (LeetCode Lab)
   - Systematic implementation and analysis of foundational and advanced algorithms in C and Python.
   - Active practice on LeetCode across Arrays, Two Pointers, Linked Lists, Trees, and DP.
   - Repository: https://github.com/PradeepAheri

PROFILES & REPOSITORIES:
- GitHub: https://github.com/PradeepAheri
- LeetCode: https://leetcode.com/u/PradeepAheri/
================================================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pradeep_Aheri_Resume_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Precision ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] ambient-flare-right pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] ambient-cyan-spot pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status pill header */}
        <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-[4px] bg-[#101522]/90 border border-[#1E2638] mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8]">
            OPEN TO SDE INTERNSHIPS & OPPORTUNITIES
          </span>
          <span className="text-[#1E2638]">/</span>
          <span className="font-mono text-[11px] text-[#06B6D4]">
            REVA UNIVERSITY
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#3B82F6]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3B82F6]">
                Hello, World! I am
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[72px] font-bold text-[#F8FAFC] tracking-[-0.04em] leading-[1.08] mb-4">
              Pradeep Aheri.
            </h1>

            {/* Dynamic Typewriter text banner */}
            <div className="h-12 flex items-center mb-6">
              <span className="font-mono text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="w-2.5 h-6 bg-[#3B82F6] ml-1.5 animate-pulse inline-block" />
            </div>

            <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-[1.7] max-w-2xl mb-8">
              B.Tech student in <span className="text-[#F8FAFC] font-medium">Artificial Intelligence and Machine Learning</span> at <span className="text-[#06B6D4] font-medium">Reva University</span>. 
              {PERSONAL_INFO.careerGoal}
            </p>

            {/* Direct CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#60A5FA] text-[#080B12] text-sm font-semibold font-sans rounded-[4px] transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(96,165,250,0.6)] cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('skills')}
                className="flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#101522]/85 hover:bg-[#161D2E] border border-[#1E2638] hover:border-[#3B82F6] text-[#F8FAFC] text-sm font-medium transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                <span>TECHNICAL SKILLS</span>
              </button>

              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 py-3 rounded-[4px] bg-[#101522]/60 hover:bg-[#101522] border border-[#1E2638] hover:border-[#8B5CF6] text-[#94A3B8] hover:text-[#F8FAFC] text-sm font-mono transition-all duration-200 cursor-pointer"
                title="Download formatted resume"
              >
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-xs uppercase">RESUME (TXT)</span>
              </button>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-[4px] bg-[#101522]/60 hover:bg-[#101522] border border-[#1E2638] hover:border-[#F59E0B] text-[#94A3B8] hover:text-[#F8FAFC] text-sm font-mono transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs uppercase">LEETCODE</span>
              </a>
            </div>

            {/* Quick Terminal command snippet */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div
                onClick={handleCopyCommand}
                className="group cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#080B12] border border-dashed border-[#1E2638] hover:border-[#3B82F6] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                <code className="font-mono text-xs text-[#94A3B8] group-hover:text-[#F8FAFC]">
                  $ curl -s https://pradeep.aheri/bio.json
                </code>
                <span className="text-[10px] font-mono text-[#64748B] px-1.5 py-0.5 rounded bg-[#101522] border border-[#1E2638]">
                  {copySuccess ? 'COPIED!' : 'COPY'}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Summary & Academic Highlights Capsule */}
          <div className="lg:col-span-4">
            <div className="relative rounded-[8px] bg-[#101522]/85 border border-[#1E2638] p-5 backdrop-blur-xl shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2638] mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                  <span className="ml-2 font-mono text-[11px] text-[#94A3B8] tracking-wider">
                    developer_profile.json
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-[2px] bg-[#06B6D4]/10 text-[#06B6D4] text-[10px] font-mono font-bold tracking-widest border border-[#06B6D4]/30">
                  VERIFIED
                </span>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 rounded-[4px] bg-[#080B12] border border-[#1E2638]">
                  <span className="text-[10px] text-[#64748B] block uppercase tracking-wider">
                    UNIVERSITY EDUCATION
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <GraduationCap className="w-4 h-4 text-[#60A5FA]" />
                    <span className="text-sm font-semibold text-[#F8FAFC]">
                      {PERSONAL_INFO.university}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#06B6D4] block mt-0.5">
                    B.Tech in Artificial Intelligence & ML
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-[4px] bg-[#080B12] border border-[#1E2638]">
                    <span className="text-[10px] text-[#64748B] block tracking-wider">PRIMARY LANGUAGES</span>
                    <span className="text-xs font-semibold text-[#F8FAFC] mt-0.5 block">
                      C, Python, JavaScript
                    </span>
                  </div>
                  <div className="p-2.5 rounded-[4px] bg-[#080B12] border border-[#1E2638]">
                    <span className="text-[10px] text-[#64748B] block tracking-wider">WEB TECH</span>
                    <span className="text-xs font-semibold text-[#06B6D4] mt-0.5 block">
                      HTML5, CSS3, Tailwind
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-[4px] bg-[#080B12] border border-[#1E2638]">
                  <span className="text-[10px] text-[#64748B] block uppercase tracking-wider mb-1.5">
                    CORE DOMAINS & FOCUS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E2638] text-[#94A3B8]">
                      Data Structures & Algorithms
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E2638] text-[#94A3B8]">
                      AI / Machine Learning
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E2638] text-[#94A3B8]">
                      IoT & Sensors
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E2638] text-[#94A3B8]">
                      Git & GitHub
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#64748B]">DEVELOPER STATUS</span>
                  <span className="text-[#10B981] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Problem Solver</span>
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Terminal Launcher */}
              <button
                onClick={() => onNavigate('terminal')}
                className="mt-4 w-full py-2 bg-[#161D2E] hover:bg-[#1E2638] border border-[#1E2638] hover:border-[#3B82F6] text-[#F8FAFC] text-xs font-mono rounded-[4px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>LAUNCH INTERACTIVE TERMINAL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
