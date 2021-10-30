import { useMemo } from 'react';
import { OfferReview } from 'types/reviews';
import Review from './review/review';

type ReviewsProps = {
  reviews: OfferReview[],
}

export default function Reviews(props: ReviewsProps): JSX.Element {
  const { reviews } = props;

  const sortedReviews = useMemo(() => reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)), [reviews]);

  return(
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.slice(0,10).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}
