import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';
import { User } from 'types/user';
import { Cities, SortOptions, AuthStatus, ReviewPostStatus } from 'const';
import { RootStore } from 'store/root-reducer';

export type AppStore = {
  currentCity: Cities,
  sortOffersBy: SortOptions,
}

export type OffersStore = {
  offers: Offer[],
  isOffersLoading: boolean,
}

export type NearbyOffersStore = {
  nearbyOffers: Offer[],
  isNearbyOffersLoading: boolean,
}

export type OfferStore = {
  currentOffer: Offer | null,
  isCurrentOfferLoading: boolean,
  isCurrentOfferLoadingError: boolean,
}

export type ReviewsStore = {
  reviews: OfferReview[],
  isReviewsLoading: boolean,
  reviewPostStatus : ReviewPostStatus,
}

export type AuthStore = {
  authStatus: AuthStatus,
  user: User | null,
}

export type Store = RootStore;
