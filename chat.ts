
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import { getMockChatResponse } from "../server/mockData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are NEXUS, a cyberpunk-styled AI career assistant. Provide concise, helpful career advice with a futuristic tone. Focus on emerging tech careers, skill development, and learning resources. Keep responses under 150 words and include specific, actionable advice."
          },
          { role: "user", content: message }
        ]
      });

      const aiResponse = response.choices[0].message.content;
      res.json({ response: aiResponse });
    } catch (apiError) {
      console.error("OpenAI API error, using fallback response:", apiError);
      const mockResponse = getMockChatResponse(message);
      res.json(mockResponse);
    }
  } catch (error) {
    console.error("Error in chat:", error);
    const mockResponse = getMockChatResponse("help");
    res.json(mockResponse);
  }
}
