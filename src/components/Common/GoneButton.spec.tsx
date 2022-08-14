import { shallow } from 'enzyme';
import GoneButton from '@/components/Common/GoneButton';
import { updateIsGone } from '@/firebase';

const dummyPlaceId = 'dummyPlaceId';
const updateShopInfoMock = jest.fn();
jest.mock('@/firebase');
const mockUpdateIsGone = updateIsGone as jest.Mock<Promise<void>>;

describe('GoneButton', () => {
  it('props の isGone が true の場合、gone-button--gone クラスが付与されている', () => {
    const wrapper = shallow(<GoneButton isGone placeId={dummyPlaceId} updateShopInfo={updateShopInfoMock} />);
    expect(wrapper.find('.gone-button').hasClass('gone-button--gone')).toBeTruthy();
  });

  it('props の isGone が false の場合、gone-button--gone クラスは付与されていない', () => {
    const wrapper = shallow(<GoneButton isGone={false} placeId={dummyPlaceId} updateShopInfo={updateShopInfoMock} />);
    expect(wrapper.find('.gone-button').hasClass('gone-button--gone')).toBeFalsy();
  });

  it('ボタンをクリックすると updateIsGone と props の updateShopInfo が実行される', async () => {
    mockUpdateIsGone.mockImplementation(() => Promise.resolve());
    const wrapper = shallow(<GoneButton isGone={false} placeId={dummyPlaceId} updateShopInfo={updateShopInfoMock} />);
    wrapper.find('.gone-button').simulate('click', { stopPropagation: () => undefined });
    expect(mockUpdateIsGone.call.length).toEqual(1);
    await mockUpdateIsGone().then(() => expect(updateShopInfoMock.mock.calls.length).toEqual(1));
  });
});
