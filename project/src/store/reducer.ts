import { offersData } from 'mocks/offers';
import { Store } from 'types/store';
import { Actions, ActionType } from 'types/action';
import { Cities } from 'const';

const initialState: Store = {
  currentCity: Cities.Paris,
  offers: offersData,
};

const reducer = (state: Store = initialState, action: Actions): Store => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return {
        ...state, currentCity: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
