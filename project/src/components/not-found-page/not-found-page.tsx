export default function NotFoundPage(): JSX.Element {
  return (
    <div className='notfound'>
      <div className='notfound__404'>
        <h1>404</h1>
      </div>
      <h2>We are sorry, Page not found!</h2>
      <a href="/">Back To Homepage</a>
    </div>
  );
}
