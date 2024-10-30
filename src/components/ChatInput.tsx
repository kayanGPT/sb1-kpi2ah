import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder="Type your healthcare question here..."
        className="flex-1 rounded-xl border border-gray-200 px-6 py-4 text-gray-800 placeholder-gray-400 
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                   disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-medium text-white 
                   transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}