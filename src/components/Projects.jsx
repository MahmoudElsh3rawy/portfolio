function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Online Advisors Platform',
      description:
        'A platform connecting clients with professional advisors. Built with React.js and Node.js.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 2,
      title: 'Entity Generator',
      description:
        'A code generation tool that automates entity creation. Built with Spring Boot and React.',
      tech: ['React.js', 'Spring Boot', 'Java'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 3,
      title: 'E-commerce Web App',
      description:
        'A full e-commerce application with product listing, cart, and checkout features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 4,
      title: 'Admin Dashboard System',
      description:
        'An admin dashboard for managing a car services website with full CRUD operations.',
      tech: ['React.js', 'Node.js'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 5,
      title: 'Car Services Website',
      description:
        'A website for car services with booking and management features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 6,
      title: 'Articles Management System',
      description:
        'A simple CMS for managing and publishing articles with full CRUD operations.',
      tech: ['React.js', 'Node.js'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-500 bg-opacity-20 text-blue-400 text-sm px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
