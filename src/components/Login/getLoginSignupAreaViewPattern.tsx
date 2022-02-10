export const LOGIN_SIGNUP_AREA_VIEN_PATTERN = {
  LOGIN_SIGNUP: 'LoginSignup',
  PASSWORD_RESET: 'PasswordReset',
} as const;
type LOGIN_SIGNUP_AREA_VIEN_PATTERN =
  typeof LOGIN_SIGNUP_AREA_VIEN_PATTERN[keyof typeof LOGIN_SIGNUP_AREA_VIEN_PATTERN];

const getLoginSignupAreaViewPattern = (): LOGIN_SIGNUP_AREA_VIEN_PATTERN => {
  const query = window.location.search.slice(1);

  if (query === 'reset_password') return LOGIN_SIGNUP_AREA_VIEN_PATTERN.PASSWORD_RESET;

  return LOGIN_SIGNUP_AREA_VIEN_PATTERN.LOGIN_SIGNUP;
};

export default getLoginSignupAreaViewPattern;
