import { Actions, ActionType } from 'types/action';
import { OffersStore } from 'types/store';

const initialState: OffersStore = {
  offers: [],
  isOffersLoading: false,
};

export const offersReducer = (state = initialState, action: Actions): OffersStore => {
  switch (action.type) {
    case ActionType.LoadOffersStart:
      return {
        ...state, isOffersLoading: true,
      };
    case ActionType.LoadOffersComplete:
      return {
        ...state, offers: action.payload, isOffersLoading: false,
      };
    default:
      return state;
  }
};
