import React from 'react';

import { Routes } from '@/components';
import { CardList, CardCreator, CardNicknameSetter } from '@/pages';

import { routes } from './routes';

function Router() {
  return (
    <Routes routes={{
      [routes.home]: () => <CardList />,
      [routes.cardCreator]: () => <CardCreator />,
      [routes.nickname]: () => <CardNicknameSetter />,
      [routes.nicknameUpdate]: () => <CardNicknameSetter />,
    }} />
  );
}

export { Router };
