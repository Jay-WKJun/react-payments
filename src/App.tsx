import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CardProvider } from '@/contexts/CardContext';
import { ApplicationProvider, ApplicationContextProps } from '@/contexts/ApplicationContext';
import { Router } from '@/router';

interface AppProps extends ApplicationContextProps {}

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <ApplicationProvider {...props}>
        <CardProvider>
          <Router />
        </CardProvider>
      </ApplicationProvider>
    </BrowserRouter>
  );
}
