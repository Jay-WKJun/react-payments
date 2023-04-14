import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CardProvider } from '@/contexts/CardContext';
import { ApplicationProvider, ApplicationProviderProps } from '@/contexts/ApplicationContext';
import { Router } from '@/router';

interface AppProps extends ApplicationProviderProps {}

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
