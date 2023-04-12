import type { CardNumber } from '@/types';

export interface CardNumberState {
  value?: CardNumber;
  errorMessage?: string;
}
