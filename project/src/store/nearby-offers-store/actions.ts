import {
  ActionType,
  LoadNearbyOffersCompleteAction,
  LoadNearbyOffersStartAction,
  UpdateNearbyOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

export const loadNearbyOffersComplete = (nearbyOffers: Offer[]): LoadNearbyOffersCompleteAction => ({
  type: ActionType.LoadNearbyOffersComplete,
  payload: nearbyOffers,
});

export const loadNearbyOffersStart = (): LoadNearbyOffersStartAction => ({
  type: ActionType.LoadNearbyOffersStart,
});

export const updateNearbyOffers = (offer: Offer): UpdateNearbyOffersAction => ({
  type: ActionType.UpdateNearbyOffers,
  payload: offer,
});
