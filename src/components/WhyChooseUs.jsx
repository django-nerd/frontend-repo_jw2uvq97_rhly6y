import { TrendingUp, Workflow, Clapperboard, Headphones } from 'lucide-react'

const points = [
  { icon: TrendingUp, title: 'Result-driven marketing', desc: 'We focus on measurable impact: CAC, ROAS, LTV — not vanity metrics.' },
  { icon: Workflow, title: 'End-to-end automation', desc: 'Reduce manual work with robust workflows and AI-assisted ops.' },
  { icon: Clapperboard, title: 'High-quality 3D visuals', desc: 'Cinematic visuals and interactive scenes that convert and inspire.' },
  { icon: Headphones, title: 'Fast & reliable support', desc: 'Responsive, transparent communication and proactive care.' }
]

function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_0%_0%,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Why choose us</h2>
          <p className="mt-4 text-slate-300/90">A partner obsessed with outcomes, craft, and speed.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-white mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
