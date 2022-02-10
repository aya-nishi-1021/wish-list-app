import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

describe('getLoginSignupAreaViewPattern', () => {
  const location = new URL('https://www.example.com');

  const setLocation = (pathname: string, query: string) => {
    location.pathname = `/${pathname}`;
    location.search = query ? `?${query}` : '';
    Reflect.deleteProperty(global.window, 'location');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (window as any).location = location;
  };

  it('パスが login の場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN を返す', () => {
    setLocation('login', '');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN);
  });

  it('パスが signup の場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP を返す', () => {
    setLocation('signup', '');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP);
  });

  it('クエリが reset_password の場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET を返す', () => {
    setLocation('login', 'reset_password');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
  });
});
