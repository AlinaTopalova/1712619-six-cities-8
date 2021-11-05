import {
  ActionType,
  LoadOffersStartAction,
  LoadOffersCompleteAction,
  UpdateOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

export const loadOffersComplete = (offers: Offer[]): LoadOffersCompleteAction => ({
  type: ActionType.LoadOffersComplete,
  payload: offers,
});

export const loadOffersStart = (): LoadOffersStartAction => ({
  type: ActionType.LoadOffersStart,
});

export const updateOffers = (offer: Offer): UpdateOffersAction => ({
  type: ActionType.UpdateOffers,
  payload: offer,
});
