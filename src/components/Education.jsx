import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "Sahyadri College of Engineering and Management",
      period: "2019 - 2023",
      description: "Bachelor of Engineering in Computer Science",
      achievements: [
        "Strong foundation in computer science fundamentals",
        "Hands-on experience with programming and software development",
        "Active participation in technical workshops and seminars"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
