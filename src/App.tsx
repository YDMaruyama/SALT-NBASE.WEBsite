import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/home/Hero';
import { Introduction } from './components/home/Introduction';
import { Initiatives } from './components/home/Initiatives';
import { Services } from './components/home/Services';
import { Schedule } from './components/home/Schedule';
import { BusinessHours } from './components/home/BusinessHours';
import { Reservation } from './components/home/Reservation';
import { Testimonials } from './components/home/Testimonials';
import { Footer } from './components/layout/Footer';
import { SectionDivider } from './components/common/SectionDivider';

function App() {
  return (
    <div className="min-h-screen bg-natural-50">
      <Navigation />
      <Hero />
      <Introduction />
      <SectionDivider />
      <Initiatives />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Schedule />
      <SectionDivider />
      <BusinessHours />
      <SectionDivider />
      <Reservation />
      <SectionDivider />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;