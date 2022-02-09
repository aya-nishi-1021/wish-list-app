import { shallow } from 'enzyme';
import LoginSignupAreaContent from './LoginSignupAreaContent';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('LoginSignupAreaContent', () => {
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、PasswordResetContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<PasswordResetContent />');
  });

  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM の場合、空の文字列を返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<SignupConfirmContent />');
  });

  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP の場合、LoginSignupContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginSignupContent />');
  });
});
