import { Link } from 'react-router-dom';
import Logo from 'shared/logo/logo';
import { AppRoute } from 'const';

type HeaderProps = {
  isMainPage?: boolean,
  showUserBlock?: boolean,
}

export default function Header(props: HeaderProps): JSX.Element {
  const { isMainPage = false, showUserBlock = true } = props;

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
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}