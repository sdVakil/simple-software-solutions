import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import SoundFamiliar from "./components/SoundFamiliar";
import WhatWeBuild from "./components/WhatWeBuild";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <SoundFamiliar />
        <WhatWeBuild />
        <Portfolio />
        <Process />
        <Founder />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
