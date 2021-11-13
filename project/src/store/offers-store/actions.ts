import {
  ActionType,
  LoadOffersStartAction,
  LoadOffersCompleteAction,
  UpdateOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

const loadOffersComplete = (offers: Offer[]): LoadOffersCompleteAction => ({
  type: ActionType.LoadOffersComplete,
  payload: offers,
});

const loadOffersStart = (): LoadOffersStartAction => ({
  type: ActionType.LoadOffersStart,
});

const updateOffers = (offer: Offer): UpdateOffersAction => ({
  type: ActionType.UpdateOffers,
  payload: offer,
});

export {
  loadOffersComplete,
  loadOffersStart,
  updateOffers
};
