import { MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { id: 'home', label: 'ホーム', href: '#home' },
    { id: 'introduction', label: 'ご挨拶', href: '#introduction' },
    { id: 'initiatives', label: '取り組み', href: '#initiatives' },
    { id: 'services', label: 'プラン・料金', href: '#services' },
    { id: 'schedule', label: 'スケジュール', href: '#schedule' },
    { id: 'business-hours', label: '営業時間', href: '#business-hours' },
    { id: 'reservation', label: 'ご予約', href: '#reservation' },
    { id: 'testimonials', label: 'お客様の声', href: '#testimonials' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-sage-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-xl font-serif text-sage-800 cursor-pointer" onClick={() => scrollToSection('#home')}>
            SALT'NBASE.
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-sage-600 ${
                  activeSection === item.id ? 'text-sage-600 border-b-2 border-sage-600 pb-1' : 'text-natural-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://lin.ee/nug2WAF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#00B900] text-white px-4 py-2 rounded-md text-sm hover:bg-[#00A000] transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">LINEで予約</span>
              <span className="sm:hidden">予約</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-sage-600 hover:bg-sage-50 transition-colors"
              aria-label="メニューを開く"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-sage-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'bg-sage-100 text-sage-700' 
                      : 'text-natural-700 hover:bg-sage-50 hover:text-sage-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}