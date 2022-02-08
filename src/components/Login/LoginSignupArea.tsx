import '@/assets/styles/components/Login/LoginSignupArea.scss';
import IconGoogle from '@/assets/images/icon_google.svg';
import Heading from '@/components/Login/Heading';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

const LoginSignupContent: React.FC = () => (
  <>
    <div className="login-signup-area__input-wrapper">
      <input className="login-signup-area__input" type="text" name="email" placeholder="email" />
      <input className="login-signup-area__input" type="password" name="password" placeholder="password" />
      <div className="login-signup-area__reset-password-link-wrapper">
        <a className="login-signup-area__reset-password-link" href="/login?reset_password">
          パスワードをお忘れですか？
        </a>
      </div>
    </div>
    <button className="login-signup-area__submit-button" type="submit">
      続行する
    </button>
    <div className="login-signup-area__border">または</div>
    <button className="login-signup-area__sns" type="button">
      <img className="login-signup-area__sns-icon" src={IconGoogle} alt="google" />
      <span className="login-signup-area__sns-text">Google で続行</span>
    </button>
  </>
);

const PasswordResetContent: React.FC = () => (
  <>
    <div className="login-signup-area__input-wrapper">
      <input className="login-signup-area__input" type="text" name="email" placeholder="email" />
      <input className="login-signup-area__input" type="password" name="new-password" placeholder="new password" />
    </div>
    <button className="login-signup-area__submit-button" type="submit">
      再設定する
    </button>
  </>
);

const LoginSignupAreaContent: React.FC = () => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return <PasswordResetContent />;
    // TODO: 登録を完了する用のコンポーネントを作って差し替える
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM:
      return null;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP:
      return <LoginSignupContent />;
    default:
      return null;
  }
};

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <Heading />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
