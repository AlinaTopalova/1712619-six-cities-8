import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from 'const';
import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';
import MainPage from 'pages/main-page/main-page';
import LoginPage from 'pages/login-page/login-page';
import FavoritesPage from 'pages/favorites-page/favorites-page';
import OfferPage from 'pages/offer-page/offer-page';
import NotFoundPage from 'pages/not-found-page/not-found-page';
import PrivateRoute from 'shared/private-route/private-route';

type AppProps = {
  offersData: Offer[],
  reviewsData: OfferReview[],
}

export default function App(props: AppProps): JSX.Element {
  const { offersData, reviewsData } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage offersData={offersData} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LoginPage />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}>
          <FavoritesPage offersData={offersData} />
        </PrivateRoute>
        <Route exact path={`${AppRoute.Offer}/:offerId`}>
          <OfferPage offersData={offersData} reviewsData={reviewsData}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


