
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import AuthorBio from '@/components/AuthorBio';
import Reviews from '@/components/Reviews';
import MoreByBarrat from '@/components/MoreByBarrat';
import DangerSection from '@/components/DangerSection';
import AIRiskVisualization from '@/components/AIRiskVisualization';
import Analysis from '@/components/Analysis';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const OurFinalInvention = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <Hero />
      <Summary />
      <AuthorBio />
      <Reviews />
      <MoreByBarrat />
      <DangerSection />
      <AIRiskVisualization />
      <Analysis />
      <AIChatbot />
      <Footer />
    </div>
  );
};

export default OurFinalInvention;
