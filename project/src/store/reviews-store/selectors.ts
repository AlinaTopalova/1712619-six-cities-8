import { ReviewPostStatus } from 'const';
import { OfferReview } from 'types/reviews';
import { Store } from 'types/store';
import { StoreNameSpace } from 'store/root-reducer';

const getReviews = (store: Store): OfferReview[] =>
  store[StoreNameSpace.reviews].reviews;

const getIsReviewsLoading = (store: Store): boolean =>
  store[StoreNameSpace.reviews].isReviewsLoading;

const getReviewPostStatus = (store: Store): ReviewPostStatus =>
  store[StoreNameSpace.reviews].reviewPostStatus;

export {
  getReviews,
  getIsReviewsLoading,
  getReviewPostStatus
};
