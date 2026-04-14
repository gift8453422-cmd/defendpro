import { motion } from 'motion/react';
import { Shield, Users, MapPin } from 'lucide-react';

export default function Hero() {
  // Direct URL for the new optimized 4MB video version
  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Genz%20Ai%20University%20Create%20An%208-Second%20High-Energy%20Cinematic%20Video%20With%204%20Intense%20Sho.mp4?alt=media";

  return (
    <section className="relative h-[100vh] min-h-[100svh] w-full m-0 p-0 flex items-end overflow-hidden bg-tactical-bg">
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
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Gradient Fade to next section */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, #1f1b18 100%)' }}></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-24 md:pb-32">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-headline text-xs font-bold text-tactical-primary tracking-[0.4em] uppercase">
              Status: Operational
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-tactical-primary"></div>
              <div className="w-2 h-2 bg-tactical-primary"></div>
              <div className="w-2 h-2 bg-tactical-primary"></div>
              <div className="w-2 h-2 bg-tactical-muted/30"></div>
            </div>
          </div>

          <h1 
            className="text-tactical-text leading-[0.9] tracking-tighter mb-6 uppercase drop-shadow-2xl"
            style={{ fontFamily: 'Courier New', fontSize: '53px', fontWeight: '900', textShadow: '0 4px 24px rgba(0,0,0,0.8)' }}
          >
            ONE<br />
            INCIDENT<br />
            <span className="text-tactical-primary">CHANGES</span><br />
            EVERYTHING
          </h1>
        </motion.div>
      </div>
    </section>
  );
}


