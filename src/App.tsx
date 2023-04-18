import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CardProvider } from '@/contexts/CardContext';
import { ApplicationProvider, ApplicationProviderProps } from '@/contexts/ApplicationContext';
import { Router } from '@/router';

import { checkIsCardAndCardStateKeysSame } from './schemaChecker';
import { styled } from './stitches.config';

checkIsCardAndCardStateKeysSame();

const StyledApp = styled('div', {
  width: '375px',
  minWidth: '210px',
  height: '100%',
});

export interface AppProps extends ApplicationProviderProps {
  className?: string;
}

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <ApplicationProvider {...props}>
        <CardProvider>
          <StyledApp className={props.className}>
            <Router />
          </StyledApp>
        </CardProvider>
      </ApplicationProvider>
    </BrowserRouter>
  );
}
