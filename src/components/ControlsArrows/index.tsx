import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';

export function ControlsArrows() {
  return (
    <div className='flex itens-center gap-4'>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronLeft />
      </button>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronRight />
      </button>
    </div>
  );
}
