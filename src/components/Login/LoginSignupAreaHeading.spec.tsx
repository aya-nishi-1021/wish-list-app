import { shallow } from 'enzyme';
import LoginSignupAreaHeading from './LoginSignupAreaHeading';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

const location = new URL('https://www.example.com');

const setLocationSearch = (query: string) => {
  location.search = query ? `?${query}` : '';
  Reflect.deleteProperty(global.window, 'location');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  (window as any).location = location;
};

describe('LoginSignupAreaHeading', () => {
  describe('BackButton の出し分け', () => {
    it('クエリがない場合、非表示になる', () => {
      setLocationSearch('');
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(wrapper.find('.login-signup-area-heading__back-button').length).toEqual(0);
    });
    it('クエリがある場合、表示される', () => {
      setLocationSearch('dummyLocationSearch');
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(wrapper.find('.login-signup-area-heading__back-button').length).toEqual(1);
    });
  });

  describe('BackButton のクリックイベント', () => {
    it('クリックすると、window.history.back() が実行される', () => {
      // クエリをセットして BackButton を表示させておく
      setLocationSearch('dummyLocationSearch');
      window.history.back = jest.fn();
      const wrapper = shallow(<LoginSignupAreaHeading />);
      wrapper.find('.login-signup-area-heading__back-button').simulate('click');
      expect(window.history.back.call.length).toBe(1);
    });
  });

  describe('h3 タグのクラス', () => {
    it('クエリがない場合、login-signup-area-heading__text--back-button-show クラスが付与されない', () => {
      setLocationSearch('');
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(
        wrapper.find('.login-signup-area-heading__text').hasClass('login-signup-area-heading__text--back-button-show')
      ).toBeFalsy();
    });

    it('クエリがある場合、login-signup-area-heading__text--back-button-show クラスが付与される', () => {
      setLocationSearch('dummyLocationSearch');
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(
        wrapper.find('.login-signup-area-heading__text').hasClass('login-signup-area-heading__text--back-button-show')
      ).toBeTruthy();
    });
  });

  describe('h3 タグのテキスト', () => {
    it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、「パスワードをお忘れですか？」が表示される', () => {
      mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(wrapper.find('.login-signup-area-heading__text').text()).toEqual('パスワードをお忘れですか？');
    });
    it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM の場合、「登録を完了する」が表示される', () => {
      mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM);
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(wrapper.find('.login-signup-area-heading__text').text()).toEqual('登録を完了する');
    });
    it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP の場合、「ログインまたは新規登録」が表示される', () => {
      mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP);
      const wrapper = shallow(<LoginSignupAreaHeading />);
      expect(wrapper.find('.login-signup-area-heading__text').text()).toEqual('ログインまたは新規登録');
    });
  });
});
