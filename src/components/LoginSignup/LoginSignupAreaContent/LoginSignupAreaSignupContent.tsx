import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signupWithEmail } from '@/firebase';

const LoginSignupAreaSignupContent: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  type FormValues = {
    email: string;
    password: string;
  };
  const handleSignupWithEmail = async (data: FormValues) => {
    await signupWithEmail(data.email, data.password)
      .then(() => navigate('/'))
      .catch((error: Error) => setErrorMessage(error.message));
  };

  return (
    <form className="login-signup-area-content" onSubmit={handleSubmit(handleSignupWithEmail)}>
      {errorMessage && (
        <div className="login-signup-area-content__error-message login-signup-area-content__error-message--firebase">
          {errorMessage}
        </div>
      )}
      <div className="login-signup-area-content__input-wrapper">
        {errors.email?.message && (
          <div className="login-signup-area-content__error-message">{errors.email?.message}</div>
        )}
        <input
          className="login-signup-area-content__input"
          type="text"
          placeholder="email"
          {...register('email', { required: { value: true, message: '入力が必須の項目です。' } })}
        />
        {errors.password?.message && (
          <div className="login-signup-area-content__error-message">{errors.password.message}</div>
        )}
        <input
          className="login-signup-area-content__input"
          type="password"
          placeholder="password"
          {...register('password', { required: { value: true, message: '入力が必須の項目です。' } })}
        />
      </div>
      <button className="login-signup-area-content__submit-button" type="submit">
        続行する
      </button>
    </form>
  );
};

export default LoginSignupAreaSignupContent;
