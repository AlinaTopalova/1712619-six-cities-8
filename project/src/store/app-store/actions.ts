import {
  ActionType,
  ChangeCurrentCityAction,
  RedirectToRouteAction,
  SetSortOffersByAction
} from 'types/action';
import { AppRoute, Cities, SortOptions } from 'const';

export const changeCurrentCity = (
  currentCity: Cities,
): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

export const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export const setSortOffersBy = (
  sortOption: SortOptions,
): SetSortOffersByAction => ({
  type: ActionType.SetSortOffersBy,
  payload: sortOption,
});
