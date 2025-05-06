import { Phone, Mail, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sage-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">お問い合わせ</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                080-6751-3908
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@saltnbase.jp
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">SNS</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">営業時間</h3>
            <p className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              10:00～18:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}