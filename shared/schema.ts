import { pgTable, text, serial, integer, boolean, timestamp, real, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  businessName: text("business_name"),
  businessDescription: text("business_description"),
  industry: text("industry"),
  profileImage: text("profile_image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  membershipTier: text("membership_tier").default("basic"),
});

// Credit scores table
export const creditScores = pgTable("credit_scores", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  score: integer("score").notNull(),
  revenueConsistency: real("revenue_consistency").notNull(),
  transactionHistory: real("transaction_history").notNull(),
  businessLongevity: real("business_longevity").notNull(),
  industryGrowth: real("industry_growth").notNull(),
  socialReputation: real("social_reputation").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

// Funding options table
export const fundingOptions = pgTable("funding_options", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  provider: text("provider").notNull(),
  type: text("type").notNull(), // GRANT, MICROLOAN, VC_FUNDING
  minAmount: integer("min_amount").notNull(),
  maxAmount: integer("max_amount").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  deadline: timestamp("deadline"),
  interestRate: real("interest_rate"),
  equityPercentage: real("equity_percentage"),
  image: text("image"),
  active: boolean("active").default(true).notNull(),
});

// Funding applications table
export const fundingApplications = pgTable("funding_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  fundingOptionId: integer("funding_option_id").notNull().references(() => fundingOptions.id),
  status: text("status").notNull(), // PENDING, UNDER_REVIEW, APPROVED, REJECTED, DOCUMENTS_NEEDED
  appliedAt: timestamp("applied_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  notes: text("notes"),
  documents: json("documents").default([]),
});

// Financial tips table
export const financialTips = pgTable("financial_tips", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // CASH_FLOW, CREDIT_BUILDING, FUNDING, BUSINESS_GROWTH, RISK_MANAGEMENT
  title: text("title").notNull(),
  content: text("content").notNull(),
  active: boolean("active").default(true).notNull(),
});

// Chat history table
export const chatHistory = pgTable("chat_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  message: text("message").notNull(),
  response: text("response").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  category: text("category"),
});

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  businessName: true,
  businessDescription: true,
  industry: true,
  profileImage: true,
});

export const insertCreditScoreSchema = createInsertSchema(creditScores).pick({
  userId: true,
  score: true,
  revenueConsistency: true,
  transactionHistory: true,
  businessLongevity: true,
  industryGrowth: true,
  socialReputation: true,
});

export const insertFundingOptionSchema = createInsertSchema(fundingOptions).pick({
  name: true,
  provider: true,
  type: true,
  minAmount: true,
  maxAmount: true,
  description: true,
  requirements: true,
  deadline: true,
  interestRate: true,
  equityPercentage: true,
  image: true,
  active: true,
});

export const insertFundingApplicationSchema = createInsertSchema(fundingApplications).pick({
  userId: true,
  fundingOptionId: true,
  status: true,
  notes: true,
  documents: true,
});

export const insertFinancialTipSchema = createInsertSchema(financialTips).pick({
  category: true,
  title: true,
  content: true,
  active: true,
});

export const insertChatHistorySchema = createInsertSchema(chatHistory).pick({
  userId: true,
  message: true,
  response: true,
  category: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type CreditScore = typeof creditScores.$inferSelect;
export type InsertCreditScore = z.infer<typeof insertCreditScoreSchema>;

export type FundingOption = typeof fundingOptions.$inferSelect;
export type InsertFundingOption = z.infer<typeof insertFundingOptionSchema>;

export type FundingApplication = typeof fundingApplications.$inferSelect;
export type InsertFundingApplication = z.infer<typeof insertFundingApplicationSchema>;

export type FinancialTip = typeof financialTips.$inferSelect;
export type InsertFinancialTip = z.infer<typeof insertFinancialTipSchema>;

export type ChatHistoryItem = typeof chatHistory.$inferSelect;
export type InsertChatHistoryItem = z.infer<typeof insertChatHistorySchema>;
