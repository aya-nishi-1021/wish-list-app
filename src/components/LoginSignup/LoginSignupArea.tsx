import '@/assets/styles/components/LoginSignup/LoginSignupArea.scss';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';
import LoginSignupAreaPasswordResetHeading from './LoginSignupAreaPasswordResetHeading';
import LoginSignupAreaTabs from '@/components/LoginSignup/LoginSignupAreaTabs';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();
  const heading =
    loginSignupAreaViewPattern === LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET ? (
      <LoginSignupAreaPasswordResetHeading />
    ) : (
      <LoginSignupAreaTabs />
    );

  return (
    <div className="login-signup-area">
      {heading}
      <LoginSignupAreaContent />
    </div>
  );
};

export default LoginSignupArea;
