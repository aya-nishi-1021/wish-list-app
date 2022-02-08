import '@/assets/styles/components/Login/LoginSignupAreaHeading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

const getHeadingText = (): string => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return 'パスワードをお忘れですか？';
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM:
      return '登録を完了する';
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP:
      return 'ログインまたは新規登録';
    default:
      return '';
  }
};

const LoginSignupAreaHeading: React.FC = () => {
  const headingText = getHeadingText();
  const isBackButtonShow = !!window.location.search;

  return (
    <div className="login-signup-area-heading">
      {isBackButtonShow && (
        <button className="login-signup-area-heading__back-button" type="button" onClick={() => window.history.back()}>
          <img src={IconArrow} alt="back login page" />
        </button>
      )}
      <h3
        className={`login-signup-area-heading__text ${
          isBackButtonShow ? 'login-signup-area-heading__text--back-button-show' : ''
        }`}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default LoginSignupAreaHeading;
