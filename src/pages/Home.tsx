import { logout } from '@/firebase';

const Home: React.FC = () => (
  <div>
    <div>Home</div>
    <button type="button" onClick={logout}>
      ログアウト
    </button>
  </div>
);

export default Home;
