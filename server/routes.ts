import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertUserSchema, 
  insertCreditScoreSchema, 
  insertFundingApplicationSchema, 
  insertChatHistorySchema,
  insertFinancialTipSchema
} from "@shared/schema";
import { z } from "zod";
import OpenAI from "openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize OpenAI client
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "demo-key" });

  // User Routes
  app.post('/api/users/register', async (req: Request, res: Response) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUsername = await storage.getUserByUsername(userData.username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }
      
      // Check if email already exists
      const existingEmail = await storage.getUserByEmail(userData.email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already registered" });
      }
      
      const user = await storage.createUser(userData);
      
      // Remove password from the response
      const { password, ...userWithoutPassword } = user;
      
      // Create initial credit score
      await storage.createCreditScore({
        userId: user.id,
        score: 650, // Default starting score
        revenueConsistency: 0.5,
        transactionHistory: 0.5,
        businessLongevity: 0.3,
        industryGrowth: 0.7,
        socialReputation: 0.4
      });
      
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create user" });
      }
    }
  });

  app.post('/api/users/login', async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // Remove password from the response
      const { password: _, ...userWithoutPassword } = user;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to authenticate user" });
    }
  });

  app.get('/api/users/:id', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Remove password from the response
      const { password, ...userWithoutPassword } = user;
      
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve user" });
    }
  });

  // Credit Score Routes
  app.get('/api/credit-scores/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const creditScore = await storage.getCreditScore(userId);
      
      if (!creditScore) {
        return res.status(404).json({ message: "Credit score not found" });
      }
      
      res.status(200).json(creditScore);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve credit score" });
    }
  });

  // Funding Options Routes
  app.get('/api/funding-options', async (req: Request, res: Response) => {
    try {
      const type = req.query.type as string | undefined;
      
      let fundingOptions;
      if (type) {
        fundingOptions = await storage.getFundingOptionsByType(type);
      } else {
        fundingOptions = await storage.getFundingOptions();
      }
      
      res.status(200).json(fundingOptions);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve funding options" });
    }
  });

  app.get('/api/funding-options/:id', async (req: Request, res: Response) => {
    try {
      const optionId = parseInt(req.params.id);
      
      if (isNaN(optionId)) {
        return res.status(400).json({ message: "Invalid funding option ID" });
      }
      
      const fundingOption = await storage.getFundingOption(optionId);
      
      if (!fundingOption) {
        return res.status(404).json({ message: "Funding option not found" });
      }
      
      res.status(200).json(fundingOption);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve funding option" });
    }
  });

  // Funding Applications Routes
  app.post('/api/funding-applications', async (req: Request, res: Response) => {
    try {
      const applicationData = insertFundingApplicationSchema.parse(req.body);
      
      // Check if user exists
      const user = await storage.getUser(applicationData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Check if funding option exists
      const fundingOption = await storage.getFundingOption(applicationData.fundingOptionId);
      if (!fundingOption) {
        return res.status(404).json({ message: "Funding option not found" });
      }
      
      const application = await storage.createFundingApplication(applicationData);
      
      res.status(201).json(application);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create funding application" });
      }
    }
  });

  app.get('/api/funding-applications/user/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const applications = await storage.getFundingApplications(userId);
      
      // Enrich the response with funding option details
      const enrichedApplications = await Promise.all(
        applications.map(async (app) => {
          const fundingOption = await storage.getFundingOption(app.fundingOptionId);
          return {
            ...app,
            fundingOption: fundingOption || null
          };
        })
      );
      
      res.status(200).json(enrichedApplications);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve funding applications" });
    }
  });

  // Financial Tips Routes
  app.get('/api/financial-tips', async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string | undefined;
      
      let tips;
      if (category) {
        tips = await storage.getFinancialTipsByCategory(category);
      } else {
        tips = await storage.getFinancialTips();
      }
      
      res.status(200).json(tips);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve financial tips" });
    }
  });

  // Chat AI Routes
  app.post('/api/chat', async (req: Request, res: Response) => {
    try {
      const { userId, message } = req.body;
      
      if (!userId || !message) {
        return res.status(400).json({ message: "User ID and message are required" });
      }
      
      // Check if user exists
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Use OpenAI for generating a response
      // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { 
            role: "system", 
            content: "You are NOVA, a financial AI assistant for women entrepreneurs. You provide clear, concise advice on business finance, credit building, funding options, and financial literacy. Your tone is professional but supportive. Limit responses to 3-4 sentences unless explaining a complex topic." 
          },
          { role: "user", content: message }
        ],
      });

      const aiResponse = completion.choices[0].message.content || "I'm having trouble processing your request. Please try again.";
      
      // Detect category of conversation
      let category = "GENERAL";
      if (message.toLowerCase().includes("credit") || message.toLowerCase().includes("score")) {
        category = "CREDIT_BUILDING";
      } else if (message.toLowerCase().includes("fund") || message.toLowerCase().includes("invest") || message.toLowerCase().includes("grant")) {
        category = "FUNDING";
      } else if (message.toLowerCase().includes("cash") || message.toLowerCase().includes("revenue") || message.toLowerCase().includes("profit")) {
        category = "CASH_FLOW";
      }
      
      // Save chat history
      const chatItem = await storage.createChatHistoryItem({
        userId,
        message,
        response: aiResponse,
        category
      });
      
      res.status(200).json({
        id: chatItem.id,
        response: aiResponse,
        timestamp: chatItem.timestamp
      });
    } catch (error: any) {
      console.error('Chat API error:', error);
      const status = error.status || 500;
      const message = status === 429 ? 
        "AI service is currently busy. Please try again in a moment." : 
        "Failed to process chat request";
      res.status(status).json({ message });
    }
  });

  app.get('/api/chat/history/:userId', async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const chatHistory = await storage.getChatHistory(userId);
      
      res.status(200).json(chatHistory);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
