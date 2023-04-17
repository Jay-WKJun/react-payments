import z from 'zod';

import { themes } from '@/theme';
import { entryObject } from '@/utils';

export const cardCompanySchema = z.object({
  name: z.string(),
  theme: z.union(
    // @ts-ignore
    entryObject(themes)
      .map(([key]) => z.literal(key))
      .flat()
  ),
});
export type CardCompany = z.infer<typeof cardCompanySchema>;

export const cardNickNameSchema = z.string().min(1).max(10);
export type CardNickname = z.infer<typeof cardNickNameSchema>;

export const cardNumberSchema = z.string().length(4);
export type CardNumber = z.infer<typeof cardNumberSchema>;

export const cardOwnerSchema = z.string().max(30).min(1);
export type CardOwner = z.infer<typeof cardOwnerSchema>;

export const cardPasswordSchema = z.string().length(1);
export type CardPassword = z.infer<typeof cardPasswordSchema>;

export const expireMonthSchema = z.string().max(2);
export type ExpireMonth = z.infer<typeof expireMonthSchema>;

export const expireYearSchema = z.string().max(2);
export type ExpireYear = z.infer<typeof expireYearSchema>;

export const securityCodeSchema = z.string().length(3);
export type SecurityCode = z.infer<typeof securityCodeSchema>;
