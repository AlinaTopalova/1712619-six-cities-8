/* eslint-disable no-console */
import { ChangeEvent, Fragment, useState} from 'react';

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

export default function CommentsForm(): JSX.Element {
  const [starsAmount, setStarsAmount] = useState('');
  const [commentText, setcommentText] = useState('');

  let isFormNotCompleted = true;
  if (commentText.length > 50 && starsAmount !== '') {
    isFormNotCompleted = false;
  }

  const handleChangeStars = (evt: ChangeEvent<HTMLInputElement>) => {
    setStarsAmount(evt.target.value);
  };

  const handleChangeCommentText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setcommentText(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map(({ title, value }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              checked={value === starsAmount}
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChangeStars}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
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
        value={commentText}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChangeCommentText}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormNotCompleted}>Submit</button>
      </div>
    </form>
  );
}
