import { Clock, Shirt, Users } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  time: string;
  title: string;
  details: string[];
}

interface ScheduleType {
  id: string;
  name: string;
  description: string;
  schedule: TimeSlot[];
}

const schedules: ScheduleType[] = [
  {
    id: 'meditation',
    name: '塩洞窟浄化瞑想プログラム',
    description: '2.5時間のトータルケアで、心と体の真の調和を体験',
    schedule: [
      {
        time: '10:30-11:10',
        title: '塩洞窟でのデトックス瞑想（40分）',
        details: [
          '天然岩塩に囲まれた洞窟で、マイナスイオンを浴びながら深いリラックス瞑想',
          '呼吸法と瞑想のガイダンス付き',
          '快適な温度と湿度で心地よい空間'
        ]
      },
      {
        time: '11:15-12:00',
        title: '循環排毒法（45分）',
        details: [
          '誰でも簡単に扱える排毒棒を使用したセルフマッサージ法が学べる',
          '深い呼吸法で体内浄化'
        ]
      },
      {
        time: '12:00-13:00',
        title: 'お食事（60分）',
        details: [
          'オーガニックで野菜と大豆を中心にした精進料理'
        ]
      }
    ]
  },
  {
    id: 'tibet',
    name: 'チベットオイルマッサージ＆チベット薬草蒸しプラン',
    description: '1.5時間で心身の浄化を体験',
    schedule: [
      {
        time: '10:30-11:00',
        title: 'チベットオイルマッサージ（30分）',
        details: [
          'チベット伝統の手技による全身マッサージ',
          '現地直輸入のオイルを使用した深い癒し',
          '体内の毒素排出を促進'
        ]
      },
      {
        time: '11:00-12:00',
        title: 'チベット薬草蒸し（60分）',
        details: [
          'チベット伝統の薬草を使用した蒸し療法',
          '体を芯から温め、デトックス効果を促進',
          '心身の調和を整える'
        ]
      }
    ]
  },
  {
    id: 'henna',
    name: '発酵排毒ヘナ＆チベット薬草蒸しプラン',
    description: '1.75時間の頭皮ケアと全身浄化',
    schedule: [
      {
        time: '10:30-11:30',
        title: '発酵排毒ヘナトリートメント（60分）',
        details: [
          '100%天然ヘナによる頭皮環境の改善',
          '発酵成分による頭皮デトックス',
          '髪に艶と潤いを与えるケア'
        ]
      },
      {
        time: '11:30-12:15',
        title: 'チベット薬草蒸し（45分）',
        details: [
          'チベット伝統の薬草による全身蒸し',
          '心身の緊張をほぐし、深いリラックス効果',
          '自然な癒しと浄化作用'
        ]
      }
    ]
  }
];

export function Schedule() {
  const [selectedSchedule, setSelectedSchedule] = useState(schedules[0].id);

  return (
    <section className="py-16 bg-sage-50/50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-sage-800">タイムスケジュール</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {schedules.map((schedule) => (
            <button
              key={schedule.id}
              onClick={() => setSelectedSchedule(schedule.id)}
              className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 whitespace-normal min-w-[200px] ${
                selectedSchedule === schedule.id
                  ? 'bg-sage-600 text-white shadow-lg scale-105'
                  : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
              }`}
            >
              <span className="text-sm block leading-relaxed">{schedule.name}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {schedules.map((schedule) => (
              selectedSchedule === schedule.id && (
                <motion.div
                  key={schedule.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-serif text-sage-800 mb-2">{schedule.name}</h3>
                        <p className="text-natural-700">{schedule.description}</p>
                      </div>

                      <div className="space-y-8">
                        {schedule.schedule.map((slot, index) => (
                          <div key={index} className="grid md:grid-cols-[150px_1fr] gap-4">
                            <div className="text-sage-600 font-medium">{slot.time}</div>
                            <div>
                              <h4 className="font-medium text-natural-800 mb-2">{slot.title}</h4>
                              <ul className="space-y-2 text-natural-700 text-sm">
                                {slot.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-sage-100 pt-8 mt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                              <Shirt className="w-5 h-5 text-sage-600" />
                              ご参加に際して
                            </h3>
                            <ul className="space-y-2 text-natural-700 text-sm">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                                動きやすい服装でお越しください
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                                ヨガマットは無料貸出あり
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-sage-600" />
                              参加条件
                            </h3>
                            <p className="text-natural-700 text-sm">
                              お一人様から参加可能です
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}