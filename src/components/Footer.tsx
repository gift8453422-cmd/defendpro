import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] pt-16 pb-20 md:pb-16 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-16">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <a href="#" className="inline-block">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/2009%20(1).jpeg?alt=media" 
              alt="DefendPro Academy" 
              className="h-14 md:h-20 max-w-[240px] w-auto object-contain mix-blend-screen" 
            />
          </a>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-tactical-primary font-headline font-bold uppercase tracking-widest mb-4 text-xs">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                <a href="#mission" className="text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">Mission</a>
                <a href="#workshops" className="text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">Workshops</a>
                <a href="#training" className="text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">Training</a>
                <a href="#contact" className="text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">Contact</a>
              </nav>
            </div>

            <div>
              <h4 className="text-tactical-primary font-headline font-bold uppercase tracking-widest mb-4 text-xs">External</h4>
              <nav className="flex flex-col gap-3">
                <a href="https://maps.app.goo.gl/zKwD3AhdwSdw8k5s8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">
                  Google Business <ExternalLink size={12} />
                </a>
                <a href="https://www.instagram.com/defendproacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-tactical-muted hover:text-white font-headline text-xs uppercase tracking-widest transition-colors">
                  Instagram <ExternalLink size={12} />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center md:items-end text-left md:text-right">
          <h3 className="text-2xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            Training built for <br className="hidden md:block" />
            <span className="text-tactical-primary">real-world survival.</span>
          </h3>
          <p className="text-tactical-muted text-sm font-headline tracking-widest uppercase">
            Mumbai, Maharashtra, India
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1100px] mx-auto border-t border-white/5 py-6 text-center">
        <p className="text-tactical-muted text-xs font-headline uppercase tracking-widest">
          © 2026 DefendPro Academy
        </p>
      </div>
    </footer>
  );
}
