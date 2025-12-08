import AboutUsHero from '@/containers/about-us/hero';
import OurMission from '@/containers/about-us/our-mission';
import OurVision from '@/containers/about-us/our-vision';
import OurValues from '@/containers/about-us/our-vaues';
import BuildByExpert from '@/containers/about-us/build-by-expert';
import React from 'react';

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHero />
      <OurMission />
      <OurVision />
      <OurValues />
      <BuildByExpert />
    </>
  );
};

export default AboutUsPage;
