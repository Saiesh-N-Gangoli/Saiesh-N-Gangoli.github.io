import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/smoothScroll';
import heroBackground from '../utils/bg-img2.png';
import javaIcon from '../utils/java.png';
import springBootIcon from '../utils/spring-boot.png';
import reactIcon from '../utils/react-js.png';

const skills = [
  { name: 'Java', icon: javaIcon },
  { name: 'Spring Boot', icon: springBootIcon },
  { name: 'React', icon: reactIcon },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Saiesh Nagaraj Gangoli';

  useEffect(() => {
    if (displayText.length >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(fullText.slice(0, displayText.length + 1));
    }, 110);

    return () => clearTimeout(timeout);
  }, [displayText, fullText]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Saiesh_Gangoli_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    smoothScroll('projects');
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080d1b] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080d1b]/40 via-[#080d1b]/20 to-[#080d1b]/10 md:from-[#080d1b]/10 md:via-transparent md:to-transparent" />

      <div
        className="relative z-10 mx-auto w-full max-w-[1440px] py-28 md:py-24"
        style={{
          boxSizing: 'border-box',
          paddingInline: 'clamp(24px, 4vw, 64px)',
          marginInline: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[700px] text-left"
        >
          <h1
            className="text-[2rem] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-5xl md:text-[2rem]"
            style={{ fontFamily: 'Roboto Slab, serif', fontWeight: 600 }}
          >
            {displayText}
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-1 inline-block"
            >
              |
            </motion.span>
          </h1>

          <p
            className="mt-2 bg-gradient-to-r from-[#6476ff] via-[#397dff] to-[#28c5ed] bg-clip-text text-[1.2rem] font-bold text-transparent"
            style={{ fontFamily: 'Roboto Slab, serif' }}
          >
            Java Full Stack Developer
          </p>

          <p
            className="mt-3 text-base font-medium text-slate-200 sm:text-lg"
            style={{ fontFamily: 'Asap, sans-serif' }}
          >
            I build web applications with Java, Spring Boot, and React.
          </p>

          <div className="mt-5 flex flex-wrap gap-3" aria-label="Core technologies">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="inline-flex min-h-9 items-center gap-2 rounded-full border border-indigo-300/25 bg-[#0a1123]/65 px-3.5 text-xs font-medium text-slate-100 shadow-sm backdrop-blur-sm sm:text-sm"
                style={{ fontFamily: 'Asap, sans-serif' }}
              >
                <img src={skill.icon} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />
                {skill.name}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap" style={{ fontFamily: 'Roboto Slab, serif', gap: '16px' }}>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProjectsClick}
              className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-lg px-7 py-3 font-semibold text-white shadow-[0_8px_28px_rgba(69,93,255,0.35)] transition-shadow hover:shadow-[0_10px_32px_rgba(69,93,255,0.5)]"
              style={{ background: 'linear-gradient(100deg, #5d5cff, #3f6dff)', padding: '12px 28px' }}
            >
              View Projects <span aria-hidden="true">→</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactClick}
              className="min-w-[150px] rounded-lg border border-indigo-400/70 bg-[#080d1b]/35 px-7 py-3 font-semibold text-white transition-colors hover:bg-indigo-500/15"
              style={{ padding: '12px 28px' }}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
