import { HomeIcon, Library, Search } from 'lucide-react';
import { ReactNode } from 'react';

export function NavigationMenu() {
  return (
    <nav className='space-y-5 mt-5'>
      <a href="" className='flex items-center gap-3 text-sm font-semibolds text-zinc-200'>
        <HomeIcon/>
        Home
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibolds text-zinc-200'>
        <Search/>
        Search
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibolds text-zinc-200'>
        <Library/>
        Your Library
      </a>
    </nav>
  );
}
