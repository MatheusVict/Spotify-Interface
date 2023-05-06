import Image from 'next/image';
import { ReactNode } from 'react';

interface MadeForYouProps {
  imageUrl: string;
  nameAlbum: string;
  artistsNames: string;
}

export function MadeForYou({ artistsNames, imageUrl, nameAlbum }: MadeForYouProps) {
  return (
    <a href='' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
      <Image src={imageUrl} className='w-full' width={104} height={104} alt='capa album'/>
      <strong className='font-semibold'>{nameAlbum}</strong>
      <span className='text-sm text-zinc-400'>{artistsNames}</span>
    </a>
  );
}
