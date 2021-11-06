import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Offer } from 'types/offers';
import { updateFavoriteOffers } from 'store/favorites-store/actions';
import { getFavoritesOffers, getIsFavoritesOffersLoading } from 'store/favorites-store/selectors';
import {
  fetchFavoritesOffersAction,
  changeFavoriteStatusAction
} from 'store/api-action';
import Header from 'shared/header/header';
import OfferCard from 'shared/offer-card/offer-card';
import Footer from 'shared/footer/footer';
import { AppRoute } from 'const';
import { changeCurrentCity } from 'store/app-store/actions';
import { Cities } from 'const';
import Loader from 'shared/loader/loader';

type GrouppedOffers = Record<string, Offer[]>

function FavoritesPage(): JSX.Element {
  const dispatch = useDispatch();

  const favoritesOffers = useSelector(getFavoritesOffers);
  const isFavoritesOffersLoading = useSelector(getIsFavoritesOffersLoading);

  const groupedFavoriteOffers = useMemo(() => (
    favoritesOffers.reduce<GrouppedOffers>(
      (res, offer) => {
        if (!offer.isFavorite) {
          return res;
        }
        const { name } = offer.city;

        if (!Object.keys(res).includes(name)) {
          res[name] = [];
        }
        res[name].push(offer);

        return res;
      }, {},
    )
  ), [favoritesOffers]);

  const handleFavoriteClick = (
    currentOfferId: number,
    isFavorite: boolean,
  ) => {
    dispatch(changeFavoriteStatusAction(
      currentOfferId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateFavoriteOffers(updatedOffer));
      },
    ));
  };

  const handleCityLinkClick = (city: Cities) => {
    dispatch(changeCurrentCity(city));
  };

  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  },[dispatch]);

  return (
    <div className="page">
      <Header />
      {(Object.keys(groupedFavoriteOffers).length === 0) ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {isFavoritesOffersLoading ? (
                <Loader />
              ) : (
                <ul className="favorites__list">
                  {Object.entries(groupedFavoriteOffers).map(([cityName, cityOffers]) => (
                    <li className="favorites__locations-items" key={cityName}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link
                            onClick={() => {
                              handleCityLinkClick(cityName as Cities);
                            }}
                            className="locations__item-link"
                            to={AppRoute.Main}
                          >
                            <span>{cityName}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {cityOffers.map((offer) => (
                          <OfferCard.Favorite
                            key={offer.id}
                            offerData={offer}
                            onFavoriteClick={handleFavoriteClick}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default FavoritesPage;
