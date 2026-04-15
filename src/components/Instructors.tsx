import { motion } from 'motion/react';
import { Shield, Award, Star } from 'lucide-react';

const instructors = [
  {
    name: 'Ravi',
    role: 'Lead Tactical Instructor',
    expertise: 'Tactical Combat & Self-Defense',
    bio: 'With over a decade of experience in martial arts and tactical training, Ravi specializes in high-pressure combat scenarios and real-world defense techniques. He has trained hundreds of individuals in effective survival strategies.',
    image: '/19965.jpg'
  },
  {
    name: 'Specialist X',
    role: 'Tactical Specialist',
    expertise: 'Stealth & Urban Survival',
    bio: 'A specialist in urban survival and situational awareness, our anonymous instructor brings years of field experience in security and tactical operations. Expertise includes threat detection and non-verbal de-escalation.',
    image: '/19990.jpg'
  }
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-tactical-bg px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Elite <span className="text-tactical-secondary">Instructors</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold max-w-2xl mx-auto">
            THE BACKBONE OF YOUR TRAINING. FORGED THROUGH YEARS OF FIELD EXPERIENCE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto justify-center">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-tactical-surface border border-white/5 rounded-sm overflow-hidden group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-bg via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-tactical-primary" size={16} />
                  <span className="text-tactical-primary text-xs font-bold uppercase tracking-widest">{instructor.role}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-white mb-6 uppercase tracking-tight">{instructor.name}</h3>
                
                <div className="flex items-center gap-3 mb-6 p-4 bg-white/5 rounded-sm border border-white/10">
                  <Award className="text-tactical-secondary" size={20} />
                  <span className="text-sm font-bold text-tactical-text tracking-wide uppercase">{instructor.expertise}</span>
                </div>
                
                <p className="text-stone-400 text-base leading-relaxed italic border-l-2 border-tactical-primary/30 pl-4">
                  "{instructor.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
