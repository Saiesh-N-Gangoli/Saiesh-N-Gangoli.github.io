import React from 'react';
import profileImage from '../utils/my_image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#071229]" style={{ fontFamily: 'Asap, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-left text-[2rem] font-black text-white mb-2 tracking-tight">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="order-2 md:order-1 space-y-6">
            <div className="text-slate-200 leading-relaxed space-y-4">
          <p className="text-justify text-lg leading-relaxed">
                Full Stack Developer with 3.3+ years of hands-on experience in building web and mobile applications using Java, Spring Boot, ReactJS, and React Native. Strong experience in developing RESTful APIs with Spring Boot to enable seamless integration between frontend interfaces and backend services.
              </p>
          <p className="text-justify text-lg leading-relaxed">
                Proficient in designing component-based, intuitive user interfaces for modern web applications using ReactJS, and in developing responsive, high-performance mobile applications using React Native. Experienced in peer code reviews, debugging, refactoring, and implementing unit testing to improve code quality and reduce defects.
              </p>
          <p className="text-justify text-lg leading-relaxed">
                Hands-on experience with application deployment using GitLab CI/CD pipelines and manual deployments via remote server access. Actively involved in Agile SDLC practices, including daily stand-ups, sprint planning, and cross-team collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Industry Expertise</h4>
                <div className="space-y-1">
                  <p className="text-slate-300">FinTech (1 year)</p>
                  <p className="text-slate-300">PBM & Insurance (2.3 years)</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Status</h4>
                <p className="text-green-600 font-medium">Open to Opportunities</p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 text-slate-200 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-white/10 text-slate-200 rounded-full text-sm">Kannada</span>
                <span className="px-3 py-1 bg-white/10 text-slate-200 rounded-full text-sm">Hindi</span>
              </div>
            </div>
          </div>
          
            <div className="order-1 md:order-2 h-[463px] flex justify-center items-stretch min-h-0">
            <img
              src={profileImage}
              alt="Saiesh Nagaraj Gangoli"
              className="h-full w-auto max-w-full object-contain object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
