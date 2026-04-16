import { motion, AnimatePresence } from 'motion/react';
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b bg-black/80 backdrop-blur-md border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <a href="#" className="flex items-center shrink-0">
            <img 
              src="https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776297961/IMG_20260416_053318_fbshmt.webp" 
              alt="DefendPro Academy" 
              className="h-7 md:h-8 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end lg:justify-center gap-5 lg:gap-8 items-center ml-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-tactical-primary font-headline tracking-[0.1em] uppercase transition-all text-[11px] lg:text-xs font-bold whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 relative z-[1002]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden" 
            onClick={() => setIsOpen(false)} 
          />
        )}
      </AnimatePresence>

      {/* Mobile Nav Panel */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 h-[100svh] w-[80%] max-w-sm bg-tactical-bg border-l border-white/10 z-[1001] md:hidden flex flex-col pt-24 px-8 pb-8 overflow-y-auto shadow-2xl"
      >
        <div className="flex flex-col gap-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-tactical-primary text-lg font-headline font-bold uppercase tracking-wide py-3 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
