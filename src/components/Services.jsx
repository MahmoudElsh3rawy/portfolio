import { FaCode, FaServer, FaLayerGroup, FaRocket } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: 'Frontend Development',
    description:
      'Building responsive, user-friendly web interfaces using modern frameworks like React and Next.js.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description:
      'Developing secure and scalable server-side logic, REST APIs, and database integration.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: FaLayerGroup,
    title: 'Full Stack Solutions',
    description:
      'End-to-end development from frontend UI to backend infrastructure and deployment.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: FaRocket,
    title: 'Speed & Optimization',
    description:
      'Improving load times, SEO, and overall user experience through code and asset optimization.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">My Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/50 hover:bg-white/10 transition-all"
            >
              <div
                className={`${service.bg} w-14 h-14 rounded-xl flex items-center justify-center`}
              >
                <service.icon className={`text-2xl ${service.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
