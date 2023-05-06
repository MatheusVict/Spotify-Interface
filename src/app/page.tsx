import Image from 'next/image'
import {
  ChevronLeft, 
  Play, 
  Shuffle, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Mic2, 
  LayoutList, 
  Laptop2, 
  Volume,
  Maximize2,
  ChevronRight
} from 'lucide-react'
import { Albuns } from '@/components/Albuns'
import { NavigationMenu } from '@/components/NavigationMenu'
import { PlaylistsMenu } from '@/components/PlaylistsMenu'
import { MadeForYou } from '@/components/MadeForYou'
import { MacControls } from '@/components/MacControls'
import { ControlsArrows } from '@/components/ControlsArrows'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <MacControls />
          <NavigationMenu/>

          <nav className='mt-6 pt-6 border-t border-zinc-1040 flex flex-col gap-3'>
            <PlaylistsMenu linkPlaylist='#' playlistName='Phobia'/>
            <PlaylistsMenu linkPlaylist='#' playlistName='Dangerous Woman'/>
            <PlaylistsMenu linkPlaylist='#' playlistName='purpose'/>
            <PlaylistsMenu linkPlaylist='#' playlistName='Careless: The Collection'/>
            <PlaylistsMenu linkPlaylist='#' playlistName='purpose'/>
          </nav>
          
        </aside>
        <main className='flex-1 p-6'>

          <ControlsArrows />

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
           <Albuns nameAlbum='Phobia' picAlbum='/phobia.jpg' key={1}/>
           <Albuns nameAlbum='Dangerous Woman' picAlbum='/ariana.jpg' key={1}/>
           <Albuns nameAlbum='purpose' picAlbum='/justin.jpg' key={1}/>
           <Albuns nameAlbum='Careless: The Collection' picAlbum='/neffex.jpeg' key={1}/>
           <Albuns nameAlbum='Up All Night' picAlbum='/one_direction.jpeg' key={1}/>
           <Albuns nameAlbum='When the Night Falls' picAlbum='/images.jpeg' key={1}/>
          </div>
          <h2 className='font-semibold text-2xl mt-5'>Made for Matheus</h2>
          <div className='grid grid-cols-8 gap-4 mt-5'>
            <MadeForYou artistsNames='ryce Savage e Cameron Wales' imageUrl='/capa2.jpeg' nameAlbum='Best of me'/>
            <MadeForYou artistsNames='Ariana' imageUrl='/capa3.jpeg' nameAlbum='7 Rings'/>
            <MadeForYou artistsNames='Shawn Crahan, Sid Wilson' imageUrl='/capa4.jpg' nameAlbum='slipknot'/>
            <MadeForYou artistsNames=' Benjamin Burnley, Aaron Bruch' imageUrl='/phobia.jpg' nameAlbum='Evil Angel'/>
            <MadeForYou artistsNames='ryce Savage e Cameron Wales' imageUrl='/neffex.jpeg' nameAlbum='Careless'/>
          </div>
        </main>
      </div>
      <Footer bandName='Breaking Benjamin' musicName='Angels fall' musicPic='/phobia.jpg'/>
    </div>
  )
}
