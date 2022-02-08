import '@/assets/styles/components/Login/LoginSignupArea.scss';
import LoginSignupAreaHeading from '@/components/Login/LoginSignupAreaHeading';
import LoginSignupAreaContent from './LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <LoginSignupAreaHeading />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
