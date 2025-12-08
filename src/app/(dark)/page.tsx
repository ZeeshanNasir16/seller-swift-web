import PrimaryHorizontalSeperator from '@/components/global/primary-horizontal-seperator';
import AICopilot from '@/containers/landing-page/ai-copilot';
import LandingHeroSection from '@/containers/landing-page/hero';
import HowItWorks from '@/containers/landing-page/how-it-works';
import Sellers from '@/containers/landing-page/sellers';
import Testimonials from '@/containers/landing-page/testimonials';
import WhySellerSwift from '@/containers/landing-page/why-seller-swift';
import React from 'react';

const HomePage = () => {
  return (
    <main className='space-y-10 lg:space-y-20'>
      <LandingHeroSection />
      <PrimaryHorizontalSeperator />
      <HowItWorks />
      <WhySellerSwift />
      <PrimaryHorizontalSeperator />
      <Testimonials />
      <Sellers />
      <PrimaryHorizontalSeperator />
      <AICopilot />
    </main>
  );
};

export default HomePage;
