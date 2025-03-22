import React, { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CyberCard } from '@/components/ui/cyber-card';
import { CyberTicker } from '@/components/ui/cyber-ticker';
import { CreditMeter } from '@/components/ui/credit-meter';
import { NeonButton } from '@/components/ui/neon-button';
import { Link } from 'wouter';
import { UserAvatar } from '@/components/user-avatar';
import { AIAvatar } from '@/components/ai-avatar';
import { FinancialChatbot } from '@/components/financial-chatbot';
import { useQuery } from '@tanstack/react-query';
import { getApplicationStatusColor, getFactorRating, formatDate } from '@/lib/utils';
import type { CreditScore, User, FundingApplication, FinancialTip } from '@/types';

// Mock user ID for demo purposes
const DEMO_USER_ID = 1;

const tickerItems = [
  { id: 1, text: "FemTech Fund raised $3M in seed funding", color: "green" as const, icon: "↗" },
  { id: 2, text: "Application deadline: Women in Business Grant - 5 days left", color: "yellow" as const, icon: "⚠" },
  { id: 3, text: "New microfinance options available for retail startups", color: "blue" as const, icon: "ℹ" },
  { id: 4, text: "Success Story: Sarah's Design Studio secured $250K funding", color: "pink" as const, icon: "★" },
  { id: 5, text: "AI Tip: Complete your business profile to boost your score by 15%", color: "purple" as const, icon: "⚡" }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fetch user data
  const { data: user, isLoading: isLoadingUser } = useQuery<User>({
    queryKey: [`/api/users/${DEMO_USER_ID}`],
  });
  
  // Fetch credit score
  const { data: creditScore, isLoading: isLoadingCreditScore } = useQuery<CreditScore>({
    queryKey: [`/api/credit-scores/${DEMO_USER_ID}`],
  });
  
  // Fetch funding applications
  const { data: applications, isLoading: isLoadingApplications } = useQuery<FundingApplication[]>({
    queryKey: [`/api/funding-applications/user/${DEMO_USER_ID}`],
  });
  
  // Fetch financial tips
  const { data: financialTips, isLoading: isLoadingTips } = useQuery<FinancialTip[]>({
    queryKey: ['/api/financial-tips'],
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isLoggedIn={true} 
        username={user?.username || 'User'} 
        avatarSrc={user?.profileImage || undefined} 
      />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <CyberTicker items={tickerItems} className="mb-8" />
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-1/5">
              <CyberCard className="p-5">
                <div className="flex flex-col items-center mb-6">
                  <UserAvatar 
                    src={user?.profileImage || undefined}
                    fallback={user?.fullName.charAt(0) || 'U'}
                    size="lg"
                    glowEffect
                    glowColor="blue"
                    className="mb-3"
                  />
                  <h2 className="font-exo font-semibold text-lg">{user?.fullName || 'Loading...'}</h2>
                  <p className="text-sm text-cyber-text-dim">{user?.businessName || 'Your Business'}</p>
                  <div className="mt-2 px-3 py-1 bg-cyber-blue/20 rounded-full text-cyber-blue text-xs font-orbitron">
                    {user?.membershipTier === 'premium' ? 'Premium Member' : 'Basic Member'}
                  </div>
                </div>
                
                <nav className="space-y-2">
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'overview' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <i className="ri-dashboard-3-line text-cyber-blue"></i>
                    <span>Overview</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'credit' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('credit')}
                  >
                    <i className="ri-bar-chart-line text-cyber-text-dim"></i>
                    <span>Credit Score</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'applications' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('applications')}
                  >
                    <i className="ri-file-list-3-line text-cyber-text-dim"></i>
                    <span>Applications</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'funding' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('funding')}
                  >
                    <i className="ri-funds-line text-cyber-text-dim"></i>
                    <span>Find Funding</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'assistant' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('assistant')}
                  >
                    <i className="ri-robot-line text-cyber-text-dim"></i>
                    <span>AI Assistant</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 p-2 rounded-md ${activeTab === 'settings' ? 'bg-cyber-blue/20 border border-cyber-blue/30' : 'hover:bg-cyber-blue/10 transition-colors'}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <i className="ri-settings-4-line text-cyber-text-dim"></i>
                    <span>Settings</span>
                  </button>
                </nav>
                
                <div className="mt-8 p-4 bg-cyber-purple/10 rounded-lg border border-cyber-purple/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                      <i className="ri-rocket-line text-cyber-purple"></i>
                    </div>
                    <h3 className="font-orbitron text-sm text-cyber-purple">Upgrade to Premium</h3>
                  </div>
                  <p className="text-xs text-cyber-text-dim mb-3">
                    Get personalized funding matches, priority application reviews, and advanced analytics.
                  </p>
                  <NeonButton color="purple" size="sm" className="w-full">
                    Explore Plans
                  </NeonButton>
                </div>
              </CyberCard>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-4/5">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Stats Row */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <CyberCard className="p-4 bg-cyber-dark border border-cyber-blue/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                          <i className="ri-funds-box-line text-cyber-blue"></i>
                        </div>
                        <div>
                          <h3 className="text-cyber-text-dim text-sm">Total Funding</h3>
                          <p className="font-exo text-xl font-bold">$125,000</p>
                        </div>
                      </div>
                      <div className="h-1 bg-cyber-black rounded overflow-hidden mb-2">
                        <div className="h-full bg-cyber-blue" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-cyber-blue">+12% from last month</p>
                    </CyberCard>
                    
                    <CyberCard className="p-4 bg-cyber-dark border border-cyber-blue/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-cyber-pink/20 flex items-center justify-center">
                          <i className="ri-file-list-3-line text-cyber-pink"></i>
                        </div>
                        <div>
                          <h3 className="text-cyber-text-dim text-sm">Applications</h3>
                          <p className="font-exo text-xl font-bold">{applications?.length || 0} Active</p>
                        </div>
                      </div>
                      <div className="h-1 bg-cyber-black rounded overflow-hidden mb-2">
                        <div className="h-full bg-cyber-pink" style={{ width: '60%' }}></div>
                      </div>
                      <p className="text-xs text-cyber-pink">
                        {applications?.filter(a => a.status === 'UNDER_REVIEW').length || 0} pending review
                      </p>
                    </CyberCard>
                    
                    <CyberCard className="p-4 bg-cyber-dark border border-cyber-blue/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                          <i className="ri-line-chart-line text-cyber-purple"></i>
                        </div>
                        <div>
                          <h3 className="text-cyber-text-dim text-sm">Credit Score</h3>
                          <p className="font-exo text-xl font-bold">{creditScore?.score || '---'}</p>
                        </div>
                      </div>
                      <div className="h-1 bg-cyber-black rounded overflow-hidden mb-2">
                        <div className="h-full bg-cyber-purple" style={{ width: creditScore ? `${(creditScore.score - 500) / 3.5}%` : '0%' }}></div>
                      </div>
                      <p className="text-xs text-cyber-purple">+23 points this quarter</p>
                    </CyberCard>
                  </div>
                  
                  {/* Recent Activity and AI */}
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <CyberCard className="p-5 bg-cyber-dark border border-cyber-blue/20">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-orbitron">Recent Applications</h3>
                          <button className="text-xs text-cyber-blue" onClick={() => setActiveTab('applications')}>
                            View All
                          </button>
                        </div>
                        
                        {isLoadingApplications ? (
                          <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-16 bg-cyber-black/30 animate-pulse rounded-md"></div>
                            ))}
                          </div>
                        ) : applications && applications.length > 0 ? (
                          <div className="space-y-3">
                            {applications.slice(0, 3).map(app => {
                              const statusColors = getApplicationStatusColor(app.status);
                              
                              return (
                                <div key={app.id} className="bg-cyber-black/50 p-3 rounded-md border border-cyber-blue/10 flex justify-between">
                                  <div>
                                    <h4 className="font-exo">{app.fundingOption?.name || 'Funding Option'}</h4>
                                    <p className="text-xs text-cyber-text-dim">
                                      Applied: {formatDate(app.appliedAt)}
                                    </p>
                                  </div>
                                  <div className="flex items-center">
                                    <span className={`text-xs ${statusColors.bg} ${statusColors.text} px-2 py-0.5 rounded mr-2`}>
                                      {app.status.replace('_', ' ')}
                                    </span>
                                    <button className="text-cyber-blue hover:text-opacity-80">
                                      <i className="ri-arrow-right-line"></i>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="p-8 text-center text-cyber-text-dim">
                            <p>No applications yet.</p>
                            <Link href="/funding">
                              <div className="text-cyber-blue hover:underline text-sm inline-block mt-2 cursor-pointer">
                                Browse funding options <i className="ri-arrow-right-line"></i>
                              </div>
                            </Link>
                          </div>
                        )}
                      </CyberCard>
                    </div>
                    
                    <div>
                      <CyberCard className="p-5 bg-cyber-dark border border-cyber-blue/20 h-full flex flex-col">
                        <h3 className="font-orbitron mb-4">NOVA Insights</h3>
                        
                        <div className="relative flex-grow flex items-center justify-center">
                          <AIAvatar size="small" />
                          <div className="absolute bottom-0 w-full p-3 bg-cyber-black/70 border border-cyber-blue/20 rounded-lg">
                            <p className="text-sm text-cyber-text-dim">
                              <span className="text-cyber-pink">Today's Tip:</span> Your credit score improved! Now might be a good time to apply for that grant you were eyeing.
                            </p>
                            <button className="w-full mt-3 py-1.5 bg-cyber-blue/20 border border-cyber-blue/30 rounded text-cyber-blue text-sm hover:bg-cyber-blue/30 transition-colors font-orbitron"
                              onClick={() => setActiveTab('assistant')}>
                              Chat with NOVA
                            </button>
                          </div>
                        </div>
                      </CyberCard>
                    </div>
                  </div>
                  
                  {/* Tips and Recommendations */}
                  <CyberCard className="p-5 bg-cyber-dark border border-cyber-blue/20">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-orbitron">Financial Tips</h3>
                      <button className="text-xs text-cyber-blue">Refresh</button>
                    </div>
                    
                    {isLoadingTips ? (
                      <div className="grid md:grid-cols-3 gap-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-24 bg-cyber-black/30 animate-pulse rounded-md"></div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-3 gap-4">
                        {financialTips?.slice(0, 3).map((tip, index) => {
                          const colors = [
                            { border: 'border-cyber-green', text: 'text-cyber-green' },
                            { border: 'border-cyber-blue', text: 'text-cyber-blue' },
                            { border: 'border-cyber-purple', text: 'text-cyber-purple' },
                          ];
                          const colorIndex = index % colors.length;
                          
                          return (
                            <div 
                              key={tip.id} 
                              className={`bg-cyber-black/50 p-3 rounded-md border-l-2 ${colors[colorIndex].border}`}
                            >
                              <h4 className={`font-exo text-sm ${colors[colorIndex].text} mb-1`}>
                                {tip.title}
                              </h4>
                              <p className="text-xs text-cyber-text-dim">
                                {tip.content}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CyberCard>
                </div>
              )}

              {activeTab === 'credit' && (
                <CyberCard className="p-6 md:p-8">
                  <h2 className="font-orbitron text-2xl mb-6">AI-Powered Credit Assessment</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Credit Score Display */}
                    <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-cyber-blue/20 pb-6 md:pb-0">
                      <h3 className="font-orbitron text-lg mb-6 text-center">Your Business Credit Score</h3>
                      
                      {isLoadingCreditScore ? (
                        <div className="w-40 h-40 rounded-full bg-cyber-dark/50 animate-pulse"></div>
                      ) : (
                        <>
                          <CreditMeter 
                            score={creditScore?.score || 650} 
                            size="lg" 
                            className="mb-4" 
                          />
                          
                          <div className="text-center">
                            <p className="text-sm text-cyber-text-dim mb-2">
                              Last updated: {creditScore?.lastUpdated ? formatDate(creditScore.lastUpdated) : 'Recently'}
                            </p>
                            <button className="text-cyber-blue text-sm hover:underline">
                              <i className="ri-refresh-line mr-1"></i> Refresh Score
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Score Factors */}
                    <div className="border-b md:border-b-0 md:border-r border-cyber-blue/20 pb-6 md:pb-0">
                      <h3 className="font-orbitron text-lg mb-6">Score Factors</h3>
                      
                      {isLoadingCreditScore ? (
                        <div className="space-y-4">
                          {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="h-8 bg-cyber-dark/50 animate-pulse rounded-md"></div>
                          ))}
                        </div>
                      ) : creditScore ? (
                        <div className="space-y-4">
                          {[
                            { name: "Business Revenue Consistency", value: creditScore.revenueConsistency },
                            { name: "Transaction History", value: creditScore.transactionHistory },
                            { name: "Business Longevity", value: creditScore.businessLongevity },
                            { name: "Industry Growth Potential", value: creditScore.industryGrowth },
                            { name: "Social Reputation", value: creditScore.socialReputation }
                          ].map((factor, index) => {
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
                      ) : (
                        <div className="p-6 text-center text-cyber-text-dim">
                          <p>No credit data available.</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Improvement Suggestions */}
                    <div>
                      <h3 className="font-orbitron text-lg mb-6">Improvement Suggestions</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <div className="text-cyber-blue mt-1">
                            <i className="ri-lightbulb-flash-line text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-exo font-semibold text-cyber-blue">Increase Social Proof</h4>
                            <p className="text-sm text-cyber-text-dim">Connect your business social accounts to improve your social reputation score.</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="text-cyber-purple mt-1">
                            <i className="ri-lightbulb-flash-line text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-exo font-semibold text-cyber-purple">Complete Business Documentation</h4>
                            <p className="text-sm text-cyber-text-dim">Upload your business plan and financial projections for the next 6 months.</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="text-cyber-pink mt-1">
                            <i className="ri-lightbulb-flash-line text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-exo font-semibold text-cyber-pink">Establish Regular Revenue</h4>
                            <p className="text-sm text-cyber-text-dim">Connect payment systems to show consistent monthly income patterns.</p>
                          </div>
                        </div>
                        
                        <button className="mt-4 w-full py-2 border border-cyber-blue text-cyber-blue font-orbitron rounded hover:bg-cyber-blue/10 transition-colors">
                          View Full Report
                        </button>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              )}
              
              {activeTab === 'applications' && (
                <CyberCard className="p-6">
                  <h2 className="font-orbitron text-2xl mb-6">Your Funding Applications</h2>
                  
                  {isLoadingApplications ? (
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-20 bg-cyber-dark/50 animate-pulse rounded-md"></div>
                      ))}
                    </div>
                  ) : applications && applications.length > 0 ? (
                    <div className="space-y-4">
                      {applications.map(app => {
                        const statusColors = getApplicationStatusColor(app.status);
                        
                        return (
                          <CyberCard key={app.id} className="bg-cyber-black/50 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-start gap-3">
                                <div className="w-16 h-16 bg-cyber-dark rounded-md overflow-hidden">
                                  {app.fundingOption?.image && (
                                    <img 
                                      src={app.fundingOption.image} 
                                      alt={app.fundingOption.name} 
                                      className="w-full h-full object-cover"
                                    />
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-exo text-lg font-semibold">
                                    {app.fundingOption?.name || 'Funding Application'}
                                  </h3>
                                  <p className="text-sm text-cyber-text-dim mb-1">
                                    {app.fundingOption?.provider || 'Provider'}
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <span className="text-xs text-cyber-text-dim">
                                      Applied: {formatDate(app.appliedAt)}
                                    </span>
                                    <span className={`text-xs ${statusColors.bg} ${statusColors.text} px-2 py-0.5 rounded`}>
                                      {app.status.replace('_', ' ')}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2 md:flex-col lg:flex-row">
                              <NeonButton color="blue" size="sm">
                                View Details
                              </NeonButton>
                              {app.status === 'DOCUMENTS_NEEDED' && (
                                <NeonButton variant="outline" color="pink" size="sm">
                                  Upload Documents
                                </NeonButton>
                              )}
                            </div>
                          </CyberCard>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-12 text-center bg-cyber-dark/30 rounded-lg border border-cyber-blue/10">
                      <div className="mb-4 text-5xl opacity-50">
                        <i className="ri-file-list-3-line"></i>
                      </div>
                      <h3 className="font-orbitron text-xl mb-2">No Applications Yet</h3>
                      <p className="text-cyber-text-dim mb-6">
                        Start your funding journey by applying to opportunities that match your business.
                      </p>
                      <Link href="/funding">
                        <a>
                          <NeonButton color="blue">
                            Browse Funding Options
                          </NeonButton>
                        </a>
                      </Link>
                    </div>
                  )}
                </CyberCard>
              )}
              
              {activeTab === 'assistant' && (
                <CyberCard className="p-6">
                  <h2 className="font-orbitron text-2xl mb-6">NOVA AI Assistant</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="md:w-1/3">
                      <AIAvatar size="medium" />
                    </div>
                    <div className="md:w-2/3">
                      <FinancialChatbot userId={DEMO_USER_ID} />
                    </div>
                  </div>
                </CyberCard>
              )}
              
              {(activeTab === 'funding' || activeTab === 'settings') && (
                <CyberCard className="p-6 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="text-5xl mb-4 text-cyber-blue opacity-50">
                      <i className={activeTab === 'funding' ? 'ri-funds-line' : 'ri-settings-4-line'}></i>
                    </div>
                    <h3 className="font-orbitron text-xl mb-2">
                      {activeTab === 'funding' ? 'Funding Explorer' : 'Settings'} Coming Soon
                    </h3>
                    <p className="text-cyber-text-dim mb-4">
                      We're working on making this feature available soon.
                    </p>
                    {activeTab === 'funding' && (
                      <Link href="/funding">
                        <a>
                          <NeonButton color="blue">
                            Browse Funding Options
                          </NeonButton>
                        </a>
                      </Link>
                    )}
                  </div>
                </CyberCard>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
