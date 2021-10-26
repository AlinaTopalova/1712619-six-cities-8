import { Link } from 'react-router-dom';
import { AppRoute } from 'const';

export default function NotFoundPage(): JSX.Element {

  return (
    <div className='not-found-page property__name'>
      <div className='not-found-page__title-wrap'>
        <h2 className='not-found-page__title'>404</h2>
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
