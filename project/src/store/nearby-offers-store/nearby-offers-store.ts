import { Actions, ActionType } from 'types/action';
import { NearbyOffersStore } from 'types/store';

const initialState: NearbyOffersStore = {
  nearbyOffers:[],
  isNearbyOffersLoading: false,
};

export const nearbyOffersReducer = (state = initialState, action: Actions): NearbyOffersStore => {
  switch (action.type) {
    case ActionType.LoadNearbyOffersStart:
      return {
        ...state, isNearbyOffersLoading: true,
      };
    case ActionType.LoadNearbyOffersComplete:
      return {
        ...state, nearbyOffers: action.payload, isNearbyOffersLoading: false,
      };
    case ActionType.UpdateNearbyOffers:
      return {
        ...state, nearbyOffers: state.nearbyOffers.map((offer) => {
          if (offer.id !== action.payload.id) {
            return offer;
          }
          return action.payload;
        }),
      };
    default:
      return state;
  }
};
