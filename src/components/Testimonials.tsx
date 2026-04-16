import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Manju Parmar",
    text: "I am very happy.. The training sessions were highly engaging and practical, with a good balance of theory and hands-on drills. The focus on real-life scenarios helped me understand not just what to do, but when and why",
    rating: 5,
    initial: "M"
  },
  {
    name: "Shreya Bamane",
    text: "The trainers are highly skilled, patient, and very professional. They focus not just on physical techniques, but also on building mental strength, awareness, and confidence – which is just as important for real-life situations.",
    rating: 5,
    initial: "S"
  },
  {
    name: "Parth Joshi",
    text: "Sessions at Defendpro are realistic, empowering, and incredibly effective. They teach skills you can use easily and build your confidence.",
    rating: 5,
    initial: "P"
  },
  {
    name: "manshi joshi",
    text: "They teach real-life self-defence techniques that are easy to learn and very useful. A perfect blend of discipline and physical training.",
    rating: 5,
    initial: "M"
  },
  {
    name: "Dhaval Dawda",
    text: "If you are looking for personal training for martial art, you'll get best teaching from this academy",
    rating: 5,
    initial: "D"
  },
  {
    name: "JEGAN K",
    text: "The classes usually focus on building confidence, improving body language, and understanding basic scene work😊",
    rating: 5,
    initial: "J"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-tactical-bg px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            CLIENT <span className="text-tactical-secondary">FEEDBACK</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            REAL REVIEWS FROM REAL PEOPLE.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-10">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-r from-tactical-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-l from-tactical-bg to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[450px] shrink-0 bg-[#0b0b0b] border border-white/5 p-10 rounded-sm flex flex-col justify-between group hover:border-tactical-primary/30 transition-all duration-700"
              >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, index) => (
                    <Star key={index} className="fill-tactical-primary text-tactical-primary" size={16} />
                  ))}
                </div>
                <p className="text-stone-400 leading-relaxed font-light mb-6 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-tactical-primary/10 flex items-center justify-center text-tactical-primary font-headline font-bold text-2xl group-hover:bg-tactical-primary group-hover:text-black transition-all duration-700">
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-white font-headline font-bold uppercase tracking-tight">{t.name}</h4>
                  <p className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold">Verified Student</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
