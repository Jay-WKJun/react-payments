import type { CardList } from '@/contexts/ApplicationContext';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

export const getFromLocalStorage = () => {
  const item = window.localStorage.getItem(LOCAL_STORAGE_CARD_LIST_KEY);
  try {
    return item ? (JSON.parse(item) as CardList) : null;
  } catch (e) {
    throw new Error(`Get의 result를 다시 확인해주세요. ${item}`);
  }
};

export const postToLocalStorage = (cardList: CardList) => {
  window.localStorage.setItem(LOCAL_STORAGE_CARD_LIST_KEY, JSON.stringify(cardList));
};
