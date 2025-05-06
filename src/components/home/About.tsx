import { Mountain } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=100&w=1920",
      alt: "Tibetan Medicine 1"
    },
    {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=100&w=1920",
      alt: "Tibetan Medicine 2"
    },
    {
      src: "https://images.unsplash.com/photo-1577128634320-84f17a711b46?auto=format&fit=crop&q=100&w=1920",
      alt: "Tibetan Medicine 3"
    },
    {
      src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&q=100&w=1920",
      alt: "Tibetan Medicine 4",
      sensitive: true
    }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-sage-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] mb-8">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: image.sensitive && selectedImage !== index ? 0.75 : 1,
                  filter: image.sensitive && selectedImage !== index ? 'blur(8px)' : 'none'
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  gridColumn: index === currentIndex ? 'span 2' : 'span 1',
                  gridRow: index === currentIndex ? 'span 2' : 'span 1'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(index)}
                  className={`w-full h-full object-cover transition-all duration-300
                    ${index === currentIndex ? 'scale-100' : 'scale-95 hover:scale-100'}
                    ${image.sensitive ? 'cursor-pointer' : ''}
                  `}
                  style={{
                    imageRendering: 'crisp-edges',
                    aspectRatio: 'auto'
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors
                  ${index === currentIndex ? 'bg-sage-600' : 'bg-sage-200 hover:bg-sage-300'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl mt-8">
          <h2 className="text-3xl font-serif mb-6 text-sage-800 text-center">チベット医学療法</h2>
          <p className="text-xl font-semibold mb-4 text-natural-700 text-center">2500年続く伝承療法</p>
          <p className="text-natural-800 leading-relaxed text-center text-sm">
            チベット医学は約2500年の歴史を持つ伝統医療で、古来インドのアーユルヴェーダや中国医学の影響を受けつつ独自に発展しました。
            その理論では、人体と宇宙を構成する五大元素（地・水・火・風・空）のバランスと、三つのエネルギー（ドーシャ）の調和が健康の鍵と考えられています。
          </p>
        </div>
      </div>
    </section>
  );
}