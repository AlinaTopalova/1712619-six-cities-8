import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from 'types/offers';
import { AppRoute } from 'const';
import { calcRatingStarsWidth } from 'utils';

const PreviewImgSize = {
  default: {
    height: '200',
    width: '260',
  },
  favorite: {
    height: '110',
    width: '150',
  },
};

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
    imageHeight = PreviewImgSize.default.height,
    imageWidth = PreviewImgSize.default.width,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const [favoriteOffer, setFavoriteOffer] = useState(0);

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(offerData);
  };

  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  const handleFavoriteBtnClick = () => {
    favoriteOffer ? setFavoriteOffer(0) : setFavoriteOffer(1);
  };

  return (
    <article
      className={`place-card ${rootClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offerData.isPremium && (
        <div className="place-card__mark"><span>Premium</span></div>
      )}
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
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
            onClick={handleFavoriteBtnClick}
            className={`place-card__bookmark-button button
            ${favoriteOffer ? 'place-card__bookmark-button--active' : ''}`}
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
            <span style={{width: calcRatingStarsWidth(offerData.rating)}}/>
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
      imageHeight={PreviewImgSize.favorite.height}
      imageWidth={PreviewImgSize.favorite.width}
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
