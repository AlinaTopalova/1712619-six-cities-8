import { Cities, SortOptions } from 'const';
import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';

export type Store = {
  currentCity: Cities,
  currentOffer: Offer | null,
  nearbyOffers: Offer[],
  offers: Offer[],
  reviews: OfferReview[],
  sortOffersBy: SortOptions,
  isCurrentOfferLoading: boolean,
  isCurrentOfferLoadingError: boolean,
  isNearbyOffersLoading: boolean,
  isOffersLoading: boolean,
  isReviewsLoading: boolean,
}
