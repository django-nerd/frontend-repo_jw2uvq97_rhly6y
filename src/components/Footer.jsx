function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} 4Point2 Technologies. All rights reserved.</p>
        <div className="text-slate-500 text-sm">
          Built with love for innovators and enterprise builders.
        </div>
      </div>
    </footer>
  )
}

export default Footer
