import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-black py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center shrink-0 transition-transform hover:scale-105">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/newlogo.jpeg?alt=media" 
            alt="DefendPro Academy" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-screen" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-tactical-primary font-headline font-medium tracking-wider uppercase transition-all text-[13px] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tactical-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="bg-tactical-primary text-tactical-bg px-6 py-2.5 rounded-full font-headline font-black uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all text-xs shadow-lg shadow-tactical-primary/20"
          >
            ENLIST NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-black border-t border-white/10 overflow-hidden"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-tactical-primary text-xl font-headline font-black uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="mt-4 bg-tactical-primary text-tactical-bg px-8 py-4 rounded-xl font-headline font-black uppercase tracking-widest text-center shadow-xl shadow-tactical-primary/20"
            >
              ENLIST NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
