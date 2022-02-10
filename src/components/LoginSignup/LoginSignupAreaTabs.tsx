import '@/assets/styles/components/Login/LoginSignupAreaHeading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

const getHeadingText = (): string => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN:
      return 'ログイン';
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP:
      return '新規登録';
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return 'パスワードをお忘れですか？';
    default:
      return '';
  }
};

const LoginSignupAreaTabs: React.FC = () => {
  const headingText = getHeadingText();
  const isBackButtonShow = !!window.location.search;
  const { pathname } = window.location;

  return (
    <>
      {isBackButtonShow && (
        <div className="login-signup-area-heading">
          <button
            className="login-signup-area-heading__back-button"
            type="button"
            onClick={() => window.history.back()}
          >
            <img src={IconArrow} alt="back login page" />
          </button>
          <h3
            className={`login-signup-area-heading__text ${
              isBackButtonShow ? 'login-signup-area-heading__text--back-button-show' : ''
            }`}
          >
            {headingText}
          </h3>
        </div>
      )}
      {!isBackButtonShow && (
        <ul className="login-signup-area-tabs">
          <li className={`login-signup-area-tab ${pathname === '/login' ? 'login-signup-area-tab--focused' : ''}`}>
            <a href="/login">ログイン</a>
          </li>
          <li className={`login-signup-area-tab ${pathname === '/signup' ? 'login-signup-area-tab--focused' : ''}`}>
            <a href="/signup">新規登録</a>
          </li>
        </ul>
      )}
    </>
  );
};

export default LoginSignupAreaTabs;
