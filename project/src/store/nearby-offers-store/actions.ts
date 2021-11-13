import {
  ActionType,
  LoadNearbyOffersCompleteAction,
  LoadNearbyOffersStartAction,
  UpdateNearbyOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

const loadNearbyOffersComplete = (nearbyOffers: Offer[]): LoadNearbyOffersCompleteAction => ({
  type: ActionType.LoadNearbyOffersComplete,
  payload: nearbyOffers,
});

const loadNearbyOffersStart = (): LoadNearbyOffersStartAction => ({
  type: ActionType.LoadNearbyOffersStart,
});

const updateNearbyOffers = (offer: Offer): UpdateNearbyOffersAction => ({
  type: ActionType.UpdateNearbyOffers,
  payload: offer,
});

export {
  loadNearbyOffersComplete,
  loadNearbyOffersStart,
  updateNearbyOffers
};
