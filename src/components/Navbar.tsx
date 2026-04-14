import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/media/newlogo.jpeg';

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
    <nav className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300 border-b bg-black border-white/10">
      <div className="w-full px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center shrink-0">
          <img 
            src={logoImg} 
            alt="DefendPro Academy" 
            className="h-[44px] w-auto object-contain mix-blend-screen" 
            style={{ marginLeft: '48px' }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white font-headline tracking-wide uppercase transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#ff6a00] text-white px-4 py-2.5 rounded-md font-headline font-bold uppercase tracking-wide hover:-translate-y-0.5 transition-all duration-300 text-sm ml-2"
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
