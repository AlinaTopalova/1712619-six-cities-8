import { Link } from 'react-router-dom';
import { AppRoute } from 'const';

export default function NotFoundPage(): JSX.Element {

  return (
    <div className='not-found-page'>
      <div className='not-found-page__title-wrap'>
        <h1 className='not-found-page__title'>404</h1>
      </div>
      <h2 className='not-found-page__descr'>
        We are sorry, Page not found!
      </h2>
      <Link
        className='not-found-page__homepage-link'
        to={AppRoute.Main}
      >
        Back To Homepage
      </Link>
    </div>
  );
}
