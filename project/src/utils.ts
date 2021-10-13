const RATING_TO_STARS_RATIO = 20;

export const calcRatingStarsWidth = (rating: number): string => `${rating * RATING_TO_STARS_RATIO}%`;
