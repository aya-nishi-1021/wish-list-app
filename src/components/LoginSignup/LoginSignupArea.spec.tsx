import { shallow } from 'enzyme';
import LoginSignupArea from './LoginSignupArea';
import LoginSignupAreaNavi from '@/components/LoginSignup/LoginSignupAreaNavi';
import LoginSignupAreaContent from '@/components/LoginSignup/LoginSignupAreaContent';

describe('LoginSignupArea', () => {
  it('LoginSignupAreaNavi コンポーネントと LoginSignupAreaContent コンポーネントが表示される', () => {
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaNavi />)).toBeTruthy();
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaContent />)).toBeTruthy();
  });
});
