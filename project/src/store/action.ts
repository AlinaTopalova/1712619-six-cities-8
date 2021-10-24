import { ActionType, ChangeCurrentCityAction, ChangeSortOptionAction, LoadOffersStart, LoadOffersAction, LoadReviewsAction } from 'types/action';
import { Offer } from 'types/offers';
import { Cities, SortOptions } from 'const';
import { OfferReview } from 'types/reviews';

export const changeCurrentCity = (currentCity: Cities): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

export const changeSortOption = (selectedSortOption: SortOptions): ChangeSortOptionAction => ({
  type: ActionType.ChangeSortOption,
  payload: selectedSortOption,
});

export const loadOffers = (offers: Offer[]): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

export const loadReviews = (reviews: OfferReview[]): LoadReviewsAction => ({
  type: ActionType.LoadReviews,
  payload: reviews,
});

export const loadOffersStart = (isOffersLoaded: boolean): LoadOffersStart => ({
  type: ActionType.LoadOffersStart,
  payload: isOffersLoaded,
});
