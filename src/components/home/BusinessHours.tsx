import { Clock } from 'lucide-react';

export function BusinessHours() {
  return (
    <section className="py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4 text-sage-800">営業時間・定休日</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-sage-50">
                <th className="py-4 px-6 text-left text-natural-700 font-medium">曜日</th>
                <th className="py-4 px-6 text-left text-natural-700 font-medium">営業時間</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sage-100">
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">月曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">火曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">水曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors bg-natural-50">
                <td className="py-4 px-6 text-natural-800 font-medium">木曜日</td>
                <td className="py-4 px-6 text-natural-800">休業日</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">金曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">土曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
              <tr className="hover:bg-sage-50 transition-colors">
                <td className="py-4 px-6 text-natural-800">日曜日</td>
                <td className="py-4 px-6 text-natural-800">10:00～18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}