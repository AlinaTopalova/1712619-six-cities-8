/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { Offer } from 'types/offers';
import { AppRoute, RATING_WIDTH_PERCENT } from 'const';

const PREVIEW_IMAGE_WIDTH = '260';
const PREVIEW_IMAGE_HEIGHT = '200';

type OfferCardProps = {
  offerData: Offer,
  rootClassName: string,
  imageWrapperClassName: string,
  infoWrapperClassName?: string,
  imageWidth?: string,
  imageHeight?: string,
  onMouseEnter?: (offerData: Offer) => void,
  onMouseLeave?: () => void,
};

type SpecificOfferCardProps = Pick<OfferCardProps, 'offerData' | 'onMouseEnter' | 'onMouseLeave'>;

function OfferCard(props: OfferCardProps): JSX.Element {
  const {
    offerData,
    rootClassName = '',
    imageWrapperClassName = '',
    infoWrapperClassName = '',
    imageWidth = PREVIEW_IMAGE_WIDTH,
    imageHeight = PREVIEW_IMAGE_HEIGHT,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(offerData);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  return (
    <article
      className={`place-card ${rootClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offerData.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`place-card__image-wrapper ${imageWrapperClassName}`}
      >
        <img
          className="place-card__image"
          src={offerData.previewImage}
          width={imageWidth}
          height={imageHeight}
          alt="Place"
        />
      </div>
      <div className={`place-card__info ${infoWrapperClassName}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{offerData.price}
            </b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button
            ${offerData.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${offerData.rating * RATING_WIDTH_PERCENT}%`,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offerData.id}`}>
            {offerData.title}
          </Link>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}

function FavoriteCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageHeight="110"
      imageWidth="150"
      imageWrapperClassName="favorites__image-wrapper"
      infoWrapperClassName="favorites__card-info"
      rootClassName="favorites__card"
      {...props}
    />
  );
}

function PlaceCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageWrapperClassName="cities__image-wrapper"
      rootClassName="cities__place-card"
      {...props}
    />
  );
}

function NearPlacesCard(props: SpecificOfferCardProps) {
  return (
    <OfferCard
      imageWrapperClassName="near-places__image-wrapper"
      rootClassName="near-places__card"
      {...props}
    />
  );
}

OfferCard.Main = PlaceCard;
OfferCard.Favorite = FavoriteCard;
OfferCard.Offer = NearPlacesCard;

export default OfferCard;
