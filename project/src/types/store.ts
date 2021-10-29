import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';
import { User } from 'types/user';
import { Cities, SortOptions, AuthorizationStatus } from 'const';

export type Store = {
  authorizationStatus: AuthorizationStatus,
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
  user: User | null,
}
