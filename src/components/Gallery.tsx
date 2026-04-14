import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F19990.jpg?alt=media",
    title: "Tactical Drills",
    category: "Tactical"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F19996.jpg?alt=media",
    title: "Strength & Conditioning",
    category: "Fitness"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F20012.jpg?alt=media",
    title: "Combat Basics",
    category: "Training"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F20029.jpg?alt=media",
    title: "Self Defense Workshop",
    category: "Workshop"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F20038.jpg?alt=media",
    title: "Team Vanguard",
    category: "Community"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F20174.jpg?alt=media",
    title: "Elite Performance",
    category: "Training"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2F20197.jpg?alt=media",
    title: "Awareness",
    category: "Tactical"
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/sharktank-475811.firebasestorage.app/o/Gallery%2Fone%20and%20one.jpg?alt=media",
    title: "Personal Training",
    category: "Fitness"
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="pt-20 bg-[#0b0b0b] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-4">
          VANGUARD <span className="text-tactical-primary">GALLERY</span>
        </h2>
        <p className="text-tactical-muted tracking-widest uppercase text-sm font-bold">
          Visual record of readiness
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center" style={{ perspective: '1200px' }}>
        
        {/* Invisible placeholder to give the container auto height */}
        <div className="w-[260px] md:w-[400px] h-[300px] md:h-[450px] opacity-0 pointer-events-none"></div>

        {/* Edge Fades (CRITICAL) */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0b0b0b] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0b0b0b] to-transparent z-20 pointer-events-none"></div>

        {images.map((image, index) => {
          const total = images.length;
          let diff = index - currentIndex;
          
          // Handle wrap-around for continuous loop effect
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          let translateX = diff * 55; // Adjust spacing between cards
          let rotateY = 0;
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;

          if (diff === 0) {
            rotateY = 0;
            scale = 1;
            zIndex = 20;
            opacity = 1;
          } else if (diff < 0) {
            rotateY = 20;
            scale = 0.85;
            zIndex = 10 - Math.abs(diff);
            opacity = 0.6;
          } else {
            rotateY = -20;
            scale = 0.85;
            zIndex = 10 - Math.abs(diff);
            opacity = 0.6;
          }

          if (Math.abs(diff) > 2) {
            opacity = 0;
          }

          return (
            <div
              key={index}
              className="absolute w-[260px] md:w-[400px] h-[300px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                boxShadow: diff === 0 ? '0 20px 40px rgba(0,0,0,0.5)' : 'none',
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <div 
                className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"
                style={{ opacity: diff === 0 ? 1 : 0 }}
              >
                <h4 className="text-xl md:text-2xl font-headline font-black text-white uppercase leading-none">
                  {image.title}
                </h4>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-tactical-primary/50 transition-all backdrop-blur-sm">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-tactical-primary/50 transition-all backdrop-blur-sm">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
