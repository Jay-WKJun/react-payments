import type { Themes } from '@/theme';

export interface TCardCompanyProp {
  theme: Themes;
  name: string;
}

export type TCardNumberProp = string | undefined;

export type TCardOwnerNameProp = string | undefined;
export type TCardExpireDateProp = string | undefined;
export type TCardNicknameProp = string | undefined;
