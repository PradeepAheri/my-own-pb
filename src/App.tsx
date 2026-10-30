import React, { useState, useEffect } from 'react';
import { PortfolioProject } from './types';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { DeveloperActivitySection } from './components/DeveloperActivitySection';
import { TerminalConsole } from './components/TerminalConsole';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Active section observer on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'activity', 'terminal', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        handleNavigate('terminal');
      }
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] flex flex-col telemetry-grid selection:bg-[#3B82F6]/30 selection:text-[#F8FAFC]">
      {/* Sticky Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 00. Hero Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* 01. About Me */}
        <AboutSection />

        {/* 02. Technical Skills */}
        <SkillsSection />

        {/* 03. Projects (Harmful Gas Detection IoT & Subscription Web App) */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 04. Education (Reva University B.Tech AI & ML) */}
        <EducationSection />

        {/* 05. Developer Activity (GitHub & LeetCode) */}
        <DeveloperActivitySection />

        {/* 06. Interactive Terminal */}
        <TerminalConsole onOpenContact={() => handleNavigate('contact')} />

        {/* 07. Contact Section */}
        <ContactSection />
      </main>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
