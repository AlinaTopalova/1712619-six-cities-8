import { ReviewPostStatus } from 'const';
import { NameSpace } from 'store/root-reducer';
import { OfferReview } from 'types/reviews';
import { Store } from 'types/store';

export const getReviews = (store: Store): OfferReview[] =>
  store[NameSpace.reviews].reviews;

export const getIsReviewsLoading = (store: Store): boolean =>
  store[NameSpace.reviews].isReviewsLoading;

export const getReviewPostStatus = (store: Store): ReviewPostStatus =>
  store[NameSpace.reviews].reviewPostStatus;
