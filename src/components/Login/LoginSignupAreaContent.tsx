import '@/assets/styles/components/Login/LoginSignupAreaContent.scss';
import IconGoogle from '@/assets/images/icon_google.svg';
import getLoginSignupAreaViewPattern, {
  LOGIN_SIGNUP_AREA_VIEN_PATTERN,
} from '@/components/Login/getLoginSignupAreaViewPattern';

const LoginSignupContent: React.FC = () => (
  <div className="login-signup-area-content">
    <div className="login-signup-area-content__input-wrapper">
      <input className="login-signup-area-content__input" type="text" name="email" placeholder="email" />
      <input className="login-signup-area-content__input" type="password" name="password" placeholder="password" />
      <div className="login-signup-area-content__reset-password-link-wrapper">
        <a className="login-signup-area-content__reset-password-link" href="/login?reset_password">
          パスワードをお忘れですか？
        </a>
      </div>
    </div>
    <button className="login-signup-area-content__submit-button" type="submit">
      続行する
    </button>
    <div className="login-signup-area-content__border">または</div>
    <button className="login-signup-area-content__sns" type="button">
      <img className="login-signup-area-content__sns-icon" src={IconGoogle} alt="google" />
      <span className="login-signup-area-content__sns-text">Google で続行</span>
    </button>
  </div>
);

const PasswordResetContent: React.FC = () => (
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

const SignupConfirmContent: React.FC = () => (
  <div className="login-signup-area-content">
    <div className="login-signup-area-content__input-wrapper">
      <input className="login-signup-area-content__input" type="text" name="nickname" placeholder="nickname" />
    </div>
    <button className="login-signup-area-content__submit-button" type="submit">
      続行する
    </button>
  </div>
);

const LoginSignupAreaContent: React.FC = () => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return <PasswordResetContent />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM:
      return <SignupConfirmContent />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP:
      return <LoginSignupContent />;
    default:
      return null;
  }
};

export default LoginSignupAreaContent;
