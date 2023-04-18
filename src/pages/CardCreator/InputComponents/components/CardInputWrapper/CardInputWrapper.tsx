import { PropsWithChildren, memo } from 'react';

import {
  StyledCardInputWrapper,
  StyledHeaderWrapper,
  StyledHeader,
  StyledErrorMessage,
} from './CardInputWrapper.styled';

interface CardInputWrapperProps extends PropsWithChildren {
  header: string[] | string;
  errorMessage?: string | null;
}

function CardInputWrapper({ header, errorMessage, children }: CardInputWrapperProps) {
  const headers = typeof header === 'string' ? [header] : header;
  const isError = !!errorMessage;

  return (
    <StyledCardInputWrapper>
      <StyledHeaderWrapper>
        {headers.map((header) => (
          <StyledHeader key={`input-header-${header}`}>{header}</StyledHeader>
        ))}
      </StyledHeaderWrapper>
      <div>{children}</div>
      {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledCardInputWrapper>
  );
}

export const CardInputWrapperPure = memo(CardInputWrapper);
