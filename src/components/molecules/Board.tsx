/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Square } from 'components/atoms/Square';
import {
  ButtonStyleType,
  SquareColorType,
  SquareType,
} from 'components/modules/interfaces';

export type BoardProps = {
  squares: SquareType[];
  onClick: (i: number) => void;
  buttonStyle: ButtonStyleType;
};

const squareColor = (value: SquareType): SquareColorType => {
  switch (value) {
    case 'X':
      return 'secondary';
    case 'O':
      return 'primary';
    default:
      return 'inherit';
  }
};

export const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { squares, onClick, buttonStyle } = props;

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <div key={i}>
          {[...Array(3)].map((__, j) => {
            const index = 3 * i + j;

            return (
              <Square
                color={squareColor(squares[index])}
                buttonStyle={buttonStyle}
                value={squares[index]}
                onClick={(): void => onClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
export default Board;
