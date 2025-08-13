import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Heart, Mountain, Flower2, Plus, Waves, Sparkles, Music } from 'lucide-react';

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
    id: 'salt-single',
    name: "塩洞窟単品プラン",
    price: "¥5,000",
    description: "60分の塩洞窟セッションで、微粒子塩を吸入し呼吸浄化とリラックスを体験。",
    features: [
      "塩洞窟セッション（60分）",
      "排毒茶",
    ],
    target: [
      "塩洞窟を初めて体験される方",
      "呼吸器系の健康改善をお考えの方",
      "リーズナブルに体験したい方"
    ],
    icon: Mountain
  },
  {
    id: 'salt-massage',
    name: "塩洞窟＋マッサージプラン",
    price: "¥9,800",
    description: "塩洞窟内で微粒子塩吸入と同時にマッサージ施術を受けられる贅沢なプラン。首肩から背中のコリをほぐしながら深いリラックスを体験できます。",
    features: [
      "塩洞窟セッション＆マッサージ（60分うちマッサージ30分）",
    ],
    target: [
      "肩こり・首こりでお悩みの方",
      "マッサージと塩洞窟を同時に体験したい方",
      "深いリラックスを求める方"
    ],
    icon: Heart
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
    icon: Waves
  },
  {
    id: 'henna',
    name: "発酵排毒ヘナ＆チベット薬草蒸し",
    price: "¥9,800",
    description: "100%天然のヘナを使用し、頭皮環境を整えながら髪に艶と潤いを与えます。発酵成分の力で頭皮デトックスを促進し、健やかな髪の成長をサポートします。チベット伝統の薬草蒸しで、さらなる癒しと浄化効果を。",
    features: [
      "発酵排毒ヘナトリートメント（60分）",
      "チベット薬草蒸し（60分）"
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
    
    if (includeSaltCave && !planId.startsWith('salt')) {
      total += 4000;
    }
    
    return `¥${total.toLocaleString()}`;
  };

  const canAddSaltCave = (planId: string) => {
    return !planId.startsWith('salt');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-serif text-sage-800 mb-4 text-center">塩洞窟プログラム</h3>
        <p className="text-center text-natural-700 mb-6">2.5時間のトータルケアで、心と体の真の調和を体験</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {plans.slice(0, 4).map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedTab(plan.id)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                selectedTab === plan.id
                  ? 'bg-sage-600 text-white shadow-lg'
                  : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <plan.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{plan.name}</span>
              </div>
            </button>
          ))}
        </div>

        <h3 className="text-2xl font-serif text-sage-800 mb-4 text-center">その他のプログラム</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {plans.slice(4).map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedTab(plan.id)}
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                selectedTab === plan.id
                  ? 'bg-sage-600 text-white shadow-lg'
                  : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <plan.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{plan.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            selectedTab === plan.id && (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <plan.icon className="w-8 h-8 text-sage-600 flex-shrink-0" />
                    <h3 className="text-xl sm:text-2xl font-serif text-sage-800">{plan.name}</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <p className="text-2xl font-medium text-sage-600">{getPrice(plan.price, plan.id)}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center gap-2 text-natural-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeCBD}
                          onChange={(e) => setIncludeCBD(e.target.checked)}
                          className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                        />
                        <span className="flex items-center gap-1 text-sm">
                          <Plus className="w-4 h-4 text-sage-500" />
                          高濃度CBD (+¥2,000)
                        </span>
                      </label>
                      {canAddSaltCave(plan.id) && (
                        <label className="flex items-center gap-2 text-natural-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={includeSaltCave}
                            onChange={(e) => setIncludeSaltCave(e.target.checked)}
                            className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                          />
                          <span className="flex items-center gap-1 text-sm">
                            <Plus className="w-4 h-4 text-sage-500" />
                            塩洞窟 (+¥4,000/1h)
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-natural-700 mb-6 text-sm sm:text-base">{plan.description}</p>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-medium text-sage-800 mb-3">プラン内容</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-natural-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {includeCBD && (
                          <li className="flex items-start gap-2 text-sm sm:text-base text-natural-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                            高濃度CBDオイル施術
                          </li>
                        )}
                        {includeSaltCave && canAddSaltCave(plan.id) && (
                          <li className="flex items-start gap-2 text-sm sm:text-base text-natural-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                            塩洞窟での瞑想（60分）
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-sage-800 mb-3">こんな方におすすめ</h4>
                      <ul className="space-y-2">
                        {plan.target.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-natural-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
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
