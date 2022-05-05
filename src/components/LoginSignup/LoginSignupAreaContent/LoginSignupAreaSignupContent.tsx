import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupWithEmail } from '@/firebase';

const LoginSignupAreaSignupContent: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleSignupWithEmail = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await signupWithEmail(emailInputValue, passwordInputValue)
        .then(() => navigate('/'))
        .catch((error: Error) => {
          setErrorMessage(error.message);
        });
    },
    [emailInputValue, passwordInputValue, navigate]
  );

  return (
    <div className="login-signup-area-content">
      {errorMessage && <div className="login-signup-area-content__error-message">{errorMessage}</div>}
      <div className="login-signup-area-content__input-wrapper">
        <input
          className="login-signup-area-content__input"
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <input
          className="login-signup-area-content__input"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
      </div>
      <button
        className="login-signup-area-content__submit-button"
        type="submit"
        onClick={handleSignupWithEmail}
        disabled={!emailInputValue || !passwordInputValue}
      >
        続行する
      </button>
    </div>
  );
};

export default LoginSignupAreaSignupContent;
