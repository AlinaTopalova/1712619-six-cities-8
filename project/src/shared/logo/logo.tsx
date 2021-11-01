import { Link } from 'react-router-dom';
import { AppRoute } from 'const';

type LogoProps = {
  width: string,
  height: string,
  className: string,
  isActive?: boolean,
}

function Logo(props: LogoProps): JSX.Element {
  const { width, height, className, isActive = false } = props;

  return (
    <Link
      className={
        `${className}-link ${isActive ? `${className}-link--active` : ''}`
      }
      style={{ pointerEvents: isActive ? 'none' : 'auto' }}
      to={AppRoute.Main}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
