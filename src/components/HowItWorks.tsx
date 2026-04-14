import { motion } from 'motion/react';
import { Target, Crosshair, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "Contact our team to evaluate your current readiness level and identify your specific security or fitness needs.",
    icon: Target
  },
  {
    number: "02",
    title: "Select Your Path",
    description: "Choose from our specialized workshops, corporate seminars, or intensive personal combat training programs.",
    icon: Crosshair
  },
  {
    number: "03",
    title: "Execute & Evolve",
    description: "Lock in your session, show up, and begin the transformation. We forge muscle memory and mental resilience.",
    icon: ShieldCheck
  }
];

export default function HowItWorks() {
  return (
    <section id="getting-started" className="bg-[#0b0b0b] w-full box-border relative overflow-hidden py-10 md:py-[60px] px-4 md:px-6">
      <div className="max-w-[1100px] mx-auto w-full box-border">
        
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4">
              THE <span className="text-tactical-primary">PROTOCOL</span>
            </h2>
            <p className="text-tactical-muted tracking-widest uppercase text-xs md:text-sm font-bold">
              Your path to total readiness in 3 steps
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/5 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon & Number Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-[#0e0e0e] border border-white/10 flex items-center justify-center group-hover:border-tactical-primary/50 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] transition-all duration-500 relative z-10">
                    <step.icon className="text-tactical-secondary group-hover:scale-110 transition-transform duration-500" size={36} />
                  </div>
                  <div className="absolute -top-4 -right-4 text-5xl font-headline font-black text-white/5 select-none group-hover:text-tactical-primary/20 transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-headline font-bold text-tactical-text uppercase mb-4 tracking-wide group-hover:text-tactical-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-tactical-text/70 leading-relaxed font-light text-sm md:text-base max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-tactical-primary text-tactical-bg px-8 py-4 font-headline font-bold uppercase tracking-widest hover:bg-tactical-primary/90 hover:scale-105 transition-all duration-300"
          >
            Initiate Protocol
          </a>
        </motion.div>

      </div>
    </section>
  );
}
