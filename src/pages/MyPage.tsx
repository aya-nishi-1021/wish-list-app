import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/styles/pages/MyPage.scss';
import { FirebaseContext } from '@/contexts';
import { resetPassword, logout } from '@/firebase';
import Header from '@/components/Common/Header';
import ToHomeLink from '@/components/MyPage/ToHomeLink';

const MyPage: React.FC = () => {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  if (!user) navigate('/login');

  const handleResetPassword = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await resetPassword(user!.email!);
      alert('パスワード再設定ページへのリンクを送信しました。メールをご確認ください。');
      await logout();
      navigate('/login');
    },
    [user, navigate]
  );

  return (
    <div className="mypage">
      <Header isSearchBoxShow={false} />
      <div className="mypage__to-home-link">
        <ToHomeLink />
      </div>
      <div className="mypage__content-wrapper">
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        <div className="mypage__email">メールアドレス: {user!.email}</div>
        <button className="mypage__password-reset-button" type="button" onClick={handleResetPassword}>
          パスワードを再設定する
        </button>
        <button className="mypage__logout-button" type="button" onClick={logout}>
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default MyPage;
