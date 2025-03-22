import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { AIAssistantSection } from '@/components/ai-assistant-section';
import { CreditEvaluationSection } from '@/components/credit-evaluation-section';
import { FundingMarketplace } from '@/components/funding-marketplace';
import { FinancialChatbot } from '@/components/financial-chatbot';
import { DashboardPreview } from '@/components/dashboard-preview';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <HeroSection />
        <AIAssistantSection />
        <CreditEvaluationSection />
        <FundingMarketplace />
        <FinancialChatbot />
        <DashboardPreview />
      </main>
      
      <Footer />
    </div>
  );
}
