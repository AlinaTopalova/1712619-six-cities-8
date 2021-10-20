import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Store } from 'types/store';
import { Actions } from 'types/action';
import { changeCurrentCity } from 'store/action';
import Header from 'shared/header/header';
import OffersList from './offers-list/offers-list';
import CitiesList from './cities-list/cities-list';

const mapStateToProps = ({ currentCity, offers }: Store) => (
  { currentCity, offers }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange: (city: string) => {
    dispatch(changeCurrentCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {
  const { currentCity, offers, onCityChange } = props;

  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
  const hasNoOffers = cityOffers.length === 0;

  return(
    <div className="page page--gray page--main">
      <Header isMainPage />
      <main
        className={`page__main page__main--index ${hasNoOffers ? 'page__main--index-empty' : ''}`}
      >
        <CitiesList
          currentCity={currentCity}
          onCityChange={onCityChange}
        />
        <OffersList
          currentCity={currentCity}
          offers={cityOffers}
          hasNoOffers={hasNoOffers}
        />
      </main>
    </div>
  );
}

export { MainPage };

export default connector(MainPage);
