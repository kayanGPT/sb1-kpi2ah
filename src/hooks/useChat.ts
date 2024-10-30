import { useState } from 'react';
import { generateChatResponse } from '../services/openai';
import type { ChatState, Message } from '../types';

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hello! I'm your Abbott Health Assistant. How can I help you today with your healthcare journey?",
  timestamp: new Date(),
};

export function useChat() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [INITIAL_MESSAGE],
    isLoading: false,
    error: null,
  });

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      const response = await generateChatResponse(
        [...chatState.messages, userMessage]
      );

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      }));
    }
  };

  return {
    messages: chatState.messages,
    isLoading: chatState.isLoading,
    error: chatState.error,
    sendMessage: handleSendMessage,
  };
}