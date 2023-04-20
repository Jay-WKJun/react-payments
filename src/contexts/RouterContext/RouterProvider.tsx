import React, { PropsWithChildren, useMemo, useState } from 'react';

import { RouterContext, RouterContextApi } from './RouterContext';
import { RouterContextProps } from './type';

interface RouterProviderProps {}

export function RouterProvider({ children }: PropsWithChildren<RouterProviderProps>) {
  const [router, setRouter] = useState<RouterContextProps>({
    path: '',
    params: {},
  });

  const routerApi = useMemo(() => {
    const navigate = (path: string, params?: { [key: string]: string }) => {
      setRouter((prev) => ({
        path,
        params: {
          ...prev.params,
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
