import MainPage from '../main-page/main-page';

type AppProps = {
  offersAmount: number,
}

export default function App({ offersAmount } : AppProps): JSX.Element {
  return (
    <MainPage offersAmount = {offersAmount}/>
  );
}


