import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { FirebaseContext } from '@/contexts';

const PrivateRoute: React.FC = () => {
  // ログイン済みかどうかのフラグ
  const isAuthenticated = useContext(FirebaseContext).user;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
