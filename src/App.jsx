import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background grid / glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_circle_at_10%_-10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(800px_circle_at_90%_0%,rgba(236,72,153,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
