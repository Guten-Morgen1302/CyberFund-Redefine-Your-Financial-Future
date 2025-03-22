import React from 'react';
import { CyberCard } from './ui/cyber-card';
import { Link } from 'wouter';
import { UserAvatar } from './user-avatar';

export function DashboardPreview() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">
            Your <span className="text-cyber-purple">Interactive</span> Dashboard
          </h2>
          <p className="text-cyber-text-dim max-w-2xl mx-auto mt-4">
            Track your progress, manage applications, and receive personalized recommendations 
            all in one central hub.
          </p>
        </div>
        
        <CyberCard glassEffect className="rounded-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-cyber-dark px-3 py-1 rounded-bl-lg border-l border-b border-cyber-purple/30 font-orbitron text-xs text-cyber-purple">
            DASHBOARD PREVIEW
          </div>
          
          <div className="p-6 md:p-8 grid md:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <UserAvatar 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
                  fallback="JC" 
                  size="md"
                />
                <div>
                  <h3 className="font-exo font-semibold">Jessica Chen</h3>
                  <p className="text-xs text-cyber-blue">Premium Member</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-md bg-cyber-blue/20 border border-cyber-blue/30 cursor-pointer">
                  <i className="ri-dashboard-3-line text-cyber-blue"></i>
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-cyber-blue/10 transition-colors cursor-pointer">
                  <i className="ri-profile-line text-cyber-text-dim"></i>
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-cyber-blue/10 transition-colors cursor-pointer">
                  <i className="ri-funds-line text-cyber-text-dim"></i>
                  <span>Funding</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-cyber-blue/10 transition-colors cursor-pointer">
                  <i className="ri-chat-3-line text-cyber-text-dim"></i>
                  <span>AI Assistant</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-cyber-blue/10 transition-colors cursor-pointer">
                  <i className="ri-bar-chart-line text-cyber-text-dim"></i>
                  <span>Analytics</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-cyber-blue/10 transition-colors cursor-pointer">
                  <i className="ri-settings-4-line text-cyber-text-dim"></i>
                  <span>Settings</span>
                </div>
              </nav>
            </div>
            
            {/* Main Dashboard */}
            <div className="md:col-span-9 lg:col-span-10">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Stats Card 1 */}
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-blue/20">
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
                </div>
                
                {/* Stats Card 2 */}
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-blue/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-cyber-pink/20 flex items-center justify-center">
                      <i className="ri-file-list-3-line text-cyber-pink"></i>
                    </div>
                    <div>
                      <h3 className="text-cyber-text-dim text-sm">Applications</h3>
                      <p className="font-exo text-xl font-bold">5 Active</p>
                    </div>
                  </div>
                  <div className="h-1 bg-cyber-black rounded overflow-hidden mb-2">
                    <div className="h-full bg-cyber-pink" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-cyber-pink">2 pending review</p>
                </div>
                
                {/* Stats Card 3 */}
                <div className="bg-cyber-dark rounded-lg p-4 border border-cyber-blue/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                      <i className="ri-line-chart-line text-cyber-purple"></i>
                    </div>
                    <div>
                      <h3 className="text-cyber-text-dim text-sm">Credit Score</h3>
                      <p className="font-exo text-xl font-bold">735</p>
                    </div>
                  </div>
                  <div className="h-1 bg-cyber-black rounded overflow-hidden mb-2">
                    <div className="h-full bg-cyber-purple" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-cyber-purple">+23 points this quarter</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Funding Applications */}
                <div className="lg:col-span-2 bg-cyber-dark p-4 rounded-lg border border-cyber-blue/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-orbitron">Funding Applications</h3>
                    <button className="text-xs text-cyber-blue">View All</button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-cyber-black/50 p-3 rounded-md border border-cyber-blue/10 flex justify-between">
                      <div>
                        <h4 className="font-exo">Women's Business Grant</h4>
                        <p className="text-xs text-cyber-text-dim">Applied: Sept 15, 2023</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-cyber-yellow/20 text-cyber-yellow px-2 py-0.5 rounded mr-2">Under Review</span>
                        <button className="text-cyber-blue hover:text-opacity-80">
                          <i className="ri-arrow-right-line"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-cyber-black/50 p-3 rounded-md border border-cyber-blue/10 flex justify-between">
                      <div>
                        <h4 className="font-exo">FemTech Microloan</h4>
                        <p className="text-xs text-cyber-text-dim">Applied: Oct 3, 2023</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-cyber-green/20 text-cyber-green px-2 py-0.5 rounded mr-2">Approved</span>
                        <button className="text-cyber-blue hover:text-opacity-80">
                          <i className="ri-arrow-right-line"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-cyber-black/50 p-3 rounded-md border border-cyber-blue/10 flex justify-between">
                      <div>
                        <h4 className="font-exo">NextGen Ventures</h4>
                        <p className="text-xs text-cyber-text-dim">Applied: Oct 10, 2023</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs bg-cyber-pink/20 text-cyber-pink px-2 py-0.5 rounded mr-2">Documents Needed</span>
                        <button className="text-cyber-blue hover:text-opacity-80">
                          <i className="ri-arrow-right-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Financial Tips */}
                <div className="bg-cyber-dark p-4 rounded-lg border border-cyber-blue/20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-orbitron">Financial Tips</h3>
                    <button className="text-xs text-cyber-blue">Refresh</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-cyber-black/50 p-3 rounded-md border-l-2 border-cyber-green">
                      <h4 className="font-exo text-sm text-cyber-green mb-1">Cash Flow Management</h4>
                      <p className="text-xs text-cyber-text-dim">
                        Set up automatic transfers to your business savings to build emergency funds consistently.
                      </p>
                    </div>
                    
                    <div className="bg-cyber-black/50 p-3 rounded-md border-l-2 border-cyber-blue">
                      <h4 className="font-exo text-sm text-cyber-blue mb-1">Credit Building</h4>
                      <p className="text-xs text-cyber-text-dim">
                        Use small recurring expenses on your business credit card and pay the balance in full each month.
                      </p>
                    </div>
                    
                    <div className="bg-cyber-black/50 p-3 rounded-md border-l-2 border-cyber-purple">
                      <h4 className="font-exo text-sm text-cyber-purple mb-1">Funding Opportunities</h4>
                      <p className="text-xs text-cyber-text-dim">
                        Q4 is a peak time for grant applications. Update your business plan for end-of-year submissions.
                      </p>
                    </div>
                  </div>
                  
                  <Link href="/dashboard">
                    <div className="w-full mt-4 py-2 border border-cyber-blue/50 rounded text-cyber-blue text-sm hover:bg-cyber-blue/10 transition-colors block text-center font-orbitron cursor-pointer">
                      Get Personalized Advice
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CyberCard>
      </div>
    </section>
  );
}
