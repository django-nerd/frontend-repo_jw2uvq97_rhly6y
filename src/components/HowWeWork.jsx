import { Search, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We dive into your goals, audience, and constraints to define a clear strategy.'
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Rapid prototypes, visual systems, and architecture for seamless experiences.'
  },
  {
    icon: Rocket,
    title: 'Deploy & Optimize',
    desc: 'Launch with confidence, then iterate with data-driven improvements.'
  }
]

function HowWeWork() {
  return (
    <section id="process" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">How we work</h2>
          <p className="mt-4 text-slate-300/90">A simple, outcome-focused process from idea to impact.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background:'radial-gradient(450px circle at 80% -10%, rgba(56,189,248,0.12), transparent 40%)'}} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{i+1}. {title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
