import '@/assets/styles/components/LoginSignup/LoginSignupArea.scss';
import LoginSignupAreaNavi from '@/components/LoginSignup/LoginSignupAreaNavi';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

const LoginSignupArea: React.FC = () => (
  <div className="login-signup-area">
    <LoginSignupAreaNavi />
    <LoginSignupAreaContent />
  </div>
);

export default LoginSignupArea;
