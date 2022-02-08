import { shallow } from 'enzyme';
import LoginSignupAreaContent from './LoginSignupAreaContent';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP の場合、LoginSignupContent コンポーネントを返す', () => {
  it('getHeadingText() の返り値が表示される', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<PasswordResetContent />');
  });

  // TODO: 登録を完了する用のコンポーネントを作ったら修正する
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM の場合、空の文字列を返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('');
  });

  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP の場合、LoginSignupContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginSignupContent />');
  });
});
