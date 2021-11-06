import { useSelector, useDispatch } from 'react-redux';
import { Cities } from 'const';
import { changeCurrentCity } from 'store/app-store/actions';
import { getCurrentCity } from 'store/app-store/selectors';
import {
  getIsOffersLoading,
  getSortedOffers
} from 'store/offers-store/selectors';
import Header from 'shared/header/header';
import Loader from 'shared/loader/loader';
import OffersList from './offers-list/offers-list';
import CitiesList from './cities-list/cities-list';

function MainPage(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const offers = useSelector(getSortedOffers);

  const isOffersLoading = useSelector(getIsOffersLoading);

  const dispatch = useDispatch();

  const hasNoOffers = offers.length === 0;

  const onCityChange = (city: Cities) => {
    dispatch(changeCurrentCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <Header isMainPage />
      <main
        className={`page__main page__main--index ${hasNoOffers ? 'page__main--index-empty' : ''}`}
      >
        <CitiesList
          currentCity={currentCity}
          onCityChange={onCityChange}
        />
        {isOffersLoading ? (
          <Loader />
        ) : (
          <OffersList
            currentCity={currentCity}
            offers={offers}
            hasNoOffers={hasNoOffers}
          />
        )}
      </main>
    </div>
  );
}

export default MainPage;
