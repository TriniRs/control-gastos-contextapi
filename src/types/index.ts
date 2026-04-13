export interface Expense {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: Value;
}

export type DraftExpense = Omit<Expense, 'id'>; //Esto se usa en el setstate del ExpenseForm cuando se escribe, cuando ya esta por ser guardado convierte en Expense añadiendo el id, pero mientras se escribe no tiene id, por eso se omite el id en el DraftExpense

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface Category {
  id: string;
  name: string;
  icon: string;
}
