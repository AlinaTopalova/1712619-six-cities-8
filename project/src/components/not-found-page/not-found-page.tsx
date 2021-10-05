import { Link } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className='notfound'>
      <div className='notfound__title-wrap'>
        <h1 className='notfound__title'>404</h1>
      </div>
      <h2 className='notfound__descr'>We are sorry, Page not found!</h2>
      <Link className='notfound__homepage-link' to="/">Back To Homepage</Link>
    </div>
  );
}
