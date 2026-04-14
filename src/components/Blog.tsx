import { motion } from 'motion/react';

const posts = [
  {
    title: "The Psychology of Survival",
    excerpt: "Understanding the 'Fight or Flight' response and how to override it with tactical training.",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Urban Awareness 101",
    excerpt: "How to spot potential threats before they escalate in a crowded urban environment.",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The Vanguard Mindset",
    excerpt: "Why physical strength is only 20% of the battle when it comes to real-world defense.",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-10 md:py-[60px] bg-tactical-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-tactical-text uppercase tracking-tighter mb-4">
            TACTICAL <span className="text-tactical-primary">INSIGHTS</span>
          </h2>
          <p className="text-tactical-muted tracking-widest uppercase text-sm font-bold">
            Intelligence for the modern guardian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tactical-surface border border-tactical-muted/10 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-tactical-primary font-headline font-bold text-xs tracking-widest uppercase mb-3 block">
                  {post.date}
                </span>
                <h3 className="text-2xl font-headline font-bold text-tactical-text uppercase mb-4 group-hover:text-tactical-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-tactical-text/70 mb-6 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#contact" className="inline-block text-tactical-text font-headline font-bold text-sm uppercase tracking-widest border-b-2 border-tactical-primary pb-1 hover:text-tactical-primary transition-colors">
                  Read Intelligence
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
