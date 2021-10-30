import { ChangeEvent, FormEvent, Fragment, useEffect, useState} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { postReviewAction } from 'store/api-action';
import { Store } from 'types/store';
import { ThunkAppDispatch } from 'types/action';
import { NewReview } from 'types/reviews';
import { ReviewPostStatus } from 'const';

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

const mapStateToProps = ({ reviewPostStatus }: Store) => ({
  isReviewPosting: reviewPostStatus === ReviewPostStatus.Posting,
  isReviewPosted: reviewPostStatus === ReviewPostStatus.Posted,
  isReviewNotPosted: reviewPostStatus === ReviewPostStatus.NotPosted,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  postReview(review: NewReview, offerId: string) {
    dispatch(postReviewAction(review, offerId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ReviewFormProps;

function ReviewForm(props: ConnectedComponentProps): JSX.Element {
  const { postReview, isReviewPosting, isReviewPosted, isReviewNotPosted, offerId } = props;

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
    postReview({comment, rating: Number(rating)}, offerId);
  };

  useEffect(() => {
    if (isReviewPosted) {
      setRating('');
      setСomment('');
    }
  }, [isReviewPosted]);

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
              disabled={isReviewPosting}
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
        disabled={isReviewPosting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormCompleted || isReviewPosting}
        >
          Submit
        </button>
      </div>
      {isReviewNotPosted && (
        <p className="reviews__help" style={{color: 'red'}}>
          Error occured while posting review
        </p>
      )}
    </form>
  );
}

export { ReviewForm };

export default connector(ReviewForm);
