import '@/assets/styles/components/Login/LoginSignupArea.scss';
import LoginSignupAreaTabs from '@/components/LoginSignup/LoginSignupAreaTabs';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <LoginSignupAreaTabs />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
