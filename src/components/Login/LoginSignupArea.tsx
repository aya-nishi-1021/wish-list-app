import '@/assets/styles/components/Login/LoginSignupArea.scss';
import IconGoogle from '@/assets/images/icon_google.svg';
import Heading from '@/components/Login/Heading';
import getHeadingText from './getHeadingText';

const LoginSignupArea: React.FC = () => {
  const headingText = getHeadingText();
  const hasQuery = !!window.location.search;

  return (
    <div className="login-signup-area">
      <Heading text={headingText} isBackButtonShow={hasQuery} />
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
    </div>
  );
};

export default LoginSignupArea;
