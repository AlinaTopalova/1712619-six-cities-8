import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Store } from 'types/store';
import { Actions } from 'types/action';
import { Cities, SortOptions } from 'const';
import { changeCurrentCity } from 'store/action';
import Header from 'shared/header/header';
import Loader from 'shared/loader/loader';
import OffersList from './offers-list/offers-list';
import CitiesList from './cities-list/cities-list';

const mapStateToProps = ({
  currentCity,
  offers,
  sortOffersBy,
  isOffersLoading,
}: Store) => ({
  currentCity,
  offers,
  sortOffersBy,
  isOffersLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange: (city: Cities) => {
    dispatch(changeCurrentCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {
  const {
    currentCity,
    offers,
    onCityChange,
    sortOffersBy,
    isOffersLoading,
  } = props;

  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);

  switch (sortOffersBy) {
    case SortOptions.PriceHighToLow:
      cityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortOptions.PriceLowToHigh:
      cityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortOptions.TopRated:
      cityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const hasNoOffers = cityOffers.length === 0;

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
            offers={cityOffers}
            hasNoOffers={hasNoOffers}
          />
        )}
      </main>
    </div>
  );
}

export { MainPage };

export default connector(MainPage);
