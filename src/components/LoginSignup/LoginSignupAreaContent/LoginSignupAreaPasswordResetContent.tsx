import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '@/firebase';

const LoginSignupAreaPasswordResetContent: React.FC = () => {
  const navigate = useNavigate();
  const emailInput = React.createRef<HTMLInputElement>();

  const handleResetPassword = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const email = emailInput.current?.value;
      if (email) await resetPassword(email);
      alert('パスワード再設定ページへのリンクを送信しました。メールをご確認ください。');
      navigate('/login');
    },
    [emailInput, navigate]
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
      </div>
      <button className="login-signup-area-content__submit-button" type="submit" onClick={handleResetPassword}>
        メールを送信する
      </button>
    </div>
  );
};

export default LoginSignupAreaPasswordResetContent;
