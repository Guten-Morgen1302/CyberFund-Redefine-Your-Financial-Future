// User types
export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  businessName: string | null;
  businessDescription: string | null;
  industry: string | null;
  profileImage: string | null;
  createdAt: string;
  membershipTier: string;
}

// Credit score types
export interface CreditScore {
  id: number;
  userId: number;
  score: number;
  revenueConsistency: number;
  transactionHistory: number;
  businessLongevity: number;
  industryGrowth: number;
  socialReputation: number;
  lastUpdated: string;
}

// Funding types
export interface FundingOption {
  id: number;
  name: string;
  provider: string;
  type: string; // 'GRANT', 'MICROLOAN', 'VC_FUNDING'
  minAmount: number;
  maxAmount: number;
  description: string;
  requirements: string;
  deadline: string | null;
  interestRate: number | null;
  equityPercentage: number | null;
  image: string | null;
  active: boolean;
}

export interface FundingApplication {
  id: number;
  userId: number;
  fundingOptionId: number;
  status: string; // 'PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'DOCUMENTS_NEEDED'
  appliedAt: string;
  updatedAt: string;
  notes: string | null;
  documents: string[];
  fundingOption?: FundingOption;
}

// Financial tips types
export interface FinancialTip {
  id: number;
  category: string; // 'CASH_FLOW', 'CREDIT_BUILDING', 'FUNDING', 'BUSINESS_GROWTH', 'RISK_MANAGEMENT'
  title: string;
  content: string;
  active: boolean;
}

// Chat history types
export interface ChatHistoryItem {
  id: number;
  userId: number;
  message: string;
  response: string;
  timestamp: string;
  category: string | null;
}

// For AI chat responses
export interface ChatResponse {
  id: number;
  response: string;
  timestamp: string;
}

// For credit improvement suggestions
export interface ImprovementSuggestion {
  title: string;
  description: string;
}
