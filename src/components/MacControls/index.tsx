import { ReactNode } from 'react';


export function MacControls() {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-3 h-3 bg bg-red-500 rounded-full'/>
      <div className='w-3 h-3 bg bg-yellow-500 rounded-full'/>
      <div className='w-3 h-3 bg bg-green-500 rounded-full'/>
    </div>
  );
}
