
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import { careerInputSchema } from "../shared/schema";
import { mockCareerData } from "../server/mockData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedInput = careerInputSchema.parse(req.body);
    
    try {
      const prompt = `
        I need career recommendations based on the following profile:
        Name: ${validatedInput.name}
        Education Level: ${validatedInput.education}
        Skills: ${validatedInput.skills}
        Interests: ${validatedInput.interests}
        Career Goals: ${validatedInput.careerGoals}
        
        Please provide 3 career path recommendations with the following information:
        1. Career title
        2. Match percentage (between 75-95%)
        3. Required skills (list of 4-6 skills)
        4. Skill gaps (list of 2-3 skills the person doesn't have but needs)
        5. Recommended courses (list of 2 courses or certifications)`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const content = response.choices[0].message.content;
      const careerData = JSON.parse(content);
      res.json(careerData);
    } catch (apiError) {
      console.error("OpenAI API error, using fallback response:", apiError);
      res.json(mockCareerData);
    }
  } catch (error) {
    console.error("Error analyzing career:", error);
    res.json(mockCareerData);
  }
}
