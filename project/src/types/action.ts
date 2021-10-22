import { Offer } from 'types/offers';
import { Cities, SortOptions } from 'const';

export const enum ActionType {
  ChangeCurrentCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
  ChangeSortOption = 'app/changeSortOption',
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

export type Actions = ChangeCurrentCityAction | ChangeOffersAction | ChangeSortOptionAction;
