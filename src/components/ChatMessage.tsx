import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-full ${
        isUser ? 'bg-blue-600' : 'bg-blue-100'
      }`}>
        {isUser ? 
          <MessageCircle className="h-5 w-5 text-white" /> : 
          <Bot className="h-5 w-5 text-blue-600" />
        }
      </div>
      <div className={`relative flex max-w-[80%] rounded-2xl px-6 py-4 ${
        isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}