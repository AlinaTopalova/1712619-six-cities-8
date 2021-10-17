import { UsersReview } from 'types/reviews';
import { calcRatingStarsWidth } from 'utils';

type ReviewProps = {
  review: UsersReview,
}

export default function Review(props: ReviewProps): JSX.Element {
  const { review } = props;

  const getFormattedData = (date: string) => new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long'});

  return (
    <li className="reviews__item" key={review.user.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calcRatingStarsWidth(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={`${new Date(review.date).setFullYear}`}>{getFormattedData(review.date)}</time>
      </div>
    </li>
  );
}
