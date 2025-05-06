import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Heart, Mountain, Flower2, Plus } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  target: string[];
  icon: typeof Leaf;
}

const plans: Plan[] = [
  {
    id: 'meditation',
    name: "塩洞窟浄化瞑想プログラム",
    price: "¥9,800",
    description: "天然岩塩から放出されるマイナスイオンで深いリラックス効果を体験。専門インストラクターによる呼吸法・瞑想ガイダンスのもと、最適温度・湿度管理された快適空間で施術を行います。",
    features: [
      "天然塩洞窟での瞑想（60分）",
      "循環排毒体操（45分）",
      "オーガニック精進料理（60分）"
    ],
    target: [
      "ストレス解消をお求めの方",
      "呼吸器系の健康改善をお考えの方",
      "心身のリフレッシュを目指す方"
    ],
    icon: Mountain
  },
  {
    id: 'tibet',
    name: "チベットオイルマッサージ＆チベット薬草蒸し",
    price: "¥9,800",
    description: "チベット伝統の手技と現地直輸入のオイルを使用。深い癒しと共に、体内の毒素排出を促進し、心身の調和を取り戻します。",
    features: [
      "チベットオイルマッサージ（30分）",
      "チベット薬草蒸し（60分）"
    ],
    target: [
      "深い癒しをお求めの方",
      "冷え性でお悩みの方",
      "デトックスをお考えの方"
    ],
    icon: Heart
  },
  {
    id: 'henna',
    name: "発酵排毒ヘナ＆チベット薬草蒸し",
    price: "¥9,800",
    description: "100%天然のヘナを使用し、頭皮環境を整えながら髪に艶と潤いを与えます。発酵成分の力で頭皮デトックスを促進し、健やかな髪の成長をサポートします。チベット伝統の薬草蒸しで、さらなる癒しと浄化効果を。",
    features: [
      "発酵排毒ヘナトリートメント（60分）",
      "チベット薬草蒸し（45分）"
    ],
    target: [
      "髪の健康にこだわる方",
      "頭皮環境の改善を目指す方",
      "全身のリラックスを求める方"
    ],
    icon: Flower2
  }
];

export function PlanTabs() {
  const [selectedTab, setSelectedTab] = useState(plans[0].id);
  const [includeCBD, setIncludeCBD] = useState(false);
  const [includeSaltCave, setIncludeSaltCave] = useState(false);

  const getPrice = (basePrice: string, planId: string) => {
    const base = parseInt(basePrice.replace(/[^0-9]/g, ''));
    let total = base;
    
    if (includeCBD) {
      total += 2000;
    }
    
    if (includeSaltCave && planId !== 'meditation') {
      total += 4000;
    }
    
    return `¥${total.toLocaleString()}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelectedTab(plan.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedTab === plan.id
                ? 'bg-sage-600 text-white shadow-lg'
                : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <plan.icon className="w-5 h-5" />
              <span className="text-sm">{plan.name}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            selectedTab === plan.id && (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <plan.icon className="w-8 h-8 text-sage-600" />
                    <h3 className="text-2xl font-serif text-sage-800">{plan.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <p className="text-2xl font-medium text-sage-600">{getPrice(plan.price, plan.id)}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <label className="flex items-center gap-2 text-natural-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeCBD}
                          onChange={(e) => setIncludeCBD(e.target.checked)}
                          className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                        />
                        <span className="flex items-center gap-1">
                          <Plus className="w-4 h-4 text-sage-500" />
                          CBDオイル (¥2,000)
                        </span>
                      </label>
                      {plan.id !== 'meditation' && (
                        <label className="flex items-center gap-2 text-natural-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeSaltCave}
                            onChange={(e) => setIncludeSaltCave(e.target.checked)}
                            className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                          />
                          <span className="flex items-center gap-1">
                            <Plus className="w-4 h-4 text-sage-500" />
                            塩洞窟 (¥4,000/1h)
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-natural-700 mb-6">{plan.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-sage-800 mb-3">プラン内容</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-natural-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                            {feature}
                          </li>
                        ))}
                        {includeCBD && (
                          <li className="flex items-center gap-2 text-natural-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                            CBDオイル施術
                          </li>
                        )}
                        {includeSaltCave && plan.id !== 'meditation' && (
                          <li className="flex items-center gap-2 text-natural-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                            塩洞窟での瞑想（60分）
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-sage-800 mb-3">こんな方におすすめ</h4>
                      <ul className="space-y-2">
                        {plan.target.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-natural-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <a
                      href="https://lin.ee/nug2WAF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00B900] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#00A000] transition-colors"
                    >
                      このプランを予約する
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}