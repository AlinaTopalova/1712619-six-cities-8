import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Store } from 'types/store';
import { Offer } from 'types/offers';
import { OfferReview } from 'types/reviews';
import { User } from 'types/user';
import {
  Cities,
  SortOptions,
  AppRoute,
  ReviewPostStatus
} from 'const';

export const enum ActionType {
  LogIn = 'user/logIn',
  ChangeCurrentCity = 'app/changeCity',
  ChangeCurrentCityFromFavorites = 'app/changeCurrentCityFromFavorites',
  ChangeOffers = 'app/changeOffers',
  LoadOffersComplete = 'data/loadOffersComplete',
  LoadReviewsComplete = 'data/loadReviewsComplete',
  LoadOffersStart = 'data/loadOffersStart',
  LoadReviewsStart = 'data/loadReviewsStart',
  LoadCurrentOfferComplete = 'data/loadCurrentOfferComplete',
  LoadCurrentOfferStart = 'data/loadCurrentOfferStart',
  LoadCurrentOfferError = 'data/loadCurrentOfferError',
  LoadNearbyOffersComplete = 'data/loadNearbyOffersComplete',
  LoadNearbyOffersStart = 'data/loadNearbyOffersStart',
  LogOut = 'user/logOut',
  RedirectToRoute = 'app/redirectToRoute',
  SetSortOffersBy = 'app/changeSortOption',
  SetReviewPostStatus = 'user/setReviewPostStatus',
  LoadFavoritesOffersStart = 'data/loadFavoritesOffersStart',
  LoadFavoritesOffersComplete = 'data/loadFavoritesOffersComplete',
  UpdateOffers = 'data/updateOffers',
  UpdateCurrentOffer = 'data/updateCurrentOffer',
  UpdateNearbyOffers = 'data/updateNearbyOffers',
  UpdateFavoriteOffers = 'data/updateFavoriteOffers',
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

export type LogInAction = {
  type: ActionType.LogIn,
  payload: User,
}

export type LogOutAction = {
  type: ActionType.LogOut,
}

export type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute,
  payload: AppRoute,
}

export type SetReviewPostStatusAction = {
  type: ActionType.SetReviewPostStatus,
  payload: ReviewPostStatus,
}

export type LoadFavoritesOffersStartAction = {
  type: ActionType.LoadFavoritesOffersStart,
}

export type LoadFavoritesOffersCompleteAction = {
  type: ActionType.LoadFavoritesOffersComplete,
  payload: Offer[],
}

export type UpdateOffersAction = {
  type: ActionType.UpdateOffers,
  payload: Offer,
}

export type UpdateCurrentOfferAction = {
  type: ActionType.UpdateCurrentOffer,
  payload: Offer,
}

export type UpdateNearbyOffersAction = {
  type: ActionType.UpdateNearbyOffers,
  payload: Offer,
}

export type UpdateFavoriteOffersAction = {
  type: ActionType.UpdateFavoriteOffers,
  payload: Offer,
}

export type Actions =
  | LogInAction
  | ChangeCurrentCityAction
  | ChangeOffersAction
  | LoadOffersCompleteAction
  | LoadReviewsCompleteAction
  | LoadOffersStartAction
  | LoadReviewsStartAction
  | LoadCurrentOfferCompleteAction
  | LoadCurrentOfferStartAction
  | LoadCurrentOfferErrorAction
  | LoadNearbyOffersCompleteAction
  | LoadNearbyOffersStartAction
  | LogOutAction
  | RedirectToRouteAction
  | SetSortOffersByAction
  | SetReviewPostStatusAction
  | LoadFavoritesOffersStartAction
  | LoadFavoritesOffersCompleteAction
  | UpdateOffersAction
  | UpdateCurrentOfferAction
  | UpdateNearbyOffersAction
  | UpdateFavoriteOffersAction

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, Store, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<Store, AxiosInstance, Actions>;
