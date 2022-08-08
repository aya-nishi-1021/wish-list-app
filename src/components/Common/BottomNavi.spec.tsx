import { shallow } from 'enzyme';
import BottomNavi from './BottomNavi';

describe('BottomNavi', () => {
  const handleAddShopMock = jest.fn();

  beforeEach(() => {
    handleAddShopMock.mockClear();
  });

  const location = new URL('https://www.example.com');

  const setLocation = (pathname: string) => {
    location.pathname = `/${pathname}`;
    Reflect.deleteProperty(global.window, 'location');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (window as any).location = location;
  };

  type Props = {
    src: string;
    alt: string;
    className: string;
  };

  describe('ホームアイコン, マイページアイコンの出し分け', () => {
    it('パスが / の場合、ホームアイコンがフォーカスされている', () => {
      setLocation('');
      const wrapper = shallow(<BottomNavi isAddShopButtonShow handleAddShop={handleAddShopMock} />);
      expect((wrapper.find('.bottom-navi__link__home-icon').getElement().props as Props).src).toEqual(
        'icon_home_pink.svg'
      );
      expect((wrapper.find('.bottom-navi__link__mypage-icon').getElement().props as Props).src).toEqual(
        'icon_person.svg'
      );
    });

    it('パスが /mypage の場合、マイページアイコンがフォーカスされている', () => {
      setLocation('mypage');
      const wrapper = shallow(<BottomNavi isAddShopButtonShow handleAddShop={handleAddShopMock} />);
      expect((wrapper.find('.bottom-navi__link__home-icon').getElement().props as Props).src).toEqual('icon_home.svg');
      expect((wrapper.find('.bottom-navi__link__mypage-icon').getElement().props as Props).src).toEqual(
        'icon_person_pink.svg'
      );
    });
  });

  describe('行きたいお店追加ボタン', () => {
    it('isAddShopButtonShow が true の場合、表示されている', () => {
      const wrapper = shallow(<BottomNavi isAddShopButtonShow handleAddShop={handleAddShopMock} />);
      expect(wrapper.find('.bottom-navi__add-shop-button').length).toEqual(1);
    });
    it('isAddShopButtonShow が false の場合、非表示になる', () => {
      const wrapper = shallow(<BottomNavi isAddShopButtonShow={false} />);
      expect(wrapper.find('.bottom-navi__add-shop-button').length).toEqual(0);
    });
    it('ボタンをクリックすると、props の handleAddShop が実行される', () => {
      const wrapper = shallow(<BottomNavi isAddShopButtonShow handleAddShop={handleAddShopMock} />);
      wrapper.find('.bottom-navi__add-shop-button').simulate('click');
      expect(handleAddShopMock.mock.calls.length).toEqual(1);
    });
  });
});
