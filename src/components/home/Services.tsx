import { PlanTabs } from './PlanTabs';

export function Services() {
  return (
    <section className="py-16 px-4 md:px-8 bg-natural-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16 text-sage-800">プラン・料金</h2>
        <PlanTabs />
      </div>
    </section>
  );
}