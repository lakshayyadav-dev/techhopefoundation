import Image from 'next/image'
import styles from './page.module.css'
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
    </main>
  )
}
