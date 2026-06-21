import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Advisors Platform',
    subtitle: 'Full Stack Web Application',
    description:
      'A platform connecting clients with professional advisors. Built end-to-end with React.js and Node.js on Upwork. Includes user authentication, advisor profiles, and booking system.',
    features: [
      'User authentication and authorization',
      'Advisor profile management',
      'Booking and scheduling system',
      'Real-time notifications',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/MahmoudElsh3rawy',
    live: null,
    private: false,
    icon: '🌐',
  },
  {
    id: 2,
    title: 'Entity Generator',
    subtitle: 'Code Generation Tool',
    description:
      'A tool that automates entity creation and reduces development time significantly. Built with Spring Boot and React.',
    features: [
      'Automatic entity generation',
      'Reduces boilerplate code',
      'Supports multiple entity types',
      'Clean and intuitive UI',
    ],
    tech: ['React.js', 'Spring Boot', 'Java'],
    github: null,
    live: null,
    private: true,
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'E-commerce Web App',
    subtitle: 'Full Stack E-commerce',
    description:
      'A full e-commerce application with product listing, cart, and checkout features. Handled the complete Frontend.',
    features: [
      'Product listing and filtering',
      'Shopping cart management',
      'Checkout and payment flow',
      'Responsive design',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/MahmoudElsh3rawy',
    live: null,
    private: false,
    icon: '🛒',
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    subtitle: 'Management Dashboard',
    description:
      'A full-featured admin dashboard for managing a car services platform with complete CRUD operations.',
    features: [
      'Full CRUD operations',
      'Data visualization',
      'User management',
      'Service tracking',
    ],
    tech: ['React.js', 'Node.js'],
    github: 'https://github.com/MahmoudElsh3rawy',
    live: null,
    private: false,
    icon: '📊',
  },
  {
    id: 5,
    title: 'Car Services',
    subtitle: 'Collaborative Project',
    description:
      'A website for car services with booking and management features. Collaborative project — handled both Frontend and Backend.',
    features: [
      'Service booking',
      'Car management',
      'Admin panel',
      'Responsive UI',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/MahmoudElsh3rawy',
    live: null,
    private: false,
    icon: '🚗',
  },
  {
    id: 6,
    title: 'Articles Management',
    subtitle: 'Content Management System',
    description:
      'A CMS for managing and publishing articles with full CRUD operations and clean UI.',
    features: [
      'Article creation and editing',
      'Category management',
      'Publishing workflow',
      'Clean admin interface',
    ],
    tech: ['React.js', 'Node.js'],
    github: 'https://github.com/MahmoudElsh3rawy',
    live: null,
    private: false,
    icon: '📝',
  },
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">My Projects</span>
        </h2>

        <div className="relative flex items-center mb-8">
          <div className="flex w-full border border-white/10 rounded-xl overflow-hidden">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-1 py-3 px-2 text-sm transition-all border-r border-white/10 last:border-r-0 ${
                  activeIndex === index
                    ? 'bg-blue-500/20 text-blue-400 font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-white/5 flex flex-col items-center justify-center p-12 gap-4">
            <div className="text-8xl">{activeProject.icon}</div>
            <h3 className="text-white font-bold text-xl">
              {activeProject.title}
            </h3>
            <p className="text-gray-400 text-sm">{activeProject.subtitle}</p>
          </div>
          <div className="p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-white font-bold text-2xl mb-2">
                {activeProject.title}
              </h3>
              <p className="text-gray-400">{activeProject.description}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Key Features:</h4>
              <ul className="flex flex-col gap-2">
                {activeProject.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-400 flex items-center gap-2"
                  >
                    <span className="text-blue-400">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              {activeProject.private ? (
                <span className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaLock /> Private Repository
                </span>
              ) : (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white/20 text-gray-300 hover:border-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm transition-all"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
