import { motion } from 'motion/react';
import { AlertTriangle, ShieldAlert, ZapOff } from 'lucide-react';

export default function ProblemSection() {
  const points = [
    {
      icon: ZapOff,
      title: "People freeze in real situations",
      desc: "Theory isn't enough when adrenaline hits. We train your muscle memory to react instinctively."
    },
    {
      icon: ShieldAlert,
      title: "Train for Instinct, Not Just Knowledge.",
      desc: "We develop real responses through pressure-based scenarios that mirror real situations"
    },
    {
      icon: AlertTriangle,
      title: "Risk is everywhere",
      desc: "From office commutes to travel and home safety, the world is changing. Are you prepared?"
    }
  ];

  return (
    <section className="bg-tactical-surface px-6 relative overflow-hidden z-10 -mt-10 border-b border-white/5">
      {/* Background Danger Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tactical-primary/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight"
            aria-label="Safety incidents are rising"
          >
            Safety <span className="text-tactical-primary italic">incidents</span> are rising
          </motion.h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            AWARENESS IS <span className="text-tactical-primary">NOT ENOUGH</span> ANYMORE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div 
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-tactical-bg p-8 border border-white/5 hover:border-tactical-primary/30 transition-all group rounded-sm"
            >
              <point.icon className="text-tactical-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-headline font-bold text-tactical-text mb-4 uppercase tracking-tight leading-tight">
                {point.title.split(' ').map((word, i) => (
                  <span key={i} className={['freeze', 'practical', 'risk', 'danger', 'incident'].includes(word.toLowerCase()) ? 'text-tactical-primary' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h3>
              <p>
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
