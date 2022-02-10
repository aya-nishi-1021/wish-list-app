import '@/assets/styles/components/Login/LoginSignupAreaTabs.scss';

const LoginSignupAreaTabs: React.FC = () => {
  const { pathname } = window.location;

  return (
    <ul className="login-signup-area-tabs">
      <li className={`login-signup-area-tab ${pathname === '/login' ? 'login-signup-area-tab--focused' : ''}`}>
        <a href="/login">ログイン</a>
      </li>
      <li className={`login-signup-area-tab ${pathname === '/signup' ? 'login-signup-area-tab--focused' : ''}`}>
        <a href="/signup">新規登録</a>
      </li>
    </ul>
  );
};

export default LoginSignupAreaTabs;
