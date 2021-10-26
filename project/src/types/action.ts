import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Cities, SortOptions } from 'const';
import { Store } from 'types/store';
import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';

export const enum ActionType {
  ChangeCurrentCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  SetSortOffersBy = 'app/changeSortOption',
  LoadOffersComplete = 'data/loadOffersComplete',
  LoadReviewsComplete = 'data/loadReviewsComplete',
  LoadOffersStart = 'data/loadOffersStart',
  LoadReviewsStart = 'data/loadReviewsStart',
  LoadCurrentOfferComplete = 'data/loadCurrentOfferComplete',
  LoadCurrentOfferStart = 'data/loadCurrentOfferStart',
  LoadCurrentOfferError = 'data/loadCurrentOfferError',
  LoadNearbyOffersComplete = 'data/loadNearbyOffersComplete',
  LoadNearbyOffersStart = 'data/loadNearbyOffersStart'
}

export type ChangeCurrentCityAction = {
  type: ActionType.ChangeCurrentCity;
  payload: Cities;
};

export type ChangeOffersAction = {
  type: ActionType.ChangeOffers;
  payload: Offer[];
}

export type SetSortOffersByAction = {
  type: ActionType.SetSortOffersBy,
  payload: SortOptions,
}

export type LoadOffersCompleteAction = {
  type: ActionType.LoadOffersComplete,
  payload: Offer[],
}

export type LoadReviewsCompleteAction = {
  type: ActionType.LoadReviewsComplete,
  payload: OfferReview[],
}

export type LoadOffersStartAction = {
  type: ActionType.LoadOffersStart,
}

export type LoadReviewsStartAction = {
  type: ActionType.LoadReviewsStart,
}

export type LoadCurrentOfferCompleteAction = {
  type: ActionType.LoadCurrentOfferComplete,
  payload: Offer,
}

export type LoadCurrentOfferStartAction = {
  type: ActionType.LoadCurrentOfferStart,
}

export type LoadCurrentOfferErrorAction = {
  type: ActionType.LoadCurrentOfferError,
}

export type LoadNearbyOffersCompleteAction = {
  type: ActionType.LoadNearbyOffersComplete,
  payload: Offer[],
}

export type LoadNearbyOffersStartAction = {
  type: ActionType.LoadNearbyOffersStart,
}

export type Actions =
  | ChangeCurrentCityAction
  | ChangeOffersAction
  | SetSortOffersByAction
  | LoadOffersCompleteAction
  | LoadReviewsCompleteAction
  | LoadOffersStartAction
  | LoadReviewsStartAction
  | LoadCurrentOfferCompleteAction
  | LoadCurrentOfferStartAction
  | LoadCurrentOfferErrorAction
  | LoadNearbyOffersCompleteAction
  | LoadNearbyOffersStartAction

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, Store, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<Store, AxiosInstance, Actions>;
