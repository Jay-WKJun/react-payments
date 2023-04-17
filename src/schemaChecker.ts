import { CardSchema, getInitialCardState } from './contexts';
import { entryObject } from './utils';

export function checkIsCardAndCardStateKeysSame() {
  const cardState = getInitialCardState();
  const cardKeysSchema = CardSchema.keyof();

  entryObject(cardState).forEach(([key]) => cardKeysSchema.parse(key));
}
