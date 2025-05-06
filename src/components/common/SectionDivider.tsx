import { Sparkles } from 'lucide-react';

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px bg-sage-200 w-32" />
      <Sparkles className="w-5 h-5 text-sage-400 mx-4" />
      <div className="h-px bg-sage-200 w-32" />
    </div>
  );
}