import { useContext } from 'react';

import { RouterContext, RouterContextApi } from './RouterContext';

export function useRouterContext() {
  return useContext(RouterContext);
}

export function useRouterContextApi() {
  return useContext(RouterContextApi);
}
