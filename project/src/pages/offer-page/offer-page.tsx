import { useEffect, useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import { Store } from 'types/store';
import { ThunkAppDispatch } from 'types/action';
import {
  fetchReviewsAction,
  fetchCurrentOfferAction,
  fetchNearbyOffersAction
} from 'store/api-action';
import { calcRatingStarsWidth } from 'utils';
import Header from 'shared/header/header';
import OfferCard from 'shared/offer-card/offer-card';
import OffersMap from 'shared/offers-map/offers-map';
import Loader from 'shared/loader/loader';
import NotFoundPage from 'pages/not-found-page/not-found-page';
import Reviews from './reviews/reviews';
import ReviewForm from './review-form/review-form';

const MAX_AMOUNT_IMAGES = 6;

const mapStateToProps = ({
  currentOffer,
  reviews,
  nearbyOffers,
  isReviewsLoading,
  isCurrentOfferLoading,
  isCurrentOfferLoadingError,
  isNearbyOffersLoading,
}: Store) => ({
  currentOffer,
  reviews,
  nearbyOffers,
  isReviewsLoading,
  isCurrentOfferLoading,
  isCurrentOfferLoadingError,
  isNearbyOffersLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentOffer: (offerId: string) => dispatch(fetchCurrentOfferAction(offerId)),
  fetchReviews: (offerId: string) => dispatch(fetchReviewsAction(offerId)),
  fetchNearbyOffer: (offerId: string) => dispatch(fetchNearbyOffersAction(offerId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferPage(props: PropsFromRedux): JSX.Element {
  const {
    currentOffer,
    reviews,
    nearbyOffers,
    fetchReviews,
    fetchCurrentOffer,
    fetchNearbyOffer,
    isReviewsLoading,
    isCurrentOfferLoading,
    isCurrentOfferLoadingError,
    isNearbyOffersLoading,
  } = props;

  const { offerId } = useParams<{ offerId: string }>();

  useEffect(() => {
    fetchReviews(offerId);
    fetchCurrentOffer(offerId);
    fetchNearbyOffer(offerId);
  },
  [fetchCurrentOffer,
    fetchNearbyOffer,
    fetchReviews,
    offerId,
  ]);

  const offers = useMemo(() => {
    if (!currentOffer) {
      return [];
    }
    return [...nearbyOffers, currentOffer];
  }, [currentOffer, nearbyOffers]);

  const renderPageContent = () => {
    if (isCurrentOfferLoadingError) {
      return <NotFoundPage />;
    }
    if (isCurrentOfferLoading) {
      return <Loader />;
    }
    if (currentOffer) {
      return (
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, MAX_AMOUNT_IMAGES).map((image) => (
                  <div
                    className="property__image-wrapper"
                    key={image}
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt="Studio"
                    />
                  </div>
                ))};
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span
                      style={{width: calcRatingStarsWidth(currentOffer.rating)}}
                    />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span
                    className="property__rating-value rating__value"
                  >{currentOffer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={currentOffer.host.isPro ?
                      'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' :
                      'property__avatar-wrapper user__avatar-wrapper'}
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host"
                      />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro && (
                      <span className="property__user-status">
                         Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                {isReviewsLoading ? <Loader /> : (
                  <section className="property__reviews reviews">
                    <Reviews reviews={reviews} />
                    <ReviewForm />
                  </section>
                )}
              </div>
            </div>
            {isNearbyOffersLoading ? <Loader /> : (
              <section className="property__map map">
                <OffersMap
                  zoomOnOffer={false}
                  offers={offers}
                  activeOffer={currentOffer}
                />
              </section>
            )}
          </section>
          {isNearbyOffersLoading ? <Loader /> : (
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  {nearbyOffers.map((nearbyOffer) => (
                    <OfferCard.Offer key={nearbyOffer.id} offerData={nearbyOffer} />
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>
      );
    }
  };

  return (
    <div className="page">
      <Header />
      {renderPageContent()}
    </div>
  );
}

export { OfferPage };

export default connector(OfferPage);

