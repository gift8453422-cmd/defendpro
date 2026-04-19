import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defendproIntroMarkdown, awarenessToActionMarkdown } from '../content/article';
import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

const DUMMY_POSTS = [
  {
    title: "From Awareness to Action: How Real Training Builds Confidence",
    category: "Tactical Insights",
    excerpt: "Recognizing safety risks is a vital first step, yet it frequently reveals the opportunity to prepare for action if a real situation arises. Decisiveness is a key to safety.",
    date: "FEATURED INTEL",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/v1776610681/From_Awareness_to_Action_rrnceo.jpg",
    content: awarenessToActionMarkdown,
  },
  {
    title: "The Vanguard Mindset: Welcome to DefendPro",
    category: "Company News",
    excerpt: "Safety requires proactive preparation. In a world of evolving environments, awareness paired with decisive action ensures security. You are always prepared to act.",
    date: "LATEST DISPATCH",
    image: "https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776295675/20197_d4cqaz.jpg",
    content: defendproIntroMarkdown,
  },
  {
    title: "Urban Awareness Mastery",
    category: "Tactical Insights",
    excerpt: "Observe your surroundings and identify anomalies before they escalate. Master the art of environmental scanning and situation detection.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776294241/corporate_1_egerbn.jpg",
  },
  {
    title: "The Psychology of Survival",
    category: "Training Tips",
    excerpt: "Understand the biological response to extreme pressure and achieve tactical conditioning. Balance your instinct with refined responses.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dbnjgo0o2/image/upload/v1776294657/one_and_one_1_qexm6c.jpg",
  }
];

export default function Blog() {
  const [activePostContent, setActivePostContent] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<typeof DUMMY_POSTS>([]);

  // Simulate network fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(DUMMY_POSTS);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
              disabled={isLoading}
              className={`px-6 py-2 rounded-full font-headline text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-tactical-primary text-tactical-bg"
                  : "border border-white/10 text-stone-400 hover:text-white hover:border-white/30"
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              // Skeleton Loading State
              <motion.div
                key="loading-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col w-full"
              >
                {Array.from({ length: 3 }).map((_, skel) => (
                  <div key={skel} className="w-full border-b border-white/5 py-12 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-16">
                    <div className="lg:w-1/4 shrink-0 mt-2 flex flex-col gap-4">
                       <div className="h-4 bg-white/5 rounded-sm w-32 animate-pulse"></div>
                       <div className="aspect-video lg:aspect-square w-full bg-white/5 rounded-sm animate-pulse hidden lg:block"></div>
                    </div>
                    <div className="lg:w-3/4 flex flex-col gap-4">
                      <div className="aspect-video w-full bg-white/5 rounded-sm animate-pulse lg:hidden mb-4"></div>
                      <div className="h-8 md:h-10 bg-white/5 rounded-sm w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded-sm w-full animate-pulse mt-2"></div>
                      <div className="h-4 bg-white/5 rounded-sm w-5/6 animate-pulse"></div>
                      <div className="w-32 h-8 bg-tactical-primary/10 rounded-sm mt-4 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              // Actual Posts
              filteredPosts.map((post) => (
                <motion.article 
                  layout
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full border-b border-white/5 py-12 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 group relative"
                >
                  {/* Meta & Thumbnail (Desktop Left) */}
                  <div className="lg:w-1/3 xl:w-1/4 shrink-0 mt-2 flex flex-col gap-6">
                    <span className="text-tactical-secondary font-headline font-bold text-[10px] tracking-[0.2em] uppercase">
                      {post.date}
                    </span>
                    {post.image && (
                      <div className="aspect-video lg:aspect-square w-full overflow-hidden border border-white/5 group-hover:border-tactical-primary/30 transition-colors">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Content Preview */}
                  <div className="lg:w-2/3 xl:w-3/4">
                    <h3 className="text-3xl md:text-3xl lg:text-4xl font-headline font-bold text-white uppercase tracking-tight mb-6 group-hover:text-tactical-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed mb-8 max-w-2xl line-clamp-3">
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
              ))
            )}
            
            {!isLoading && filteredPosts.length === 0 && (
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
              <div className="max-w-3xl w-full markdown-body pt-8 pb-32 flex flex-col">
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
