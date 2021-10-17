import { OfferReview } from 'types/reviews';
import Review from './review/review';

type ReviewsProps = {
  reviews: OfferReview[],
}

export default function Reviews(props: ReviewsProps): JSX.Element {
  const { reviews } = props;

  return(
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
