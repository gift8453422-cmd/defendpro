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
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dbnjgo0o2/video/upload/hero_sztvum.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#0b0b0b]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center pt-24 pb-12">
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

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#contact" 
              className="bg-tactical-primary text-tactical-bg px-10 py-5 font-headline font-black uppercase tracking-widest hover:-translate-y-1 transition-all duration-500 rounded-sm shadow-2xl shadow-tactical-primary/20 text-center"
              aria-label="Initiate tactical training"
            >
              Initiate Training
            </a>
            <a 
              href="#mission" 
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 font-headline font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-500 rounded-sm text-center"
              aria-label="Learn about our mission"
            >
              Our Mission
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


