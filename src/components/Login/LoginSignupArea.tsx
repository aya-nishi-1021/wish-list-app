import '@/assets/styles/components/Login/LoginSignupArea.scss';
import Heading from '@/components/Login/Heading';
import LoginSignupAreaContent from './LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <Heading />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
