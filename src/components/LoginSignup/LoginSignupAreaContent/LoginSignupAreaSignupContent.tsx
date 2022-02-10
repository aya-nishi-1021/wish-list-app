import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupWithEmail } from '@/firebase';

const LoginSignupAreaSignupContent: React.FC = () => {
  const navigate = useNavigate();
  const emailInput = React.createRef<HTMLInputElement>();
  const passwordInput = React.createRef<HTMLInputElement>();

  const handleSignupWithEmail = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const email = emailInput.current?.value;
      const password = passwordInput.current?.value;
      if (email && password) await signupWithEmail(email, password);
      navigate('/');
    },
    [emailInput, passwordInput, navigate]
  );

  return (
    <div className="login-signup-area-content">
      <div className="login-signup-area-content__input-wrapper">
        <input
          className="login-signup-area-content__input"
          type="text"
          name="email"
          placeholder="email"
          ref={emailInput}
        />
        <input
          className="login-signup-area-content__input"
          type="password"
          name="password"
          placeholder="password"
          ref={passwordInput}
        />
      </div>
      <button className="login-signup-area-content__submit-button" type="submit" onClick={handleSignupWithEmail}>
        続行する
      </button>
    </div>
  );
};

export default LoginSignupAreaSignupContent;
