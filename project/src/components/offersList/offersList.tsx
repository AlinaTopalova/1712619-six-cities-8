/* eslint-disable no-console */
import { useState } from 'react';
import { Offer } from 'types/offers';
import OfferCard from 'components/offer-card/offer-card';

type OffersListProps = {
  offersData: Offer[],
};

export default function OffersList(props: OffersListProps): JSX.Element {
  const { offersData } = props;

  const [hoveredOffer, setHoveredOffer] = useState<Offer | null>(null);

  const handleOfferMouseEnter = (offer: Offer) => (
    setHoveredOffer(offer)
  );

  const handleOfferMouseLeave = () => (
    setHoveredOffer(null)
  );
  console.log('hoveredOffer', hoveredOffer);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersData.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offersData.map((offer) => (
              <OfferCard.Main
                key={offer.id}
                offerData={offer}
                onMouseEnter={handleOfferMouseEnter}
                onMouseLeave={handleOfferMouseLeave}
              />
            ))};
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}
