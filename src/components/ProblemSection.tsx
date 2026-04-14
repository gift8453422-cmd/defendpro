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
      title: "No practical training",
      desc: "Most programs focus on demos. We focus on high-stress drills that simulate actual threats."
    },
    {
      icon: AlertTriangle,
      title: "Risk is everywhere",
      desc: "From office commutes to travel and home safety, the world is changing. Are you prepared?"
    }
  ];

  return (
    <section className="bg-tactical-surface px-6 relative overflow-hidden z-[2]" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Background Danger Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tactical-primary/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4"
          >
            Safety <span className="text-tactical-primary italic">incidents</span> are rising
          </motion.h2>
          <p className="text-xl text-tactical-muted tracking-widest uppercase font-bold">
            Awareness is <span className="text-tactical-primary">not enough</span> anymore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-tactical-bg p-8 border border-tactical-muted/10 hover:border-tactical-primary/50 transition-all group"
            >
              <point.icon className="text-tactical-primary mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-headline font-bold text-tactical-text mb-4 uppercase tracking-tight">
                {point.title.split(' ').map((word, i) => (
                  <span key={i} className={['freeze', 'practical', 'risk', 'danger', 'incident'].includes(word.toLowerCase()) ? 'text-tactical-primary' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h3>
              <p className="text-tactical-muted leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
