function Skills() {
  const skills = {
    Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
