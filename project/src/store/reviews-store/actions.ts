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

const loadReviewsComplete = (
  reviews: OfferReview[],
): LoadReviewsCompleteAction => ({
  type: ActionType.LoadReviewsComplete,
  payload: reviews,
});

const loadReviewsStart = (): LoadReviewsStartAction  => ({
  type: ActionType.LoadReviewsStart,
});

const setReviewPostStatus = (reviewPostStatus: ReviewPostStatus): SetReviewPostStatusAction => ({
  type: ActionType.SetReviewPostStatus,
  payload: reviewPostStatus,
});

export {
  loadReviewsComplete,
  loadReviewsStart,
  setReviewPostStatus
};
