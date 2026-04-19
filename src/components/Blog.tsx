import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defendproIntroMarkdown } from '../content/article';

const posts = [
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
    <section id="blog" className="bg-tactical-bg px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            TACTICAL <span className="text-tactical-secondary">INSIGHTS</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            INTELLIGENCE FOR THE MODERN GUARDIAN.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Featured Article (Markdown) */}
          <div className="lg:col-span-8">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-tactical-surface border border-white/5 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-tactical-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 w-full">
                <span className="text-tactical-primary font-headline font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                  FEATURED INTEL — READ TIME: 3 MIN
                </span>
                
                {/* The beautifully formatted Markdown will be injected here */}
                <div className="markdown-body">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {defendproIntroMarkdown}
                  </Markdown>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar / More Articles */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight border-b border-white/10 pb-4 mb-2">
              Recent Dispatches
            </h3>
            
            {posts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-4 border-b border-white/5 pb-8 last:border-0"
              >
                <div className="aspect-video w-full overflow-hidden rounded-sm border border-white/5 hidden md:block">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-tactical-secondary font-headline font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                    {post.date}
                  </span>
                  <h4 className="text-lg font-headline font-bold text-tactical-text uppercase mb-2 group-hover:text-tactical-primary transition-colors tracking-tight leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-stone-400 font-light text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-tactical-text font-headline font-bold text-[10px] uppercase tracking-[0.2em] group/link">
                    <span className="border-b-2 border-tactical-primary pb-1 group-hover/link:text-tactical-primary transition-colors">Read Intel</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
