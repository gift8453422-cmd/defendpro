import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Phone, Instagram, MessageCircle, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);

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
    { name: 'Workshops', href: '#workshops', hasSub: true },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[800] transition-all duration-500 border-b bg-black/80 backdrop-blur-md border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <a href="#" className="flex items-center shrink-0">
            <img 
              src="https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776297961/IMG_20260416_053318_fbshmt.webp" 
              alt="DefendPro Academy" 
              className="h-7 md:h-8 w-auto object-contain" 
              referrerPolicy="no-referrer"
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
            className="md:hidden text-white p-2 relative z-[801]"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Full Screen Light Theme) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#FFF0E6]/95 backdrop-blur-md z-[1000] md:hidden flex flex-col overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 -ml-2 text-[#0a0a0a] hover:text-[#FF6B00] transition-colors"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
              
              <div className="text-[20px] font-headline font-black text-[#0a0a0a] tracking-tight">
                DefendPro
              </div>

              <div className="flex items-center gap-2">
                <a href="#contact" onClick={() => setIsOpen(false)} className="p-2 text-[#0a0a0a] hover:text-[#FF6B00] transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </a>
                <button className="p-2 -mr-2 text-[#0a0a0a] hover:text-[#FF6B00] transition-colors">
                  <Search size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col px-6 pt-4 pb-8">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-black/10">
                  <div className="flex items-center justify-between w-full group">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.hasSub && !workshopsOpen) {
                          e.preventDefault();
                          setWorkshopsOpen(true);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className="py-[20px] text-[36px] sm:text-[42px] font-headline font-black text-[#0a0a0a] leading-none tracking-tight group-hover:text-[#FF6B00] transition-colors flex-1"
                    >
                      {link.name}
                    </a>
                    {link.hasSub && (
                      <button 
                        onClick={() => setWorkshopsOpen(!workshopsOpen)}
                        className="p-2 text-[#0a0a0a] hover:text-[#FF6B00] transition-colors focus:outline-none"
                        aria-label="Toggle submenu"
                      >
                        {workshopsOpen ? <Minus size={28} strokeWidth={2} /> : <Plus size={28} strokeWidth={2} />}
                      </button>
                    )}
                  </div>
                  
                  {link.hasSub && (
                    <AnimatePresence>
                      {workshopsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-4 pb-[20px] pt-2">
                            <div className="flex flex-col gap-3">
                              <a href="#workshops" onClick={() => setIsOpen(false)} className="text-[16px] font-sans font-medium text-[#888] hover:text-[#FF6B00] transition-colors">Women Safety</a>
                              <a href="#workshops" onClick={() => setIsOpen(false)} className="text-[16px] font-sans font-medium text-[#888] hover:text-[#FF6B00] transition-colors">Kids Program</a>
                            </div>
                            <div className="flex flex-col gap-3">
                              <a href="#workshops" onClick={() => setIsOpen(false)} className="text-[16px] font-sans font-medium text-[#888] hover:text-[#FF6B00] transition-colors">Corporate</a>
                              <a href="#workshops" onClick={() => setIsOpen(false)} className="text-[16px] font-sans font-medium text-[#888] hover:text-[#FF6B00] transition-colors">Personal Coaching</a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="px-6 py-8 flex items-center justify-between mt-auto">
              <span className="text-[#888] text-[13px] font-sans">defendproacademy.com</span>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/defendproacademy" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#contact" className="text-[#888] hover:text-[#FF6B00] transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
