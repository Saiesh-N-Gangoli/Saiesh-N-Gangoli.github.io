import React, { useState, useEffect } from 'react';
import { smoothScroll } from '../utils/smoothScroll';
import techSkills from '../utils/techskills.json';

const portfolioSkills = [
  'Java', 'JavaScript', 'TypeScript', 'React.js', 'React Native', 'Redux',
  'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MS SQL', 'SSMS',
  'Git', 'GitLab', 'GitLab CI/CD', 'GitLab Runner', 'Nginx', 'JUnit', 'Jest',
  'Postman', 'SonarQube', 'Swagger', 'AWS', 'Agile',
];

const normalizeSkillText = (text) => ` ${text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()} `;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [chatQuestion, setChatQuestion] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [jobDescription, setJobDescription] = useState('');
  const [fitResult, setFitResult] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isChatOpen && !isRecruiterOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsChatOpen(false);
        setIsRecruiterOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isChatOpen, isRecruiterOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
    { name: 'Console', href: '#contact', id: 'contact' },
    { name: 'Recruiter Mode', href: '#recruiter-mode', id: 'recruiter-mode', drawer: 'recruiter' },
  ];

  const activeColors = {
    home: scrolled ? '#2563eb' : '#67e8f9',
    about: scrolled ? '#7c3aed' : '#c4b5fd',
    skills: scrolled ? '#059669' : '#6ee7b7',
    experience: scrolled ? '#d97706' : '#fcd34d',
    education: scrolled ? '#e11d48' : '#fda4af',
    contact: scrolled ? '#0891b2' : '#67e8f9',
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    smoothScroll(id);
    setIsOpen(false);
  };

  const handleNavItemClick = (event, link) => {
    if (link.drawer === 'recruiter') {
      event.preventDefault();
      setIsOpen(false);
      setIsChatOpen(false);
      setIsRecruiterOpen(true);
      return;
    }

    handleNavClick(event, link.id);
  };

  const sendChatMessage = (event) => {
    event.preventDefault();
    const message = chatQuestion.trim();
    if (!message) return;

    setChatMessages((currentMessages) => [...currentMessages, message]);
    setChatQuestion('');
  };

  const checkRecruiterFit = (event) => {
    event.preventDefault();
    const normalizedDescription = normalizeSkillText(jobDescription);
    const detected = [...new Set(techSkills)]
      .filter((skill) => normalizedDescription.includes(normalizeSkillText(skill)));
    const portfolioSkillSet = new Set(portfolioSkills.map(normalizeSkillText));

    setFitResult({
      detected,
      matched: detected.filter((skill) => portfolioSkillSet.has(normalizeSkillText(skill))),
      notListed: detected.filter((skill) => !portfolioSkillSet.has(normalizeSkillText(skill))),
    });
  };

  const matchPercentage = fitResult?.detected.length
    ? Math.round((fitResult.matched.length / fitResult.detected.length) * 100)
    : 0;

  return (
    <nav className={`font-play fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-800 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Theme Toggle & Desktop Navigation */}
          <div className="mx-auto hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => {
                const isActive = !link.drawer && activeSection === link.id;
                return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavItemClick(e, link)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-white/10 dark:bg-white/10'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                      : 'text-white hover:text-gray-200'
                  }`}
                  style={isActive ? { color: activeColors[link.id] } : undefined}
                >
                  {link.name}
                </a>
                );
              })}
              <button
                onClick={() => setIsChatOpen(true)}
                className={`ml-4 p-2 rounded-md transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Chat with me"
                aria-expanded={isChatOpen}
                aria-controls="saiex-chat-drawer"
                title="SaiEx"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 11.5c0 4.142-4.03 7.5-9 7.5a10 10 0 01-4-.8L3 20l1.1-3.3C2.8 15.4 2 13.5 2 11.5 2 7.4 6 4 12 4s9 3.4 9 7.5Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = !link.drawer && activeSection === link.id;
                return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavItemClick(e, link)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-blue-50/10 dark:bg-blue-900/20'
                      : scrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={isActive ? { color: activeColors[link.id] } : undefined}
                >
                  {link.name}
                </a>
                );
              })}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsChatOpen(true);
                }}
                aria-expanded={isChatOpen}
                aria-controls="saiex-chat-drawer"
                className={`flex w-full items-center space-x-2 rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 11.5c0 4.142-4.03 7.5-9 7.5a10 10 0 01-4-.8L3 20l1.1-3.3C2.8 15.4 2 13.5 2 11.5 2 7.4 6 4 12 4s9 3.4 9 7.5Z" />
                </svg>
                <span>Let’s chat</span>
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end" role="presentation">
          <button
            type="button"
            aria-label="Close SaiEx chat"
            className="absolute inset-0 cursor-default bg-slate-950/55 backdrop-blur-[2px]"
            onClick={() => setIsChatOpen(false)}
          />
          <aside
            id="saiex-chat-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="saiex-chat-title"
            className="relative flex h-full w-full max-w-[420px] flex-col border-l border-white/10 bg-[#0c1222] text-slate-100 shadow-2xl shadow-black/40"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 id="saiex-chat-title" className="text-lg font-semibold tracking-wide">SaiEx</h2>
                <p className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                  Online
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6" aria-live="polite">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-slate-200">
                Hi! I’m SaiEx. Ask me about Saiesh’s experience, skills, or projects.
              </div>
              {chatMessages.map((message, index) => (
                <div key={`${index}-${message}`} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-500/90 px-4 py-3 text-sm leading-6 text-white">
                  {message}
                </div>
              ))}
            </div>

            <form className="border-t border-white/10 p-4" onSubmit={sendChatMessage}>
              <label htmlFor="saiex-question" className="sr-only">Ask SaiEx a question</label>
              <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-2 transition focus-within:border-indigo-400/70 focus-within:ring-2 focus-within:ring-indigo-400/20">
                <textarea
                  id="saiex-question"
                  rows="2"
                  autoFocus
                  value={chatQuestion}
                  onChange={(event) => setChatQuestion(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      sendChatMessage(event);
                    }
                  }}
                  placeholder="Ask a question..."
                  className="max-h-32 min-h-12 flex-1 resize-y bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!chatQuestion.trim()}
                  aria-label="Send question"
                  className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </form>
          </aside>
        </div>
      )}
      {isRecruiterOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end" role="presentation">
          <button
            type="button"
            aria-label="Close recruiter mode"
            className="absolute inset-0 cursor-default bg-slate-950/55 backdrop-blur-[2px]"
            onClick={() => setIsRecruiterOpen(false)}
          />
          <aside
            id="recruiter-mode-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="recruiter-mode-title"
            className="relative flex h-full w-full max-w-[460px] flex-col border-l border-white/10 bg-[#0c1222] text-slate-100 shadow-2xl shadow-black/40"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 id="recruiter-mode-title" className="text-lg font-semibold tracking-wide">Recruiter Mode</h2>
                <p className="mt-1 text-xs text-slate-400">Role fit overview</p>
              </div>
              <button
                type="button"
                onClick={() => setIsRecruiterOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close recruiter mode"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="recruiter-scrollbar flex-1 overflow-y-auto px-5 py-7">
              <h3 className="text-xl font-semibold text-white">Welcome to Recruiter Mode</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Add the job description below to see how Saiesh’s listed skills align with the role.
              </p>

              <form className="mt-6 space-y-4" onSubmit={checkRecruiterFit}>
                <label htmlFor="recruiter-job-description" className="block text-sm font-medium text-slate-200">
                  Job description
                </label>
                <textarea
                  id="recruiter-job-description"
                  rows="9"
                  value={jobDescription}
                  onChange={(event) => {
                    setJobDescription(event.target.value);
                    setFitResult(null);
                  }}
                  placeholder="Paste the job description here..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-400/20"
                />
                <button
                  type="submit"
                  disabled={!jobDescription.trim()}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:from-indigo-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Check fit
                </button>
              </form>

              {fitResult !== null && (
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.05] p-4" aria-live="polite">
                  {fitResult.detected.length > 0 ? (
                    <>
                      <div className="mb-5">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <h4 className="text-sm font-semibold text-white">Skill keyword match</h4>
                            <p className="mt-1 text-xs text-slate-400">
                              {fitResult.matched.length} of {fitResult.detected.length} detected skills are listed on the portfolio
                            </p>
                          </div>
                          <span className="text-3xl font-bold tracking-tight text-emerald-300">{matchPercentage}%</span>
                        </div>
                        <div
                          className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"
                          role="progressbar"
                          aria-label="Portfolio keyword match percentage"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow={matchPercentage}
                        >
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-all duration-500"
                            style={{ width: `${matchPercentage}%` }}
                          />
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold text-white">Skills found in the job description</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {fitResult.detected.map((skill) => (
                          <span key={skill} className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1 text-xs text-indigo-200">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <h4 className="mt-5 text-sm font-semibold text-emerald-200">Also listed on Saiesh’s portfolio</h4>
                      {fitResult.matched.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {fitResult.matched.map((skill) => (
                            <span key={skill} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 text-sm text-slate-400">No detected skills are currently listed on the portfolio.</p>
                      )}

                      {fitResult.notListed.length > 0 && (
                        <>
                          <h4 className="mt-5 text-sm font-semibold text-amber-200">Not listed on the portfolio</h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {fitResult.notListed.map((skill) => (
                              <span key={skill} className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-slate-200">No skills from the built-in list were found. Try including specific languages, frameworks, databases, or tools.</p>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
