import type { CardCompany, CardNickname, CardNumber, CardOwner, ExpireMonth, ExpireYear } from '@/types';

export type CardCompanyProp = CardCompany;
export type CardNumberProp = (CardNumber | undefined)[];
export type ExpireDateProp = [ExpireMonth | undefined, ExpireYear | undefined];
export type CardOwnerProp = CardOwner;
export type CardNicknameProp = CardNickname;
