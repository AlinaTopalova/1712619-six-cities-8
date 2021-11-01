import { FormEvent, useRef } from 'react';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute, AuthStatus } from 'const';
import { getAuthStatus } from 'store/auth-store/selectors';
import { logInAction } from 'store/api-action';
import Header from 'shared/header/header';

const validatePassword = (password: string) => {
  const passwordReg = /[a-z][0-9]/;

  if (password.includes(' ')) {
    return 'Password must not contain a space';
  }
  if (!passwordReg.test(password)) {
    return 'Password must contain at least one letter and number';
  }
  return '';
};

function LoginPage(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  const dispatch = useDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFieldsChange = (evt: FormEvent<HTMLFormElement>) => {
    if (loginRef.current && passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch(logInAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Redirect to={AppRoute.Main}/>;
  }

  return (
    <div className="page page--gray page--login">
      <Header showUserBlock={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              onChange={handleFieldsChange}
              className="login__form form"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="user-name"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="login.html">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

