import React from 'react';
import { DEVELOPER_ACTIVITY, LEETCODE_DATA } from '../data/portfolioData';
import { Github, Code2, ExternalLink, GitBranch, Terminal, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const DeveloperActivitySection: React.FC = () => {
  return (
    <section id="activity" className="py-20 border-t border-[#1E2638] bg-[#101522]/30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
                05 // PROFILES & CODE CONTRIBUTION
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Developer Activity & Problem Solving
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
              Active repositories on GitHub and disciplined algorithmic practice on LeetCode.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={DEVELOPER_ACTIVITY.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#101522] border border-[#1E2638] hover:border-[#3B82F6] text-xs font-mono text-[#F8FAFC] transition-colors"
            >
              <Github className="w-4 h-4 text-[#3B82F6]" />
              <span>@PradeepAheri</span>
              <ExternalLink className="w-3 h-3 text-[#64748B]" />
            </a>

            <a
              href={DEVELOPER_ACTIVITY.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#101522] border border-[#1E2638] hover:border-[#F59E0B] text-xs font-mono text-[#F8FAFC] transition-colors"
            >
              <Code2 className="w-4 h-4 text-[#F59E0B]" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3 text-[#64748B]" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* GitHub Repositories (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E2638]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
                <Github className="w-4 h-4 text-[#3B82F6]" />
                <span>Featured GitHub Repositories</span>
              </h3>
              <a
                href={DEVELOPER_ACTIVITY.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#3B82F6] hover:underline"
              >
                View All on GitHub →
              </a>
            </div>

            {DEVELOPER_ACTIVITY.repositories.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] hover:border-[#3B82F6]/60 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#60A5FA]" />
                    <span className="font-mono text-sm font-bold text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#F8FAFC] group-hover:translate-x-0.5 transition-all" />
                </div>

                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-3">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between font-mono text-[11px] text-[#64748B]">
                  <span className="text-[#06B6D4] font-semibold">{repo.language}</span>
                  <div className="flex flex-wrap gap-1">
                    {repo.topics.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-[#1E2638] text-[#94A3B8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* LeetCode Algorithmic Practice (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E2638]">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#F59E0B]" />
                <span>LeetCode Problem Solving Focus</span>
              </h3>
              <a
                href={DEVELOPER_ACTIVITY.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#F59E0B] hover:underline"
              >
                Inspect LeetCode →
              </a>
            </div>

            <div className="p-5 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] backdrop-blur-md space-y-4">
              <div>
                <span className="text-xs font-mono text-[#F59E0B] uppercase font-bold tracking-wider block mb-1">
                  Algorithmic Rigor & Practice
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {LEETCODE_DATA.problemSolvingPhilosophy}
                </p>
              </div>

              {/* Topic Breakdown */}
              <div className="pt-2 border-t border-[#1E2638] space-y-2.5">
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block">
                  Core Pattern Masteries:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {LEETCODE_DATA.topicsMastered.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-[4px] bg-[#080B12] border border-[#1E2638] flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-[#E0E2ED]">{topic.topic}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1E2638] text-[#06B6D4] font-bold">
                        {topic.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified LeetCode Banner */}
              <div className="p-3 rounded-[6px] bg-[#161D2E] border border-[#F59E0B]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-mono text-xs text-[#F8FAFC]">
                    Handle: <strong className="text-[#F59E0B]">u/{LEETCODE_DATA.username}</strong>
                  </span>
                </div>

                <a
                  href={DEVELOPER_ACTIVITY.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-[4px] bg-[#080B12] hover:bg-[#1E2638] border border-[#1E2638] text-xs font-mono text-[#F59E0B] flex items-center gap-1.5 transition-colors"
                >
                  <span>VIEW LEETCODE PROFILE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
