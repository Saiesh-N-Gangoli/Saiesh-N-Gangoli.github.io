import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "GxCapture - Benefits Automation Portal",
      description: "Specialized module within GxSuite for creating configurable portals for benefits automation and data collection in the insurance industry.",
      technologies: ["Java", "JavaScript", "React.js", "Spring Boot", "Nginx", "CI/CD Pipelines", "DevOPS", "Git", "GitLab CI/CD"],
      features: [
        "Configurable portal creation",
        "Benefits automation workflows",
        "Data collection and management",
        "RESTful API integration",
        "Deployment automation",
        "Code quality management with SonarQube"
      ],
      duration: "09.2025 - Ongoing",
      domain: "Insurance",
      github: "#",
      demo: "#"
    },
    {
      title: "GxDigiHealth - Healthcare Management Platform",
      description: "Comprehensive healthcare platform for insurance clients enabling hospital search, appointment booking, and policy administration.",
      technologies: ["TypeScript", "Java", "JavaScript", "React.js", "React Native", "Junit", "Spring Boot", "Swagger", "PostgreSQL"],
      features: [
        "Cross-platform mobile app (React Native)",
        "Web application with React",
        "Hospital network search",
        "Doctor appointment booking",
        "Digital health cards",
        "Dependent management",
        "Admin portal for request management"
      ],
      duration: "01.2025 - 08.2025",
      domain: "Insurance",
      github: "#",
      demo: "#"
    },
    {
      title: "Gx Client Visit Management System",
      description: "Digital platform for automating and optimizing client visit workflows, replacing manual procedures with efficient record keeping.",
      technologies: ["Java", "JavaScript", "React.js", "Spring Boot", "SSMS", "SonarQube", "Junit", "Swagger", "Git"],
      features: [
        "Client visit request creation and editing",
        "RESTful API design and implementation",
        "React UI components with focus on UX",
        "Comprehensive testing with JUnit",
        "Code quality improvements with SonarQube",
        "Automated departmental tasks"
      ],
      duration: "01.2024 - 12.2025",
      domain: "Utilities",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.duration}
                    </span>
                    <span className="text-xs text-blue-600 font-medium">
                      {project.domain}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            More projects available on my GitHub profile
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
