import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero } from '../containers/hero';
import { Navbar } from '../containers/navbar';
import { Features } from '../containers/features';
import { Footer } from '../containers/footer';
import { Schedule } from '../containers/schedule';
// import { BaldurGames } from '../containers/baldurGames';

const inter = Inter({ subsets: ['latin'] });
import 'flowbite';

import backgroundImage from '../../public/medieval-bg.jpeg';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url('${backgroundImage.src}')` }} className={`flex min-h-screen min-w-screen flex-col items-center justify-between bg-no-repeat bg-fixed bg-center lg:bg-top bg-blend-overlay bg-cover bg-gray-600 ${inter.className}`}>
      <Navbar />
      {/* <BaldurGames /> */}
      <Hero />
      <Features />
      <Schedule />
      <Footer />
    </main>
  )
}
