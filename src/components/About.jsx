import React from 'react';
import profileImage from '/images/profilePicture.png'; // Adjust the import path as needed

function About() {
  const technologies = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section id="about" className="py-10">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-shadow-lg text-center">About Me</h2>
        <div className="text-white text-shadow">
          <img 
            src={profileImage} 
            alt="Pranav Pawar" 
            className="rounded-full shadow-lg w-64 h-64 object-contain mx-auto scale-120 mb-6"
          />
          <p className="text-lg leading-relaxed mb-6">
            Hello! I'm Pranav Pawar, an engineering student passionate about full-stack development and Data Science. With expertise in Python, Java, JavaScript, and the MERN stack, I thrive on creating dynamic and efficient solutions for complex challenges. My proficiency extends to building modern web applications using React, Node.js, and Express, complemented by hands-on experience with Tailwind CSS and Flask.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Beyond technical skills, I'm keen on leveraging Data Science methodologies to extract meaningful insights and drive decision-making processes. My projects reflect a commitment to merging creativity with technology, delivering impactful software solutions that address real-world problems. I'm always excited to collaborate on innovative tech solutions that push the boundaries of what's possible.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">My Tech Stack Includes:</h3>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
