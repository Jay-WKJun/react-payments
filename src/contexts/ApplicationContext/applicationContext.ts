import { createContext } from 'react';

import type { ApplicationContextProps } from './type';

export const ApplicationContext = createContext<ApplicationContextProps | null>(null);
