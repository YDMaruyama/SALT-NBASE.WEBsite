import { MessageCircle } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-serif">SALT'NBASE.</div>
          <div className="flex items-center gap-4">
            <a 
              href="https://lin.ee/nug2WAF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#00B900] text-white px-4 py-2 rounded-md text-sm hover:bg-[#00A000] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              LINEで予約
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}