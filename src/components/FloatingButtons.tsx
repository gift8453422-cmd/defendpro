import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-6 md:right-10 z-[1000] flex flex-col gap-4">
      <motion.a 
        href="https://wa.me/917738408406"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-green-600 text-white rounded-sm flex items-center justify-center shadow-2xl hover:bg-green-500 transition-all duration-500"
      >
        <MessageSquare className="w-7 h-7 md:w-8 md:h-8" />
      </motion.a>
      <motion.a 
        href="tel:7738408406"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-tactical-primary text-tactical-bg rounded-sm flex items-center justify-center shadow-2xl hover:brightness-125 transition-all duration-500"
      >
        <Phone className="w-7 h-7 md:w-8 md:h-8" />
      </motion.a>
    </div>
  );
}
