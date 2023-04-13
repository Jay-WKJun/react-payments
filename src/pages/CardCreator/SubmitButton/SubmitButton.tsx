import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/router';

interface SubmitButtonProps {
  onSubmit: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function SubmitButton({ onSubmit }: SubmitButtonProps) {
  return (
    <div className="button-box">
      <Link to={routes.createCardNickname()} className="button-text" onClick={onSubmit}>
        다음
      </Link>
    </div>
  );
}
