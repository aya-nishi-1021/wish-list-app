export const LOGIN_SIGNUP_AREA_VIEN_PATTERN = {
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  PASSWORD_RESET: 'PasswordReset',
} as const;
type LOGIN_SIGNUP_AREA_VIEN_PATTERN =
  typeof LOGIN_SIGNUP_AREA_VIEN_PATTERN[keyof typeof LOGIN_SIGNUP_AREA_VIEN_PATTERN];

const getLoginSignupAreaViewPattern = (): LOGIN_SIGNUP_AREA_VIEN_PATTERN => {
  const pathname = window.location.pathname.slice(1);
  const query = window.location.search.slice(1);

  if (pathname === 'signup') return LOGIN_SIGNUP_AREA_VIEN_PATTERN.SIGNUP;

  if (query === 'reset_password') return LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET;

  return LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN;
};

export default getLoginSignupAreaViewPattern;
