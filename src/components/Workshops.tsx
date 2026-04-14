import { motion } from 'motion/react';
import { Building2, Shield, Award, Clock, Users2, CheckCircle2 } from 'lucide-react';

const sectors = [
  { 
    name: 'Corporate', 
    img: 'https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/corporate%201.jpg?alt=media',
  },
  { 
    name: 'Women Groups', 
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
  },
  { 
    name: 'Societies', 
    img: 'https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/womensafety.jpg?alt=media',
  },
  { 
    name: 'NGOs', 
    img: 'https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/ngo.jpg?alt=media',
  },
  {
    name: 'Education Institutes',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Personal 1-on-1 Training',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  }
];

const curriculum = [
  { title: 'Self Defence', icon: Shield, desc: 'Control the situation before it controls you.' },
  { title: 'Awareness', icon: Clock, desc: 'Detect danger early and stay ahead.' },
  { title: 'Night Safety', icon: Users2, desc: 'Move smart when visibility drops.' },
  { title: 'Combat Basics', icon: Award, desc: 'Simple techniques. Real impact.' },
  { title: 'Confidence', icon: Building2, desc: 'Build presence that prevents conflict.' },
];

const whyDefendPro = [
  { title: 'Certified Trainers', desc: 'Led by professionals with real-world experience.' },
  { title: 'Real Training, Not Demos', desc: 'No theory. Only practical, usable skills.' },
  { title: 'Custom Programs', desc: 'Tailored to your environment and risk level.' },
  { title: 'Suitable for All Ages', desc: 'Adaptable training for every individual.' },
];

export default function Workshops() {
  return (
    <>
      <section id="workshops" className="py-10 md:py-[60px] bg-tactical-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4">
            Workshop <span className="text-tactical-primary">Ecosystem</span>
          </h2>
          <p className="text-tactical-muted tracking-widest uppercase text-sm font-bold">
            Real-world situations, not just theory
          </p>
        </div>

        {/* A. WHO IT’S FOR (IMAGE CARDS) */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-headline font-bold text-tactical-text uppercase mb-12 border-l-[6px] border-tactical-primary pl-6">
            Who It's For
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {sectors.map((sector, index) => (
              <motion.div 
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[16/10] w-full rounded-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={sector.img} 
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  alt={sector.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <h4 className="text-sm md:text-lg font-headline font-medium text-white tracking-wide">{sector.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* B. WHAT WE TEACH (APPLE-STYLE PREMIUM) */}
    <section className="py-10 md:py-[60px] w-full bg-[#0b0b0b] box-border m-0">
      <div className="max-w-[1100px] mx-auto w-full px-4 md:px-5 box-border">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <span className="text-tactical-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">What We Teach</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-tight mb-6 tracking-tighter">
            Built for real-world survival.
          </h2>
          <p className="text-[#aaa] text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
            Training that goes beyond theory. Every module is designed to prepare you for unpredictable, high-pressure situations where instinct, speed, and control matter.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-12">
          {curriculum.map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start md:items-center gap-6 md:gap-8 group"
            >
              <item.icon className="text-tactical-primary shrink-0 mt-1 md:mt-0 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,107,0,0.4)]" size={36} />
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight md:w-1/3 shrink-0">{item.title}</h4>
                <p className="text-[#aaa] text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* C. WHY YOU (TRUST STRIP) - APPLE STYLE */}
    <section className="pt-10 md:pt-[60px] pb-0 w-full bg-[#0b0b0b] box-border m-0 relative">
      <div className="max-w-[1100px] mx-auto w-full px-4 md:px-5 box-border relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <span className="text-tactical-secondary text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Why DefendPro</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-tight mb-6 tracking-tighter">
            Because training should work when it matters.
          </h2>
          <p className="text-[#aaa] text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
            We don’t simulate safety. We build it. Every session is grounded in real scenarios, real pressure, and real outcomes.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10">
          {whyDefendPro.map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start md:items-center gap-6 md:gap-8 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 relative mt-1 md:mt-0">
                <div className="absolute inset-0 rounded-full animate-pulse opacity-50" style={{ background: 'rgba(255,200,0,0.08)' }}></div>
                <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(255,200,0,0.08)' }}></div>
                <CheckCircle2 className="text-tactical-secondary relative z-10 group-hover:scale-110 transition-transform duration-300" size={28} />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight md:w-1/3 shrink-0 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                <p className="text-[#aaa] text-sm md:text-base font-light leading-relaxed group-hover:translate-x-1 transition-transform duration-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

