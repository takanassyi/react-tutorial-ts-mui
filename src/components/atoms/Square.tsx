import React from 'react';
import Button from '@material-ui/core/Button';
import {
  SquareType,
  ButtonStyleType,
  SquareColorType,
} from 'components/modules/interfaces';

export type SquareProps = {
  value: SquareType;
  onClick: () => void;
  buttonStyle: ButtonStyleType;
  color: SquareColorType;
};

export const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { value, onClick, buttonStyle, color } = props;

  return (
    <Button
      color={color}
      variant="contained"
      style={buttonStyle}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};
export default Square;
