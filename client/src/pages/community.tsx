import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/ui/glitch-text";
import { CyberCard } from "@/components/ui/cyber-card";
import { NeonButton } from "@/components/ui/neon-button";
import { UserAvatar } from "@/components/user-avatar";
import { HologramContainer } from "@/components/ui/hologram-container";
import { 
  Users, Calendar, MessageSquare, Search, 
  ThumbsUp, MessageCircle, Share2, Filter,
  MapPin, ArrowRight, Link, Star
} from "lucide-react";

export default function Community() {
  // Mock community members
  const members = [
    {
      id: 1,
      name: "Maya Johnson",
      username: "maya_tech",
      role: "Tech Founder",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-04-15",
      location: "San Francisco, CA",
      connections: 124,
      tags: ["AI", "SaaS", "Funding"],
      isMentor: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      username: "priya_ceo",
      role: "E-commerce CEO",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-05-22",
      location: "New York, NY",
      connections: 87,
      tags: ["Retail", "Marketing", "Scale-up"],
      isMentor: false
    },
    {
      id: 3,
      name: "Sophia Chen",
      username: "sophia_vc",
      role: "Angel Investor",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-02-10",
      location: "Austin, TX",
      connections: 256,
      tags: ["Investing", "Startups", "VC"],
      isMentor: true
    },
    {
      id: 4,
      name: "Zara Williams",
      username: "zara_design",
      role: "Creative Director",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-07-05",
      location: "Los Angeles, CA",
      connections: 93,
      tags: ["Design", "Branding", "Creative"],
      isMentor: false
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      username: "elena_fin",
      role: "Fintech Founder",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-06-18",
      location: "Miami, FL",
      connections: 142,
      tags: ["Fintech", "Banking", "Payments"],
      isMentor: true
    },
    {
      id: 6,
      name: "Alicia Grant",
      username: "alicia_health",
      role: "Healthcare Innovator",
      avatarUrl: null, // Using fallback initials instead of external URL
      joinDate: "2023-03-30",
      location: "Boston, MA",
      connections: 76,
      tags: ["Healthcare", "Wellness", "Tech"],
      isMentor: false
    }
  ];
  
  // Mock discussion posts
  const discussions = [
    {
      id: 1,
      author: {
        name: "Maya Johnson",
        username: "maya_tech",
        avatarUrl: null, // Using fallback initials instead of external URL
        role: "Tech Founder"
      },
      title: "Negotiating term sheets as a first-time founder",
      content: "I'm in the process of raising my seed round and received my first term sheet. What red flags should I look out for? Any advice on negotiation tactics specifically for women founders?",
      timestamp: "2024-03-01T14:32:00Z",
      likes: 45,
      comments: 18,
      shares: 7,
      tags: ["Funding", "Venture Capital", "Negotiation"]
    },
    {
      id: 2,
      author: {
        name: "Elena Rodriguez",
        username: "elena_fin",
        avatarUrl: null, // Using fallback initials instead of external URL
        role: "Fintech Founder"
      },
      title: "Alternative funding sources for founders who don't want VC money",
      content: "After exploring the VC route, I realized it might not be the best fit for my business model. I'd love to hear about successful experiences with revenue-based financing, crowdfunding, or grants specifically for women entrepreneurs.",
      timestamp: "2024-03-05T09:47:00Z",
      likes: 62,
      comments: 23,
      shares: 15,
      tags: ["Alternative Funding", "Grants", "Bootstrapping"]
    },
    {
      id: 3,
      author: {
        name: "Sophia Chen",
        username: "sophia_vc",
        avatarUrl: null, // Using fallback initials instead of external URL
        role: "Angel Investor"
      },
      title: "What investors are REALLY looking for in a pitch deck",
      content: "As an angel investor who reviews hundreds of pitches, I wanted to share some insights on what makes a pitch deck stand out, particularly for women-led businesses. Here's what I look for beyond the standard advice...",
      timestamp: "2024-03-08T16:15:00Z",
      likes: 124,
      comments: 47,
      shares: 32,
      tags: ["Pitch Deck", "Investors", "Fundraising"]
    }
  ];
  
  // Mock upcoming events
  const events = [
    {
      id: 1,
      title: "Women in Fintech Summit",
      date: "2024-04-15T09:00:00Z",
      endDate: "2024-04-16T17:00:00Z",
      location: "San Francisco, CA",
      virtual: false,
      description: "A two-day event featuring keynote speakers, panel discussions, and networking opportunities focused on the future of fintech and women's leadership in the industry.",
      theme: "fintech", // Used for SVG background
      color: "pink", // Used for SVG background
      attendees: 243
    },
    {
      id: 2,
      title: "Funding Masterclass: From Seed to Series A",
      date: "2024-03-28T18:00:00Z",
      endDate: "2024-03-28T20:00:00Z",
      location: "Online",
      virtual: true,
      description: "Learn the strategies and tactics for successfully raising investment from seed through Series A with advice from founders who've been there and investors who've backed them.",
      theme: "funding", // Used for SVG background
      color: "blue", // Used for SVG background
      attendees: 178
    },
    {
      id: 3,
      title: "Pitch Competition: Women Innovators",
      date: "2024-05-10T13:00:00Z",
      endDate: "2024-05-10T18:00:00Z",
      location: "New York, NY",
      virtual: false,
      description: "Ten selected women-led startups will pitch to a panel of venture capitalists and angel investors for a chance to win $100,000 in funding and ongoing mentorship.",
      theme: "pitch", // Used for SVG background
      color: "purple", // Used for SVG background
      attendees: 156
    }
  ];
  
  // Mock mentors
  const mentors = [
    {
      id: 1,
      name: "Dr. Lisa Chen",
      role: "Founder & CEO, TechBridge Ventures",
      expertise: ["Venture Capital", "Tech Startups", "Growth Strategy"],
      experience: "15+ years in tech and venture capital",
      rating: 4.9,
      reviews: 32,
      avatarUrl: null, // Using fallback initials instead of external URL
      availability: "2-3 sessions per month"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Serial Entrepreneur & Angel Investor",
      expertise: ["Scaling Businesses", "Fundraising", "E-commerce"],
      experience: "Founded and sold 3 startups",
      rating: 4.8,
      reviews: 47,
      avatarUrl: null, // Using fallback initials instead of external URL
      availability: "Weekly office hours"
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      role: "CFO, Horizon Industries",
      expertise: ["Financial Planning", "Investment Strategy", "Risk Management"],
      experience: "20+ years in corporate finance",
      rating: 4.7,
      reviews: 29,
      avatarUrl: null, // Using fallback initials instead of external URL
      availability: "Biweekly sessions"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient text-cyber-text">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <GlitchText 
            text="CyberFund Community" 
            className="font-orbitron text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-blue bg-clip-text text-transparent mb-4"
          />
          <p className="text-lg text-cyber-text-dim max-w-3xl mx-auto">
            Connect with other women entrepreneurs, share experiences, find mentors, 
            and participate in exclusive events designed to help you grow your business.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="members" className="w-full">
            <TabsList className="mb-8 flex w-full h-auto flex-wrap gap-2 bg-transparent">
              <TabsTrigger
                value="members"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <Users className="mr-2 h-4 w-4" />
                Members
              </TabsTrigger>
              <TabsTrigger
                value="discussions"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger
                value="mentors"
                className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
              >
                <Star className="mr-2 h-4 w-4" />
                Mentors
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="members" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-2/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-text-dim h-4 w-4" />
                  <Input 
                    placeholder="Search members by name, location, or expertise..." 
                    className="pl-10 bg-cyber-dark border-cyber-text-dim/20 w-full"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="border-cyber-text-dim/20 text-cyber-text-dim">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button className="bg-cyber-blue text-cyber-black hover:bg-cyber-blue/90">
                    Find Connections
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <CyberCard key={member.id} glassEffect borderEffect hoverEffect className="overflow-hidden">
                    {member.isMentor && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-cyber-pink text-cyber-black font-semibold px-2 py-1">
                          Mentor
                        </Badge>
                      </div>
                    )}
                    
                    <div className="p-5">
                      <div className="flex items-center gap-4 mb-4">
                        <UserAvatar 
                          src={member.avatarUrl} 
                          fallback={member.name.substring(0, 2)} 
                          size="md" 
                          glowEffect
                          glowColor={member.isMentor ? "pink" : "blue"}
                        />
                        
                        <div>
                          <h3 className="font-orbitron text-lg text-cyber-text">{member.name}</h3>
                          <p className="text-cyber-text-dim text-sm">@{member.username}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-cyber-blue font-medium">{member.role}</div>
                        <div className="flex items-center text-sm text-cyber-text-dim mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {member.location}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-cyber-dark px-2 py-1 rounded-full border border-cyber-text-dim/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-cyber-text-dim mb-4">
                        <span>{member.connections} connections</span>
                        <span>Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                      </div>
                      
                      <NeonButton 
                        color="blue" 
                        variant="outline" 
                        className="w-full"
                      >
                        Connect
                      </NeonButton>
                    </div>
                  </CyberCard>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <NeonButton variant="secondary" color="blue">
                  Load More Members
                </NeonButton>
              </div>
            </TabsContent>
            
            <TabsContent value="discussions" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-2/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-text-dim h-4 w-4" />
                  <Input 
                    placeholder="Search discussions..." 
                    className="pl-10 bg-cyber-dark border-cyber-text-dim/20 w-full"
                  />
                </div>
                
                <NeonButton color="blue">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start New Discussion
                </NeonButton>
              </div>
              
              <div className="space-y-6">
                {discussions.map((post) => (
                  <CyberCard key={post.id} glassEffect borderEffect className="p-6">
                    <div className="flex items-start gap-4">
                      <UserAvatar 
                        src={post.author.avatarUrl} 
                        fallback={post.author.name.substring(0, 2)} 
                        size="md" 
                      />
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                          <h3 className="font-orbitron text-xl text-cyber-text">{post.title}</h3>
                          <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="text-xs bg-cyber-dark px-2 py-1 rounded-full border border-cyber-blue/30 text-cyber-blue"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-cyber-text-dim mb-3">
                          <span>{post.author.name}</span>
                          <span>•</span>
                          <span>{post.author.role}</span>
                          <span>•</span>
                          <span>{new Date(post.timestamp).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}</span>
                        </div>
                        
                        <p className="text-cyber-text-dim mb-4">
                          {post.content}
                        </p>
                        
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-1 text-cyber-text-dim hover:text-cyber-blue transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-cyber-text-dim hover:text-cyber-blue transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 text-cyber-text-dim hover:text-cyber-blue transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CyberCard>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <NeonButton variant="secondary" color="blue">
                  View More Discussions
                </NeonButton>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <h2 className="text-2xl font-orbitron">Upcoming Events</h2>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="border-cyber-text-dim/20 text-cyber-text-dim">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button className="bg-cyber-purple text-cyber-black hover:bg-cyber-purple/90">
                    All Events
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event) => (
                  <CyberCard key={event.id} glassEffect borderEffect hoverEffect className="overflow-hidden">
                    <div className="aspect-[2/1] relative">
                      <div 
                        className={`w-full h-full bg-cyber-${event.color} bg-opacity-20 flex justify-center items-center`}
                        style={{
                          background: `radial-gradient(circle, var(--cyber-${event.color}) 0%, var(--cyber-black) 100%)`,
                          backgroundSize: '200% 200%',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Theme-specific SVG icon */}
                        <div className="text-white/80 opacity-30">
                          {event.theme === "fintech" && (
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {event.theme === "funding" && (
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M22 7H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 3H21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 21H3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {event.theme === "pitch" && (
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <Badge className={`${event.virtual ? 'bg-cyber-blue' : 'bg-cyber-pink'} text-cyber-black font-medium px-3 py-1`}>
                          {event.virtual ? 'Virtual' : 'In Person'}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-orbitron text-xl text-white mb-1">{event.title}</h3>
                        <div className="flex items-center text-sm text-white/80">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-cyber-text-dim mr-2" />
                        <span className="text-cyber-text-dim">{event.location}</span>
                      </div>
                      
                      <p className="text-cyber-text-dim mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-cyber-text-dim">
                          {event.attendees} attendees
                        </span>
                        
                        <Badge variant="outline" className="border-cyber-purple text-cyber-purple">
                          {new Date(event.date).getHours() > 12 ? 'PM' : 'AM'} Event
                        </Badge>
                      </div>
                      
                      <NeonButton 
                        color="purple" 
                        className="w-full"
                      >
                        Register Now
                      </NeonButton>
                    </div>
                  </CyberCard>
                ))}
              </div>
              
              <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="font-orbitron text-xl text-cyber-blue mb-2">Host Your Own Event</h3>
                    <p className="text-cyber-text-dim">
                      Share your expertise, connect with peers, and build your professional network 
                      by hosting community events, workshops, or webinars.
                    </p>
                  </div>
                  
                  <NeonButton color="blue">
                    Submit Event Proposal
                  </NeonButton>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mentors" className="space-y-8">
              <div className="text-center mb-10">
                <h2 className="font-orbitron text-2xl font-bold text-cyber-purple mb-3">Mentorship Program</h2>
                <p className="text-cyber-text-dim max-w-3xl mx-auto">
                  Connect with experienced entrepreneurs and industry leaders who can provide guidance, 
                  share insights, and help accelerate your business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <CyberCard className="p-5 text-center">
                  <div className="bg-cyber-dark inline-flex rounded-full p-4 mb-4">
                    <Users className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h3 className="font-orbitron text-lg mb-2">Find a Mentor</h3>
                  <p className="text-cyber-text-dim text-sm">
                    Browse our network of vetted mentors with expertise in your specific area of interest.
                  </p>
                </CyberCard>
                
                <CyberCard className="p-5 text-center">
                  <div className="bg-cyber-dark inline-flex rounded-full p-4 mb-4">
                    <Calendar className="h-6 w-6 text-cyber-pink" />
                  </div>
                  <h3 className="font-orbitron text-lg mb-2">Schedule Sessions</h3>
                  <p className="text-cyber-text-dim text-sm">
                    Book one-on-one sessions based on your schedule and specific business needs.
                  </p>
                </CyberCard>
                
                <CyberCard className="p-5 text-center">
                  <div className="bg-cyber-dark inline-flex rounded-full p-4 mb-4">
                    <Star className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <h3 className="font-orbitron text-lg mb-2">Grow Together</h3>
                  <p className="text-cyber-text-dim text-sm">
                    Receive personalized advice and actionable strategies to overcome challenges.
                  </p>
                </CyberCard>
              </div>
              
              <Separator className="my-12 bg-cyber-blue/20" />
              
              <h3 className="font-orbitron text-2xl text-center mb-8">Featured Mentors</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mentors.map((mentor) => (
                  <CyberCard key={mentor.id} glassEffect borderEffect className="overflow-hidden h-full">
                    <div className="p-6">
                      <div className="flex flex-col items-center text-center mb-6">
                        <HologramContainer className="mb-4" glowEffect>
                          <UserAvatar 
                            src={mentor.avatarUrl} 
                            fallback={mentor.name.substring(0, 2)} 
                            size="lg" 
                          />
                        </HologramContainer>
                        
                        <h3 className="font-orbitron text-xl text-cyber-text mb-1">{mentor.name}</h3>
                        <p className="text-cyber-pink font-medium mb-2">{mentor.role}</p>
                        
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? 'text-cyber-blue fill-cyber-blue' : 'text-cyber-text-dim'}`} 
                            />
                          ))}
                          <span className="text-sm ml-1">{mentor.rating}</span>
                        </div>
                        <span className="text-xs text-cyber-text-dim">{mentor.reviews} reviews</span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-cyber-text font-medium mb-2">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {mentor.expertise.map((area, i) => (
                            <span 
                              key={i} 
                              className="text-xs bg-cyber-dark px-2 py-1 rounded-full border border-cyber-blue/30 text-cyber-blue"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <p className="text-sm text-cyber-text-dim">{mentor.experience}</p>
                        <p className="text-sm text-cyber-text-dim mt-1">Available: {mentor.availability}</p>
                      </div>
                      
                      <NeonButton color="blue" className="w-full">
                        Request Mentorship
                      </NeonButton>
                    </div>
                  </CyberCard>
                ))}
              </div>
              
              <div className="bg-cyber-dark/50 border border-cyber-pink/20 rounded-lg p-6 mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="font-orbitron text-xl text-cyber-pink mb-2">Become a Mentor</h3>
                    <p className="text-cyber-text-dim">
                      Share your knowledge and experience with the next generation of women entrepreneurs.
                      Apply to join our mentorship program.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-text">Learn More</span>
                    <ArrowRight className="h-4 w-4 text-cyber-pink" />
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
