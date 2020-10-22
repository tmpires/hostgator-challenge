import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  type?: 'success' | 'info' | 'error';
  description?: string;
  title: string;
  id: string;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        description,
        title,
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(toast => toast.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error('useToast must be used within an ToastProvider');

  return context;
}
