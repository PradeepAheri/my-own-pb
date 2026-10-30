import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Code2, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#1E2638] bg-[#101522]/40 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#64748B]">
              07 // CONNECT & TRANSMIT
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Get In Touch
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#94A3B8] max-w-2xl mt-2">
            Interested in collaborating, hiring, or discussing projects and algorithms? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] backdrop-blur-md space-y-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC]">
                Direct Coordinates
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Whether you have an inquiry about my IoT Gas Detection System, Web Apps, or an internship opportunity, feel free to send a message.
              </p>

              {/* Email Card */}
              <div className="p-3.5 rounded-[6px] bg-[#080B12] border border-[#1E2638] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block">EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-mono text-[#F8FAFC] hover:text-[#60A5FA] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-[6px] bg-[#080B12] border border-[#1E2638] flex items-center gap-3 hover:border-[#3B82F6]/60 transition-colors group"
              >
                <div className="w-8 h-8 rounded-[4px] bg-[#1E2638] flex items-center justify-center text-[#60A5FA]">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] block">GITHUB</span>
                  <span className="text-xs font-mono text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                    github.com/PradeepAheri
                  </span>
                </div>
              </a>

              {/* LeetCode Card */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-[6px] bg-[#080B12] border border-[#1E2638] flex items-center gap-3 hover:border-[#F59E0B]/60 transition-colors group"
              >
                <div className="w-8 h-8 rounded-[4px] bg-[#1E2638] flex items-center justify-center text-[#F59E0B]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] block">LEETCODE</span>
                  <span className="text-xs font-mono text-[#F8FAFC] group-hover:text-[#F59E0B] transition-colors">
                    leetcode.com/u/PradeepAheri/
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-3.5 rounded-[6px] bg-[#080B12] border border-[#1E2638] flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#1E2638] flex items-center justify-center text-[#06B6D4]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] block">LOCATION</span>
                  <span className="text-xs font-mono text-[#F8FAFC]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[8px] bg-[#101522]/85 border border-[#1E2638] backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#F8FAFC]">
                    Message Transmitted!
                  </h4>
                  <p className="font-sans text-sm text-[#94A3B8] max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-[#06B6D4] font-semibold">{formData.name}</span>. I have received your note and will reply promptly to <span className="text-[#F8FAFC] font-mono">{formData.email}</span>.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-[4px] bg-[#1E2638] hover:bg-[#272a32] text-xs font-mono text-[#F8FAFC] transition-colors"
                    >
                      Open in Email App
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-[4px] bg-[#3B82F6] hover:bg-[#60A5FA] text-[#080B12] text-xs font-mono font-bold transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F8FAFC] mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Satya Nadella"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-[4px] bg-[#080B12] border border-[#1E2638] focus:border-[#3B82F6] text-[#F8FAFC] font-mono text-xs outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-[4px] bg-[#080B12] border border-[#1E2638] focus:border-[#3B82F6] text-[#F8FAFC] font-mono text-xs outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SDE Opportunity / Project Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 rounded-[4px] bg-[#080B12] border border-[#1E2638] focus:border-[#3B82F6] text-[#F8FAFC] font-mono text-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-[4px] bg-[#080B12] border border-[#1E2638] focus:border-[#3B82F6] text-[#F8FAFC] font-mono text-xs outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#64748B]">
                      DIRECT RECIPIENT: {PERSONAL_INFO.email}
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#3B82F6] hover:bg-[#60A5FA] text-[#080B12] font-semibold text-xs font-mono transition-all duration-200 shadow-[0_0_16px_rgba(59,130,246,0.35)] disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'DISPATCHING...' : 'SEND MESSAGE'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
