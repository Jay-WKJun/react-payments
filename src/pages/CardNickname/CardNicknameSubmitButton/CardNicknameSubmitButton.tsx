import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/router';

interface CardNicknameSubmitButtonProps {
  onSubmit: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function CardNicknameSubmitButton({ onSubmit }: CardNicknameSubmitButtonProps) {
  return (
    <div className="button-box mt-50">
      <Link to={routes.home} className="button-text" onClick={onSubmit}>
        다음
      </Link>
    </div>
  );
}
