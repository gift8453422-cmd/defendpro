import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] pt-24 pb-20 md:pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 pb-20">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10">
          <a href="#" className="inline-block">
            <img 
              src="/newlogo.png" 
              alt="DefendPro Academy" 
              className="h-16 md:h-24 max-w-[280px] w-auto object-contain" 
            />
          </a>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-tactical-primary font-headline font-bold uppercase tracking-[0.2em] mb-6 text-[10px]">Quick Links</h4>
              <nav className="flex flex-col gap-4">
                <a href="#mission" className="text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">Mission</a>
                <a href="#workshops" className="text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">Workshops</a>
                <a href="#training" className="text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">Training</a>
                <a href="#contact" className="text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">Contact</a>
              </nav>
            </div>

            <div>
              <h4 className="text-tactical-primary font-headline font-bold uppercase tracking-[0.2em] mb-6 text-[10px]">External</h4>
              <nav className="flex flex-col gap-4">
                <a href="https://maps.app.goo.gl/zKwD3AhdwSdw8k5s8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">
                  Google Business <ExternalLink size={12} />
                </a>
                <a href="https://www.instagram.com/defendproacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-500 hover:text-white font-headline text-xs uppercase tracking-[0.15em] transition-colors">
                  Instagram <ExternalLink size={12} />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center md:items-end text-left md:text-right">
          <h3 className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Training built for <br className="hidden md:block" />
            <span className="text-tactical-secondary">real-world survival.</span>
          </h3>
          <p className="text-stone-500 text-xs font-headline tracking-[0.4em] uppercase font-bold">
            MUMBAI, MAHARASHTRA, INDIA
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-white/5 py-10 text-center">
        <p className="text-stone-600 text-[10px] font-headline uppercase tracking-[0.3em] font-bold">
          © 2026 DEFENDPRO ACADEMY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
