import { Maximize2, Mic2, Play, Repeat, SkipForward, Volume } from 'lucide-react';
import { LayoutList } from 'lucide-react';
import { Laptop2 } from 'lucide-react';
import { Shuffle, SkipBack } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface FooterProps {
  musicName: string;
  musicPic: string;
  bandName: string;
}

export function Footer({ bandName, musicName, musicPic }: FooterProps) {
  return (
    <footer className='bg-zinc-800 border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image src={musicPic} className='w-full' width={50} height={50} alt='capa album'/>
          <div className='flex flex-col'>
            <strong className='font-normal'>{musicName}</strong>
            <span className='text-sx text-zinc-400'>{bandName}</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-sx text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-400 w-40 h-1 rounded'/>
            </div>
            <span className='text-sx text-zinc-400'>2:21</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-400 w-10 h-1 rounded'/>
            </div>
          </div>
        <Maximize2 size={20}/>
        </div>
    </footer>
  );
}
