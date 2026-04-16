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
    <section id="getting-started" className="bg-tactical-bg w-full box-border relative overflow-hidden px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full box-border">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              THE <span className="text-tactical-secondary">PROTOCOL</span>
            </h2>
            <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
              YOUR PATH TO TOTAL READINESS IN 3 STEPS.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-start text-left group bg-tactical-surface p-8 border border-white/5 hover:border-tactical-secondary/30 transition-all duration-500 rounded-sm relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 text-[120px] font-headline font-black text-white/[0.02] select-none group-hover:text-tactical-secondary/[0.05] transition-colors duration-700 leading-none">
                  {step.number}
                </div>
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-tactical-bg border border-white/5 flex items-center justify-center group-hover:border-tactical-secondary/30 transition-all duration-700 relative z-10">
                    <step.icon className="text-tactical-secondary group-hover:scale-110 transition-transform duration-700" size={24} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-headline font-bold text-tactical-text uppercase mb-4 tracking-tight group-hover:text-tactical-secondary transition-colors duration-500 relative z-10">
                  {step.title}
                </h3>
                <p className="text-stone-400 leading-relaxed text-sm relative z-10">
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
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-tactical-primary text-tactical-bg px-10 py-5 font-headline font-bold uppercase tracking-widest hover:bg-tactical-primary/90 hover:-translate-y-1 transition-all duration-500 rounded-sm shadow-xl shadow-tactical-primary/10"
          >
            Initiate Protocol
          </a>
        </motion.div>

      </div>
    </section>
  );
}
