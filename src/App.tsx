import React from 'react';

import { CardProvider } from '@/contexts/CardContext';
import { ApplicationProvider, ApplicationProviderProps } from '@/contexts/ApplicationContext';
import { Router } from '@/router';

import { checkIsCardAndCardStateKeysSame } from './schemaChecker';
import { styled } from './stitches.config';

checkIsCardAndCardStateKeysSame();

const StyledApp = styled('div', {
  maxWidth: '375px',
  minWidth: '210px',
  height: '100%',
});

export interface AppProps extends ApplicationProviderProps {
  className?: string;
}

export function App(props: AppProps) {
  return (
    <ApplicationProvider {...props}>
      <CardProvider>
        <StyledApp className={props.className} data-testid="payments">
          <Router />
        </StyledApp>
      </CardProvider>
    </ApplicationProvider>
  );
}
