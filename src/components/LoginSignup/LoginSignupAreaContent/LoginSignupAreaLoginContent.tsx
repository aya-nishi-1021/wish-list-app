import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '@/firebase';
import IconGoogle from '@/assets/images/icon_google.svg';

const LoginSignupAreaLoginContent: React.FC = () => {
  const navigate = useNavigate();
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleLoginWithEmail = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await loginWithEmail(emailInputValue, passwordInputValue);
      navigate('/');
    },
    [emailInputValue, passwordInputValue, navigate]
  );

  const handleLoginWithGoogle = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await loginWithGoogle();
      navigate('/');
    },
    [navigate]
  );

  return (
    <div className="login-signup-area-content">
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
        <div className="login-signup-area-content__reset-password-link-wrapper">
          <a className="login-signup-area-content__reset-password-link" href="/login?reset_password">
            パスワードをお忘れですか？
          </a>
        </div>
      </div>
      <button
        className="login-signup-area-content__submit-button"
        type="submit"
        onClick={handleLoginWithEmail}
        disabled={!emailInputValue || !passwordInputValue}
      >
        続行する
      </button>
      <div className="login-signup-area-content__border">または</div>
      <button className="login-signup-area-content__sns" type="button" onClick={handleLoginWithGoogle}>
        <img className="login-signup-area-content__sns-icon" src={IconGoogle} alt="Google" />
        <span className="login-signup-area-content__sns-text">Google で続行</span>
      </button>
    </div>
  );
};

export default LoginSignupAreaLoginContent;
