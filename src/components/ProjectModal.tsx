import React, { useState } from 'react';
import { PortfolioProject } from '../types';
import { X, Copy, Check, ExternalLink, Cpu, Terminal, CheckCircle2, Github, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    const text = project.codeSnippet.lines.join('\n');
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B12]/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[8px] bg-[#101522] border border-[#1E2638] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E2638] bg-[#0b0e15]">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC]">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#64748B]">
                {project.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-[4px] bg-[#1E2638]/50 hover:bg-[#1E2638] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E2638] transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4 text-[#60A5FA]" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-[4px] bg-[#1E2638]/50 hover:bg-[#1E2638] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#1E2638] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center px-6 border-b border-[#1E2638] bg-[#101522] gap-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs font-mono font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#3B82F6] text-[#F8FAFC]'
                : 'border-transparent text-[#64748B] hover:text-[#94A3B8]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>01 // OVERVIEW & FEATURES</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs font-mono font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-[#3B82F6] text-[#F8FAFC]'
                : 'border-transparent text-[#64748B] hover:text-[#94A3B8]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // ARCHITECTURE PIPELINE</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 text-xs font-mono font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'code'
                ? 'border-[#3B82F6] text-[#F8FAFC]'
                : 'border-transparent text-[#64748B] hover:text-[#94A3B8]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // SOURCE CODE ({project.codeSnippet.language.toUpperCase()})</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 rounded-[6px] bg-[#080B12] border border-[#1E2638]">
                <h4 className="font-mono text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-2">
                  System Description & Purpose
                </h4>
                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="p-3 rounded-[6px] bg-[#161D2E] border border-[#1E2638]">
                    <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                      {h.label}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#F8FAFC] mt-0.5 block">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="p-5 rounded-[6px] bg-[#080B12] border border-[#1E2638]">
                <h4 className="font-mono text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-3">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <span className="font-mono text-xs text-[#64748B] uppercase block mb-2">
                  Technologies Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#161D2E] text-[#94A3B8] border border-[#1E2638]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE PIPELINE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-[6px] bg-[#080B12] border border-[#1E2638]">
                <h4 className="font-mono text-xs font-bold text-[#06B6D4] uppercase tracking-wider mb-1">
                  End-to-End System Execution Flow
                </h4>
                <p className="font-sans text-xs text-[#94A3B8]">
                  Step-by-step telemetry, data transformation, and actuation lifecycle.
                </p>
              </div>

              <div className="space-y-3">
                {project.architectureFlow.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-[6px] bg-[#101522] border border-[#1E2638] flex items-start gap-4 hover:border-[#3B82F6]/50 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-[4px] bg-[#1E2638] text-[#3B82F6] font-mono text-sm font-bold flex items-center justify-center flex-shrink-0 border border-[#3B82F6]/30">
                      {step.step}
                    </span>
                    <div>
                      <h5 className="font-mono text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-1">
                        {step.title}
                      </h5>
                      <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SOURCE CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-4 py-2 rounded-[6px] bg-[#0b0e15] border border-[#1E2638]">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-[#60A5FA] font-semibold">{project.codeSnippet.fileName}</span>
                  <span className="text-[#64748B]">|</span>
                  <span className="text-[#94A3B8]">{project.codeSnippet.language.toUpperCase()}</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#1E2638] hover:bg-[#272a32] text-xs font-mono text-[#F8FAFC] border border-[#424754] transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>COPY CODE</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-[6px] bg-[#080B12] border border-[#1E2638] p-4 font-mono text-xs leading-relaxed text-[#C2C6D6] overflow-x-auto">
                {project.codeSnippet.lines.map((line, idx) => (
                  <div key={idx} className="flex hover:bg-[#101522] px-2 py-0.5 rounded">
                    <span className="w-8 text-[#424754] select-none text-right pr-4 font-mono">
                      {idx + 1}
                    </span>
                    <span className="whitespace-pre font-mono text-[#E0E2ED]">
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#1E2638] bg-[#0b0e15] flex items-center justify-between font-mono text-[11px] text-[#64748B]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#3B82F6] hover:underline"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View repository on GitHub →</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-[4px] bg-[#1E2638] hover:bg-[#272a32] text-[#F8FAFC] transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
