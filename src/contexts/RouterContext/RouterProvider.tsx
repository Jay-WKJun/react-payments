import React, { PropsWithChildren, useMemo, useState } from 'react';

import { routes } from '@/router';

import { RouterContext, RouterContextApi } from './routerContext';
import { RouterContextProps } from './type';

interface RouterProviderProps {}

export function RouterProvider({ children }: PropsWithChildren<RouterProviderProps>) {
  const [router, setRouter] = useState<RouterContextProps>({
    path: routes.home,
    params: {},
  });

  const routerApi = useMemo(() => {
    const navigate = (path: string, params?: { [key: string]: string }) => {
      setRouter(() => ({
        path,
        params: {
          ...params,
        }
      }));
    }

    return { navigate };
  }, []);

  return (
    <RouterContextApi.Provider value={routerApi}>
      <RouterContext.Provider value={router}>
        {children}
      </RouterContext.Provider>
    </RouterContextApi.Provider>
  );
}
