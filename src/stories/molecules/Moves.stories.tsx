// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Moves, MovesProps } from 'components/molecules/Moves';
import { HistoryType } from 'components/modules/interfaces';

export default {
  title: 'tictactoe/molecules/Moves',
  component: Moves,
} as Meta;

const Template: Story<MovesProps> = (args) => {
  const { history, jumpTo } = args;

  return <Moves history={history} jumpTo={jumpTo} />;
};

const jumpTo = (): void => {
  // console.log("jumpTo");
};

const history = ([
  [null, null, null, null, null, null, null, null, null],
  ['X', null, null, null, null, null, null, null, null],
  ['X', 'O', null, null, null, null, null, null, null],
] as unknown) as HistoryType;

export const MovesTest = Template.bind({});
MovesTest.args = {
  jumpTo,
  history,
};
