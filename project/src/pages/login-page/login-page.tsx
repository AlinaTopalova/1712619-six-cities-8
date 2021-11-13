import { FormEvent, useMemo, useRef } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute, AuthStatus, Cities } from 'const';
import { getRandomCity } from 'utils';
import { getAuthStatus } from 'store/auth-store/selectors';
import { changeCurrentCity } from 'store/app-store/actions';
import { logInAction } from 'store/api-action';
import Header from 'shared/header/header';

const citiesList = Object.values(Cities);

const validateEmail = (email: string) => {
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailReg.test(email)) {
    return 'Enter a valid email';
  }
  return '';
};

const validatePassword = (password: string) => {
  const passwordReg = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;

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
    if (evt.target === loginRef.current) {
      loginRef.current.setCustomValidity(validateEmail(loginRef.current.value));
      loginRef.current.reportValidity();
    }
    if (evt.target === passwordRef.current) {
      passwordRef.current.setCustomValidity(validatePassword(passwordRef.current.value));
      passwordRef.current.reportValidity();
    }
  };

  const randomCity = useMemo(() =>
    getRandomCity(citiesList), []);

  const handleCityLinkClick = (city: Cities) => {
    dispatch(changeCurrentCity(city));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch(logInAction({
        email: loginRef.current.value,
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
      <main className="page__main page__main--login" data-testid="login-main">
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
              <Link
                onClick={() => {
                  handleCityLinkClick(randomCity as Cities);
                }}
                className="locations__item-link"
                to={AppRoute.Main}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

