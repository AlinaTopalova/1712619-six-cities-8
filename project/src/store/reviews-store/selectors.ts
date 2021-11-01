import { ReviewPostStatus } from 'const';
import { StoreNameSpace } from 'store/root-reducer';
import { OfferReview } from 'types/reviews';
import { Store } from 'types/store';

export const getReviews = (store: Store): OfferReview[] =>
  store[StoreNameSpace.reviews].reviews;

export const getIsReviewsLoading = (store: Store): boolean =>
  store[StoreNameSpace.reviews].isReviewsLoading;

export const getReviewPostStatus = (store: Store): ReviewPostStatus =>
  store[StoreNameSpace.reviews].reviewPostStatus;
