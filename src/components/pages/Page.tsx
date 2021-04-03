import React from 'react';
import { GenericTemplate } from 'components/templates/GenericTemplate';
import { Game } from 'components/organisms/Game';

export const Page: React.FC = () => (
  <GenericTemplate>
    <Game />
  </GenericTemplate>
);

export default Page;
