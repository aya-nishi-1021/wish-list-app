const LoginSignupAreaPasswordResetContent: React.FC = () => (
  <div className="login-signup-area-content">
    <div className="login-signup-area-content__input-wrapper">
      <input className="login-signup-area-content__input" type="text" name="email" placeholder="email" />
      <input
        className="login-signup-area-content__input"
        type="password"
        name="new-password"
        placeholder="new password"
      />
    </div>
    <button className="login-signup-area-content__submit-button" type="submit">
      再設定する
    </button>
  </div>
);

export default LoginSignupAreaPasswordResetContent;
