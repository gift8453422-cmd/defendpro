import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[1000] flex flex-col gap-3">
      {/* Container Background Blur */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <motion.a 
          href="https://wa.me/917738408406"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-shadow duration-300 relative group"
        >
          {/* Subtle pulse behind the icon */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500"></div>
          <MessageSquare fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
        </motion.a>
        
        <motion.a 
          href="tel:7738408406"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-tactical-primary to-[#ff8c42] text-tactical-bg rounded-full flex items-center justify-center shadow-lg hover:shadow-tactical-primary/30 transition-shadow duration-300 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-tactical-primary opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500"></div>
          <Phone fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
        </motion.a>
      </div>
    </div>
  );
}
