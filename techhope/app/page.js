import Image from 'next/image'
import styles from './page.module.css'
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import AboutFoundation from "./pages/AboutFoundation/AboutFoundation";
import DonationCTA from "./pages/DonationCTA/DonationCTA";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <AboutFoundation />
        <DonationCTA />
    </main>
  )
}
