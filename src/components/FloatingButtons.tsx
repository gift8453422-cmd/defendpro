import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[1000] flex flex-col gap-3 md:gap-4">
      <motion.a 
        href="https://wa.me/917738408406"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors"
      >
        <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
      </motion.a>
      <motion.a 
        href="tel:7738408406"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-tactical-primary text-tactical-bg rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7" />
      </motion.a>
    </div>
  );
}
