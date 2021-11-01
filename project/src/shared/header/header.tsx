import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute, AuthStatus } from 'const';
import { logOutAction } from 'store/api-action';
import { getAuthStatus, getUser } from 'store/auth-store/selectors';
import Logo from 'shared/logo/logo';

type HeaderProps = {
  isMainPage?: boolean,
  showUserBlock?: boolean,
}

function Header(props: HeaderProps): JSX.Element {
  const { isMainPage = false, showUserBlock = true } = props;

  const authStatus = useSelector(getAuthStatus);

  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const isAuthorized = authStatus === AuthStatus.Auth;

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logOutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              width="81"
              height="41"
              className={'header__logo'}
              isActive={isMainPage}
            />
          </div>
          {showUserBlock &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {!isAuthorized ? (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.SignIn}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoute.Favorites}
                      >
                        <div
                          className="header__avatar-wrapper user__avatar-wrapper"
                          style={{
                            backgroundImage: `url(${user?.avatarUrl})`,
                          }}
                        />
                        <span className="header__user-name user__name">
                          {user?.name}
                        </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        onClick={handleLogOutClick}
                        className="header__nav-link"
                        to="/"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
