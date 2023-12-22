import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero } from '../containers/hero';
import { Navbar } from '../containers/navbar';
import { Features } from '../containers/features';
import { Footer } from '../containers/footer';
const inter = Inter({ subsets: ['latin'] });
import 'flowbite';

import backgroundImage from '../../public/medieval-bg.jpeg';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url('${backgroundImage.src}')` }} className={`flex min-h-screen min-w-screen flex-col items-center justify-between bg-no-repeat bg-fixed bg-center bg-blend-overlay bg-cover bg-gray-900 ${inter.className}`}>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
