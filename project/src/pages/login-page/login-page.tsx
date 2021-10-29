import { FormEvent, useRef } from 'react';
import { Redirect } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from 'types/action';
import { AuthData } from 'types/auth-data';
import { Store } from 'types/store';
import { AppRoute, AuthorizationStatus } from 'const';
import { logInAction } from 'store/api-action';
import Header from 'shared/header/header';

const validatePassword = (inputValue: string) => {
  const passwordReg = /[a-z][0-9]/;

  if (inputValue.includes(' ')) {
    return 'Пароль не должен содержать пробел';
  }
  if (!passwordReg.test(inputValue)) {
    return 'Пароль должен содержать минимум одну букву и цифру';
  }
  return '';
};

const mapStateToProps = ({ user, authorizationStatus }: Store) => ({
  user,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(logInAction(authData));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginPage(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus, onSubmit } = props;

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
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
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

export { LoginPage };

export default connector(LoginPage);


