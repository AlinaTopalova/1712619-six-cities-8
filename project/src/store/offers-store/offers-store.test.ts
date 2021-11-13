import {
  loadOffersComplete,
  loadOffersStart,
  updateOffers
} from './actions';
import {
  fakeFavoritesOffer,
  fakeFavoritesOffers,
  fakeOffers
} from 'test-utils/mocks';
import { offersReducer } from './offers-store';

describe('Reducer: offersReducer', () => {

  it('should update offers by loading start offers', () => {
    const state = {
      offers: [],
      isOffersLoading: true,
    };

    expect(offersReducer(state, loadOffersStart()))
      .toEqual({
        offers: [],
        isOffersLoading: true,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      isOffersLoading: true,
    };

    expect(offersReducer(state, loadOffersComplete(fakeOffers)))
      .toEqual({
        offers: fakeOffers,
        isOffersLoading: false,
      });
  });

  it('should update offers after change favorite status', () => {
    const state = {
      offers: fakeOffers,
      isOffersLoading: false,
    };

    expect(offersReducer(state, updateOffers(fakeFavoritesOffer)))
      .toEqual({
        offers: fakeFavoritesOffers,
        isOffersLoading: false,
      });
  });
});
