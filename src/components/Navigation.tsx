import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Github, Code2, Menu, X, Send, GraduationCap, FolderGit2, Wrench, User } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'skills', label: 'Skills', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { id: 'activity', label: 'Activity', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'terminal', label: 'Terminal', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#080B12]/90 border-[#1E2638] backdrop-blur-xl shadow-lg shadow-black/40'
          : 'bg-[#080B12]/80 border-[#1E2638]/70 backdrop-blur-md'
      }`}
    >
      {/* Top micro telemetry bar */}
      <div className="hidden sm:flex items-center justify-between px-6 py-1 border-b border-[#1E2638]/60 bg-[#0b0e15]/95 text-[11px] font-mono text-[#64748B]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            <span className="text-[#94A3B8] font-semibold tracking-wider">
              PRADEEP AHERI • PORTFOLIO
            </span>
          </div>
          <span className="text-[#1E2638]">|</span>
          <span className="text-[#94A3B8]">{PERSONAL_INFO.university}</span>
          <span className="text-[#1E2638]">|</span>
          <span className="text-[#3B82F6]">AI & ML ENGINEERING</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            <Github className="w-3 h-3 text-[#60A5FA]" />
            <span>GitHub</span>
          </a>
          <span className="text-[#1E2638]">|</span>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            <Code2 className="w-3 h-3 text-[#F59E0B]" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-[4px] bg-[#101522] border border-[#1E2638] group-hover:border-[#3B82F6] flex items-center justify-center transition-all duration-300 shadow-inner">
            <span className="font-mono text-sm font-bold text-[#60A5FA]">PA</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                Pradeep Aheri
              </span>
              <span className="px-1.5 py-0.5 rounded-[2px] bg-[#1E2638] text-[10px] font-mono text-[#06B6D4] border border-[#1E2638]">
                B.TECH AI/ML
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-wider text-[#64748B] hidden sm:block">
              REVA UNIVERSITY
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#101522]/80 p-1 rounded-[4px] border border-[#1E2638]">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider rounded-[4px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1E2638] text-[#F8FAFC] border border-[#3B82F6]/70 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#161D2E]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA / External link actions */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E2638] hover:border-[#3B82F6] rounded-[4px] bg-[#101522]/60 transition-all"
            title="Pradeep's GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E2638] hover:border-[#F59E0B] rounded-[4px] bg-[#101522]/60 transition-all"
            title="Pradeep's LeetCode Profile"
          >
            <Code2 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>LeetCode</span>
          </a>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-[#080B12] text-xs font-semibold font-sans rounded-[4px] transition-all duration-200 shadow-[0_0_16px_rgba(59,130,246,0.35)] hover:shadow-[0_0_24px_rgba(96,165,250,0.6)] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="tracking-wide">GET IN TOUCH</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[4px] bg-[#101522] border border-[#1E2638] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-b border-[#1E2638] bg-[#080B12]/98 backdrop-blur-2xl space-y-2">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2.5 text-xs font-mono rounded-[4px] border text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1E2638] text-[#F8FAFC] border-[#3B82F6]'
                    : 'bg-[#101522] text-[#94A3B8] border-[#1E2638]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1E2638] flex items-center justify-between text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#3B82F6]"
            >
              <Github className="w-4 h-4" />
              <span>@PradeepAheri</span>
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F59E0B]"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
