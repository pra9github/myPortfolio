import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hotel Recommendation System',
      description: 'A recommendation system for hotels based on user preferences and reviews.',
      technologies: ['Python', 'Streamlit'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'Shree Logistics',
      description: 'The Shree Logistics website is a dynamic web platform designed for a logistics service provider. It showcases the company’s services, including freight forwarding, transportation, and supply chain solutions. The website offers a user-friendly interface with responsive design to cater to clients looking for information about logistics services.',
      technologies: ['ejs', 'css', 'express', 'nodejs'],
      githubLink: 'https://github.com/pra9github/ShreeLogistics.git',
      liveLink: 'https://project2-demo.com'
    },
    {
      id: 3,
      title: 'Placement Management System using ML',
      description: 'An AI powered web application for the placement and recruitement process at an institute level',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      githubLink: 'https://github.com/pra9github/PMS.git',
      liveLink: 'https://project3-demo.com'
    },
  ];

  return (
    <section id="projects" className="py-10">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-shadow-lg text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 bg-opacity-10 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white text-shadow">{project.title}</h3>
                <p className="text-gray-300 text-shadow mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white text-shadow mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 bg-opacity-50 text-gray-200 text-shadow px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 bg-opacity-30 px-6 py-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 mr-4 text-shadow">
                  GitHub
                </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
