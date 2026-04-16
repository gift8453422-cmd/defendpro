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
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Elite <span className="text-tactical-secondary">Instructors</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            THE BACKBONE OF YOUR TRAINING.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-wide group-hover:text-tactical-primary transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-tactical-secondary text-xs font-bold uppercase tracking-widest mt-2">
                  {instructor.role}
                </p>
              </div>
              <div className="md:text-right md:max-w-md">
                <p className="text-stone-400 text-sm leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
