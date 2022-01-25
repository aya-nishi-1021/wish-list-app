import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  // ログイン済みかどうかのフラグ
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
