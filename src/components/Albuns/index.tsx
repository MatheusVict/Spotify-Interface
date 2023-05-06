import { Play } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface AlbunsProps {
  nameAlbum: string;
  picAlbum: string;
}

export function Albuns({ nameAlbum, picAlbum }: AlbunsProps) {
  return (
    <a href='' 
      className='bg-white/5 rounded-md 
      gap-4 overflow-hidden 
      flex items-center  
      hover:bg-white/10 
      transition-colors
      group'
      >
        <Image src={picAlbum} width={104} height={104} alt='capa album'/>
        <strong>{nameAlbum}</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play/>
        </button>
    </a>
  );
}
