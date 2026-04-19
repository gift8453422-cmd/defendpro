import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defendproIntroMarkdown, awarenessToActionMarkdown, urbanAwarenessMarkdown, psychologySurvivalMarkdown, mentalFortitudeMarkdown, tacticalSelfRelianceMarkdown } from '../content/article';
import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

const DUMMY_POSTS = [
  {
    title: "Awareness To Action",
    category: "Tactical Insights",
    excerpt: "Recognizing safety risks is a vital first step, yet it frequently reveals the opportunity to prepare for action if a real situation arises.",
    date: "FEATURED INTEL",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/q_auto/f_auto/v1776613699/Abstract_line_art_202604192049_dvfzat.jpg",
    content: awarenessToActionMarkdown,
  },
  {
    title: "The Vanguard Mindset",
    category: "Company News",
    excerpt: "Safety requires proactive preparation. In a world of evolving environments, awareness paired with decisive action ensures security.",
    date: "LATEST DISPATCH",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/q_auto/f_auto/v1776613862/Abstract_line_art_202604192120_1_ffompo.jpg",
    content: defendproIntroMarkdown,
  },
  {
    title: "Urban Awareness Mastery",
    category: "Tactical Insights",
    excerpt: "Living in a vibrant city requires a specialized mindset. Mastery over your own awareness allows you to navigate these spaces with confidence.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/q_auto/f_auto/v1776613699/Abstract_line_art_202604192050_1_pbuy3d.jpg",
    content: urbanAwarenessMarkdown,
  },
  {
    title: "The Psychology of Survival",
    category: "Training Tips",
    excerpt: "Survival is as much a mental game as it is a physical one. Understanding and mastering this biological response is the foundation of defense.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/q_auto/f_auto/v1776613699/Abstract_flow_lines_202604192052_ttv7gs.jpg",
    content: psychologySurvivalMarkdown,
  },
  {
    title: "Tactical Resilience",
    category: "Training Tips",
    excerpt: "Tactical resilience is the ability to adapt and recover in the face of adversity. Discover the internal shield that protects your will to survive.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/q_auto/f_auto/v1776613699/Create_a_cinematic_202604192101_ffem6h.jpg",
    content: mentalFortitudeMarkdown,
  },
  {
    title: "Tactical Self-Reliance",
    category: "Tactical Insights",
    excerpt: "Self-reliance is the ultimate expression of personal empowerment. It is the realization that you are responsible for your own safety.",
    date: "ARCHIVED DISPATCH",
    image: "https://res.cloudinary.com/dyyvibn56/image/upload/v1776613699/Abstract_line_art_202604192050_duqrlx.jpg",
    content: tacticalSelfRelianceMarkdown,
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
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              // Skeleton Loading State
              Array.from({ length: 4 }).map((_, skel) => (
                <div key={skel} className="aspect-video relative overflow-hidden bg-white/5 animate-pulse rounded-sm border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col gap-3">
                    <div className="h-3 bg-white/10 w-24 rounded-sm mb-2"></div>
                    <div className="h-6 bg-white/10 w-3/4 rounded-sm"></div>
                    <div className="h-3 bg-white/10 w-full rounded-sm"></div>
                    <div className="h-3 bg-white/10 w-32 rounded-sm mt-4"></div>
                  </div>
                </div>
              ))
            ) : (
              // Actual Posts - Immersive Card Layout
              filteredPosts.map((post) => (
                <motion.article 
                  layout
                  key={post.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative h-[280px] sm:h-auto sm:aspect-video lg:aspect-[16/10] overflow-hidden cursor-pointer bg-tactical-surface border border-white/5 shadow-2xl"
                  onClick={() => post.content && setActivePostContent(post.content)}
                >
                  {/* Background Image */}
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center p-20">
                      <Loader2 className="text-tactical-primary opacity-20 animate-spin" size={48} />
                    </div>
                  )}

                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <motion.div
                      className="flex flex-col gap-3"
                      initial={false}
                      animate={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="text-tactical-primary font-headline font-bold text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase">
                          {post.date}
                        </span>
                        <span className="w-1 h-1 bg-white/20 rounded-full shrink-0"></span>
                        <span className="text-stone-300 font-headline font-bold text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase shrink-0">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tight group-hover:text-tactical-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <div className="mt-4">
                        {post.content ? (
                          <div className="inline-flex items-center gap-3 text-white font-headline font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] group/btn">
                            <span className="border-b-2 border-tactical-primary pb-1">Read Full Dispatch</span>
                            <span className="text-tactical-primary group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                          </div>
                        ) : (
                          <span className="text-stone-500 font-headline font-bold text-[10px] tracking-[0.2em] uppercase">
                            REPORT CLASSIFIED
                          </span>
                        )}
                      </div>
                    </motion.div>
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
                className="col-span-1 md:col-span-2 text-center py-24 border border-white/5 bg-white/[0.02] rounded-sm mt-4"
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
