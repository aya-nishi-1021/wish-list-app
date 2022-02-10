import { shallow } from 'enzyme';
import LoginSignupAreaNavi from '.';
import getLoginSignupAreaViewPattern, {
  LOGIN_SIGNUP_AREA_VIEN_PATTERN,
} from '@/components/LoginSignup/getLoginSignupAreaViewPattern';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('LoginSignupAreaNavi', () => {
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN の場合、LoginSignupAreaTabs コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN);
    const wrapper = shallow(<LoginSignupAreaNavi />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaTabs />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP の場合、LoginSignupAreaTabs コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP);
    const wrapper = shallow(<LoginSignupAreaNavi />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaTabs />');
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、LoginSignupAreaPasswordResetHeading コンポーネントを返す', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupAreaNavi />);
    expect(wrapper.debug()).toEqual('<LoginSignupAreaPasswordResetHeading />');
  });
});
