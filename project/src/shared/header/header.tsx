import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from 'types/action';
import { Store } from 'types/store';
import { AppRoute, AuthorizationStatus } from 'const';
import { logOutAction } from 'store/api-action';
import Logo from 'shared/logo/logo';

type HeaderProps = {
  isMainPage?: boolean,
  showUserBlock?: boolean,
}

const mapStateToProps = ({ authorizationStatus, user }: Store) => ({
  authorizationStatus,
  user,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogOutClick() {
    dispatch(logOutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HeaderProps;

function Header(props: ConnectedComponentProps): JSX.Element {
  const { authorizationStatus, user, onLogOutClick, isMainPage = false, showUserBlock = true } = props;

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    onLogOutClick();
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

export { Header };

export default connector(Header);
