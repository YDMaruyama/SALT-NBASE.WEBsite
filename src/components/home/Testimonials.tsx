import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "チベット漢方蒸しのおかげで、体の内側から温まり、長年感じていた肩こりが軽減されました。毎日の生活が楽しくなりました。",
      author: "40代女性 / 会社員"
    },
    {
      text: "浄化瞑想塩洞窟での体験は、心身ともにリフレッシュできる素晴らしい時間でした。ストレス解消に最適です。",
      author: "30代男性 / 会社員"
    },
    {
      text: "食事療法と運動プログラムを組み合わせることで、体重管理だけでなく、肌の調子も良くなりました。",
      author: "50代女性 / 自営業"
    }
  ];

  return (
    <section className="py-10 px-4 md:px-8 bg-natural-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4 text-sage-800">お客様の声</h2>
          <p className="text-lg text-natural-700">実際にご利用いただいたお客様からの感想をご紹介します</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="relative">
                <Quote className="w-8 h-8 text-sage-600 absolute -top-4 -left-4" />
                <div className="pl-6">
                  <p className="text-natural-700 mb-4">{testimonial.text}</p>
                  <p className="text-sm text-natural-500">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}