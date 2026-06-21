import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Upwork',
    period: 'Aug 2023 - Present',
    location: 'Remote · Freelance',
    description:
      'Working as a freelance Full Stack Developer on Upwork, delivering web applications for international clients using React.js, Node.js, and MongoDB.',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'CoFoundersLab',
    period: 'Aug 2023 - Feb 2024',
    location: 'United States · Remote',
    description:
      'Worked as a Full Stack Developer building web applications using React.js, Tailwind CSS, and other modern technologies.',
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Eventum IT Solutions',
    period: 'Jul 2022 - Feb 2023',
    location: 'On-site',
    description:
      'Worked as a Software Developer using Java, React.js, and other technologies to build and maintain software solutions.',
  },
]

const education = [
  {
    type: 'education',
    title: 'Foundation Degree — Computer Software Engineering',
    company: 'Information Technology Institute (ITI)',
    period: '2020 - 2021',
    location: 'On-site',
    description:
      'Studied software engineering fundamentals including Data Structures, Algorithms, OOP, Web Development, Databases, and more.',
  },
]

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Experience & Education</span>
        </h2>

        <div className="flex flex-col gap-4">
          {/* Work Experience */}
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-blue-400 text-xl" />
            <h3 className="text-white font-bold text-xl">Work Experience</h3>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 mt-1 flex-shrink-0"></div>
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-2"></div>
                )}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-4 flex-1 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-white font-bold">{exp.title}</h4>
                  <span className="text-blue-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-gray-400 text-sm mt-3">{exp.description}</p>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="flex items-center gap-3 mb-4 mt-8">
            <FaGraduationCap className="text-blue-400 text-xl" />
            <h3 className="text-white font-bold text-xl">Education</h3>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 mt-1 flex-shrink-0"></div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex-1 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-white font-bold">{edu.title}</h4>
                  <span className="text-blue-400 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">
                  {edu.company} · {edu.location}
                </p>
                <p className="text-gray-400 text-sm mt-3">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
