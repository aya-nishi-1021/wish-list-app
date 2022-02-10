import '@/assets/styles/components/LoginSignup/LoginSignupAreaNavi.scss';
import getLoginSignupAreaViewPattern, {
  LOGIN_SIGNUP_AREA_VIEN_PATTERN,
} from '@/components/LoginSignup/getLoginSignupAreaViewPattern';
import LoginSignupAreaTabs from '@/components/LoginSignup/LoginSignupAreaNavi/LoginSignupAreaTabs';
import LoginSignupAreaPasswordResetHeading from '@/components/LoginSignup/LoginSignupAreaNavi/LoginSignupAreaPasswordResetHeading';

const LoginSignupAreaNavi: React.FC = () => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN:
      return <LoginSignupAreaTabs />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP:
      return <LoginSignupAreaTabs />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return <LoginSignupAreaPasswordResetHeading />;
    default:
      return null;
  }
};

export default LoginSignupAreaNavi;
