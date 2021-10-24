//import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Store } from 'types/store';
import { Offer } from 'types/offers';
import { OfferReview } from './reviews';
import { Cities, SortOptions } from 'const';

export const enum ActionType {
  ChangeCurrentCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  ChangeSortOption = 'app/changeSortOption',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  LoadOffersStart = 'data/loading',
}

export type ChangeCurrentCityAction = {
  type: ActionType.ChangeCurrentCity;
  payload: Cities;
};

export type ChangeOffersAction = {
  type: ActionType.ChangeOffers;
  payload: Offer[];
}

export type ChangeSortOptionAction = {
  type: ActionType.ChangeSortOption,
  payload: SortOptions,
}

export type LoadOffersAction = {
  type: ActionType.LoadOffers,
  payload: Offer[],
}

export type LoadReviewsAction = {
  type: ActionType.LoadReviews,
  payload: OfferReview[],
}

export type LoadOffersStart = {
  type: ActionType.LoadOffersStart,
  payload: boolean,
}

export type Actions =
  | ChangeCurrentCityAction
  | ChangeOffersAction
  | ChangeSortOptionAction
  | LoadOffersAction
  | LoadReviewsAction
  | LoadOffersStart;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, Store, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<Store, AxiosInstance, Actions>;
