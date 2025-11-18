import { useState } from 'react'

const projects = [
  {
    title: 'Aether Labs',
    desc: 'AI-driven analytics dashboard with real-time insights and automation.',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neon Commerce',
    desc: 'Headless e-commerce platform with personalized campaigns and 3D PDP.',
    image: 'https://images.unsplash.com/photo-1751759196124-a0b55924a36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzQ1Nzg4NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Orbit Bank',
    desc: 'Secure mobile banking app with biometric auth and smart nudges.',
    image: 'https://images.unsplash.com/photo-1533399414884-20d4929fb553?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdCUyMEJhbmt8ZW58MHwwfHx8MTc2MzQ1Nzg4NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Flux Motors',
    desc: 'AR-enabled product visualizer and booking flow for EV launches.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Nova Health',
    desc: 'Telemedicine platform with automated triage and care plans.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Quanta XR',
    desc: 'Immersive 3D marketing site with custom GLSL-driven visuals.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop',
  },
]

function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_100%_0%,rgba(99,102,241,0.12),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Recent Work</h2>
          <p className="mt-4 text-slate-300/90">A snapshot of projects across growth, automation, apps, and 3D.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"/>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-300/90 mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="text-cyan-300 hover:text-white text-sm">View Case Study →</a>
                  <div className={`w-2 h-2 rounded-full transition-all ${hovered===i ? 'bg-emerald-400 shadow-[0_0_12px_3px_rgba(52,211,153,0.35)]' : 'bg-slate-500/60'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
