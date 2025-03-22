import React from 'react';
import { CyberTicker } from './ui/cyber-ticker';
import { CyberCard } from './ui/cyber-card';
import { NeonButton } from './ui/neon-button';
import { AIAvatar } from './ai-avatar';

const tickerItems = [
  { id: 1, text: "FemTech Fund raised $3M in seed funding", color: "green", icon: "↗" },
  { id: 2, text: "Application deadline: Women in Business Grant - 5 days left", color: "yellow", icon: "⚠" },
  { id: 3, text: "New microfinance options available for retail startups", color: "blue", icon: "ℹ" },
  { id: 4, text: "Success Story: Sarah's Design Studio secured $250K funding", color: "pink", icon: "★" },
  { id: 5, text: "AI Tip: Complete your business profile to boost your score by 15%", color: "purple", icon: "⚡" }
];

export function AIAssistantSection() {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <CyberTicker items={tickerItems} className="mb-12" />

        <CyberCard glassEffect className="p-6 md:p-8 mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <h2 className="font-orbitron text-3xl font-bold mb-4">
                Meet <span className="text-cyber-pink">NOVA</span>, Your Financial AI Guide
              </h2>
              <p className="text-cyber-text-dim mb-6">
                NOVA analyzes your business data, provides personalized financial guidance, and helps you navigate funding options.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-cyber-blue">
                    <i className="ri-checkbox-circle-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-exo font-semibold">Alternative Credit Scoring</h3>
                    <p className="text-cyber-text-dim text-sm">Beyond traditional credit reports - we analyze your business performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-cyber-pink">
                    <i className="ri-checkbox-circle-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-exo font-semibold">Personalized Funding Matches</h3>
                    <p className="text-cyber-text-dim text-sm">Get matched with investors and grants aligned with your business goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-cyber-purple">
                    <i className="ri-checkbox-circle-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-exo font-semibold">Financial Education</h3>
                    <p className="text-cyber-text-dim text-sm">Learn complex financial concepts explained in accessible language</p>
                  </div>
                </div>
              </div>
              
              <NeonButton 
                color="purple" 
                variant="primary" 
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple"
                onClick={() => window.location.href = '/chat'}
              >
                Chat with NOVA
              </NeonButton>
            </div>

            <div className="relative flex justify-center">
              <AIAvatar 
                chatBubbleText="I've analyzed your recent transactions. Would you like to explore funding options for your inventory expansion?"
              />
            </div>
          </div>
        </CyberCard>
      </div>
    </section>
  );
}
