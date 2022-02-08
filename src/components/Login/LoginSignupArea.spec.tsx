import { shallow } from 'enzyme';
import LoginSignupArea from './LoginSignupArea';
import LoginSignupAreaHeading from './LoginSignupAreaHeading';
import LoginSignupAreaContent from './LoginSignupAreaContent';

describe('LoginSignupArea', () => {
  it('LoginSignupAreaHeading コンポーネントと LoginSignupAreaContent コンポーネントが表示される', () => {
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaHeading />)).toBeTruthy();
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaContent />)).toBeTruthy();
  });
});
