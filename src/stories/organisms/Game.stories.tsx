// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Game } from 'components/organisms/Game';

export default {
  title: 'tictactoe/organisms/Game',
  component: Game,
} as Meta;

const Template: Story = () => <Game />;

export const GameTest = Template.bind({});
