import { ReviewPostStatus } from 'const';
import { Actions, ActionType } from 'types/action';
import { ReviewsStore } from 'types/store';

const initialState: ReviewsStore = {
  reviews: [],
  isReviewsLoading: false,
  reviewPostStatus : ReviewPostStatus.Pristine,
};

const reviewsReducer = (state = initialState, action: Actions): ReviewsStore => {
  switch (action.type) {
    case ActionType.LoadReviewsStart:
      return {
        ...state, isReviewsLoading: true,
      };
    case ActionType.LoadReviewsComplete:
      return {
        ...state, reviews: action.payload, isReviewsLoading: false,
      };
    case ActionType.SetReviewPostStatus:
      return {
        ...state,
        reviewPostStatus: action.payload,
      };
    default:
      return state;
  }
};

export { reviewsReducer };
