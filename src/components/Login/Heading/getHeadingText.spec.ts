import getHeadingText from './getHeadingText';

describe('getHeadingText', () => {
  const location = new URL('https://www.example.com');

  const setLocationSearch = (query: string) => {
    location.search = query ? `?${query}` : '';
    Reflect.deleteProperty(global.window, 'location');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    (window as any).location = location;
  };

  it('クエリがない場合、「ログインまたは新規登録」を返す', () => {
    setLocationSearch('');
    expect(getHeadingText()).toEqual('ログインまたは新規登録');
  });

  it('クエリが reset_password の場合、「パスワードをお忘れですか？」を返す', () => {
    setLocationSearch('reset_password');
    expect(getHeadingText()).toEqual('パスワードをお忘れですか？');
  });
});
