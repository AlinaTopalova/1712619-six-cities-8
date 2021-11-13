import {
  ActionType,
  ChangeCurrentCityAction,
  RedirectToRouteAction,
  SetSortOffersByAction
} from 'types/action';
import { AppRoute, Cities, SortOptions } from 'const';

const changeCurrentCity = (
  currentCity: Cities,
): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

const setSortOffersBy = (
  sortOption: SortOptions,
): SetSortOffersByAction => ({
  type: ActionType.SetSortOffersBy,
  payload: sortOption,
});

export {
  changeCurrentCity,
  redirectToRoute,
  setSortOffersBy
};
