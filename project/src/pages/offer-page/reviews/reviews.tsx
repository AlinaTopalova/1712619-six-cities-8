import { UsersReview } from 'types/reviews';
import Review from './review/review';
import CommentsForm from './comments-form/comments-form';

type ReviewsProps = {
  reviews: UsersReview[],
}

export default function Reviews(props: ReviewsProps): JSX.Element {
  const { reviews } = props;

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.user.id}/>
        ))}
      </ul>
      <CommentsForm />
    </section>
  );
}
