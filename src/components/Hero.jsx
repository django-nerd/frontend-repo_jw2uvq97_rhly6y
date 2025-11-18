import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(147,197,253,0.2)]">
            Building the future at the speed of 4Point2
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300/90">
            We craft immersive digital experiences, intelligent automations, custom apps, and cinematic 3D content for ambitious teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:opacity-95 transition">
              Explore Services
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
