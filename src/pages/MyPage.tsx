import { useContext, useCallback } from 'react';
import '@/assets/styles/pages/MyPage.scss';
import { FirebaseContext } from '@/contexts';
import { resetPassword, logout } from '@/firebase';
import Header from '@/components/Common/Header';
import BottomNavi from '@/components/Common/BottomNavi';
import ToHomeLink from '@/components/Common/ToHomeLink';

const MyPage: React.FC = () => {
  const { user } = useContext(FirebaseContext);

  const handleResetPassword = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      if (!user || !user.email) return;
      await resetPassword(user.email);
      alert('パスワード再設定ページへのリンクを送信しました。メールをご確認ください。');
      await logout();
    },
    [user]
  );

  if (!user) return null;

  return (
    <div className="mypage">
      <Header headingText="マイページ" />
      <div className="mypage__to-home-link">
        <ToHomeLink />
      </div>
      <div className="mypage__content-wrapper">
        <div className="mypage__email">メールアドレス: {user.email}</div>
        <button className="mypage__password-reset-button" type="button" onClick={handleResetPassword}>
          パスワードを再設定する
        </button>
        <button className="mypage__logout-button" type="button" onClick={logout}>
          ログアウト
        </button>
      </div>
      <BottomNavi isAddShopButtonShow={false} />
    </div>
  );
};

export default MyPage;
