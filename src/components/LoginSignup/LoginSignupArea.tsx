import '@/assets/styles/components/LoginSignup/LoginSignupArea.scss';
import LoginSignupAreaTabs from '@/components/LoginSignup/LoginSignupAreaTabs';
import LoginSignupAreaPasswordResetHeading from './LoginSignupAreaPasswordResetHeading';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <LoginSignupAreaTabs />
    <LoginSignupAreaPasswordResetHeading />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
