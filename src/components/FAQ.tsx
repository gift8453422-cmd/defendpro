import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What age groups can join DefendPro Academy?",
    answer: "We have programs for all ages. Our workshops are tailored specifically for children (school level), young adults (college level), and working professionals. We adjust the intensity and techniques based on the age group's physical capabilities and situational needs."
  },
  {
    question: "Do I need prior martial arts experience?",
    answer: "Absolutely not. Our programs are designed for beginners. We focus on 'Real-World Self-Defence' which relies on simple, effective movements and situational awareness rather than complex martial arts forms."
  },
  {
    question: "Are the corporate workshops customizable?",
    answer: "Yes. We specialize in customized corporate safety workshops. We can focus on specific areas like travel safety, night-shift security, office-space awareness, or general fitness and stress management based on your company's requirements."
  },
  {
    question: "Where are the training sessions conducted?",
    answer: "We are based in Mumbai but provide services all over India. For personal and group training, we offer doorstep services. For workshops, we can conduct sessions at your office, housing society, or any designated community space."
  },
  {
    question: "Is certification provided after the training?",
    answer: "Yes, participants of our professional training modules and workshops receive an official certification from DefendPro Academy, acknowledging their successful completion of the tactical safety program."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-tactical-muted/10">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-headline font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-tactical-primary' : 'text-tactical-text group-hover:text-tactical-primary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 flex items-center justify-center border ${isOpen ? 'border-tactical-primary bg-tactical-primary text-tactical-bg' : 'border-tactical-muted/20 text-tactical-muted'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-tactical-muted leading-relaxed font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-tactical-surface px-6 relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Icon */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.02] pointer-events-none">
        <HelpCircle size={400} className="text-tactical-primary" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            Tactical <span className="text-tactical-secondary">Intel</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            FREQUENTLY ASKED QUESTIONS.
          </p>
        </div>

        <div className="bg-tactical-bg p-8 md:p-12 border border-white/5 shadow-2xl rounded-sm">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 text-xs font-headline tracking-[0.3em] uppercase mb-4">
            STILL HAVE QUESTIONS?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 text-tactical-primary font-headline font-black text-xl uppercase tracking-widest hover:brightness-125 transition-all group"
          >
            Contact Command Center
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
