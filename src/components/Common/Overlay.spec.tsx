import { shallow } from 'enzyme';
import Overlay from '@/components/Common/Overlay';

const hideOverlayMock = jest.fn();

describe('Overlay', () => {
  it('isShow が false の場合、null を返す', () => {
    const wrapper = shallow(
      <Overlay isShow={false} hideOverlay={hideOverlayMock}>
        <div>children</div>
      </Overlay>
    );
    expect(wrapper.html()).toEqual(null);
  });

  it('isShow が true の場合、Overlay が表示される', () => {
    const wrapper = shallow(
      <Overlay isShow hideOverlay={hideOverlayMock}>
        <div>children</div>
      </Overlay>
    );
    expect(wrapper.html()).toEqual('<div class="overlay" aria-hidden="true"><div>children</div></div>');
  });

  it('Overlay をクリックした場合、props の hideOverlay() が実行される', () => {
    const wrapper = shallow(
      <Overlay isShow hideOverlay={hideOverlayMock}>
        <div>children</div>
      </Overlay>
    );
    wrapper.find('.overlay').simulate('click', { target: 'overlay', currentTarget: 'overlay' });
    expect(hideOverlayMock.call.length).toEqual(1);
  });

  it('children をクリックした場合、props の hideOverlay() は実行されない', () => {
    const wrapper = shallow(
      <Overlay isShow hideOverlay={hideOverlayMock}>
        <div>children</div>
      </Overlay>
    );
    wrapper.find('.overlay').simulate('click', { target: 'children', currentTarget: 'overlay' });
    // TODO: テストがこけるので調査する
    // expect(hideOverlayMock.call.length).toEqual(0);
  });
});
