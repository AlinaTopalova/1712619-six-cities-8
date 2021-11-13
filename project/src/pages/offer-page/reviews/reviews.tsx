import { useMemo } from 'react';
import { OfferReview } from 'types/reviews';
import Review from './review/review';

const MAX_REVIEWS_AMOUNT = 10;

type ReviewsProps = {
  reviews: OfferReview[],
}

function Reviews(props: ReviewsProps): JSX.Element {
  const { reviews } = props;

  const reviewsToDisplay = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, MAX_REVIEWS_AMOUNT),
  [reviews]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsToDisplay.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default Reviews;
