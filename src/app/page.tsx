import Hero from "./components/Hero";
import WhoWeAre from "./components/Whoweare";
import FeatureTabs from "./components/FeaturedTabs";
import CtaSection from "./components/CtaSection";
import FrequentlyAsked from "./components/FAQ";
import SocialProof from "./components/SocialProof";
import MissionSection from "./components/MissionSection";
import Services from "./components/Services";
import BackedBy from "./components/Backedby";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <WhoWeAre/>
        <MissionSection/>
        <BackedBy/>

        <FeatureTabs/>
        <SocialProof />
        <Services/>
        <CtaSection/>
        <div className="bg-white ">
          <Image 
            src="/assets/img/banner.png" 
            width={1200} 
            height={300} 
            className=' w-full' 
            alt="Banner" 
          />
        </div>
        <FrequentlyAsked/>
      </main>
      <Footer/>
    </>
  );
}
