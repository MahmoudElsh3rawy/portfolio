function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Online Advisors Platform',
      description:
        'A platform connecting clients with professional advisors. Built end-to-end with React.js and Node.js on Upwork.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 2,
      title: 'Entity Generator',
      description:
        'A code generation tool that automates entity creation and reduces development time significantly.',
      tech: ['React.js', 'Spring Boot', 'Java'],
      github: null,
      live: null,
      note: 'Private Project',
    },
    {
      id: 3,
      title: 'E-commerce Web App',
      description:
        'A full e-commerce application with product listing, cart, and checkout. Handled the complete Frontend.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 4,
      title: 'Admin Dashboard System',
      description:
        'A full-featured admin dashboard for managing a car services platform with complete CRUD operations.',
      tech: ['React.js', 'Node.js'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 5,
      title: 'Car Services Website',
      description:
        'A collaborative project — a website for car services with booking and management features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
    {
      id: 6,
      title: 'Articles Management System',
      description:
        'A CMS for managing and publishing articles with full CRUD operations and clean UI.',
      tech: ['React.js', 'Node.js'],
      github: 'https://github.com/MahmoudElsh3rawy',
      live: null,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.note && (
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">
                      {project.note}
                    </span>
                  )}
                </div>
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
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="text-gray-600 text-sm">
                    Private Repository
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Live Demo →
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
