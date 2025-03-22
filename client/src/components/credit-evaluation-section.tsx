import React from 'react';
import { CyberCard } from './ui/cyber-card';
import { CreditMeter } from './ui/credit-meter';
import { getFactorRating } from '@/lib/utils';

interface CreditFactor {
  name: string;
  value: number;
}

interface ImprovementSuggestion {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  titleColor: string;
}

const creditFactors: CreditFactor[] = [
  { name: "Business Revenue Consistency", value: 0.85 },
  { name: "Transaction History", value: 0.7 },
  { name: "Business Longevity", value: 0.45 },
  { name: "Industry Growth Potential", value: 0.95 },
  { name: "Social Reputation", value: 0.3 }
];

const improvementSuggestions: ImprovementSuggestion[] = [
  {
    icon: "ri-lightbulb-flash-line",
    title: "Increase Social Proof",
    description: "Connect your business social accounts to improve your social reputation score.",
    iconColor: "text-cyber-blue",
    titleColor: "text-cyber-blue"
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Complete Business Documentation",
    description: "Upload your business plan and financial projections for the next 6 months.",
    iconColor: "text-cyber-purple",
    titleColor: "text-cyber-purple"
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Establish Regular Revenue",
    description: "Connect payment systems to show consistent monthly income patterns.",
    iconColor: "text-cyber-pink",
    titleColor: "text-cyber-pink"
  }
];

export function CreditEvaluationSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            AI-Powered <span className="text-cyber-blue">Credit</span> Evaluation
          </h2>
          <p className="text-cyber-text-dim max-w-2xl mx-auto mt-4">
            Our system analyzes alternative data points to provide fair credit assessment 
            beyond traditional scoring methods that often disadvantage women entrepreneurs.
          </p>
        </div>
        
        <CyberCard glassEffect className="rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Credit Score Display */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-cyber-blue/20 flex flex-col items-center justify-center">
              <h3 className="font-orbitron text-lg mb-6 text-center">Your Business Credit Score</h3>
              
              <CreditMeter score={735} size="lg" className="mb-4" />
              
              <div className="text-center">
                <p className="text-sm text-cyber-text-dim mb-2">Last updated: 2 days ago</p>
                <button className="text-cyber-blue text-sm hover:underline">
                  <i className="ri-refresh-line mr-1"></i> Refresh Score
                </button>
              </div>
            </div>
            
            {/* Score Factors */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-cyber-blue/20">
              <h3 className="font-orbitron text-lg mb-6">Score Factors</h3>
              
              {creditFactors.map((factor, index) => {
                const rating = getFactorRating(factor.value);
                return (
                  <div className="mb-4" key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-exo">{factor.name}</span>
                      <span className={`text-sm font-exo ${rating.color}`}>{rating.text}</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded overflow-hidden">
                      <div 
                        className={`h-full ${
                          rating.color === 'text-cyber-green' ? 'bg-cyber-green' : 
                          rating.color === 'text-cyber-yellow' ? 'bg-cyber-yellow' : 
                          'bg-cyber-pink'
                        }`} 
                        style={{ width: `${factor.value * 100}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Improvement Suggestions */}
            <div className="p-6 md:p-8">
              <h3 className="font-orbitron text-lg mb-6">Improvement Suggestions</h3>
              
              <div className="space-y-4">
                {improvementSuggestions.map((suggestion, index) => (
                  <div className="flex gap-3 items-start" key={index}>
                    <div className={suggestion.iconColor + " mt-1"}>
                      <i className={suggestion.icon + " text-xl"}></i>
                    </div>
                    <div>
                      <h4 className={`font-exo font-semibold ${suggestion.titleColor}`}>{suggestion.title}</h4>
                      <p className="text-sm text-cyber-text-dim">{suggestion.description}</p>
                    </div>
                  </div>
                ))}
                
                <button className="mt-4 w-full py-2 border border-cyber-blue text-cyber-blue font-orbitron rounded hover:bg-cyber-blue/10 transition-colors">
                  View Full Report
                </button>
              </div>
            </div>
          </div>
        </CyberCard>
      </div>
    </section>
  );
}
