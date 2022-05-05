import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '@/firebase';

const LoginSignupAreaPasswordResetContent: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailInputValue, setEmailInputValue] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(event.target.value);
  };

  const handleResetPassword = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      await resetPassword(emailInputValue)
        .then(() => {
          alert('パスワード再設定ページへのリンクを送信しました。メールをご確認ください。');
          navigate('/login');
        })
        .catch((error: Error) => {
          setErrorMessage(error.message);
        });
    },
    [emailInputValue, navigate]
  );

  return (
    <div className="login-signup-area-content">
      <div className="login-signup-area-content__description">
        登録したメールアドレスを入力してください。パスワード再設定ページへのリンクをメールをお送りします。
      </div>
      {errorMessage && <div className="login-signup-area-content__error-message">{errorMessage}</div>}
      <div className="login-signup-area-content__input-wrapper">
        <input
          className="login-signup-area-content__input"
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChangeEmail}
        />
      </div>
      <button
        className="login-signup-area-content__submit-button"
        type="submit"
        onClick={handleResetPassword}
        disabled={!emailInputValue}
      >
        メールを送信する
      </button>
    </div>
  );
};

export default LoginSignupAreaPasswordResetContent;
