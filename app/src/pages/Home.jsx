import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandsStrip from '../components/home/BrandsStrip';
import SplitStageSection from '../components/home/SplitStageSection';
import WorkshopSection from '../components/home/WorkshopSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import WorkflowSection from '../components/home/WorkflowSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BrandsStrip />
      <SplitStageSection />
      <WorkshopSection />
      <CaseStudiesSection />
      <WorkflowSection />
      <CtaSection />
    </div>
  );
}
