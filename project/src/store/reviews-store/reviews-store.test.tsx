import { ReviewPostStatus } from 'const';
import { fakeReviews } from 'test-utils/mocks';
import {
  loadReviewsComplete,
  loadReviewsStart,
  setReviewPostStatus
} from './actions';
import { reviewsReducer } from './reviews-store';

describe('Reducer: reviewsReducer', () => {

  it('should update isReviewsLoading during reviews loading', () => {
    const state = {
      reviews: [],
      isReviewsLoading: false,
      reviewPostStatus : ReviewPostStatus.Pristine,
    };

    expect(reviewsReducer(state, loadReviewsStart()))
      .toEqual({
        reviews: [],
        isReviewsLoading: true,
        reviewPostStatus : ReviewPostStatus.Pristine,
      });
  });

  it('should update reviews and isReviewsLoading during reviews loaded', () => {
    const state = {
      reviews: [],
      isReviewsLoading: true,
      reviewPostStatus : ReviewPostStatus.Pristine,
    };

    expect(reviewsReducer(state, loadReviewsComplete(fakeReviews)))
      .toEqual({
        reviews: fakeReviews,
        isReviewsLoading: false,
        reviewPostStatus : ReviewPostStatus.Pristine,
      });
  });

  it('should update reviewPostStatus during SetReviewPostStatus', () => {
    const state = {
      reviews: [],
      isReviewsLoading: false,
      reviewPostStatus : ReviewPostStatus.Pristine,
    };

    expect(reviewsReducer(state, setReviewPostStatus(ReviewPostStatus.Posted)))
      .toEqual({
        reviews: [],
        isReviewsLoading: false,
        reviewPostStatus : ReviewPostStatus.Posted,
      });
  });
});
