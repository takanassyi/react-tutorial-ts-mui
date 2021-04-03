// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Board, BoardProps } from 'components/molecules/Board';
import { ButtonStyleType, SquareType } from 'components/modules/interfaces';

export default {
  title: 'tictactoe/molecules/Board',
  component: Board,
} as Meta;

const Template: Story<BoardProps> = (args) => {
  const { squares, onClick, buttonStyle } = args;

  return (
    <Board squares={squares} onClick={onClick} buttonStyle={buttonStyle} />
  );
};

const onClick = () => {
  // console.log('onclick');
};

const buttonStyle = {
  maxWidth: '50px',
  maxHeight: '50px',
  minWidth: '50px',
  minHeight: '50px',
  border: '1px solid #999',
  borderRadius: '1px',
} as ButtonStyleType;

const squaresInitial: SquareType[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export const BoardTestInitial = Template.bind({});
BoardTestInitial.args = {
  squares: squaresInitial,
  onClick,
  buttonStyle,
};

const squares: SquareType[] = ['X', null, 'O', null, 'O', null, 'X', null, 'O'];

export const BoardTest = Template.bind({});
BoardTest.args = {
  squares,
  onClick,
  buttonStyle,
};
