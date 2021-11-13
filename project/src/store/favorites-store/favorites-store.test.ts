import {
  loadFavoritesOffersComplete,
  loadFavoritesOffersStart
} from './actions';
import { fakeFavoritesOffers } from 'test-utils/mocks';
import { favoritesReducer } from './favorites-store';

describe('Reducer: favoritesReducer', () => {

  it('should update isFavoriteOffersLoading during favoritesOffers loading', () => {
    const state = {
      favoritesOffers: [],
      isFavoriteOffersLoading: true,
    };

    expect(favoritesReducer(state, loadFavoritesOffersStart()))
      .toEqual({
        favoritesOffers: [],
        isFavoriteOffersLoading: true,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      favoritesOffers: [],
      isFavoriteOffersLoading: true,
    };
    expect(favoritesReducer(state, loadFavoritesOffersComplete(fakeFavoritesOffers)))
      .toEqual({
        favoritesOffers: fakeFavoritesOffers,
        isFavoriteOffersLoading: false,
      });
  });
});
