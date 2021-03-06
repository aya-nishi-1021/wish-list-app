import { shallow } from 'enzyme';
import LoginSignupAreaContent from '.';
import getLoginSignupAreaViewPattern, {
  LOGIN_SIGNUP_AREA_VIEN_PATTERN,
} from '@/components/LoginSignup/getLoginSignupAreaViewPattern';

jest.mock('@/components/LoginSignup/getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('LoginSignupAreaContent', () => {
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN の場合、LoginContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaLoginContent />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP の場合、LoginContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaSignupContent />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、PasswordResetContent コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupAreaContent />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaPasswordResetContent />');
  });
});
