import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Developer (Senior Technician)",
      company: "Full Stack Development",
      period: "Jan 2026 - Present",
      description: "Senior-level full stack development role with advanced responsibilities in architecture design, team leadership, and complex problem-solving."
    },
    {
      title: "Developer (Technician)",
      company: "Full Stack Development",
      period: "Jan 2025 - Dec 2025",
      description: "Mid-level full stack development role focusing on implementing features, API development, and frontend-backend integration."
    },
    {
      title: "Associate Developer",
      company: "Full Stack Development",
      period: "Aug 2023 - Dec 2024",
      description: "Entry-level full stack development role focused on learning, implementing features, and contributing to team projects."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - only visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - only visible on medium screens and up */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                
                {/* Experience card container */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pr-8' : 'md:mr-auto md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 card-hover border border-gray-100">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
