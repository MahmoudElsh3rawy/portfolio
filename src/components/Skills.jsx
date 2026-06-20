function Skills() {
  const skills = {
    Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
