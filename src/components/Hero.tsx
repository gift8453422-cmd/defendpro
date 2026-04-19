import { motion } from 'motion/react';
import { Shield, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full m-0 p-0 flex items-end overflow-hidden bg-tactical-bg">
      {/* Background with cinematic video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-tactical-bg">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover object-[75%_center] md:object-center opacity-100 scale-[1.01]"
        >
          <source src="https://res.cloudinary.com/dyyvibn56/video/upload/q_auto/f_auto/v1776608379/hero2_ghwflm.mp4" type="video/mp4" />
        </video>
        {/* Subtle static overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Left-to-right gradient for text readability on mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        {/* Bottom fade into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#0b0b0b]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-16 md:pb-24 pt-32">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-headline text-xs font-bold text-tactical-primary tracking-[0.5em] uppercase">
              STATUS: OPERATIONAL
            </span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-tactical-primary"></div>
              <div className="w-1.5 h-1.5 bg-tactical-primary"></div>
              <div className="w-1.5 h-1.5 bg-tactical-primary"></div>
              <div className="w-1.5 h-1.5 bg-white/20"></div>
            </div>
          </div>

          <h1 
            className="text-white leading-[1.1] tracking-tighter mb-12 uppercase font-backfired font-normal"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 96px)' }}
            aria-label="One incident changes everything"
          >
            ONE<br />
            INCIDENT<br />
            <span className="text-tactical-primary">CHANGES</span><br />
            EVERYTHING.
          </h1>

          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <a 
              href="#contact" 
              className="group relative bg-[#ff5f1f] text-black px-10 py-5 font-headline font-black uppercase tracking-[0.2em] hover:-translate-y-1 transition-all duration-500 rounded-sm overflow-hidden text-center"
              aria-label="Initiate tactical training"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Initiate Training
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 skew-x-12 scale-150"></div>
              {/* Pulsing glow behind button */}
              <div className="absolute -inset-2 bg-tactical-primary opacity-30 blur-xl rounded-full group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
            </a>
            
            <a 
              href="#mission" 
              className="group relative bg-transparent border-2 border-white/20 text-white px-10 py-5 font-headline font-black uppercase tracking-[0.2em] backdrop-blur-md hover:border-white hover:bg-white text-center hover:text-black transition-all duration-500 rounded-sm"
              aria-label="Learn about our mission"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Our Mission
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


