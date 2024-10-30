import OpenAI from 'openai';
import { OPENAI_CONFIG } from '../config/constants';
import type { Message } from '../types';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error('OpenAI API key is not configured. Please check your environment variables.');
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateChatResponse(messages: Message[]): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_CONFIG.model,
      temperature: OPENAI_CONFIG.temperature,
      max_tokens: OPENAI_CONFIG.max_tokens,
      messages: [
        { role: 'system', content: OPENAI_CONFIG.system_prompt },
        ...messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        }))
      ]
    });

    return response.choices[0]?.message?.content || 'I apologize, but I was unable to process your request.';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response. Please try again later.');
  }
}