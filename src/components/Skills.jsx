import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Development", 
      skills: ["React.js", "React Native", "Redux", "Semantic UI"]
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot", "REST APIs", "API Rest", "Functional Programming"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MS SQL", "SSMS"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitLab", "GitLab CI/CD", "GitLab Runner", "Nginx", "CI/CD Pipelines", "DevOPS", "Deployment Planning"]
    },
    {
      title: "Testing & Quality",
      skills: ["Junit", "Jest", "Postman", "SonarQube", "Swagger"]
    },
    {
      title: "IDEs & Editors",
      skills: ["Visual Studio Code", "Android Studio"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS"]
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Peer Code Reviews", "Debugging", "Refactoring", "Unit Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build amazing applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-xs font-medium border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Always learning and expanding my skillset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
