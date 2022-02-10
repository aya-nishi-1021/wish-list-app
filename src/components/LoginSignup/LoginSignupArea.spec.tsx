import { shallow } from 'enzyme';
import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';
import LoginSignupArea from './LoginSignupArea';
import LoginSignupAreaPasswordResetHeading from './LoginSignupAreaPasswordResetHeading';
import LoginSignupAreaTabs from './LoginSignupAreaTabs';
import LoginSignupAreaContent from './LoginSignupAreaContent';

jest.mock('./getLoginSignupAreaViewPattern');
const mockLoginSignupAreaViewPattern = getLoginSignupAreaViewPattern as jest.Mock;

describe('LoginSignupArea', () => {
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET の場合、LoginSignupAreaPasswordResetHeading コンポーネントが表示される', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaPasswordResetHeading />)).toBeTruthy();
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN の場合、LoginSignupAreaTabs コンポーネントが表示される', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN);
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaTabs />)).toBeTruthy();
  });
  it('getLoginSignupAreaViewPattern() の返り値が LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP の場合、LoginSignupAreaTabs コンポーネントが表示される', () => {
    mockLoginSignupAreaViewPattern.mockImplementationOnce(() => LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP);
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaTabs />)).toBeTruthy();
  });
  it('LoginSignupAreaContent コンポーネントが表示される', () => {
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaContent />)).toBeTruthy();
  });
});
