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
  image: string;
  schedule: TimeSlot[];
}

const schedules: ScheduleType[] = [
  {
    id: 'salt-single',
    name: '塩洞窟単品プラン',
    description: '60分の塩洞窟セッションで呼吸浄化とリラックスを体験',
    image: '/820AA170-0458-45CC-B63C-1DCBAA82BA61.JPEG',
    schedule: [
      {
        time: '10:30-11:30',
        title: '塩洞窟セッション（60分）',
        details: [
          '洞窟内で微粒子塩を吸入し、呼吸浄化とリラックス',
          '呼吸法の簡易ガイド付き',
          '快適な温度・湿度、マイナスイオン'
        ]
      },
      {
        time: '11:35-12:20',
        title: 'アフターケア＆ティータイム（45分）',
        details: [
          'ハーブティー提供',
          '感想共有シート記入'
        ]
      }
    ]
  },
  {
    id: 'salt-massage',
    name: '塩洞窟＋マッサージプラン',
    description: '塩洞窟内でマッサージ施術を同時に受けられる贅沢なプラン',
    image: '/IMG_2153.jpg',
    schedule: [
      {
        time: '10:30-11:30',
        title: '塩洞窟セッション＆マッサージ（60分うちマッサージ30分）',
        details: [
          '洞窟内で微粒子塩吸入と同時にマッサージ施術',
          '首肩～背中を中心にコリほぐし',
          '呼吸法ガイド付き（担当：まり／れいこ）'
        ]
      }
    ]
  },
  {
    id: 'tibet',
    name: 'チベットオイルマッサージ＆チベット薬草蒸しプラン',
    description: '1.5時間で心身の浄化を体験',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800',
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
        time: '11:30-12:30',
        title: 'チベット薬草蒸し（60分）',
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
  const currentSchedule = schedules.find(s => s.id === selectedSchedule)!;

  return (
    <section id="schedule" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12 text-sage-800">タイムスケジュール</h2>

        <div className="mb-8">
          <h3 className="text-xl font-serif text-sage-800 mb-4 text-center">塩洞窟プログラム</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {schedules.slice(0, 2).map((schedule) => (
              <button
                key={schedule.id}
                onClick={() => setSelectedSchedule(schedule.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                  selectedSchedule === schedule.id
                    ? 'bg-sage-600 text-white shadow-lg'
                    : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
                }`}
              >
                <span className="text-sm block leading-relaxed">{schedule.name}</span>
              </button>
            ))}
          </div>

          <h3 className="text-xl font-serif text-sage-800 mb-4 text-center">その他のプログラム</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {schedules.slice(2).map((schedule) => (
              <button
                key={schedule.id}
                onClick={() => setSelectedSchedule(schedule.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                  selectedSchedule === schedule.id
                    ? 'bg-sage-600 text-white shadow-lg'
                    : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
                }`}
              >
                <span className="text-sm block leading-relaxed">{schedule.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSchedule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* プラン画像 */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={currentSchedule.image}
                    alt={currentSchedule.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-serif mb-2">{currentSchedule.name}</h3>
                    <p className="text-sm sm:text-base opacity-90">{currentSchedule.description}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-8">
                  {/* タイムスケジュール */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-sage-800 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-sage-600" />
                      タイムスケジュール
                    </h4>
                    <div className="space-y-6">
                      {currentSchedule.schedule.map((slot, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-4">
                          <div className="text-sage-600 font-medium text-sm sm:text-base sm:w-32 flex-shrink-0">
                            {slot.time}
                          </div>
                          <div>
                            <h5 className="font-medium text-natural-800 mb-2 text-sm sm:text-base">{slot.title}</h5>
                            <ul className="space-y-2">
                              {slot.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                                  <span className="text-natural-700 text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 参加に際して */}
                  <div className="border-t border-sage-100 pt-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                          <Shirt className="w-5 h-5 text-sage-600" />
                          ご参加に際して
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                            <span className="text-natural-700 text-sm">動きやすい服装でお越しください</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                            <span className="text-natural-700 text-sm">ヨガマットは無料貸出あり</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-serif text-sage-800 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-sage-600" />
                          参加条件
                        </h4>
                        <p className="text-natural-700 text-sm">
                          お一人様から参加可能です
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 予約ボタン */}
                  <div className="mt-8 text-center">
                    <a
                      href="https://lin.ee/nug2WAF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00B900] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#00A000] transition-colors shadow-lg hover:shadow-xl"
                    >
                      このプランを予約する
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
