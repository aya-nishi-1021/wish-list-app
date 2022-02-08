import { shallow } from 'enzyme';
import Heading from './LoginSignupAreaHeading';
import getHeadingText from './Heading/getHeadingText';

jest.mock('./getHeadingText');
const mockHeadingText = getHeadingText as jest.Mock;

const location = new URL('https://www.example.com');

const setLocationSearch = (query: string) => {
  location.search = query ? `?${query}` : '';
  Reflect.deleteProperty(global.window, 'location');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  (window as any).location = location;
};

describe('Heading', () => {
  describe('BackButton の出し分け', () => {
    it('クエリがない場合、非表示になる', () => {
      setLocationSearch('');
      const wrapper = shallow(<Heading />);
      expect(wrapper.find('.login-signup-area-heading__back-button').length).toEqual(0);
    });
    it('クエリがある場合、表示される', () => {
      setLocationSearch('dummyLocationSearch');
      const wrapper = shallow(<Heading />);
      expect(wrapper.find('.login-signup-area-heading__back-button').length).toEqual(1);
    });
  });

  describe('BackButton のクリックイベント', () => {
    it('クリックすると、window.history.back() が実行される', () => {
      // クエリをセットして BackButton を表示させておく
      setLocationSearch('dummyLocationSearch');
      window.history.back = jest.fn();
      const wrapper = shallow(<Heading />);
      wrapper.find('.login-signup-area-heading__back-button').simulate('click');
      expect(window.history.back.call.length).toBe(1);
    });
  });

  describe('h3 タグのクラス', () => {
    it('クエリがない場合、login-signup-area-heading__text--back-button-show クラスが付与されない', () => {
      setLocationSearch('');
      const wrapper = shallow(<Heading />);
      expect(
        wrapper.find('.login-signup-area-heading__text').hasClass('login-signup-area-heading__text--back-button-show')
      ).toBeFalsy();
    });

    it('クエリがある場合、login-signup-area-heading__text--back-button-show クラスが付与される', () => {
      setLocationSearch('dummyLocationSearch');
      const wrapper = shallow(<Heading />);
      expect(
        wrapper.find('.login-signup-area-heading__text').hasClass('login-signup-area-heading__text--back-button-show')
      ).toBeTruthy();
    });
  });

  describe('h3 タグのテキスト', () => {
    it('getHeadingText() の返り値が表示される', () => {
      mockHeadingText.mockImplementationOnce(() => 'dummyHeadingText');
      const wrapper = shallow(<Heading />);
      expect(wrapper.find('.login-signup-area-heading__text').text()).toEqual('dummyHeadingText');
    });
  });
});
