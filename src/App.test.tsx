import '@testing-library/jest-dom'

import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App, AppProps } from './App';

let props: AppProps = {
  cardList: {
    card1: {
      cardCompany: { name: 'VISA', theme: 'blue' },
      cardOwner: 'John Doe',
      cardNumbers: ['1234', '4324', '4352', '2342'],
      passwords: ['1', '3'],
      cardNickname: 'My Card',
      expireDates: ['12', '32'],
      securityCode: '123',
    },
  },
  onCardConfirm: vi.fn(),
  onCardDelete: vi.fn(),
  onCardUpdate: vi.fn(),
  onCardSubmit: vi.fn(),
};

describe('App props tests', () => {
  beforeEach(() => {
    props = {
      cardList: {
        card1: {
          cardCompany: { name: 'VISA', theme: 'blue' },
          cardOwner: 'John Doe',
          cardNumbers: ['1234', '4324', '4352', '2342'],
          passwords: ['1', '3'],
          cardNickname: 'My Card',
          expireDates: ['12', '32'],
          securityCode: '123',
        },
      },
      onCardConfirm: vi.fn(),
      onCardDelete: vi.fn(),
      onCardUpdate: vi.fn(),
      onCardSubmit: vi.fn(),
    }
  })

  it('success case', () => {
    render(
      <App {...props} />
    );

    const appElement = screen.getByTestId('payments');
    expect(appElement).toBeInTheDocument();
  });

  it('should have correct onCardConfirm type', () => {
    // @ts-ignore
    props.onCardConfirm = '';

    expect(() => render(
      <App {...props} />
    )).toThrow('onCardConfirm Prop에는 function만 넣어주세요.');
  });

  it('should have correct onCardDelete type', () => {
    // @ts-ignore
    props.onCardDelete = '';

    expect(() => render(
      <App {...props} />
    )).toThrow('onCardDelete Prop에는 function만 넣어주세요.');
  });

  it('should have correct onCardSubmit type', () => {
    // @ts-ignore
    props.onCardSubmit = '';

    expect(() => render(
      <App {...props} />
    )).toThrow('onCardSubmit Prop에는 function만 넣어주세요.');
  });

  it('should have correct onCardUpdate type', () => {
    // @ts-ignore
    props.onCardUpdate = '';

    expect(() => render(
      <App {...props} />
    )).toThrow('onCardUpdate Prop에는 function만 넣어주세요.');
  });

  describe('should have correct card type of cardCompany', () => {
    it('incorrect cardCompany type', () => {
      // @ts-ignore
      props.cardList.card1.cardCompany = {};

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('incorrect cardCompany theme value', () => {
      // @ts-ignore
      props.cardList.card1.cardCompany = { name: 'adsf', theme: 'dark' };

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of cardNickname', () => {
    it('incorrect cardNickname type', () => {
      // @ts-ignore
      props.cardList.card1.cardNickname = {};

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('cardOwner maxLength is 10', () => {
      // @ts-ignore
      props.cardList.card1.cardNickname = 'very Long name of cardNickname';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of cardOwner', () => {
    it('incorrect cardOwner type', () => {
      // @ts-ignore
      props.cardList.card1.cardOwner = {};

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('cardOwner maxLength is 30', () => {
      // @ts-ignore
      props.cardList.card1.cardOwner = 'very Long name of cardOwner over 30 very very long';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of cardNumbers', () => {
    it('incorrect cardNumbers type', () => {
      // @ts-ignore
      props.cardList.card1.cardNumbers = '';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('cardNumber should have length 4', () => {
      // @ts-ignore
      props.cardList.card1.cardNumbers = ['1233', '1234', '1234'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('each cardNumber should have length 4', () => {
      // @ts-ignore
      props.cardList.card1.cardNumbers = ['123', '1234', '1234', '1234'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of passwords', () => {
    it('incorrect passwords type', () => {
      // @ts-ignore
      props.cardList.card1.passwords = '';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('passwords should have length 2', () => {
      // @ts-ignore
      props.cardList.card1.passwords = ['1'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('each passwords should have length 1', () => {
      // @ts-ignore
      props.cardList.card1.passwords = ['12', '1'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of expireDates', () => {
    it('incorrect expireDates type', () => {
      // @ts-ignore
      props.cardList.card1.expireDates = '';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('expireDates should have length 2', () => {
      // @ts-ignore
      props.cardList.card1.expireDates = ['12'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('expireDates first value is expireMonth, 1 ~ 12 is allowed', () => {
      // @ts-ignore
      props.cardList.card1.expireDates = ['13', '43'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('expireDates second value is expireYear, should have length 2', () => {
      // @ts-ignore
      props.cardList.card1.expireDates = ['11', '323'];

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });

  describe('should have correct card type of securityCode', () => {
    it('incorrect securityCode type', () => {
      // @ts-ignore
      props.cardList.card1.securityCode = {};

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });

    it('securityCode should have length 3', () => {
      // @ts-ignore
      props.cardList.card1.securityCode = '1234';

      expect(() => render(
        <App {...props} />
      )).toThrow('');
    });
  });
});
