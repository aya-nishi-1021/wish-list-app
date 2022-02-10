import { shallow } from 'enzyme';
import LoginSignupArea from './LoginSignupArea';
import LoginSignupAreaTabs from './LoginSignupAreaTabs';
import LoginSignupAreaContent from './LoginSignupAreaContent';

describe('LoginSignupArea', () => {
  it('LoginSignupAreaHeading コンポーネントと LoginSignupAreaContent コンポーネントが表示される', () => {
    const wrapper = shallow(<LoginSignupArea />);
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaTabs />)).toBeTruthy();
    expect(wrapper.find('.login-signup-area').contains(<LoginSignupAreaContent />)).toBeTruthy();
  });
});
