const getHeadingText = (): string => {
  const query = window.location.search.slice(1);

  let text = 'ログインまたは新規登録';

  if (query === 'reset_password') text = 'パスワードをお忘れですか？';

  return text;
};

export default getHeadingText;
