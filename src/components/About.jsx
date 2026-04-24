import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-medium" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            My professional journey and the experiences that have shaped my career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-justify text-lg leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Full Stack Developer with 2.5+ years of hands-on experience in building web and mobile applications using Java, Spring Boot, ReactJS, and React Native. Strong experience in developing RESTful APIs with Spring Boot to enable seamless integration between frontend interfaces and backend services.
              </p>
              <p className="text-justify text-lg leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Proficient in designing component-based, intuitive user interfaces for modern web applications using ReactJS, and in developing responsive, high-performance mobile applications using React Native. Experienced in peer code reviews, debugging, refactoring, and implementing unit testing to improve code quality and reduce defects.
              </p>
              <p className="text-justify text-lg leading-relaxed" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Hands-on experience with application deployment using GitLab CI/CD pipelines and manual deployments via remote server access. Actively involved in Agile SDLC practices, including daily stand-ups, sprint planning, and cross-team collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                <div className="space-y-1">
                  <p className="text-gray-700">Utilities (2 years)</p>
                  <p className="text-gray-700">Insurance (1 year 2 months)</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                <p className="text-green-600 font-medium">Open to Opportunities</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">Kannada</span>
                <span className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">Hindi</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">SNG</div>
                    <p className="text-gray-600 font-medium">Saiesh Nagaraj Gangoli</p>
                    <p className="text-gray-500 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
