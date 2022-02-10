import { shallow } from 'enzyme';
import LoginSignupAreaContent from './LoginSignupAreaContent';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('LoginSignupAreaContent', () => {
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN の場合、LoginContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginContent />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP の場合、LoginContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<SignupContent />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、PasswordResetContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<PasswordResetContent />');
  });
});
