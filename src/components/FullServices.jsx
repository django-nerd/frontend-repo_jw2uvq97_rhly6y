import { Rocket, Workflow, Code2, Shapes, ArrowRight } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Digital Marketing',
    bullets: [
      'Performance marketing (Meta, Google, LinkedIn)',
      'SEO & content engines',
      'Funnels, CRO & analytics',
      'Brand storytelling & campaigns'
    ],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    icon: Workflow,
    title: 'Automation Solutions',
    bullets: [
      'Workflow automation & orchestration',
      'AI agents & RPA',
      'CRM/ERP integrations',
      'Data pipelines & dashboards'
    ],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-fuchsia-500 to-indigo-400'
  },
  {
    icon: Code2,
    title: 'Application Development',
    bullets: [
      'Web & mobile apps',
      'Design systems & UX',
      'Cloud-native & scalable',
      'QA, CI/CD & observability'
    ],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    accent: 'from-cyan-400 to-emerald-400'
  },
  {
    icon: Shapes,
    title: '3D Animation & Visuals',
    bullets: [
      'Product visualizations',
      'Brand films & motion design',
      'WebGL/interactive 3D',
      'AR/VR experiences'
    ],
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    accent: 'from-purple-500 to-pink-500'
  }
]

function FullServices() {
  return (
    <section id="services-details" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        {items.map(({icon:Icon, title, bullets, image, accent}, idx) => (
          <div key={title} className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 min-h-[280px]">
              <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-70"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 to-transparent" />
              <div className="relative p-6">
                <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-gradient-to-r ${accent} text-white text-sm`}> 
                  <Icon className="w-4 h-4"/> 
                  <span>{title}</span>
                </div>
                <ul className="mt-5 space-y-3 text-slate-200">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-cyan-300 mt-1"/>
                      <span className="text-sm sm:text-base opacity-90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-3 text-slate-300/90">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>
              <p className="opacity-90">We craft bespoke solutions aligned with your goals, balancing speed with quality. Each engagement includes clear milestones, transparent reporting, and measurable outcomes.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white group">Start a conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition"/></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FullServices
