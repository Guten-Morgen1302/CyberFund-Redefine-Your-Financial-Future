import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface UseChatOptions {
  userId: number;
  onSuccess?: (response: string) => void;
}

interface ChatResponse {
  id: number;
  response: string;
  timestamp: string;
}

export function useOpenAIChat({ userId, onSuccess }: UseChatOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (message: string): Promise<string> => {
    if (!message.trim()) return '';
    
    setIsLoading(true);
    
    try {
      const response = await apiRequest('POST', '/api/chat', {
        userId,
        message
      });
      
      const data: ChatResponse = await response.json();
      
      // Invalidate chat history query to refresh the data
      queryClient.invalidateQueries({ queryKey: ['/api/chat/history', userId] });
      
      if (onSuccess) {
        onSuccess(data.response);
      }
      
      return data.response;
    } catch (error) {
      console.error('Error sending message to AI:', error);
      const description = error.status === 429 ?
        'AI service is currently busy. Please try again in a moment.' :
        'Failed to get a response from the AI assistant. Please try again.';
      toast({
        title: 'Error',
        description,
        variant: 'destructive'
      });
      return '';
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading
  };
}
