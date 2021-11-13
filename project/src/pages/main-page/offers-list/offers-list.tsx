import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Offer } from 'types/offers';
import { changeFavoriteStatusAction } from 'store/api-action';
import NoOffers from './no-offers/no-offers';
import OfferCard from 'shared/offer-card/offer-card';
import OffersMap from 'shared/offers-map/offers-map';
import SortOffers from './sort-offers/sort-offers';

type OffersListProps = {
  currentCity: string,
  offers: Offer[],
  hasNoOffers: boolean,
}

function OffersList(props: OffersListProps): JSX.Element {
  const { currentCity, offers, hasNoOffers } = props;

  const dispatch = useDispatch();

  const [hoveredOffer, setHoveredOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = (offer: Offer) => (
    setHoveredOffer(offer)
  );

  const handleOfferMouseLeave = () => (
    setHoveredOffer(null)
  );

  const handleFavoriteClick = (offerId: number, isFavorite: boolean) => {
    dispatch(changeFavoriteStatusAction(offerId, isFavorite));
  };

  return (
    <div className="cities">
      <div
        className={`cities__places-container container ${hasNoOffers ? 'cities__places-container--empty' : ''}`}
      >
        {hasNoOffers ? (
          <NoOffers currentCity={currentCity} />
        ) : (
          <>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {currentCity}
              </b>
              <SortOffers />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <OfferCard.Main
                    key={offer.id}
                    offerData={offer}
                    onFavoriteClick={handleFavoriteClick}
                    onMouseEnter={handleOfferMouseEnter}
                    onMouseLeave={handleOfferMouseLeave}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <OffersMap offers={offers} activeOffer={hoveredOffer} />
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OffersList;
