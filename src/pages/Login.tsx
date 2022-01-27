import 'assets/styles/pages/Login.scss';
import LoginSignupArea from 'components/Login/LoginSignupArea';

const Login: React.FC = () => (
  <div className="login-signup">
    <h2 className="login-signup__title">Food Wish List</h2>
    <LoginSignupArea />
  </div>
);

export default Login;
