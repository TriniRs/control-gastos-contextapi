import type { Dispatch } from 'react';
import { createContext } from 'react';
import type { BudgetActions, BudgetState } from '../reducers/budget-reducer';

interface BudgetContextProps {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number; //no se pone en el reducer porque no es un dato que se necesite en toda la app, solo en algunos componentes, entonces lo calculo aquí y lo paso por el contexto para no tener que calcularlo en cada componente que lo necesite, y lo mismo con el remainingBudget
  remainingBudget: number;
  // setFilter: Dispatch<React.SetStateAction<string>>
  // filter: string
}

export const BudgetContext = createContext<BudgetContextProps>(
  {} as BudgetContextProps,
);
