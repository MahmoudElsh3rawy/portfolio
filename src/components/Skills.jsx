import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJava,
  FaDocker,
  FaPhp,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiPostman,
  SiNpm,
  SiTypescript,
  SiSass,
  SiSpringboot,
  SiMysql,
  SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Sass', icon: SiSass, color: 'text-pink-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-400' },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-400' },
      { name: 'PHP', icon: FaPhp, color: 'text-purple-400' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'VS Code', icon: VscVscode, color: 'text-blue-400' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
      { name: 'npm', icon: SiNpm, color: 'text-red-400' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
      { name: 'Vercel', icon: SiVercel, color: 'text-white' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">My Skills</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="flex-1">
            <p className="text-2xl font-bold text-white leading-relaxed">
              Frontend, Backend, and everything in between.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-gray-400 leading-relaxed">
              I mainly work with the MERN Stack with TypeScript and Tailwind
              CSS. I've worked across different technologies including Java,
              Spring Boot, and PHP — which gives me the flexibility to adapt to
              any project's needs. I care about writing clean, maintainable code
              and building interfaces that are both functional and visually
              appealing.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {skillCategories.map((category) => (
                  <th
                    key={category.title}
                    className="text-left pb-4 gradient-text text-lg font-bold border-b border-white/10"
                  >
                    {category.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.max(
                  ...skillCategories.map((c) => c.skills.length)
                ),
              }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-white/5">
                  {skillCategories.map((category) => (
                    <td key={category.title} className="py-3 pr-6">
                      {category.skills[rowIndex] && (
                        <div className="flex items-center gap-2">
                          {(() => {
                            const Icon = category.skills[rowIndex].icon
                            return (
                              <Icon
                                className={`text-xl ${category.skills[rowIndex].color}`}
                              />
                            )
                          })()}
                          <span className="text-gray-300 text-sm">
                            {category.skills[rowIndex].name}
                          </span>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Skills
