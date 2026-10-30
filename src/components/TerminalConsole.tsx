import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_SKILLS, EDUCATION_DATA } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Trash2 } from 'lucide-react';

interface TerminalConsoleProps {
  onOpenContact: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({ onOpenContact }) => {
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome',
      command: 'init-shell',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#3B82F6] font-bold">
            PRADEEP AHERI — INTERACTIVE DEVELOPER SHELL v2.4.0
          </p>
          <p className="text-[#94A3B8]">
            B.Tech in Artificial Intelligence & Machine Learning • Reva University
          </p>
          <p className="text-[#64748B]">
            Type <span className="text-[#06B6D4] font-bold">'help'</span> to see available commands or <span className="text-[#60A5FA] font-bold">'projects'</span> to view featured builds.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleDownloadResume = () => {
    const resumeText = `PRADEEP AHERI — RESUME\nB.Tech in AI & ML, Reva University\nGitHub: ${PERSONAL_INFO.github}\nLeetCode: ${PERSONAL_INFO.leetcode}\nSkills: C, Python, JavaScript, HTML, CSS, Git, GitHub\nProjects: Harmful Gas Detection System (IoT), Subscription Management Web Application`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pradeep_Aheri_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#F8FAFC] font-semibold mb-1">AVAILABLE DIRECTIVES:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[#94A3B8]">
              <div><strong className="text-[#06B6D4]">help</strong> - Display command manual</div>
              <div><strong className="text-[#06B6D4]">about</strong> - Background & career goal</div>
              <div><strong className="text-[#06B6D4]">skills</strong> - List technical skill proficiencies</div>
              <div><strong className="text-[#06B6D4]">projects</strong> - Inspect Harmful Gas IoT & Web Apps</div>
              <div><strong className="text-[#06B6D4]">education</strong> - Reva University degree details</div>
              <div><strong className="text-[#06B6D4]">leetcode</strong> - LeetCode problem solving profile</div>
              <div><strong className="text-[#06B6D4]">github</strong> - GitHub profile & repositories</div>
              <div><strong className="text-[#06B6D4]">resume</strong> - Trigger formatted resume download</div>
              <div><strong className="text-[#06B6D4]">contact</strong> - Direct email & transmission form</div>
              <div><strong className="text-[#06B6D4]">clear</strong> - Flush the console buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs space-y-1 text-[#94A3B8] max-w-2xl">
            <p className="text-[#F8FAFC] font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-[#06B6D4]">{PERSONAL_INFO.role} • {PERSONAL_INFO.university}</p>
            <p>{PERSONAL_INFO.aboutMe}</p>
            <p className="text-[#E0E2ED] pt-1">Career Goal: "{PERSONAL_INFO.careerGoal}"</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1.5 text-xs text-[#94A3B8]">
            <p className="text-[#F8FAFC] font-semibold">TECHNICAL SKILLS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {TECHNICAL_SKILLS.slice(0, 6).map((s, idx) => (
                <div key={idx} className="p-2 rounded bg-[#101522] border border-[#1E2638]">
                  <span className="text-[#06B6D4] font-bold block">{s.name}</span>
                  <span className="text-[10px] text-[#64748B] block">{s.level}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#F8FAFC] font-semibold">FEATURED ENGINEERING PROJECTS:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-[#3B82F6] pl-2 py-0.5">
                <span className="text-[#06B6D4] font-bold">[{p.title}]</span>{' '}
                <span className="text-[#94A3B8]">({p.category})</span>
                <p className="text-[#C2C6D6] text-[11px] mt-0.5">{p.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-xs text-[#94A3B8]">
            <p className="text-[#F8FAFC] font-bold">{EDUCATION_DATA.degree} in {EDUCATION_DATA.major}</p>
            <p className="text-[#60A5FA]">{EDUCATION_DATA.institution} • {EDUCATION_DATA.location}</p>
            <p className="text-[#64748B]">Status: {EDUCATION_DATA.status}</p>
            <p className="pt-1 text-[#E0E2ED]">Coursework: {EDUCATION_DATA.coursework.slice(0, 5).join(', ')}...</p>
          </div>
        );
        break;

      case 'leetcode':
        output = (
          <div className="space-y-1 text-xs text-[#94A3B8]">
            <p className="text-[#F59E0B] font-bold">LEETCODE PROFILE:</p>
            <p>Handle: <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] underline">{PERSONAL_INFO.leetcode}</a></p>
            <p>Active practice across Arrays, Two Pointers, Linked Lists, Trees, and Dynamic Programming.</p>
          </div>
        );
        break;

      case 'github':
        output = (
          <div className="space-y-1 text-xs text-[#94A3B8]">
            <p className="text-[#60A5FA] font-bold">GITHUB REPOSITORIES:</p>
            <p>Profile: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] underline">{PERSONAL_INFO.github}</a></p>
            <p>Contains repositories for Harmful Gas Detection System, Subscription Management App, and DSA implementations.</p>
          </div>
        );
        break;

      case 'resume':
        handleDownloadResume();
        output = (
          <div className="text-xs text-[#10B981]">
            <p>✔ Triggered instant resume download for Pradeep Aheri.</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-[#94A3B8]">
            <p className="text-[#F8FAFC] font-semibold">CONTACT COORDINATES:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#3B82F6] underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#60A5FA] underline">github.com/PradeepAheri</a></p>
            <p>LeetCode: <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="text-[#F59E0B] underline">leetcode.com/u/PradeepAheri</a></p>
            <button
              onClick={onOpenContact}
              className="mt-2 px-3 py-1 bg-[#3B82F6] hover:bg-[#60A5FA] text-[#080B12] font-semibold rounded-[4px] cursor-pointer"
            >
              LAUNCH CONTACT FORM
            </button>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-[#EF4444] text-xs">
            Command not recognized: '{inputVal}'. Type <strong className="text-[#F8FAFC]">'help'</strong> to view valid directives.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: inputVal,
        output,
      },
    ]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-20 border-t border-[#1E2638] bg-[#080B12] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
              06 // INTERACTIVE CLI
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F8FAFC]">
            Developer Terminal
          </h2>
          <p className="font-sans text-sm text-[#94A3B8] max-w-2xl mt-1">
            Test commands, query background info, inspect projects, or trigger resume downloads via the command line.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className={`rounded-[8px] bg-[#080B12] border border-[#1E2638] overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.6)] ${
            isMaximized ? 'fixed inset-4 z-50 flex flex-col' : 'relative'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1E2638] bg-[#101522]/90">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
              <span className="ml-2 font-mono text-xs text-[#94A3B8]">
                pradeep@reva-dev: ~/portfolio (main)
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setHistory([])}
                className="p-1 rounded text-[#64748B] hover:text-[#F8FAFC] transition-colors"
                title="Clear terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 rounded text-[#64748B] hover:text-[#F8FAFC] transition-colors"
                title={isMaximized ? 'Restore size' : 'Maximize terminal'}
              >
                {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div
            className={`p-4 font-mono overflow-y-auto space-y-4 ${
              isMaximized ? 'flex-1' : 'h-[340px]'
            } scanline`}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#3B82F6] font-bold">pradeep@reva-dev:~$</span>
                  <span className="text-[#F8FAFC]">{item.command}</span>
                </div>
                <div className="pl-4 pt-0.5">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Form */}
          <form
            onSubmit={handleCommand}
            className="flex items-center px-4 py-3 border-t border-[#1E2638] bg-[#0b0e15]"
          >
            <div className="flex items-center gap-2 text-xs font-mono mr-2 text-[#3B82F6] font-bold select-none">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>pradeep@reva-dev:~$</span>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help', 'about', 'skills', 'projects', 'resume'..."
              className="flex-1 bg-transparent border-0 outline-none font-mono text-xs sm:text-sm text-[#F8FAFC] placeholder-[#424754]"
            />
            <button
              type="submit"
              className="p-1.5 text-[#64748B] hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
