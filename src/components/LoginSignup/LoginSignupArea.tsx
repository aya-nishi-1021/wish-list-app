import '@/assets/styles/components/Login/LoginSignupArea.scss';
import LoginSignupAreaHeading from '@/components/LoginSignup/LoginSignupAreaHeading';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <LoginSignupAreaHeading />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
