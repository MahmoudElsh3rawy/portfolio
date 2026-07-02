import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiHackerrank,
  SiLeetcode,
  SiGeeksforgeeks,
  SiUpwork,
} from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',
    icon: FaGithub,
    color: 'text-white',
    bg: 'bg-white/10',
    border: 'hover:border-white/50',
    url: 'https://github.com/MahmoudElsh3rawy',
    description: 'My code & open source work',
  },
  {
    name: 'Upwork',
    icon: SiUpwork,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'hover:border-green-500/50',
    url: 'https://www.upwork.com/freelancers/mahmoudelsharawy',
    description: 'My freelance work & reviews',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/50',
    url: 'https://www.linkedin.com/in/mahmoud-elsharawy-dev',
    description: 'My professional profile',
  },
  {
    name: 'HackerRank',
    icon: SiHackerrank,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'hover:border-green-500/50',
    url: 'https://www.hackerrank.com/profile/mahmoudelsharawy',
    description: 'Problem solving & challenges',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'hover:border-orange-500/50',
    url: 'https://leetcode.com/mahmoudelsharawy',
    description: 'Algorithms & data structures',
  },
  {
    name: 'GeeksForGeeks',
    icon: SiGeeksforgeeks,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'hover:border-green-500/50',
    url: 'https://www.geeksforgeeks.org/user/mahmoudelsharawy',
    description: 'CS fundamentals & practice',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Profiles & Links</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all ${profile.border} hover:scale-105`}
            >
              <div
                className={`${profile.bg} w-16 h-16 rounded-xl flex items-center justify-center`}
              >
                <profile.icon className={`text-3xl ${profile.color}`} />
              </div>
              <h3 className="text-white font-bold text-lg">{profile.name}</h3>
              <p className="text-gray-400 text-sm text-center">
                {profile.description}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <FaExternalLinkAlt className="text-xs" />
                View Profile
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
