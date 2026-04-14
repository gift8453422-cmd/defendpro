import { motion } from 'motion/react';
import { Shield, Award, Star } from 'lucide-react';

import img19965 from '../assets/media/19965.jpg';
import img19990 from '../assets/media/19990.jpg';

const instructors = [
  {
    name: 'Ravi',
    role: 'Lead Tactical Instructor',
    expertise: 'Tactical Combat & Self-Defense',
    bio: 'With over a decade of experience in martial arts and tactical training, Ravi specializes in high-pressure combat scenarios and real-world defense techniques. He has trained hundreds of individuals in effective survival strategies.',
    image: img19965
  },
  {
    name: 'Specialist X',
    role: 'Tactical Specialist',
    expertise: 'Stealth & Urban Survival',
    bio: 'A specialist in urban survival and situational awareness, our anonymous instructor brings years of field experience in security and tactical operations. Expertise includes threat detection and non-verbal de-escalation.',
    image: img19990
  }
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-tactical-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4">
            Elite <span className="text-tactical-primary">Instructors</span>
          </h2>
          <p className="text-tactical-muted tracking-widest uppercase text-sm font-bold">
            The backbone of your training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-tactical-surface border border-white/5 rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-bg via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-tactical-primary" size={18} />
                  <span className="text-tactical-primary text-xs font-bold uppercase tracking-widest">{instructor.role}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4 uppercase">{instructor.name}</h3>
                
                <div className="flex items-center gap-2 mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Award className="text-tactical-secondary" size={20} />
                  <span className="text-sm font-bold text-tactical-text">{instructor.expertise}</span>
                </div>
                
                <p className="text-tactical-muted text-sm leading-relaxed italic">
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
