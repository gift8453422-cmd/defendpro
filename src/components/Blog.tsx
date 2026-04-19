import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defendproIntroMarkdown } from '../content/article';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const posts = [
  {
    title: "The Vanguard Mindset: Welcome to DefendPro",
    category: "Company News",
    excerpt: "Safety requires proactive preparation. In a world of evolving environments, awareness paired with decisive action ensures security. You are always prepared to act.",
    date: "FEATURED INTEL",
    content: defendproIntroMarkdown,
  },
  {
    title: "Urban Awareness Mastery",
    category: "Tactical Insights",
    excerpt: "Spot potential threats before they escalate in a crowded urban environment. Master the art of environmental scanning and anomaly detection.",
    date: "ARCHIVED DISPATCH",
  },
  {
    title: "The Psychology of Survival",
    category: "Training Tips",
    excerpt: "Understand the biological response to extreme pressure and override hesitation with advanced tactical conditioning.",
    date: "ARCHIVED DISPATCH",
  }
];

export default function Blog() {
  const [activePostContent, setActivePostContent] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tactical Insights", "Training Tips", "Company News"];
  const filteredPosts = posts.filter(post => activeCategory === "All" || post.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activePostContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePostContent]);

  return (
    <section id="blog" className="bg-tactical-bg px-6 border-t border-white/5 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            TACTICAL <span className="text-tactical-secondary">INSIGHTS</span>
          </h2>
          <p className="text-stone-500 tracking-[0.4em] uppercase text-xs font-bold">
            INTELLIGENCE FOR THE MODERN GUARDIAN.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-headline text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-tactical-primary text-tactical-bg"
                  : "border border-white/10 text-stone-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article 
                layout
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full border-b border-white/5 py-12 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-16 group relative"
              >
              {/* Meta information */}
              <div className="lg:w-1/4 shrink-0 mt-2">
                <span className="text-tactical-secondary font-headline font-bold text-[10px] tracking-[0.2em] uppercase">
                  {post.date}
                </span>
              </div>
              
              {/* Content Preview */}
              <div className="lg:w-3/4">
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-white uppercase tracking-tight mb-6 group-hover:text-tactical-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  {post.excerpt}
                </p>
                {post.content ? (
                  <button 
                    onClick={() => setActivePostContent(post.content)}
                    className="inline-flex items-center gap-3 text-tactical-text font-headline font-bold text-xs uppercase tracking-[0.2em] group/btn"
                  >
                    <span className="border-b-2 border-tactical-primary pb-1 group-hover/btn:text-tactical-primary transition-colors">Read Full Dispatch</span>
                    <span className="text-tactical-primary group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                  </button>
                ) : (
                  <span className="mt-4 inline-block text-stone-600 font-headline font-bold text-xs uppercase tracking-[0.2em]">
                    REPORT CLASSIFIED
                  </span>
                )}
              </div>
            </motion.article>
          ))}
          
          {filteredPosts.length === 0 && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 border border-white/5 bg-white/[0.02] rounded-sm mt-8"
            >
              <h4 className="text-xl font-headline font-bold text-stone-400 uppercase tracking-widest mb-4">
                No Intel Available
              </h4>
              <p className="text-stone-500 font-light text-sm">
                No dispatch reports have been uploaded to this category yet.
              </p>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activePostContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1100] bg-tactical-bg/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-[100svh] py-16 px-6 md:px-12 relative flex justify-center">
              {/* Close Button */}
              <button 
                onClick={() => setActivePostContent(null)}
                className="fixed top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-tactical-surface border border-white/10 hover:bg-tactical-primary hover:text-tactical-bg hover:border-tactical-primary rounded-full flex items-center justify-center text-white transition-all z-50 shadow-2xl"
              >
                <X size={24} />
              </button>
              
              {/* Markdown Content Area */}
              <div className="max-w-3xl w-full markdown-body pt-8 pb-32">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {activePostContent}
                </Markdown>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
