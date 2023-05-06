import { ReactNode } from 'react';

interface PlaylistsMenuProps {
  linkPlaylist: string;
  playlistName: string;
}

export function PlaylistsMenu({ playlistName }: PlaylistsMenuProps) {
  return (
      <a href={playlistName} className='text-sm text-zinc-400 hover:text-zinc-100'>{playlistName}</a>
  );
}
