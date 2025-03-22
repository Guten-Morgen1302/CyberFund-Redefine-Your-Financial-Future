import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NeonButton } from "@/components/ui/neon-button";
import { CyberCard } from "@/components/ui/cyber-card";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/ui/glitch-text";
import { CreditMeter } from "@/components/ui/credit-meter";
import { UserAvatar } from "@/components/user-avatar";
import { HologramContainer } from "@/components/ui/hologram-container";
import { Switch } from "@/components/ui/switch";
import { 
  User, Settings, Bell, Shield, CreditCard, 
  FileText, Award, LogOut, Check, Edit, 
  Smartphone, Mail, Globe
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    mobile: false,
    fundingOpportunities: true,
    newsAndUpdates: true,
    financialTips: true,
    accountChanges: true
  });
  
  // Mock user data
  const user = {
    id: 1,
    fullName: "Alexandra Chen",
    username: "alexchen",
    email: "alex@techfusion.io",
    businessName: "TechFusion Solutions",
    businessDescription: "AI-powered software solutions for small businesses focusing on automation and efficiency.",
    industry: "Technology",
    phone: "+1 (555) 123-4567",
    website: "www.techfusion.io",
    joinDate: "June 2023",
    membershipTier: "PREMIUM",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  };
  
  // Mock credit score data
  const creditScore = {
    score: 78,
    factors: [
      { name: "Revenue Consistency", value: 82 },
      { name: "Transaction History", value: 75 },
      { name: "Business Longevity", value: 65 },
      { name: "Industry Growth", value: 90 },
      { name: "Social Reputation", value: 73 }
    ]
  };
  
  // Mock funding history
  const fundingHistory = [
    {
      id: 1,
      type: "GRANT",
      provider: "Women in Tech Foundation",
      amount: 25000,
      status: "APPROVED",
      date: "2024-01-15",
      purpose: "Product development and market expansion"
    },
    {
      id: 2,
      type: "MICROLOAN",
      provider: "Community Finance Initiative",
      amount: 15000,
      status: "APPROVED",
      date: "2023-08-22",
      purpose: "Equipment purchase and team training"
    },
    {
      id: 3,
      type: "VC_FUNDING",
      provider: "Horizon Ventures",
      amount: 150000,
      status: "PENDING",
      date: "2024-02-28",
      purpose: "Series A funding for scaling operations"
    }
  ];
  
  // Mock badges and achievements
  const achievements = [
    { id: 1, name: "Early Adopter", description: "Joined during platform launch phase", icon: "🚀", date: "2023-06-10" },
    { id: 2, name: "Funding Pioneer", description: "Successfully secured first funding", icon: "💰", date: "2023-08-25" },
    { id: 3, name: "Credit Builder", description: "Improved credit score by 20 points", icon: "📈", date: "2023-11-18" },
    { id: 4, name: "Networking Pro", description: "Connected with 50+ entrepreneurs", icon: "🔗", date: "2024-01-05" },
    { id: 5, name: "Financial Expert", description: "Completed all financial education courses", icon: "🏆", date: "2024-02-12" },
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient text-cyber-text">
      <Navbar isLoggedIn username={user.username} avatarSrc={user.profileImage} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Profile Overview */}
            <div className="w-full md:w-1/3">
              <CyberCard glassEffect borderEffect className="p-6 text-center relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyber-pink opacity-10 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="mx-auto mb-6 relative">
                    <UserAvatar 
                      src={user.profileImage} 
                      fallback={user.fullName.substring(0, 2)} 
                      size="lg" 
                      glowEffect
                      glowColor="blue"
                    />
                    
                    <div className="absolute -bottom-2 -right-2">
                      <Badge variant="default" className="bg-cyber-blue text-cyber-black text-xs font-semibold px-2 py-1 rounded-full border border-cyber-blue/50">
                        {user.membershipTier}
                      </Badge>
                    </div>
                  </div>
                  
                  <GlitchText 
                    text={user.fullName} 
                    className="text-2xl font-orbitron mb-1"
                  />
                  
                  <p className="text-cyber-text-dim mb-4">@{user.username}</p>
                  
                  <div className="flex justify-center space-x-2 mb-6">
                    <div className="bg-cyber-dark p-2 rounded-full">
                      <Mail className="h-4 w-4 text-cyber-blue" />
                    </div>
                    <div className="bg-cyber-dark p-2 rounded-full">
                      <Smartphone className="h-4 w-4 text-cyber-pink" />
                    </div>
                    <div className="bg-cyber-dark p-2 rounded-full">
                      <Globe className="h-4 w-4 text-cyber-purple" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-xs text-cyber-text-dim mb-1">MEMBER SINCE</div>
                    <div className="text-sm">{user.joinDate}</div>
                  </div>
                  
                  <div className="pt-4 border-t border-cyber-blue/20">
                    <div className="mb-4">
                      <div className="text-xs text-cyber-text-dim mb-1">BUSINESS</div>
                      <div className="text-lg font-medium">{user.businessName}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs text-cyber-text-dim mb-1">INDUSTRY</div>
                      <div>{user.industry}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-cyber-text-dim mb-1">CREDIT SCORE</div>
                      <div className="flex justify-center">
                        <CreditMeter score={creditScore.score} size="md" />
                      </div>
                    </div>
                  </div>
                </div>
              </CyberCard>
              
              <div className="mt-6">
                <NeonButton color="pink" variant="outline" className="w-full mb-3">
                  <Shield className="mr-2 h-4 w-4" /> Upgrade Membership
                </NeonButton>
                <NeonButton color="blue" variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Download My Data
                </NeonButton>
              </div>
            </div>
            
            {/* Profile Details and Tabs */}
            <div className="w-full md:w-2/3">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-8 flex w-full h-auto flex-wrap gap-2 bg-transparent">
                  <TabsTrigger
                    value="profile"
                    className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="funding"
                    className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Funding History
                  </TabsTrigger>
                  <TabsTrigger
                    value="badges"
                    className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    Achievements
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-6">
                  <CyberCard glassEffect borderEffect className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-orbitron text-xl">Personal Information</h3>
                      <NeonButton
                        variant="outline"
                        color="blue"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Save
                          </>
                        ) : (
                          <>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </>
                        )}
                      </NeonButton>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          defaultValue={user.fullName}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          defaultValue={user.username}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue={user.email}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          defaultValue={user.phone}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                    </div>
                  </CyberCard>
                  
                  <CyberCard glassEffect borderEffect className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-orbitron text-xl">Business Information</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          defaultValue={user.businessName}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Input
                          id="industry"
                          defaultValue={user.industry}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          defaultValue={user.website}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessDescription">Business Description</Label>
                        <Textarea
                          id="businessDescription"
                          defaultValue={user.businessDescription}
                          disabled={!isEditing}
                          className="bg-cyber-dark border-cyber-text-dim/20 min-h-[100px]"
                        />
                      </div>
                    </div>
                  </CyberCard>
                  
                  <CyberCard glassEffect borderEffect className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-orbitron text-xl">Credit Score Factors</h3>
                      <Badge className="bg-cyber-blue text-cyber-black">
                        {creditScore.score}/100
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {creditScore.factors.map((factor, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">{factor.name}</span>
                            <span className="text-sm font-medium">{factor.value}/100</span>
                          </div>
                          <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                factor.value >= 80 ? 'bg-cyber-green' : 
                                factor.value >= 60 ? 'bg-cyber-blue' : 
                                factor.value >= 40 ? 'bg-cyber-purple' : 'bg-cyber-pink'
                              }`}
                              style={{ width: `${factor.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CyberCard>
                </TabsContent>
                
                <TabsContent value="funding" className="space-y-6">
                  <h3 className="font-orbitron text-2xl mb-6">Funding History</h3>
                  
                  {fundingHistory.map((funding) => (
                    <CyberCard key={funding.id} glassEffect borderEffect className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <Badge 
                            className={
                              funding.type === 'GRANT' ? 'bg-cyber-green text-cyber-black' :
                              funding.type === 'MICROLOAN' ? 'bg-cyber-blue text-cyber-black' :
                              'bg-cyber-purple text-cyber-black'
                            }
                          >
                            {funding.type.replace('_', ' ')}
                          </Badge>
                          <h4 className="text-lg font-medium mt-2">{funding.provider}</h4>
                          <p className="text-cyber-text-dim text-sm mt-1">{funding.purpose}</p>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <div className="text-xl font-orbitron text-cyber-text">
                            ${funding.amount.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge 
                              variant="outline" 
                              className={
                                funding.status === 'APPROVED' ? 'border-cyber-green text-cyber-green' :
                                funding.status === 'PENDING' ? 'border-cyber-blue text-cyber-blue' :
                                'border-cyber-pink text-cyber-pink'
                              }
                            >
                              {funding.status}
                            </Badge>
                            <span className="text-xs text-cyber-text-dim">
                              {new Date(funding.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CyberCard>
                  ))}
                  
                  <div className="text-center mt-8">
                    <NeonButton color="blue">
                      View All Applications
                    </NeonButton>
                  </div>
                </TabsContent>
                
                <TabsContent value="badges" className="space-y-6">
                  <h3 className="font-orbitron text-2xl mb-6">Achievements & Badges</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement) => (
                      <CyberCard key={achievement.id} borderEffect className="p-5">
                        <div className="flex gap-4">
                          <HologramContainer scanEffect className="h-16 w-16 flex items-center justify-center text-3xl">
                            {achievement.icon}
                          </HologramContainer>
                          
                          <div>
                            <h4 className="font-orbitron text-cyber-text">{achievement.name}</h4>
                            <p className="text-sm text-cyber-text-dim mt-1">{achievement.description}</p>
                            <div className="text-xs text-cyber-text-dim mt-2">
                              Earned on {new Date(achievement.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                          </div>
                        </div>
                      </CyberCard>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-6">
                  <CyberCard glassEffect borderEffect className="p-6">
                    <h3 className="font-orbitron text-xl mb-6">Notification Preferences</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Email Notifications</Label>
                          <p className="text-sm text-cyber-text-dim">Receive updates via email</p>
                        </div>
                        <Switch 
                          checked={notifications.email}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, email: checked }))
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Mobile Notifications</Label>
                          <p className="text-sm text-cyber-text-dim">Receive updates via SMS</p>
                        </div>
                        <Switch 
                          checked={notifications.mobile}
                          onCheckedChange={(checked) => 
                            setNotifications(prev => ({ ...prev, mobile: checked }))
                          }
                        />
                      </div>
                      
                      <div className="pt-4 border-t border-cyber-blue/20">
                        <h4 className="text-lg font-medium mb-4">Notification Types</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label>Funding Opportunities</Label>
                            <Switch 
                              checked={notifications.fundingOpportunities}
                              onCheckedChange={(checked) => 
                                setNotifications(prev => ({ ...prev, fundingOpportunities: checked }))
                              }
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label>News & Updates</Label>
                            <Switch 
                              checked={notifications.newsAndUpdates}
                              onCheckedChange={(checked) => 
                                setNotifications(prev => ({ ...prev, newsAndUpdates: checked }))
                              }
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label>Financial Tips</Label>
                            <Switch 
                              checked={notifications.financialTips}
                              onCheckedChange={(checked) => 
                                setNotifications(prev => ({ ...prev, financialTips: checked }))
                              }
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label>Account Changes</Label>
                            <Switch 
                              checked={notifications.accountChanges}
                              onCheckedChange={(checked) => 
                                setNotifications(prev => ({ ...prev, accountChanges: checked }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CyberCard>
                  
                  <CyberCard glassEffect borderEffect className="p-6">
                    <h3 className="font-orbitron text-xl mb-6">Security Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <NeonButton variant="outline" color="blue" className="w-full mb-3">
                          Change Password
                        </NeonButton>
                        <NeonButton variant="outline" color="blue" className="w-full mb-3">
                          Enable Two-Factor Authentication
                        </NeonButton>
                        <NeonButton variant="outline" color="blue" className="w-full">
                          Security Audit Log
                        </NeonButton>
                      </div>
                    </div>
                  </CyberCard>
                  
                  <CyberCard glassEffect borderEffect className="p-6">
                    <h3 className="font-orbitron text-xl mb-6 text-cyber-pink">Danger Zone</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <NeonButton variant="outline" color="pink" className="w-full mb-3">
                          <LogOut className="mr-2 h-4 w-4" /> Sign Out From All Devices
                        </NeonButton>
                        <NeonButton variant="outline" color="pink" className="w-full">
                          Delete Account
                        </NeonButton>
                      </div>
                    </div>
                  </CyberCard>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}