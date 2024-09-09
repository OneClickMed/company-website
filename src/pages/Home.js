import React ,{useEffect}from 'react';
import Hero from '../components/Herotwo';
//import BackedBy from '../components/Backedby';
import WhoWeAre from '../components/WhoWeAre';
import MissionSection from '../components/MissionSection';
import Services from '../components/Services';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import CtaSection from '../components/CtaSection';
import FeatureTabs from '../components/FeaturedTabs';

function HomePage() {
useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <main  className=' max-w-7xl  mx-auto px-6 min-h-[100vh]'>
      <Hero />
      <div >
      <WhoWeAre />
      <FeatureTabs />
      </div>
      <MissionSection />
      <Services />
      <SocialProof />
      <FAQ />
      <CtaSection />
    </main>
  );
}

export default HomePage;
