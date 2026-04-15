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
    { name: 'Instructors', href: '#instructors' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b ${scrolled ? 'bg-black/95 backdrop-blur-md border-white/10 py-2' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center shrink-0">
          <img 
            src="/newlogo.png" 
            alt="DefendPro Academy" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-tactical-primary font-headline tracking-[0.1em] uppercase transition-all text-xs font-bold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-tactical-primary text-tactical-bg px-6 py-3 rounded-sm font-headline font-black uppercase tracking-widest hover:-translate-y-1 transition-all duration-500 text-xs ml-4 shadow-lg shadow-tactical-primary/10"
          >
            ENLIST NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg font-headline font-bold uppercase tracking-wide py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-4 bg-[#ff6a00] text-white px-6 py-3 rounded-md font-headline font-bold uppercase tracking-wide text-center shadow-lg shadow-[#ff6a00]/20"
          >
            ENLIST NOW
          </a>
        </motion.div>
      )}
    </nav>
  );
}
