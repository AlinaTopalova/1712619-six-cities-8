import { ChangeEvent, FormEvent, Fragment, useState} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { postReviewAction } from 'store/api-action';
import { ThunkAppDispatch } from 'types/action';
import { NewReview } from 'types/reviews';

const MIN_COMMENT_LENGTH = 50;

const Ratings = [
  {
    title: 'perfect',
    value: '5',
  },
  {
    title: 'good',
    value: '4',
  },
  {
    title: 'not bad',
    value: '3',
  },
  {
    title: 'badly',
    value: '2',
  },
  {
    title: 'terribly',
    value: '1',
  },
] as const;

type ReviewFormProps = {
  offerId: string,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  postReview(newReview: NewReview, offerId: string) {
    dispatch(postReviewAction(newReview, offerId));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ReviewFormProps;

function ReviewForm(props: ConnectedComponentProps): JSX.Element {
  const { postReview, offerId } = props;

  const [rating, setRating] = useState('');

  const [comment, setСomment] = useState('');

  const isFormCompleted = comment.length > MIN_COMMENT_LENGTH && Boolean(rating);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setСomment(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    postReview({
      comment,
      rating: Number(rating),
    }, offerId);
    setRating('');
    setСomment('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map(({ title, value }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              checked={value === rating}
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormCompleted}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };

export default connector(ReviewForm);
