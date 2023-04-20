import { useRouterContext } from '@/contexts';
import React, { ReactElement } from 'react';

interface RoutesProps {
  routes: { [path: string]: () => ReactElement }
}

export function Routes({ routes }: RoutesProps) {
  const routerContext = useRouterContext();
  const currentRoute = routerContext?.path;

  if (currentRoute && routes[currentRoute]) {
    const CurrentRouteElement = routes[currentRoute];
    return <CurrentRouteElement />
  }

  throw new Error('no route exist');
}
