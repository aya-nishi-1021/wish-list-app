import '../assets/styles/pages/login.scss';
import IconGoogle from '../assets/images/icon_google.svg';

const Login: React.FC = () => (
  <div className="login-signup">
    <h2 className="login-signup__title">Food Wish List</h2>
    <div className="login-signup__wrapper">
      <h3 className="login-signup__sub-title">ログインまたは新規登録</h3>
      <div className="login-signup__input-wrapper">
        <input className="login-signup__input" type="text" name="email" placeholder="email" />
        <input className="login-signup__input" type="password" name="password" placeholder="password" />
        <div className="login-signup__reset-password-link-wrapper">
          <a className="login-signup__reset-password-link" href="/#">
            パスワードをお忘れですか？
          </a>
        </div>
      </div>
      <button className="login-signup__submit-button" type="submit">
        続行する
      </button>
      <div className="login-signup__border">または</div>
      <button className="login-signup__sns" type="button">
        <img className="login-signup__sns-icon" src={IconGoogle} alt="google" />
        <span className="login-signup__sns-text">Google で続行</span>
      </button>
    </div>
  </div>
);

export default Login;
