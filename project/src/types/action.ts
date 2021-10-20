import { Offer } from 'types/offers';

export const enum ActionType {
  ChangeCurrentCity = 'app/changeCity',
  ChangeOffers = 'app/changeOffers',
}

export type ChangeCurrentCityAction = {
  type: ActionType.ChangeCurrentCity;
  payload: string;
};

export type ChangeOffersAction = {
  type: ActionType.ChangeOffers;
  payload: Offer[];
}

export type Actions = ChangeCurrentCityAction | ChangeOffersAction;
