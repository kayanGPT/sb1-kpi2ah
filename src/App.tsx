import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ErrorMessage } from './components/ErrorMessage';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { generateChatResponse } from './services/openai';
import type { Message, ChatError } from './types';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<ChatError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await generateChatResponse([...messages, userMessage]);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'An unexpected error occurred',
        code: err instanceof Error ? err.name : 'UNKNOWN_ERROR',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />
      {!showChat ? (
        <>
          <Hero onStartChat={() => setShowChat(true)} />
          <Features />
          <Services />
          <Testimonials />
          <Footer />
        </>
      ) : (
        <main className="flex-1 py-12 px-4 max-w-7xl mx-auto w-full">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900">Healthcare Assistant</h2>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              Back to Home
            </button>
          </div>
          <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
            <div className="p-8 space-y-6">
              <div className="flex-1 space-y-6 overflow-y-auto max-h-[600px] pr-2">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-xl font-semibold">Welcome to Abbott Health Assistant</p>
                    <p className="mt-2">How can I help you with your healthcare needs today?</p>
                  </div>
                ) : (
                  messages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                  ))
                )}
                {isLoading && (
                  <div className="flex items-center justify-center py-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
                  </div>
                )}
                {error && <ErrorMessage error={error} onRetry={() => setError(null)} />}
                <div ref={messagesEndRef} />
              </div>
              <div className="mt-6 border-t pt-6">
                <ChatInput onSend={handleSend} disabled={isLoading} />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}