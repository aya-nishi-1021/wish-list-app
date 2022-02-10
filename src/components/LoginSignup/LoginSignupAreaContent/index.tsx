import '@/assets/styles/components/LoginSignup/LoginSignupAreaContent.scss';
import getLoginSignupAreaViewPattern, {
  LOGIN_SIGNUP_AREA_VIEN_PATTERN,
} from '@/components/LoginSignup/getLoginSignupAreaViewPattern';
import LoginSignupAreaLoginContent from '@/components/LoginSignup/LoginSignupAreaContent/LoginSignupAreaLoginContent';
import LoginSignupAreaSignupContent from '@/components/LoginSignup/LoginSignupAreaContent/LoginSignupAreaSignupContent';
import LoginSignupAreaPasswordResetContent from '@/components/LoginSignup/LoginSignupAreaContent/LoginSignupAreaPasswordResetContent';

const LoginSignupAreaContent: React.FC = () => {
  const loginSignupAreaViewPattern = getLoginSignupAreaViewPattern();

  switch (loginSignupAreaViewPattern) {
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN:
      return <LoginSignupAreaLoginContent />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP:
      return <LoginSignupAreaSignupContent />;
    case LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET:
      return <LoginSignupAreaPasswordResetContent />;
    default:
      return null;
  }
};

export default LoginSignupAreaContent;
