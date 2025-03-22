import React from 'react';
import { Link } from 'wouter';
import { NeonButton } from './ui/neon-button';
import { HologramContainer } from './ui/hologram-container';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left order-2 md:order-1">
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-cyber-blue">Redefine</span> Your 
              <span className="text-cyber-pink"> Financial</span> Future
            </h1>
            <p className="text-cyber-text-dim text-lg md:text-xl mb-8 max-w-lg">
              AI-powered finance platform designed for women entrepreneurs to access credit, 
              funding, and financial education in a new digital paradigm.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard">
                <div>
                  <NeonButton color="blue" size="lg">
                    Get Started
                  </NeonButton>
                </div>
              </Link>
              <NeonButton variant="secondary" color="pink" size="lg">
                See How It Works
              </NeonButton>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cyber-blue/20 flex gap-6">
              <div>
                <p className="text-cyber-text-dim text-sm">Trusted by</p>
                <p className="font-exo text-2xl font-bold text-cyber-blue">2,500+</p>
                <p className="text-cyber-text-dim text-sm">Entrepreneurs</p>
              </div>
              <div>
                <p className="text-cyber-text-dim text-sm">Funding Secured</p>
                <p className="font-exo text-2xl font-bold text-cyber-pink">$14.2M</p>
                <p className="text-cyber-text-dim text-sm">And Growing</p>
              </div>
              <div>
                <p className="text-cyber-text-dim text-sm">Success Rate</p>
                <p className="font-exo text-2xl font-bold text-cyber-purple">78%</p>
                <p className="text-cyber-text-dim text-sm">Approval Rate</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative w-full max-w-md mx-auto h-[400px] rounded-xl overflow-hidden hologram-effect">
              <div className="absolute inset-0 bg-cyber-dark opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Woman entrepreneur using financial platform" 
                className="object-cover h-full w-full opacity-60"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyber-black to-transparent">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-green animate-pulse"></div>
                    <p className="font-orbitron text-sm text-cyber-green">AI SYSTEM ONLINE</p>
                  </div>
                  <div className="font-exo text-cyber-text mb-2">
                    "CyberFund's AI credit system helped me secure funding when traditional banks said no."
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" 
                        alt="Testimonial avatar" 
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <p className="text-sm text-cyber-text-dim">Sophia Chen, Founder of EcoTech Solutions</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <div className="bg-cyber-dark bg-opacity-50 backdrop-blur-sm rounded-lg px-3 py-1 border border-cyber-purple/30 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyber-purple animate-pulse"></div>
                  <span className="text-xs font-orbitron text-cyber-purple">LIVE DEMO</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyber-pink opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
