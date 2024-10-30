import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { ChatError } from '../types';

interface ErrorMessageProps {
  error: ChatError;
  onRetry?: () => void;
}

export function ErrorMessage({ error, onRetry }: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 p-4">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-red-400" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <p className="mt-2 text-sm text-red-700">{error.message}</p>
        </div>
      </div>
      {onRetry && (
        <div className="mt-4">
          <button
            onClick={onRetry}
            className="rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}