import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/pages/Login.scss';
import { FirebaseContext } from '@/contexts';
import LoginSignupArea from '@/components/LoginSignup/LoginSignupArea';

const Login: React.FC = () => {
  // ログイン済みかどうかのフラグ
  const isAuthenticated = useContext(FirebaseContext).user;
  const navigate = useNavigate();

  useEffect(() => {
    // ログイン済の場合はホーム画面に遷移させる
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-signup">
      <h2 className="login-signup__title">Food Wish List</h2>
      <LoginSignupArea />
    </div>
  );
};

export default Login;
