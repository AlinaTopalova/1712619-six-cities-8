import { offersData } from 'mocks/offers';
import { Store } from 'types/store';
import { Actions, ActionType } from 'types/action';
import { Cities, SortOptions } from 'const';

const initialState: Store = {
  currentCity: Cities.Paris,
  offers: offersData,
  selectedSortOption: SortOptions.Popular,
};

const reducer = (state: Store = initialState, action: Actions): Store => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return {
        ...state, currentCity: action.payload,
      };
    case ActionType.ChangeSortOption:
      return {
        ...state, selectedSortOption: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
