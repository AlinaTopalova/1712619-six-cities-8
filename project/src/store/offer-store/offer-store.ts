import { Actions, ActionType } from 'types/action';
import { OfferStore } from 'types/store';

const initialState: OfferStore = {
  currentOffer: null,
  isCurrentOfferLoading: false,
  isCurrentOfferLoadingError: false,
};

export const offerReducer = (state = initialState, action: Actions): OfferStore => {
  switch (action.type) {
    case ActionType.LoadCurrentOfferStart:
      return {
        ...state, isCurrentOfferLoading: true, isCurrentOfferLoadingError: false,
      };
    case ActionType.LoadCurrentOfferComplete:
      return {
        ...state, currentOffer: action.payload, isCurrentOfferLoading: false,
      };
    case ActionType.LoadCurrentOfferError:
      return {
        ...state, isCurrentOfferLoadingError: true, isCurrentOfferLoading: false,
      };
    default:
      return state;
  }
};
