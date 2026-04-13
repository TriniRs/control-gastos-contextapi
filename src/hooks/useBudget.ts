import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

export const useBudget = () => {
  const context = useContext(BudgetContext); //esto es lo que me da acceso a todo lo que tengo en el provider, tanto el state como el dispatch

  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }

  return context;
};
