import { motion } from 'motion/react';
import { Building2, Shield, Award, Clock, Users2, CheckCircle2 } from 'lucide-react';

const sectors = [
  { 
    name: 'Corporate', 
    img: 'https://res.cloudinary.com/dyyvibn56/image/upload/v1776601578/Women_Empowerment_t5kjzn.jpg',
  },
  { 
    name: 'Women Groups', 
    img: 'https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776294240/womensafety_1_ernchj.jpg',
  },
  { 
    name: 'Societies', 
    img: 'https://res.cloudinary.com/dyyvibn56/image/upload/v1776602381/Society1_lrisca.jpg',
  },
  { 
    name: 'NGOs', 
    img: 'https://res.cloudinary.com/dyyvibn56/image/upload/v1776601578/NGOs_qi6v8k.jpg',
  },
  {
    name: 'Education Institutes',
    img: 'https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776294241/corporate_1_egerbn.jpg',
  },
  {
    name: 'Personal 1-on-1 Training',
    img: 'https://res.cloudinary.com/dyyvibn56/image/upload/v1776602150/One_andone_mkjlka.jpg',
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
    <section id="workshops" className="bg-tactical-bg px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            Workshop <span className="text-tactical-primary">Ecosystem</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            REAL-WORLD SITUATIONS. NOT JUST THEORY.
          </p>
        </div>

        {/* A. WHO IT’S FOR (IMAGE CARDS) */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-headline font-bold text-tactical-secondary uppercase mb-6 border-l-[6px] border-tactical-secondary pl-8 tracking-tight">
            Who It's For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div 
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[16/10] w-full rounded-sm overflow-hidden group cursor-pointer border border-white/5 shadow-2xl"
              >
                <img 
                  src={sector.img} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  alt={sector.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h4 className="text-2xl font-headline font-bold text-white tracking-tight uppercase group-hover:text-tactical-primary transition-colors">{sector.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* B. WHAT WE TEACH (APPLE-STYLE PREMIUM) */}
        <div className="mb-12 pt-12 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-tactical-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">CURRICULUM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-tight mb-6 tracking-tighter">
              Built for <span className="text-tactical-secondary">real-world</span> survival.
            </h2>
            <p className="text-stone-400 max-w-3xl font-light leading-relaxed">
              Training that goes beyond theory. Every module is designed to prepare you for unpredictable, high-pressure situations where instinct, speed, and control matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {curriculum.map((item, index) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <item.icon className="text-tactical-primary shrink-0 mt-1 transition-transform duration-500 group-hover:scale-110" size={24} />
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-headline font-bold text-white tracking-tight uppercase group-hover:text-tactical-primary transition-colors">{item.title}</h4>
                  <p className="text-stone-400 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* C. WHY YOU (TRUST STRIP) - APPLE STYLE */}
        <div className="pt-12 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-tactical-secondary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">WHY DEFENDPRO</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-tight mb-6 tracking-tighter">
              Because training should <span className="text-tactical-primary">work</span> when it matters.
            </h2>
            <p className="text-stone-400 max-w-3xl font-light leading-relaxed">
              We don’t simulate safety. We build it. Every session is grounded in real scenarios, real pressure, and real outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {whyDefendPro.map((item, index) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <CheckCircle2 className="text-tactical-secondary shrink-0 mt-1 transition-transform duration-500 group-hover:scale-110" size={24} />
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-headline font-bold text-white tracking-tight uppercase group-hover:text-tactical-secondary transition-colors">{item.title}</h4>
                  <p className="text-stone-400 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

