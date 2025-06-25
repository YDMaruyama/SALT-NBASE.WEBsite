import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div id="home" className="relative pt-20">
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="https://github.com/YDMaruyama/SALT-NBASE./blob/main/images/IMG_2282%202.jpeg?raw=true"
            alt="塩洞窟 - Salt Cave Meditation Space"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </motion.div>

        <motion.div 
          className="absolute left-20 top-1/2 -translate-y-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif tracking-wider mb-6">
            楽しく健康に、<br />
            塩洞窟と排毒。
          </h1>
          <p className="text-xl md:text-2xl tracking-wider">
            心と体の真の調和を目指して
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="mb-2">Scroll</span>
          <div className="w-px h-8 bg-white/70 animate-bounce"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-8">
            <span className="text-sage-600 font-medium">NEWS</span>
            <span className="text-natural-600">2024.04.18</span>
            <span className="text-natural-800">新メニュー「チベット漢方蒸し」導入のお知らせ</span>
          </div>
        </div>
      </div>
    </div>
  );
}