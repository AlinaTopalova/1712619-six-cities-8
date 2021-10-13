import Logo from 'components/logo/logo';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo
        width='64'
        height='33'
        className='footer__logo'
      />
    </footer>
  );
}
