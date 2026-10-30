import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-[#1E2638] bg-[#080B12] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
              04 // ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Education & Academic Foundation
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
            Formal coursework and foundational studies in Artificial Intelligence and Machine Learning at Reva University.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="p-6 sm:p-8 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] backdrop-blur-xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#1E2638]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[6px] bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F8FAFC]">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="font-mono text-sm text-[#60A5FA] mt-0.5">
                  Major: {EDUCATION_DATA.major}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#E0E2ED] font-semibold mt-1">
                  <span>{EDUCATION_DATA.institution}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2 text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#080B12] border border-[#1E2638] text-[#94A3B8]">
                <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{EDUCATION_DATA.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#080B12] border border-[#1E2638] text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
              <span className="text-[10px] text-[#10B981] font-semibold uppercase px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/30">
                STATUS: {EDUCATION_DATA.status}
              </span>
            </div>
          </div>

          <div className="py-6 border-b border-[#1E2638]">
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
              {EDUCATION_DATA.description}
            </p>
          </div>

          {/* Coursework Grid */}
          <div className="py-6 border-b border-[#1E2638]">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#3B82F6]" />
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                Core Academic Coursework
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {EDUCATION_DATA.coursework.map((course, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 rounded-[4px] bg-[#080B12] border border-[#1E2638] text-xs font-mono text-[#C2C6D6] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="pt-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-3">
              Key Academic Milestones & Activities
            </h4>
            <div className="space-y-2">
              {EDUCATION_DATA.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
