import getLoginSignupAreaViewPattern, { LOGIN_SIGNUP_AREA_VIEN_PATTERN } from './getLoginSignupAreaViewPattern';

describe('getLoginSignupAreaViewPattern', () => {
  const location = new URL('https://www.example.com');

  const setLocationSearch = (query: string) => {
    location.search = query ? `?${query}` : '';
    Reflect.deleteProperty(global.window, 'location');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (window as any).location = location;
  };

  it('クエリが reset_password の場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET を返す', () => {
    setLocationSearch('reset_password');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET);
  });

  it('クエリが signup_confirm の場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM を返す', () => {
    setLocationSearch('signup_confirm');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP_CONFIRM);
  });

  it('クエリがない場合、LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP を返す', () => {
    setLocationSearch('');
    expect(getLoginSignupAreaViewPattern()).toEqual(LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP);
  });
});
