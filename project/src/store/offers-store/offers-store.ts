import { Actions, ActionType } from 'types/action';
import { OffersStore } from 'types/store';

const initialState: OffersStore = {
  offers: [],
  isOffersLoading: false,
};

const offersReducer = (state = initialState, action: Actions): OffersStore => {
  switch (action.type) {
    case ActionType.LoadOffersStart:
      return {
        ...state, isOffersLoading: true,
      };
    case ActionType.LoadOffersComplete:
      return {
        ...state, offers: action.payload, isOffersLoading: false,
      };
    case ActionType.UpdateOffers:
      return {
        ...state, offers: state.offers.map((offer) => {
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

export { offersReducer };
