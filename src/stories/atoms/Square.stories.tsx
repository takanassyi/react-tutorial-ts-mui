// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Square, SquareProps } from 'components/atoms/Square';
import { ButtonStyleType } from 'components/modules/interfaces';

export default {
  title: 'tictactoe/atoms/Square',
  component: Square,
} as Meta;

const Template: Story<SquareProps> = (args) => {
  const { value, onClick, buttonStyle, color } = args;

  return (
    <Square
      value={value}
      onClick={onClick}
      buttonStyle={buttonStyle}
      color={color}
    />
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

export const SquareTestX = Template.bind({});
SquareTestX.args = {
  value: 'X',
  onClick,
  buttonStyle,
  color: 'secondary',
};

export const SquareTestO = Template.bind({});
SquareTestO.args = {
  value: 'O',
  onClick,
  buttonStyle,
  color: 'primary',
};

export const SquareTestNull = Template.bind({});
SquareTestNull.args = {
  value: null,
  onClick,
  buttonStyle,
  color: 'inherit',
};
