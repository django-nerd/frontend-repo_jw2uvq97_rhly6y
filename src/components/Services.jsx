import { Rocket, Workflow, Code2, Shapes } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Digital Marketing',
    desc: 'Performance-led strategies, SEO/SEM, content, and growth experiments to scale your brand.',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    icon: Workflow,
    title: 'Automation Solutions',
    desc: 'Streamline operations with AI agents, workflow automation, and system integrations.',
    accent: 'from-fuchsia-500 to-indigo-400'
  },
  {
    icon: Code2,
    title: 'Custom App Development',
    desc: 'Design and build reliable, scalable web and mobile applications tailored to your vision.',
    accent: 'from-cyan-400 to-emerald-400'
  },
  {
    icon: Shapes,
    title: '3D Animation',
    desc: 'Cinematic product visuals, brand films, and interactive 3D experiences that captivate.',
    accent: 'from-purple-500 to-pink-500'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(34,197,94,0.12),transparent_40%),radial-gradient(600px_circle_at_0%_100%,rgba(6,182,212,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">What we do</h2>
          <p className="mt-4 text-slate-300/90">Four pillars, one partner. We deliver end‑to‑end outcomes across marketing, automation, apps, and 3D.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, accent }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
              <div className={`absolute -right-8 -top-8 w-36 h-36 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl group-hover:opacity-50 transition`} />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{desc}</p>
                <div className="mt-6">
                  <a href="#contact" className="text-sm text-cyan-300 hover:text-white">Discuss this →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
