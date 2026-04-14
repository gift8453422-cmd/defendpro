import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Workshops from './components/Workshops';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { motion } from 'motion/react';

export default function App() {

  return (
    <div className="min-h-screen bg-tactical-bg selection:bg-tactical-primary selection:text-tactical-bg">
      <Navbar />
      
      <main>
        <Hero />
        
        <ProblemSection />

        {/* Mission Section */}
        <section id="mission" className="bg-[#0b0b0b] w-full box-border relative overflow-hidden" style={{ padding: 'clamp(40px, 8vw, 100px) 16px clamp(80px, 10vw, 120px)' }}>
          <div className="max-w-[1100px] mx-auto relative z-10 w-full box-border flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="border-l-[6px] border-tactical-secondary pl-6 md:pl-8 mb-10 text-left"
            >
              <h2 className="font-headline font-black text-tactical-text uppercase tracking-tighter break-words" style={{ fontSize: 'clamp(28px, 6vw, 56px)', lineHeight: '1.1' }}>
                OUR MISSION IS<br />
                <span className="text-tactical-secondary">TOTAL READINESS.</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl border border-white/10 p-6 md:p-8 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <p className="text-base md:text-xl text-tactical-text/90 leading-relaxed font-light">
                At DEFENDPRO, we don't just train athletes; we forge guardians. Our philosophy is rooted in the "Tactical Vanguard" mindset—combining ruthless physical efficiency with unparalleled mental clarity. We operate at the intersection of science and instinct.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 max-w-4xl text-left w-full box-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-headline font-bold text-tactical-primary mb-2">01</div>
                <div className="text-sm font-headline font-bold tracking-[0.2em] text-tactical-muted uppercase mb-3">PRECISION</div>
                <p className="text-tactical-text/70 leading-relaxed">Every movement serves a purpose. No wasted energy in the field of operation.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-headline font-bold text-tactical-primary mb-2">02</div>
                <div className="text-sm font-headline font-bold tracking-[0.2em] text-tactical-muted uppercase mb-3">RESILIENCE</div>
                <p className="text-tactical-text/70 leading-relaxed">Forging minds that remain calm and lethal under extreme environmental pressure.</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full max-w-4xl mt-20 group box-border"
            >
              <div className="aspect-video bg-tactical-bg flex items-center justify-center p-2 border border-tactical-muted/10">
                <img 
                  className="w-full h-full object-cover grayscale brightness-90 contrast-125 transition-all duration-700 group-hover:grayscale-0" 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop"
                  alt="Elite Training"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 right-2 sm:right-0 md:right-4 bg-tactical-primary p-4 sm:p-6 w-48 sm:w-56 text-left shadow-2xl z-20">
                <div className="text-4xl sm:text-5xl font-headline font-black text-tactical-bg leading-none">9+</div>
                <div className="text-[10px] sm:text-xs font-headline font-bold tracking-widest text-tactical-bg uppercase mt-2">YEARS OF EXPERTISE</div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-tactical-primary rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-tactical-primary rounded-full"></div>
          </div>
        </section>

        <Workshops />
        <Gallery />
        <Blog />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}



