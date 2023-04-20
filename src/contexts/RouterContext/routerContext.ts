import { createContext } from 'react';

import type { RouterContextProps, RouterContextApiProps } from './type';

export const RouterContext = createContext<RouterContextProps | null>(null);
export const RouterContextApi = createContext<RouterContextApiProps | null>(null);
