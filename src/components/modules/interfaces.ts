export type SquareType = 'X' | 'O' | null;
export type SquareColorType = 'secondary' | 'primary' | 'inherit';
export type ButtonStyleType = {
  maxWidth: string;
  maxHeight: string;
  minWidth: string;
  minHeight: string;
  border: string;
  borderRadius: string;
};

export type HistoryElementType = {
  squares: SquareType[];
};

export type HistoryType = HistoryElementType[];
