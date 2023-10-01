import Image from 'next/image'
import styles from './page.module.css'
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import AboutFoundation from "./pages/AboutFoundation/AboutFoundation";
import DonationCTA from "./pages/DonationCTA/DonationCTA";
import AboutUs from "./pages/AboutUs/AboutUs";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <AboutFoundation />
        <DonationCTA />
        <AboutUs />
        <Team />
        <Contact />
        <Footer />
    </main>
  )
}
