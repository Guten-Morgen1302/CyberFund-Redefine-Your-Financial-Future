import React, { useState } from 'react';
import { CyberCard } from './ui/cyber-card';
import { NeonButton } from './ui/neon-button';
import { formatCurrency, getDaysLeft, getFundingTypeColor } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { FundingOption } from '@/types';
import { Button } from './ui/button';

export function FundingMarketplace() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const { data: fundingOptions, isLoading } = useQuery<FundingOption[]>({
    queryKey: ['/api/funding-options'],
  });
  
  // Filter funding options based on selected type
  const filteredOptions = activeFilter 
    ? fundingOptions?.filter(option => option.type === activeFilter)
    : fundingOptions;
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
              Alternative <span className="text-cyber-pink">Funding</span> Marketplace
            </h2>
            <p className="text-cyber-text-dim max-w-2xl mt-4">
              Discover funding opportunities tailored specifically for women entrepreneurs across various industries.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2 flex-wrap">
            <Button 
              className={`px-4 py-1.5 text-sm font-orbitron ${activeFilter === null ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30' : 'bg-transparent text-cyber-text-dim border border-cyber-text-dim/20 hover:border-cyber-blue/30 hover:text-cyber-blue'}`}
              onClick={() => setActiveFilter(null)}
            >
              All Options
            </Button>
            <Button 
              className={`px-4 py-1.5 text-sm font-orbitron ${activeFilter === 'GRANT' ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30' : 'bg-transparent text-cyber-text-dim border border-cyber-text-dim/20 hover:border-cyber-blue/30 hover:text-cyber-blue'}`}
              onClick={() => setActiveFilter('GRANT')}
            >
              Grants
            </Button>
            <Button 
              className={`px-4 py-1.5 text-sm font-orbitron ${activeFilter === 'MICROLOAN' ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30' : 'bg-transparent text-cyber-text-dim border border-cyber-text-dim/20 hover:border-cyber-blue/30 hover:text-cyber-blue'}`}
              onClick={() => setActiveFilter('MICROLOAN')}
            >
              Microloans
            </Button>
            <Button 
              className={`px-4 py-1.5 text-sm font-orbitron ${activeFilter === 'VC_FUNDING' ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30' : 'bg-transparent text-cyber-text-dim border border-cyber-text-dim/20 hover:border-cyber-blue/30 hover:text-cyber-blue'}`}
              onClick={() => setActiveFilter('VC_FUNDING')}
            >
              VC Funding
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-[400px] bg-cyber-dark/50 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOptions?.map((option) => {
              const typeColors = getFundingTypeColor(option.type);
              const matchScore = Math.floor(Math.random() * (95 - 70) + 70); // For display purpose
              
              return (
                <CyberCard key={option.id} hoverEffect className="overflow-hidden group">
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={option.image || ''}
                      alt={option.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
                    
                    <div className={`absolute top-3 left-3 ${typeColors.bg} ${typeColors.text} px-2 py-0.5 rounded text-xs font-orbitron`}>
                      {option.type === 'GRANT' ? 'GRANT' : option.type === 'MICROLOAN' ? 'MICROLOAN' : 'VC FUNDING'}
                    </div>
                    
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-orbitron text-lg font-bold">{option.name}</h3>
                      <p className="text-sm text-cyber-text-dim">By {option.provider}</p>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-cyber-text-dim">Amount:</span>
                        <span className="text-sm font-exo font-semibold">
                          {formatCurrency(option.minAmount)} - {formatCurrency(option.maxAmount)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-cyber-text-dim">Match Score:</span>
                        <span className="text-sm font-exo font-semibold text-cyber-blue">{matchScore}% Compatible</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm text-cyber-text-dim">
                          {option.type === 'GRANT' ? 'Deadline:' : 
                           option.type === 'MICROLOAN' ? 'Interest Rate:' :
                           'Equity:'}
                        </span>
                        <span className={`text-sm font-exo font-semibold ${
                          option.type === 'GRANT' ? 'text-cyber-yellow' : 
                          option.type === 'MICROLOAN' ? 'text-cyber-green' : 
                          'text-cyber-text'
                        }`}>
                          {option.type === 'GRANT' && option.deadline 
                            ? `${getDaysLeft(option.deadline)} days left` 
                            : option.type === 'MICROLOAN' && option.interestRate
                            ? `${option.interestRate}% APR`
                            : option.type === 'VC_FUNDING' && option.equityPercentage
                            ? `${option.equityPercentage}%`
                            : 'N/A'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-cyber-text-dim mb-4">
                      {option.description}
                    </p>
                    
                    <div className="flex justify-between gap-2">
                      <NeonButton color="blue" className="flex-1 py-2 text-sm">
                        Apply Now
                      </NeonButton>
                      <button className="p-2 border border-cyber-text-dim/20 rounded hover:border-cyber-blue/50 transition-colors">
                        <i className="ri-heart-line"></i>
                      </button>
                    </div>
                  </div>
                </CyberCard>
              );
            })}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <NeonButton variant="secondary" color="pink" size="lg">
            View All Funding Options
            <i className="ri-arrow-right-line ml-2"></i>
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
