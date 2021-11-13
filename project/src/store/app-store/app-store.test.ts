import { Cities, SortOptions } from 'const';
import { changeCurrentCity, setSortOffersBy } from './actions';
import { appReducer } from './app-store';

describe('Reducer: offersReducer', () => {

  it('should update curent city by current value', () => {
    const state = {
      currentCity: Cities.Paris,
      sortOffersBy: SortOptions.Popular,
    };
    expect(appReducer(state, changeCurrentCity(Cities.Cologne)))
      .toEqual({
        currentCity: Cities.Cologne,
        sortOffersBy: SortOptions.Popular,
      });
  });

  it('should update curent sort option by current value', () => {
    const state = {
      currentCity: Cities.Paris,
      sortOffersBy: SortOptions.Popular,
    };
    expect(appReducer(state, setSortOffersBy(SortOptions.TopRated)))
      .toEqual({
        currentCity: Cities.Paris,
        sortOffersBy: SortOptions.TopRated,
      });
  });

});
