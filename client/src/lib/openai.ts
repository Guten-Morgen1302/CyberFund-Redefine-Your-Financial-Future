import OpenAI from 'openai';

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const apiKey = process.env.OPENAI_API_KEY || '';

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export async function getChatResponse(message: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are NOVA, a financial AI assistant for women entrepreneurs. You provide clear, concise advice on business finance, credit building, funding options, and financial literacy. Your tone is professional but supportive. Limit responses to 3-4 sentences unless explaining a complex topic."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    return completion.choices[0].message.content || "I'm having trouble processing your request. Please try again.";
  } catch (error) {
    console.error('Error getting chat response:', error);
    return "I'm currently experiencing technical difficulties. Please try again later.";
  }
}

// Function to get suggestions for credit score improvement
export async function getCreditImprovement(factors: Record<string, number>): Promise<string[]> {
  try {
    const promptContent = `
      I need suggestions to improve a business credit profile with the following factors:
      - Revenue Consistency: ${factors.revenueConsistency * 100}%
      - Transaction History: ${factors.transactionHistory * 100}%
      - Business Longevity: ${factors.businessLongevity * 100}%
      - Industry Growth Potential: ${factors.industryGrowth * 100}%
      - Social Reputation: ${factors.socialReputation * 100}%
      
      Provide 3 specific, actionable suggestions focusing on the weakest areas. Format as JSON with an array of suggestions objects, each with a "title" and "description" field.
    `;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a business credit expert providing actionable advice. Be specific and practical."
        },
        {
          role: "user",
          content: promptContent
        }
      ],
      response_format: { type: "json_object" }
    });
    
    const responseText = completion.choices[0].message.content || "[]";
    const responseJson = JSON.parse(responseText);
    
    return responseJson.suggestions || [];
  } catch (error) {
    console.error('Error getting credit improvement suggestions:', error);
    return [
      {
        title: "Improve Social Proof",
        description: "Connect your business social accounts to improve your social reputation score."
      },
      {
        title: "Complete Business Documentation",
        description: "Upload your business plan and financial projections for the next 6 months."
      },
      {
        title: "Establish Regular Revenue",
        description: "Connect payment systems to show consistent monthly income patterns."
      }
    ];
  }
}
