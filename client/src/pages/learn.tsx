import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GlitchText } from "@/components/ui/glitch-text";
import { HologramContainer } from "@/components/ui/hologram-container";
import { NeonButton } from "@/components/ui/neon-button";
import { CyberCard } from "@/components/ui/cyber-card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Play, Book, Video, FileText, Award, Download } from "lucide-react";

export default function Learn() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-cyber-text">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <GlitchText 
            text="Financial Education Hub" 
            className="font-orbitron text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-blue bg-clip-text text-transparent mb-4"
          />
          <p className="text-lg text-cyber-text-dim max-w-3xl mx-auto">
            Unlock advanced financial knowledge designed specifically for women entrepreneurs. 
            From credit building to funding strategies, our educational resources will empower 
            your business journey.
          </p>
        </div>
        
        <Tabs defaultValue="courses" className="max-w-6xl mx-auto">
          <TabsList className="mb-8 flex w-full h-auto flex-wrap gap-2 bg-transparent">
            <TabsTrigger
              value="courses"
              className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
            >
              <Book className="mr-2 h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="guides"
              className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
            >
              <FileText className="mr-2 h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
            >
              <Video className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="py-3 px-5 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-blue data-[state=active]:border-cyber-blue border border-cyber-dark"
            >
              <Download className="mr-2 h-4 w-4" />
              Templates
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Credit Building Mastery",
                  level: "Beginner",
                  lessons: 8,
                  duration: "4 hours",
                  description: "Learn how to build and optimize your business credit score through strategic financial decisions.",
                  image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=500&auto=format&fit=crop&q=60"
                },
                {
                  title: "Funding Strategies for Growth",
                  level: "Intermediate",
                  lessons: 12,
                  duration: "6 hours",
                  description: "Discover various funding options available and how to strategically approach each one.",
                  image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60"
                },
                {
                  title: "Financial Forecasting",
                  level: "Advanced",
                  lessons: 10,
                  duration: "5 hours",
                  description: "Master the art of financial forecasting to predict and prepare for your business's financial future.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60"
                },
              ].map((course, index) => (
                <CyberCard key={index} glassEffect borderEffect hoverEffect>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-cyber-dark/80 text-cyber-blue px-3 py-1 text-xs rounded-full border border-cyber-blue/30">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-orbitron text-cyber-text mb-2">{course.title}</h3>
                    <p className="text-cyber-text-dim mb-4">{course.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-xs text-cyber-text-dim">
                        <span className="text-cyber-blue">{course.lessons}</span> Lessons
                      </div>
                      <div className="text-xs text-cyber-text-dim">
                        <span className="text-cyber-blue">{course.duration}</span> Total
                      </div>
                    </div>
                    <NeonButton color="blue" className="w-full">
                      <Play className="w-4 h-4 mr-2" /> Start Course
                    </NeonButton>
                  </div>
                </CyberCard>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <NeonButton variant="secondary" color="pink">
                View All Courses
              </NeonButton>
            </div>
          </TabsContent>
          
          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Guide to Business Loans",
                  category: "Funding",
                  pages: 42,
                  description: "Everything you need to know about qualifying for and securing business loans as a woman entrepreneur."
                },
                {
                  title: "Tax Strategies for Small Businesses",
                  category: "Taxation",
                  pages: 35,
                  description: "Maximize your tax benefits and avoid common pitfalls with this comprehensive tax guide."
                },
                {
                  title: "Digital Marketing on a Budget",
                  category: "Marketing",
                  pages: 28,
                  description: "Cost-effective strategies to market your business online and reach more customers."
                },
                {
                  title: "Scaling Your Business: A Financial Roadmap",
                  category: "Growth",
                  pages: 50,
                  description: "Financial strategies and considerations when taking your business to the next level."
                }
              ].map((guide, index) => (
                <CyberCard key={index} glassEffect borderEffect>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="inline-block bg-cyber-dark px-3 py-1 text-xs rounded-full border border-cyber-pink/30 text-cyber-pink mb-3">
                          {guide.category}
                        </span>
                        <h3 className="text-xl font-orbitron text-cyber-text">{guide.title}</h3>
                      </div>
                      <div className="text-xs text-cyber-text-dim border border-cyber-text-dim/20 rounded px-2 py-1">
                        {guide.pages} pages
                      </div>
                    </div>
                    <p className="text-cyber-text-dim mb-4">{guide.description}</p>
                    <NeonButton color="pink" variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" /> Download Guide
                    </NeonButton>
                  </div>
                </CyberCard>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <NeonButton variant="secondary" color="pink">
                Browse All Guides
              </NeonButton>
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Understanding Business Credit Scores",
                  duration: "18:24",
                  views: "4.2K",
                  creator: "Dr. Amira Johnson, Finance Expert"
                },
                {
                  title: "Pitch Deck Essentials for Funding",
                  duration: "24:15",
                  views: "5.8K",
                  creator: "Maya Chen, Venture Capitalist"
                },
                {
                  title: "Financial Statement Analysis Masterclass",
                  duration: "42:10",
                  views: "3.5K",
                  creator: "Sophia Williams, CPA"
                },
                {
                  title: "Negotiation Tactics for Better Deals",
                  duration: "31:46",
                  views: "7.1K",
                  creator: "Elena Rodriguez, Business Coach"
                }
              ].map((video, index) => (
                <div key={index} className="group relative">
                  <HologramContainer scanEffect>
                    <div className="aspect-video bg-cyber-black relative overflow-hidden rounded-lg">
                      {/* Video placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 to-cyber-pink/20"></div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-cyber-blue/20 backdrop-blur-sm border border-cyber-blue/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-white fill-current" />
                        </div>
                      </div>
                      
                      {/* Video info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cyber-black to-transparent">
                        <h3 className="text-lg font-orbitron text-white mb-1">{video.title}</h3>
                        <div className="flex justify-between text-xs text-cyber-text-dim">
                          <span>{video.creator}</span>
                          <div className="flex gap-3">
                            <span>{video.views} views</span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HologramContainer>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <NeonButton variant="secondary" color="blue">
                View Video Library
              </NeonButton>
            </div>
          </TabsContent>
          
          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Business Plan Template",
                  description: "Comprehensive business plan structure with financial projections.",
                  format: "DOCX, PDF, XLS",
                  downloads: "12K+"
                },
                {
                  title: "Financial Forecast Spreadsheet",
                  description: "Automated spreadsheet for creating 3-year financial projections.",
                  format: "XLS, XLSX",
                  downloads: "8K+"
                },
                {
                  title: "Pitch Deck Template",
                  description: "Investor-ready presentation template with 15 key slides.",
                  format: "PPT, PDF",
                  downloads: "10K+"
                },
                {
                  title: "Cash Flow Tracker",
                  description: "Weekly and monthly cash flow monitoring system.",
                  format: "XLS, PDF",
                  downloads: "7K+"
                },
                {
                  title: "Business Loan Application",
                  description: "Template with all necessary information for loan applications.",
                  format: "DOCX, PDF",
                  downloads: "5K+"
                },
                {
                  title: "Invoice Templates Pack",
                  description: "Professional invoice designs for various business types.",
                  format: "DOCX, PDF, XLS",
                  downloads: "15K+"
                }
              ].map((template, index) => (
                <CyberCard key={index} glassEffect className="p-5">
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <FileText className="h-8 w-8 text-cyber-blue mb-3" />
                      <h3 className="text-lg font-orbitron text-cyber-text">{template.title}</h3>
                    </div>
                    <p className="text-cyber-text-dim text-sm mb-4 flex-grow">{template.description}</p>
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-3 text-xs text-cyber-text-dim">
                        <span>{template.format}</span>
                        <span>{template.downloads} downloads</span>
                      </div>
                      <NeonButton color="purple" variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" /> Download
                      </NeonButton>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator className="my-16 bg-cyber-blue/20" />
        
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-orbitron text-3xl font-bold text-cyber-purple mb-4">Certification Programs</h2>
            <p className="text-lg text-cyber-text-dim max-w-2xl mx-auto">
              Earn credentials that boost your business profile with our specialized certification programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Management Certification",
                level: "Professional",
                duration: "6 weeks",
                description: "Master business financial management with this industry-recognized certification program.",
                modules: ["Financial Analysis", "Cash Flow Management", "Investment Strategies", "Risk Assessment"],
                color: "blue"
              },
              {
                title: "Digital Business Leadership",
                level: "Executive",
                duration: "8 weeks",
                description: "Learn to lead and transform your business in the digital economy with cutting-edge strategies.",
                modules: ["Digital Transformation", "Strategic Innovation", "Market Disruption", "Team Leadership"],
                color: "pink"
              }
            ].map((program, index) => (
              <CyberCard key={index} borderEffect className="overflow-hidden">
                <div className={`p-1 bg-gradient-to-r ${program.color === 'blue' ? 'from-cyber-blue to-cyber-purple' : 'from-cyber-pink to-cyber-purple'}`}>
                  <div className="bg-cyber-black p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-orbitron text-cyber-text mb-1">{program.title}</h3>
                        <div className="flex items-center gap-2">
                          <Award className={`h-4 w-4 ${program.color === 'blue' ? 'text-cyber-blue' : 'text-cyber-pink'}`} />
                          <span className="text-xs text-cyber-text-dim">{program.level} Certification</span>
                        </div>
                      </div>
                      <div className="text-xs bg-cyber-dark py-1 px-3 rounded-full border border-cyber-text-dim/20">
                        {program.duration}
                      </div>
                    </div>
                    
                    <p className="text-cyber-text-dim mb-5">{program.description}</p>
                    
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-cyber-text mb-2">Program Modules:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="text-sm text-cyber-text-dim flex items-center">
                            <div className={`h-1.5 w-1.5 mr-2 ${program.color === 'blue' ? 'bg-cyber-blue' : 'bg-cyber-pink'} rounded-full`}></div>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <NeonButton 
                      color={program.color === 'blue' ? 'blue' : 'pink'} 
                      className="w-full"
                    >
                      Enroll Now
                    </NeonButton>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}