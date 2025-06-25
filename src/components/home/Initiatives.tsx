import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Leaf, Heart, Globe, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface Initiative {
  title: string;
  description: string;
  image: string;
  icon: typeof Leaf;
}

export function Initiatives() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const initiatives: Initiative[] = [
    {
      title: "浄化瞑想塩洞窟",
      description: "浄化作用の高い、自然岩塩と海塩をバランスよく配合した塩洞窟が、瞑想に入りやすい環境を作り出します。天然塩のエアロゾルが気道に入り、気管支の粘膜に作用し、呼吸器系の排毒に良いとされています。遮断された空間で導入瞑想を行うことで、瞑想が苦手な方でもプロの誘導によりネガティブをポジティブに変えていく極上の瞑想体験が可能となり、マインドフルネスで精神の排毒も行えます。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2294.JPG?raw=true",
      icon: Leaf
    },
    {
      title: "コミュニティースペース",
      description: "大人が思い切り遊べるコミュニティーとスペースを作りました！イベントや多種多様な趣味を広げる場としてご利用ください。ご希望により飲食・施術などの提供にも応じます。健康と楽しみの両立が実現できる隠れ家的なスペースで気の合う仲間でワイワイと過ごす時間を思い切り楽しんでみませんか？",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/MG_1601.JPG?raw=true",
      icon: Heart
    },
    {
      title: "チベット医学療法",
      description: "チベット医学は約2500年の歴史を持つ伝統医療で、古来インドのアーユルヴェーダや中国医学の影響を受けつつ独自に発展しました。SALT'NBASE.は、チベット漢方蒸しをはじめ、チベット現地から直輸入したオイルを使用しています。現地から直輸入した天然100%のチベット漢方薬から抽出したオイルを使用し、皮膚から直接浸透させることで血液や体液の循環を活性化します。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2309.jpeg?raw=true",
      icon: Globe
    },
    {
      title: "腸内活性料理",
      description: "100年以上続く老舗の豆腐専門店が誇る無農薬有機大豆料理をはじめ、腸内環境の整備に重点を置いた精進料理をベースに提供します。調理器具にもこだわり、テフロン加工不使用・グルテンフリーが基本です。健康的な食生活をサポートし、内側からの美と健康を促進します。",
      image: "https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2284.JPG?raw=true",
      icon: Users
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % initiatives.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  useEffect(() => {
    let intervalId: number;
    
    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section id="initiatives" ref={sectionRef} className="py-12 bg-natural-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif text-center mb-12 text-sage-800">SALT'NBASE.の取り組み</h2>
        
        <div className="relative">
          <div 
            className="relative min-h-[400px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                      <img
                        src={initiatives[currentIndex].image}
                        alt={initiatives[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      {React.createElement(initiatives[currentIndex].icon, {
                        className: "w-8 h-8 text-sage-600"
                      })}
                      <h3 className="text-2xl font-serif text-sage-800">{initiatives[currentIndex].title}</h3>
                    </div>
                    <p className="text-natural-700 leading-relaxed">
                      {initiatives[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-10">
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
                aria-label="Previous initiative"
              >
                <ChevronLeft className="w-6 h-6 text-sage-600" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
                aria-label="Next initiative"
              >
                <ChevronRight className="w-6 h-6 text-sage-600" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8 relative z-20">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-sage-600' : 'bg-sage-200 hover:bg-sage-300'
                }`}
                aria-label={`Go to initiative ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}