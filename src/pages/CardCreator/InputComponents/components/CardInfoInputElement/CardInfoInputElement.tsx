import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { useInputEventHandler } from './useInputEventHandler';
import type { BlurEventHandlerProps, ChangeEventHandlerProps } from './useInputEventHandler';
import { StyledCardInfoInputElement, StyledInput, StyledErrorMessage } from './CardInfoInputElement.styled';

type TInputAttribute = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type TOmittedInputAttribute = Omit<TInputAttribute, 'onChange' | 'onBlur' | 'ref'>;

export interface CardInfoInputElementProps extends TOmittedInputAttribute {
  changeEventProps?: ChangeEventHandlerProps;
  blurEventProps?: BlurEventHandlerProps;
  error?: {
    isError?: boolean;
    message?: string | null;
  };
}

function CardInfoInputElementComponent(
  { changeEventProps, blurEventProps, type, value, className, error, ...props }: CardInfoInputElementProps,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { createInputChangeHandler, createInputBlurHandler } = useInputEventHandler();

  // @ts-ignore
  useImperativeHandle(ref, () => inputRef.current);

  return (
    <StyledCardInfoInputElement className={className}>
      <StyledInput
        {...props}
        type={type ?? 'text'}
        value={value ?? ''}
        error={error?.isError}
        ref={inputRef}
        onChange={changeEventProps && createInputChangeHandler(changeEventProps)}
        onBlur={blurEventProps && createInputBlurHandler(blurEventProps)}
      />
      {error?.isError && error?.message && <StyledErrorMessage>{error.message}</StyledErrorMessage>}
    </StyledCardInfoInputElement>
  );
}

export const CardInfoInputElement = forwardRef(CardInfoInputElementComponent);
