import {
  users, type User, type InsertUser,
  creditScores, type CreditScore, type InsertCreditScore,
  fundingOptions, type FundingOption, type InsertFundingOption,
  fundingApplications, type FundingApplication, type InsertFundingApplication,
  financialTips, type FinancialTip, type InsertFinancialTip,
  chatHistory, type ChatHistoryItem, type InsertChatHistoryItem
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  
  // Credit score methods
  getCreditScore(userId: number): Promise<CreditScore | undefined>;
  createCreditScore(score: InsertCreditScore): Promise<CreditScore>;
  updateCreditScore(userId: number, score: Partial<InsertCreditScore>): Promise<CreditScore | undefined>;
  
  // Funding option methods
  getFundingOptions(): Promise<FundingOption[]>;
  getFundingOption(id: number): Promise<FundingOption | undefined>;
  getFundingOptionsByType(type: string): Promise<FundingOption[]>;
  createFundingOption(option: InsertFundingOption): Promise<FundingOption>;
  
  // Funding application methods
  getFundingApplications(userId: number): Promise<FundingApplication[]>;
  getFundingApplication(id: number): Promise<FundingApplication | undefined>;
  createFundingApplication(application: InsertFundingApplication): Promise<FundingApplication>;
  updateFundingApplication(id: number, application: Partial<InsertFundingApplication>): Promise<FundingApplication | undefined>;
  
  // Financial tips methods
  getFinancialTips(): Promise<FinancialTip[]>;
  getFinancialTipsByCategory(category: string): Promise<FinancialTip[]>;
  createFinancialTip(tip: InsertFinancialTip): Promise<FinancialTip>;
  
  // Chat history methods
  getChatHistory(userId: number): Promise<ChatHistoryItem[]>;
  createChatHistoryItem(item: InsertChatHistoryItem): Promise<ChatHistoryItem>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private creditScores: Map<number, CreditScore>;
  private fundingOptions: Map<number, FundingOption>;
  private fundingApplications: Map<number, FundingApplication>;
  private financialTips: Map<number, FinancialTip>;
  private chatHistoryItems: Map<number, ChatHistoryItem>;
  
  private currentUserId = 1;
  private currentCreditScoreId = 1;
  private currentFundingOptionId = 1;
  private currentFundingApplicationId = 1;
  private currentFinancialTipId = 1;
  private currentChatHistoryId = 1;

  constructor() {
    this.users = new Map();
    this.creditScores = new Map();
    this.fundingOptions = new Map();
    this.fundingApplications = new Map();
    this.financialTips = new Map();
    this.chatHistoryItems = new Map();
    
    // Add test user for development
    const testUser: User = {
      id: 1,
      username: "testuser",
      email: "test@example.com",
      fullName: "Test User",
      businessName: "Test Business",
      businessDescription: "A test business",
      industry: "Technology",
      profileImage: null,
      createdAt: new Date().toISOString(),
      membershipTier: "basic",
      password: "test123"
    };
    this.users.set(testUser.id, testUser);

    // Add test credit score
    const testCreditScore: CreditScore = {
      id: 1,
      userId: 1,
      score: 750,
      revenueConsistency: 0.8,
      transactionHistory: 0.7,
      businessLongevity: 0.6,
      industryGrowth: 0.9,
      socialReputation: 0.75,
      lastUpdated: new Date().toISOString()
    };
    this.creditScores.set(testCreditScore.id, testCreditScore);
    
    // Add initial funding options
    this.initializeData();
  }

  // Initialize with sample data
  private initializeData() {
    // Add funding options
    const fundingOptions: InsertFundingOption[] = [
      {
        name: "Women's Business Grant",
        provider: "Global Women's Initiative",
        type: "GRANT",
        minAmount: 15000,
        maxAmount: 50000,
        description: "Grants for women-owned businesses in technology, healthcare, and sustainable industries with at least 6 months of operation.",
        requirements: "Must be a woman-owned business with at least 51% ownership. Business must be operational for at least 6 months.",
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
        image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=600&auto=format&fit=crop",
        active: true,
      },
      {
        name: "FemTech Microloan",
        provider: "Future Finance Collective",
        type: "MICROLOAN",
        minAmount: 5000,
        maxAmount: 25000,
        description: "Low-interest microloans designed for early-stage businesses with flexible repayment terms and no collateral required.",
        requirements: "Credit score of at least 600. Must have a business bank account and operating for at least 3 months.",
        interestRate: 3.5,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
        active: true,
      },
      {
        name: "NextGen Ventures",
        provider: "Women Founders Fund",
        type: "VC_FUNDING",
        minAmount: 100000,
        maxAmount: 500000,
        description: "Seed funding for high-growth potential startups with innovative products in the technology or sustainability sectors.",
        requirements: "Must have a scalable business model and potential for high growth. Preference for technology or sustainability sectors.",
        equityPercentage: 7.5,
        image: "https://images.unsplash.com/photo-1665686440627-936e9700a100?q=80&w=600&auto=format&fit=crop",
        active: true,
      }
    ];
    
    // Add financial tips
    const financialTips: InsertFinancialTip[] = [
      {
        category: "CASH_FLOW",
        title: "Cash Flow Management",
        content: "Set up automatic transfers to your business savings to build emergency funds consistently.",
        active: true,
      },
      {
        category: "CREDIT_BUILDING",
        title: "Credit Building",
        content: "Use small recurring expenses on your business credit card and pay the balance in full each month.",
        active: true,
      },
      {
        category: "FUNDING",
        title: "Funding Opportunities",
        content: "Q4 is a peak time for grant applications. Update your business plan for end-of-year submissions.",
        active: true,
      }
    ];
    
    // Create the funding options
    fundingOptions.forEach(option => this.createFundingOption(option));
    
    // Create the financial tips
    financialTips.forEach(tip => this.createFinancialTip(tip));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: now, 
      membershipTier: "basic" 
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, updateData: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updateData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Credit score methods
  async getCreditScore(userId: number): Promise<CreditScore | undefined> {
    return Array.from(this.creditScores.values()).find(
      (score) => score.userId === userId,
    );
  }

  async createCreditScore(insertScore: InsertCreditScore): Promise<CreditScore> {
    const id = this.currentCreditScoreId++;
    const now = new Date();
    const score: CreditScore = { ...insertScore, id, lastUpdated: now };
    this.creditScores.set(id, score);
    return score;
  }

  async updateCreditScore(userId: number, updateData: Partial<InsertCreditScore>): Promise<CreditScore | undefined> {
    const score = Array.from(this.creditScores.values()).find(
      (score) => score.userId === userId,
    );
    
    if (!score) return undefined;
    
    const now = new Date();
    const updatedScore = { ...score, ...updateData, lastUpdated: now };
    this.creditScores.set(score.id, updatedScore);
    return updatedScore;
  }

  // Funding option methods
  async getFundingOptions(): Promise<FundingOption[]> {
    return Array.from(this.fundingOptions.values()).filter(option => option.active);
  }

  async getFundingOption(id: number): Promise<FundingOption | undefined> {
    return this.fundingOptions.get(id);
  }

  async getFundingOptionsByType(type: string): Promise<FundingOption[]> {
    return Array.from(this.fundingOptions.values()).filter(
      (option) => option.type === type && option.active,
    );
  }

  async createFundingOption(insertOption: InsertFundingOption): Promise<FundingOption> {
    const id = this.currentFundingOptionId++;
    const option: FundingOption = { ...insertOption, id };
    this.fundingOptions.set(id, option);
    return option;
  }

  // Funding application methods
  async getFundingApplications(userId: number): Promise<FundingApplication[]> {
    return Array.from(this.fundingApplications.values()).filter(
      (application) => application.userId === userId,
    );
  }

  async getFundingApplication(id: number): Promise<FundingApplication | undefined> {
    return this.fundingApplications.get(id);
  }

  async createFundingApplication(insertApplication: InsertFundingApplication): Promise<FundingApplication> {
    const id = this.currentFundingApplicationId++;
    const now = new Date();
    const application: FundingApplication = { 
      ...insertApplication, 
      id, 
      appliedAt: now, 
      updatedAt: now 
    };
    this.fundingApplications.set(id, application);
    return application;
  }

  async updateFundingApplication(id: number, updateData: Partial<InsertFundingApplication>): Promise<FundingApplication | undefined> {
    const application = this.fundingApplications.get(id);
    if (!application) return undefined;
    
    const now = new Date();
    const updatedApplication = { 
      ...application, 
      ...updateData, 
      updatedAt: now 
    };
    this.fundingApplications.set(id, updatedApplication);
    return updatedApplication;
  }

  // Financial tips methods
  async getFinancialTips(): Promise<FinancialTip[]> {
    return Array.from(this.financialTips.values()).filter(tip => tip.active);
  }

  async getFinancialTipsByCategory(category: string): Promise<FinancialTip[]> {
    return Array.from(this.financialTips.values()).filter(
      (tip) => tip.category === category && tip.active,
    );
  }

  async createFinancialTip(insertTip: InsertFinancialTip): Promise<FinancialTip> {
    const id = this.currentFinancialTipId++;
    const tip: FinancialTip = { ...insertTip, id };
    this.financialTips.set(id, tip);
    return tip;
  }

  // Chat history methods
  async getChatHistory(userId: number): Promise<ChatHistoryItem[]> {
    return Array.from(this.chatHistoryItems.values())
      .filter((item) => item.userId === userId)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  async createChatHistoryItem(insertItem: InsertChatHistoryItem): Promise<ChatHistoryItem> {
    const id = this.currentChatHistoryId++;
    const now = new Date();
    const item: ChatHistoryItem = { ...insertItem, id, timestamp: now };
    this.chatHistoryItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
