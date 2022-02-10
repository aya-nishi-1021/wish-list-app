import { shallow } from 'enzyme';
import LoginSignupAreaTabs from './LoginSignupAreaTabs';

const location = new URL('https://www.example.com');

const setLocation = (pathname: string) => {
  location.pathname = `/${pathname}`;
  Reflect.deleteProperty(global.window, 'location');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  (window as any).location = location;
};

describe('LoginSignupAreaTabs', () => {
  describe('li タグのクラス', () => {
    it('パスが login の場合、ログインのタブに login-signup-area-tab--focused クラスが付与される', () => {
      setLocation('login');
      const wrapper = shallow(<LoginSignupAreaTabs />);
      expect(wrapper.find('.login-signup-area-tab').at(0).hasClass('login-signup-area-tab--focused')).toBeTruthy();
    });

    it('パスが signup の場合、新規登録のタブに login-signup-area-tab--focused クラスが付与される', () => {
      setLocation('signup');
      const wrapper = shallow(<LoginSignupAreaTabs />);
      expect(wrapper.find('.login-signup-area-tab').at(1).hasClass('login-signup-area-tab--focused')).toBeTruthy();
    });
  });
});
