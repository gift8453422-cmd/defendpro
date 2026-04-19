/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from './lib/firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Workshops from './components/Workshops';
import Instructors from './components/Instructors';
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
  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    }
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-tactical-bg selection:bg-tactical-primary selection:text-tactical-bg">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        
        <ProblemSection />

        {/* Mission Section */}
        <section id="mission" className="bg-tactical-bg w-full px-6 relative overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column: Title & Intro */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="border-l-[8px] border-tactical-secondary pl-8 md:pl-10 mb-12"
                >
                  <h2 
                    className="font-headline font-black text-white uppercase tracking-tighter text-4xl md:text-5xl lg:text-7xl leading-[1]"
                    aria-label="Our mission is total readiness"
                  >
                    OUR MISSION IS<br />
                    <span className="text-tactical-secondary">TOTAL READINESS.</span>
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-sm backdrop-blur-sm"
                >
                  <div className="max-w-[600px]">
                    <p className="text-[#aaa] text-[14px] leading-relaxed mb-4">
                      We don’t just teach techniques. We train you to stay calm when it matters most.
                    </p>
                    <p className="text-[#aaa] text-[14px] leading-relaxed mb-4">
                      In real situations, there’s no time to think. Your body reacts.
                    </p>
                    <p className="text-[#aaa] text-[14px] leading-relaxed">
                      That’s why our training focuses on instinct, awareness, and control — so when pressure hits, you don’t freeze… you respond.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Key Points */}
              <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-6xl font-headline font-bold text-tactical-primary mb-3 opacity-40 group-hover:opacity-100 transition-opacity">01</div>
                  <div className="text-sm font-headline font-bold tracking-[0.4em] text-tactical-secondary uppercase mb-4">PRECISION</div>
                  <p className="text-stone-400 leading-relaxed text-lg">Every movement serves a purpose. No wasted energy in the field of operation. We refine your technique until it becomes second nature.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-6xl font-headline font-bold text-tactical-primary mb-3 opacity-40 group-hover:opacity-100 transition-opacity">02</div>
                  <div className="text-sm font-headline font-bold tracking-[0.4em] text-tactical-secondary uppercase mb-4">RESILIENCE</div>
                  <p className="text-stone-400 leading-relaxed text-lg">Forging minds that remain calm and lethal under extreme environmental pressure. We build the mental fortitude required for survival.</p>
                </motion.div>
              </div>
            </div>

            {/* Featured Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full mt-24 group"
            >
              <div className="aspect-[21/9] bg-tactical-bg flex items-center justify-center p-2 border border-white/5 overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1600&auto=format&fit=crop"
                  alt="Elite Training"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 right-10 bg-tactical-primary p-8 min-w-[240px] shadow-2xl z-20 hidden md:block">
                <div className="text-6xl font-headline font-black text-tactical-bg leading-none">9+</div>
                <div className="text-xs font-headline font-bold tracking-[0.2em] text-tactical-bg uppercase mt-3">YEARS OF ELITE EXPERTISE</div>
              </div>
            </motion.div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-tactical-primary rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-tactical-primary rounded-full"></div>
          </div>
        </section>

        <Instructors />

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
