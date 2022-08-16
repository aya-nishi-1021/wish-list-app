import { shallow } from 'enzyme';
import Header from '@/components/Common/Header';

const dummyHeadingText = 'dummyHeadingText';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
  it('props の HeaderText が表示される', () => {
    const wrapper = shallow(<Header headingText={dummyHeadingText} />);
    expect(wrapper.find('.header__heading__text').text()).toEqual(dummyHeadingText);
  });

  it('戻るボタンをクリックすると、前の画面に戻る', () => {
    const wrapper = shallow(<Header headingText={dummyHeadingText} />);
    wrapper.find('.header__heading__back-page-button').simulate('click');
    expect(mockedUsedNavigate.call.length).toEqual(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });
});
