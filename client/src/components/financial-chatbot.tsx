import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useOpenAIChat } from '@/hooks/use-openai';
import { NeonButton } from '@/components/ui/neon-button';
import { useToast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '@/lib/utils';
import { ArrowUp, Loader2 } from 'lucide-react';
import type { ChatHistoryItem } from '@/types';

interface ChatMessage {
  id: number;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface FinancialChatbotProps {
  userId?: number;
}

export function FinancialChatbot({ userId = 1 }: FinancialChatbotProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: 'assistant',
      content: "Hello! I'm NOVA, your AI financial assistant. How can I help with your business finances today?",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Fetch chat history
  const { data: chatHistory } = useQuery<ChatHistoryItem[]>({
    queryKey: [`/api/chat/history/${userId}`],
  });

  // Load chat history once on component mount
  useEffect(() => {
    if (chatHistory && chatHistory.length > 0 && messages.length === 1) {
      const historicalMessages = chatHistory.map((item, index) => [
        {
          id: index * 2 + 1,
          role: 'user' as const,
          content: item.message,
          timestamp: new Date(item.timestamp)
        },
        {
          id: index * 2 + 2,
          role: 'assistant' as const,
          content: item.response,
          timestamp: new Date(item.timestamp)
        }
      ]).flat();
      
      setMessages([messages[0], ...historicalMessages]);
    }
  }, [chatHistory]);

  // Hook into OpenAI API
  const { sendMessage, isLoading: isWaitingForResponse } = useOpenAIChat({
    userId,
    onSuccess: (response) => {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, newMessage]);
    }
  });

  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newMessage]);
    sendMessage(input.trim());
    setInput('');
  };

  // Format the chat message display based on role
  const renderMessage = (message: ChatMessage) => {
    switch (message.role) {
      case 'user':
        return (
          <div key={message.id} className="flex justify-end mb-4">
            <div className="max-w-[75%] px-4 py-3 rounded-lg bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-text">
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-cyber-text-dim mt-1 text-right">
                {formatDate(message.timestamp)}
              </p>
            </div>
          </div>
        );
      case 'assistant':
        return (
          <div key={message.id} className="flex justify-start mb-4">
            <div className="max-w-[75%] px-4 py-3 rounded-lg bg-cyber-dark border border-cyber-pink/30 text-cyber-text">
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-cyber-pink/70 mt-1">
                NOVA • {formatDate(message.timestamp)}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[400px] flex flex-col bg-cyber-black/30 rounded-lg border border-cyber-blue/10 overflow-hidden">
      <div className="flex-grow p-4 overflow-y-auto custom-scrollbar">
        {messages.map(renderMessage)}
        <div ref={messagesEndRef} />
        
        {isWaitingForResponse && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[75%] px-4 py-3 rounded-lg bg-cyber-dark border border-cyber-pink/30 text-cyber-text flex items-center">
              <Loader2 className="h-4 w-4 text-cyber-pink mr-2 animate-spin" />
              <p className="text-sm text-cyber-pink/70">NOVA is thinking...</p>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-cyber-blue/20 p-3 bg-cyber-dark flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask NOVA about business finances..."
          className="flex-grow bg-cyber-black/50 border-cyber-blue/30 focus-visible:ring-cyber-pink"
          disabled={isWaitingForResponse}
        />
        <NeonButton 
          type="submit"
          color="pink"
          size="sm"
          glowEffect
          disabled={isWaitingForResponse || !input.trim()}
        >
          <ArrowUp className="h-4 w-4" />
        </NeonButton>
      </form>
    </div>
  );
}