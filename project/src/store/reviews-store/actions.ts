import {
  ActionType,
  LoadReviewsCompleteAction,
  LoadReviewsStartAction,
  SetReviewPostStatusAction
} from 'types/action';
import { OfferReview } from 'types/reviews';
import {
  ReviewPostStatus
} from 'const';

export const loadReviewsComplete = (
  reviews: OfferReview[],
): LoadReviewsCompleteAction => ({
  type: ActionType.LoadReviewsComplete,
  payload: reviews,
});

export const loadReviewsStart = (): LoadReviewsStartAction  => ({
  type: ActionType.LoadReviewsStart,
});

export const setReviewPostStatus = (reviewPostStatus: ReviewPostStatus): SetReviewPostStatusAction => ({
  type: ActionType.SetReviewPostStatus,
  payload: reviewPostStatus,
});
