// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import { Page } from 'components/pages/Page';

export default {
  title: 'tictactoe/pages/Page',
  component: Page,
} as Meta;

const Template: Story = () => <Page />;

export const PageTest = Template.bind({});
