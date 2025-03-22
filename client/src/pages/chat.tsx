import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FinancialChatbot } from '@/components/financial-chatbot';
import { CyberCard } from '@/components/ui/cyber-card';
import { AIAvatar } from '@/components/ai-avatar';
import { GlitchText } from '@/components/ui/glitch-text';

export default function Chat() {
  // Demo user ID
  const userId = 1;

  return (
    <div className="min-h-screen bg-cyber-gradient text-cyber-text">
      <Navbar isLoggedIn={true} />
      
      <main className="page-content">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="font-orbitron text-4xl mb-3 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              <GlitchText text="NOVA AI Assistant" />
            </h1>
            <p className="text-cyber-text-dim max-w-2xl mx-auto">
              Your personal financial AI assistant designed to help women entrepreneurs navigate the complexities of business finance. Ask NOVA anything about funding, credit scores, or financial planning.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2 flex justify-center">
              <AIAvatar size="large" chatBubbleText="How can I assist you with your financial goals today?" />
            </div>
            
            <div className="lg:col-span-3">
              <CyberCard className="p-6 bg-cyber-dark border border-cyber-blue/20 h-full">
                <h2 className="font-orbitron text-xl mb-4 text-cyber-blue">Chat with NOVA</h2>
                
                <FinancialChatbot userId={userId} />
                
                <div className="mt-6 p-4 rounded-md bg-cyber-blue/10 border border-cyber-blue/20">
                  <h3 className="font-orbitron text-sm text-cyber-blue mb-2">Suggested topics:</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 text-xs rounded-full bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors">
                      How can I improve my credit score?
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors">
                      Find funding for my startup
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors">
                      Cash flow management tips
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-cyber-dark border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors">
                      How to apply for grants?
                    </button>
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <CyberCard className="p-5 bg-cyber-dark border border-cyber-pink/20">
              <div className="h-10 w-10 rounded-full bg-cyber-pink/20 flex items-center justify-center mb-4">
                <i className="ri-brain-line text-cyber-pink"></i>
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-cyber-pink">AI-Powered Insights</h3>
              <p className="text-cyber-text-dim text-sm">
                NOVA leverages advanced AI to analyze your business data and provide personalized financial guidance tailored to your specific needs.
              </p>
            </CyberCard>
            
            <CyberCard className="p-5 bg-cyber-dark border border-cyber-blue/20">
              <div className="h-10 w-10 rounded-full bg-cyber-blue/20 flex items-center justify-center mb-4">
                <i className="ri-lock-line text-cyber-blue"></i>
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-cyber-blue">Secure Conversations</h3>
              <p className="text-cyber-text-dim text-sm">
                All your conversations with NOVA are encrypted and protected. Your financial data remains confidential and is never shared with third parties.
              </p>
            </CyberCard>
            
            <CyberCard className="p-5 bg-cyber-dark border border-cyber-purple/20">
              <div className="h-10 w-10 rounded-full bg-cyber-purple/20 flex items-center justify-center mb-4">
                <i className="ri-24-hours-line text-cyber-purple"></i>
              </div>
              <h3 className="font-orbitron text-lg mb-2 text-cyber-purple">24/7 Assistance</h3>
              <p className="text-cyber-text-dim text-sm">
                NOVA is available around the clock to answer your questions, provide recommendations, and help you navigate complex financial decisions.
              </p>
            </CyberCard>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}