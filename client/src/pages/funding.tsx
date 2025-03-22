import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/ui/glitch-text";
import { CyberCard } from "@/components/ui/cyber-card";
import { NeonButton } from "@/components/ui/neon-button";
import { CreditMeter } from "@/components/ui/credit-meter";
import { Separator } from "@/components/ui/separator";
import { HologramContainer } from "@/components/ui/hologram-container";
import { 
  Search, Filter, Calendar, DollarSign, Clock, 
  BarChart3, ArrowRight, Check, AlertCircle, 
  FileText, Building, Users, PieChart
} from "lucide-react";
import { formatCurrency, formatPercentage, getDaysLeft, calculateCompatibility, getFundingTypeColor } from "@/lib/utils";

export default function Funding() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Mock user credit score data
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
  
  // Mock funding options data
  const fundingOptions = [
    {
      id: 1,
      name: "Women's Business Grant",
      provider: "EquityFirst Foundation",
      type: "GRANT",
      minAmount: 5000,
      maxAmount: 25000,
      description: "Non-repayable grants for women-owned businesses operating in underserved communities. Focus on businesses that demonstrate social impact.",
      requirements: "Must be woman-owned, in operation for at least 1 year, and demonstrate community impact.",
      deadline: "2024-05-15T23:59:59Z",
      interestRate: null,
      equityPercentage: null,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&w=500&fit=crop&q=60",
      active: true
    },
    {
      id: 2,
      name: "Tech Startup Microloan",
      provider: "Future Finance",
      type: "MICROLOAN",
      minAmount: 10000,
      maxAmount: 50000,
      description: "Low-interest microloans specifically for technology startups founded by women entrepreneurs. Flexible repayment terms.",
      requirements: "Tech-focused business, woman founder or co-founder, business plan required.",
      deadline: null,
      interestRate: 3.5,
      equityPercentage: null,
      image: "https://images.unsplash.com/photo-1504670073073-6123e39e0754?auto=format&w=500&fit=crop&q=60",
      active: true
    },
    {
      id: 3,
      name: "Growth Accelerator Investment",
      provider: "Horizon Ventures",
      type: "VC_FUNDING",
      minAmount: 100000,
      maxAmount: 500000,
      description: "Seed funding for high-growth potential businesses. Includes mentorship program and access to Horizon Ventures' network.",
      requirements: "Scalable business model, potential for 10x growth, strong founding team.",
      deadline: null,
      interestRate: null,
      equityPercentage: 8,
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&w=500&fit=crop&q=60",
      active: true
    },
    {
      id: 4,
      name: "Sustainable Business Grant",
      provider: "EcoFuture Alliance",
      type: "GRANT",
      minAmount: 15000,
      maxAmount: 40000,
      description: "Grants for women-led businesses focused on sustainability, renewable energy, or environmental impact.",
      requirements: "Business must have clear environmental impact goals, woman-owned, operational for min. 6 months.",
      deadline: "2024-06-30T23:59:59Z",
      interestRate: null,
      equityPercentage: null,
      image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&w=500&fit=crop&q=60",
      active: true
    },
    {
      id: 5,
      name: "Creative Industry Funding",
      provider: "Arts Forward",
      type: "MICROLOAN",
      minAmount: 5000,
      maxAmount: 30000,
      description: "Specialized funding for women entrepreneurs in creative industries including design, media, fashion, and artisan businesses.",
      requirements: "Creative industry focus, woman-owned, portfolio of work required.",
      deadline: null,
      interestRate: 4.0,
      equityPercentage: null,
      image: "https://images.unsplash.com/photo-1585188976098-f673b6132393?auto=format&w=500&fit=crop&q=60",
      active: true
    },
    {
      id: 6,
      name: "Healthcare Innovation Fund",
      provider: "MedTech Forward",
      type: "VC_FUNDING",
      minAmount: 150000,
      maxAmount: 750000,
      description: "Venture capital for women-led businesses innovating in healthcare, biotech, medtech, or wellness technology sectors.",
      requirements: "Healthcare innovation focus, prototype or MVP, regulatory strategy.",
      deadline: null,
      interestRate: null,
      equityPercentage: 10,
      image: "https://images.unsplash.com/photo-1576671414121-aa0c8ca370b0?auto=format&w=500&fit=crop&q=60",
      active: true
    }
  ];
  
  // Mock funding applications
  const applications = [
    {
      id: 1,
      fundingOptionId: 1,
      status: "APPROVED",
      appliedAt: "2024-01-15T14:32:25Z",
      updatedAt: "2024-02-01T09:45:12Z",
      notes: "Congratulations! Your application for the Women's Business Grant has been approved. Please check your email for next steps.",
      documents: ["business_plan.pdf", "financial_statements.pdf"],
      fundingOption: fundingOptions.find(o => o.id === 1)
    },
    {
      id: 2,
      fundingOptionId: 3,
      status: "UNDER_REVIEW",
      appliedAt: "2024-02-20T11:15:43Z",
      updatedAt: "2024-02-25T16:22:05Z",
      notes: "Your application is currently being reviewed by our investment committee. Additional documentation may be requested.",
      documents: ["pitch_deck.pdf", "market_analysis.pdf", "team_bios.pdf"],
      fundingOption: fundingOptions.find(o => o.id === 3)
    },
    {
      id: 3,
      fundingOptionId: 5,
      status: "DOCUMENTS_NEEDED",
      appliedAt: "2024-03-05T09:30:00Z",
      updatedAt: "2024-03-07T13:45:22Z",
      notes: "Please provide the following additional documents: Detailed business plan with 2-year projections, Portfolio of past projects.",
      documents: ["application_form.pdf"],
      fundingOption: fundingOptions.find(o => o.id === 5)
    }
  ];
  
  const filteredOptions = fundingOptions.filter(option => {
    // Filter by search term
    const matchesSearch = searchTerm === "" || 
      option.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      option.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by type
    const matchesFilter = activeFilter === "all" || option.type === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-cyber-gradient text-cyber-text">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <GlitchText 
            text="Funding Marketplace" 
            className="font-orbitron text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-blue bg-clip-text text-transparent mb-4"
          />
          <p className="text-lg text-cyber-text-dim max-w-3xl mx-auto">
            Discover tailored funding opportunities matched to your business profile. 
            From grants and microloans to venture capital, find the right resources to 
            fuel your growth.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="explore" className="w-full">
            <TabsList className="mb-8 flex w-full h-auto flex-wrap gap-2 bg-transparent">
              <TabsTrigger
                value="explore"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <Search className="mr-2 h-4 w-4" />
                Explore Funding
              </TabsTrigger>
              <TabsTrigger
                value="applications"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <FileText className="mr-2 h-4 w-4" />
                My Applications
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Recommended For You
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="explore" className="space-y-8">
              {/* Search & Filter */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-2/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-text-dim h-4 w-4" />
                  <Input 
                    placeholder="Search by name, provider, or description..." 
                    className="pl-10 bg-cyber-dark border-cyber-text-dim/20 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <button 
                    onClick={() => setActiveFilter("all")}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      activeFilter === "all" 
                        ? "bg-cyber-blue text-cyber-black" 
                        : "bg-cyber-dark text-cyber-text-dim"
                    }`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setActiveFilter("GRANT")}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      activeFilter === "GRANT" 
                        ? "bg-cyber-green text-cyber-black" 
                        : "bg-cyber-dark text-cyber-text-dim"
                    }`}
                  >
                    Grants
                  </button>
                  <button 
                    onClick={() => setActiveFilter("MICROLOAN")}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      activeFilter === "MICROLOAN" 
                        ? "bg-cyber-blue text-cyber-black" 
                        : "bg-cyber-dark text-cyber-text-dim"
                    }`}
                  >
                    Microloans
                  </button>
                  <button 
                    onClick={() => setActiveFilter("VC_FUNDING")}
                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      activeFilter === "VC_FUNDING" 
                        ? "bg-cyber-purple text-cyber-black" 
                        : "bg-cyber-dark text-cyber-text-dim"
                    }`}
                  >
                    VC Funding
                  </button>
                </div>
              </div>
              
              {/* Funding Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOptions.map((option) => {
                  const compatibility = calculateCompatibility(creditScore.score, option.type);
                  const typeColor = getFundingTypeColor(option.type);
                  
                  return (
                    <CyberCard key={option.id} glassEffect borderEffect hoverEffect className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={option.image} 
                          alt={option.name} 
                          className="object-cover h-full w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
                        
                        <div className="absolute top-4 left-4">
                          <Badge className={`${typeColor.bg} ${typeColor.text} font-medium px-3 py-1`}>
                            {option.type === "VC_FUNDING" ? "VC Funding" : option.type}
                          </Badge>
                        </div>
                        
                        <div className="absolute top-4 right-4">
                          <div className="bg-cyber-dark bg-opacity-60 backdrop-blur-sm rounded-md px-2 py-1 text-xs flex items-center">
                            <span className="mr-1">Match:</span>
                            <div className="h-2 w-16 bg-cyber-dark rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  compatibility >= 80 ? 'bg-cyber-green' : 
                                  compatibility >= 60 ? 'bg-cyber-blue' : 
                                  compatibility >= 40 ? 'bg-cyber-purple' : 'bg-cyber-pink'
                                }`}
                                style={{ width: `${compatibility}%` }}
                              ></div>
                            </div>
                            <span className="ml-1">{compatibility}%</span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-orbitron text-xl text-white">{option.name}</h3>
                          <p className="text-white/80">{option.provider}</p>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex justify-between text-sm mb-4">
                          <div>
                            <p className="text-cyber-text-dim">Funding Range</p>
                            <p className="font-medium">
                              {formatCurrency(option.minAmount)} - {formatCurrency(option.maxAmount)}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            {option.deadline ? (
                              <>
                                <p className="text-cyber-text-dim">Deadline</p>
                                <p className="font-medium flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {getDaysLeft(new Date(option.deadline))} days left
                                </p>
                              </>
                            ) : option.interestRate ? (
                              <>
                                <p className="text-cyber-text-dim">Interest Rate</p>
                                <p className="font-medium">{formatPercentage(option.interestRate)}</p>
                              </>
                            ) : option.equityPercentage ? (
                              <>
                                <p className="text-cyber-text-dim">Equity</p>
                                <p className="font-medium">{formatPercentage(option.equityPercentage)}</p>
                              </>
                            ) : (
                              <>
                                <p className="text-cyber-text-dim">Type</p>
                                <p className="font-medium">{option.type.replace('_', ' ')}</p>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-cyber-text-dim text-sm mb-5">
                          {option.description.length > 140 
                            ? `${option.description.substring(0, 140)}...` 
                            : option.description}
                        </p>
                        
                        <NeonButton 
                          color={option.type === "GRANT" ? "green" : option.type === "MICROLOAN" ? "blue" : "purple"}
                          className="w-full"
                        >
                          Apply Now
                        </NeonButton>
                      </div>
                    </CyberCard>
                  );
                })}
              </div>
              
              {filteredOptions.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-cyber-text-dim text-lg">No funding options match your criteria.</p>
                  <NeonButton color="blue" variant="outline" className="mt-4" onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("all");
                  }}>
                    Reset Filters
                  </NeonButton>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="applications" className="space-y-8">
              <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 mb-8">
                <h3 className="font-orbitron text-xl text-cyber-blue mb-4">My Applications</h3>
                
                {applications.length > 0 ? (
                  <div className="space-y-6">
                    {applications.map((app) => {
                      const option = app.fundingOption;
                      if (!option) return null;
                      
                      const typeColor = getFundingTypeColor(option.type);
                      
                      let statusIcon;
                      let statusColor;
                      
                      switch(app.status) {
                        case "APPROVED":
                          statusIcon = <Check className="h-5 w-5" />;
                          statusColor = "text-cyber-green bg-cyber-green/10 border-cyber-green/30";
                          break;
                        case "UNDER_REVIEW":
                          statusIcon = <Clock className="h-5 w-5" />;
                          statusColor = "text-cyber-blue bg-cyber-blue/10 border-cyber-blue/30";
                          break;
                        case "DOCUMENTS_NEEDED":
                          statusIcon = <AlertCircle className="h-5 w-5" />;
                          statusColor = "text-cyber-purple bg-cyber-purple/10 border-cyber-purple/30";
                          break;
                        case "REJECTED":
                          statusIcon = <AlertCircle className="h-5 w-5" />;
                          statusColor = "text-cyber-pink bg-cyber-pink/10 border-cyber-pink/30";
                          break;
                        default:
                          statusIcon = <Clock className="h-5 w-5" />;
                          statusColor = "text-cyber-text-dim bg-cyber-dark border-cyber-text-dim/30";
                      }
                      
                      return (
                        <CyberCard key={app.id} glassEffect className="p-5">
                          <div className="flex flex-col lg:flex-row justify-between gap-6">
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className={`${typeColor.bg} ${typeColor.text} font-medium px-3 py-1`}>
                                  {option.type === "VC_FUNDING" ? "VC Funding" : option.type}
                                </Badge>
                                <Badge variant="outline" className={statusColor}>
                                  <div className="flex items-center gap-1">
                                    {statusIcon}
                                    <span>{app.status.replace(/_/g, ' ')}</span>
                                  </div>
                                </Badge>
                              </div>
                              
                              <h3 className="text-xl font-orbitron mb-2">{option.name}</h3>
                              <p className="text-cyber-text-dim mb-1">{option.provider}</p>
                              
                              <div className="flex flex-wrap gap-6 text-sm mt-4">
                                <div>
                                  <p className="text-cyber-text-dim">Applied</p>
                                  <p>
                                    {new Date(app.appliedAt).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'short', 
                                      day: 'numeric' 
                                    })}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-cyber-text-dim">Last Updated</p>
                                  <p>
                                    {new Date(app.updatedAt).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'short', 
                                      day: 'numeric' 
                                    })}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-cyber-text-dim">Funding Range</p>
                                  <p>{formatCurrency(option.minAmount)} - {formatCurrency(option.maxAmount)}</p>
                                </div>
                              </div>
                              
                              {app.notes && (
                                <div className="mt-4 p-3 bg-cyber-dark/50 border border-l-4 border-cyber-blue/50 rounded-r-lg">
                                  <p className="text-sm">{app.notes}</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex flex-col justify-between gap-4 lg:w-1/4">
                              <div>
                                <p className="text-sm text-cyber-text-dim mb-2">Submitted Documents:</p>
                                <ul className="space-y-2">
                                  {app.documents.map((doc, index) => (
                                    <li key={index} className="text-sm flex items-center gap-2">
                                      <FileText className="h-4 w-4 text-cyber-text-dim" />
                                      <span>{doc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <NeonButton 
                                color={
                                  app.status === "DOCUMENTS_NEEDED" ? "purple" :
                                  app.status === "APPROVED" ? "green" :
                                  "blue"
                                }
                                className="w-full mt-auto"
                              >
                                {app.status === "DOCUMENTS_NEEDED" 
                                  ? "Upload Documents" 
                                  : "View Details"}
                              </NeonButton>
                            </div>
                          </div>
                        </CyberCard>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-cyber-text-dim">You haven't submitted any applications yet.</p>
                    <NeonButton color="blue" className="mt-4">
                      Explore Funding Options
                    </NeonButton>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/3">
                  <CyberCard glassEffect borderEffect className="p-6 sticky top-6">
                    <div className="text-center mb-6">
                      <h3 className="font-orbitron text-xl mb-4">Your Business Profile</h3>
                      <div className="inline-block">
                        <CreditMeter score={creditScore.score} size="lg" showLabel />
                      </div>
                    </div>
                    
                    <Separator className="my-6 bg-cyber-blue/20" />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-cyber-blue">Credit Score Factors</h4>
                      
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
                    
                    <Separator className="my-6 bg-cyber-blue/20" />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-cyber-blue">Funding Type Compatibility</h4>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Grants</span>
                        <Badge className="bg-cyber-green text-cyber-black">
                          {calculateCompatibility(creditScore.score, "GRANT")}%
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Microloans</span>
                        <Badge className="bg-cyber-blue text-cyber-black">
                          {calculateCompatibility(creditScore.score, "MICROLOAN")}%
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">VC Funding</span>
                        <Badge className="bg-cyber-purple text-cyber-black">
                          {calculateCompatibility(creditScore.score, "VC_FUNDING")}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <NeonButton color="blue" className="w-full">
                        Improve Your Score
                      </NeonButton>
                    </div>
                  </CyberCard>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <h3 className="font-orbitron text-2xl mb-6">Recommended For You</h3>
                  
                  <div className="space-y-6">
                    {fundingOptions
                      .filter(option => calculateCompatibility(creditScore.score, option.type) >= 70)
                      .slice(0, 3)
                      .map(option => {
                        const compatibility = calculateCompatibility(creditScore.score, option.type);
                        const typeColor = getFundingTypeColor(option.type);
                        
                        return (
                          <CyberCard key={option.id} glassEffect hoverEffect className="p-5">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="md:w-1/3">
                                <div className="aspect-square md:aspect-video relative rounded-lg overflow-hidden">
                                  <img 
                                    src={option.image} 
                                    alt={option.name} 
                                    className="object-cover h-full w-full"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
                                  
                                  <div className="absolute bottom-3 left-3">
                                    <Badge className={`${typeColor.bg} ${typeColor.text} font-medium px-3 py-1`}>
                                      {option.type === "VC_FUNDING" ? "VC Funding" : option.type}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="md:w-2/3">
                                <div className="flex justify-between items-start mb-3">
                                  <h4 className="text-xl font-orbitron">{option.name}</h4>
                                  <div className="bg-cyber-dark px-2 py-1 rounded-md text-xs flex items-center gap-1">
                                    <span>Match:</span>
                                    <span className={`font-medium ${
                                      compatibility >= 80 ? 'text-cyber-green' : 
                                      compatibility >= 60 ? 'text-cyber-blue' : 
                                      'text-cyber-pink'
                                    }`}>{compatibility}%</span>
                                  </div>
                                </div>
                                
                                <p className="text-cyber-text-dim mb-3">{option.provider}</p>
                                
                                <p className="text-sm text-cyber-text-dim mb-4">
                                  {option.description.length > 160 
                                    ? `${option.description.substring(0, 160)}...` 
                                    : option.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4">
                                  <div>
                                    <p className="text-cyber-text-dim">Funding Range</p>
                                    <p className="font-medium">
                                      {formatCurrency(option.minAmount)} - {formatCurrency(option.maxAmount)}
                                    </p>
                                  </div>
                                  
                                  {option.deadline && (
                                    <div>
                                      <p className="text-cyber-text-dim">Deadline</p>
                                      <p className="font-medium flex items-center">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {getDaysLeft(new Date(option.deadline))} days left
                                      </p>
                                    </div>
                                  )}
                                  
                                  {option.interestRate && (
                                    <div>
                                      <p className="text-cyber-text-dim">Interest Rate</p>
                                      <p className="font-medium">{formatPercentage(option.interestRate)}</p>
                                    </div>
                                  )}
                                  
                                  {option.equityPercentage && (
                                    <div>
                                      <p className="text-cyber-text-dim">Equity</p>
                                      <p className="font-medium">{formatPercentage(option.equityPercentage)}</p>
                                    </div>
                                  )}
                                </div>
                                
                                <NeonButton 
                                  color={option.type === "GRANT" ? "green" : option.type === "MICROLOAN" ? "blue" : "purple"}
                                >
                                  View Details
                                </NeonButton>
                              </div>
                            </div>
                          </CyberCard>
                        );
                      })}
                  </div>
                  
                  <Separator className="my-10 bg-cyber-blue/20" />
                  
                  <div className="mb-8">
                    <h3 className="font-orbitron text-2xl mb-6">Why These Recommendations</h3>
                    
                    <HologramContainer glowEffect className="p-6 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="bg-cyber-dark/50 rounded-full p-4 inline-flex mb-4">
                            <PieChart className="h-6 w-6 text-cyber-blue" />
                          </div>
                          <h4 className="font-orbitron text-lg mb-2">Credit Analysis</h4>
                          <p className="text-sm text-cyber-text-dim">
                            Our AI examines your credit score factors to match you with appropriate funding types.
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-cyber-dark/50 rounded-full p-4 inline-flex mb-4">
                            <Building className="h-6 w-6 text-cyber-pink" />
                          </div>
                          <h4 className="font-orbitron text-lg mb-2">Industry Alignment</h4>
                          <p className="text-sm text-cyber-text-dim">
                            We analyze your business category to match you with industry-specific funding options.
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-cyber-dark/50 rounded-full p-4 inline-flex mb-4">
                            <Users className="h-6 w-6 text-cyber-purple" />
                          </div>
                          <h4 className="font-orbitron text-lg mb-2">Success Matching</h4>
                          <p className="text-sm text-cyber-text-dim">
                            We compare your profile with previously successful applications for better predictions.
                          </p>
                        </div>
                      </div>
                    </HologramContainer>
                    
                    <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                          <h3 className="font-orbitron text-xl text-cyber-blue mb-2">Get Personalized Guidance</h3>
                          <p className="text-cyber-text-dim">
                            Not sure which funding option is right for you? Our AI financial advisor can analyze your 
                            specific business needs and guide you to the best choices.
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <NeonButton color="blue">
                            Talk to AI Advisor
                          </NeonButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}