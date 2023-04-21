import { useContext } from 'react';

import { RouterContext, RouterContextApi } from './routerContext';

export function useRouterContext() {
  return useContext(RouterContext);
}

export function useRouterContextApi() {
  return useContext(RouterContextApi);
}
