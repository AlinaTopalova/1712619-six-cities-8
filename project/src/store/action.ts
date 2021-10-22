import { ActionType, ChangeCurrentCityAction, ChangeSortOptionAction } from 'types/action';
import { Cities, SortOptions } from 'const';

export const changeCurrentCity = (currentCity: Cities): ChangeCurrentCityAction => ({
  type: ActionType.ChangeCurrentCity,
  payload: currentCity,
});

export const changeSortOption = (selectedSortOption: SortOptions): ChangeSortOptionAction => ({
  type: ActionType.ChangeSortOption,
  payload: selectedSortOption,
});
