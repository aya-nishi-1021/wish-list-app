import '@/assets/styles/components/Login/LoginSignupAreaPasswordResetHeading.scss';
import IconArrow from '@/assets/images/icon_arrow.svg';

const LoginSignupAreaPasswordResetHeading: React.FC = () => (
  <div className="login-signup-area-password-reset-heading">
    <a href="/login" className="login-signup-area-password-reset-heading__to-login-page-link">
      <img src={IconArrow} alt="to login page" />
    </a>
    <h3 className="login-signup-area-password-reset-heading__text">パスワードをお忘れですか？</h3>
  </div>
);

export default LoginSignupAreaPasswordResetHeading;
