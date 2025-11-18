import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // In this version we just simulate success.
      await new Promise(r => setTimeout(r, 800))
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false })
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_0%,rgba(147,51,234,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Get in touch</h2>
            <p className="mt-4 text-slate-300/90 max-w-lg">
              Tell us about your goals. Well assemble the right blend of strategy, design, engineering, and 3D to make it happen.
            </p>
            <ul className="mt-8 space-y-3 text-slate-300/90">
              <li>
                <span className="text-white">Email:</span> hello@4point2.tech
              </li>
              <li>
                <span className="text-white">HQ:</span> Remote-first, global delivery
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Company</label>
              <input name="company" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Acme Inc." />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">How can we help?</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us a little about your project..." />
            </div>
            <button type="submit" className="mt-6 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:opacity-95 transition">
              Send message
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status.ok ? 'Thanks! Well get back to you shortly.' : 'Something went wrong. Try again.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
