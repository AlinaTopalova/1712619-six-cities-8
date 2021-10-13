import { useParams } from 'react-router';
import { Offer } from 'types/offers';
import { Review } from 'types/reviews';
import { calcRatingStarsWidth } from 'utils';
import Header from 'components/header/header';
import CommentsForm from 'components/comments-form/comments-form';
import OfferCard from 'components/offer-card/offer-card';

const MAX_AMOUNT_IMAGES = 6;
const MAX_AMOUNT_NEAR_PLACES = 3;

type OfferPageProps = {
  offersData: Offer[],
  reviewsData: Review[],
}

export default function OfferPage(props: OfferPageProps): JSX.Element {
  const { offersData, reviewsData } = props;

  const getFormattedData = (date: string) => new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long'});

  const { offerId } = useParams<{ offerId: string }>();

  const currentOffer = offersData.find((offer) => offerId === offer.id.toString());
  const reviews = reviewsData.filter((review) => offerId === review.id.toString());

  return (
    <div className="page">
      <Header />
      {currentOffer && (
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
                      <li className="property__inside-item" key={good}>{good}</li>))}
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
                    {currentOffer.host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {reviews.map((review) => (
                      <li className="reviews__item" key={review.user.id}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img
                              className="reviews__avatar user__avatar"
                              src={review.user.avatarUrl}
                              width="54"
                              height="54"
                              alt="Reviews"
                            />
                          </div>
                          <span className="reviews__user-name">
                            {review.user.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: calcRatingStarsWidth(review.rating)}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.comment}
                          </p>
                          <time className="reviews__time" dateTime={`${new Date(review.date).setFullYear}`}>{getFormattedData(review.date)}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <CommentsForm />
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offersData.slice(0, MAX_AMOUNT_NEAR_PLACES).map((offer) => (
                  <OfferCard.Offer key={offer.id} offerData={offer} />
                ))}
              </div>
            </section>
          </div>
        </main>)}
    </div>
  );
}

