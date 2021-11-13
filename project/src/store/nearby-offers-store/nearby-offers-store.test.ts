import { fakeOffers } from 'test-utils/mocks';
import { loadNearbyOffersComplete, loadNearbyOffersStart } from './actions';
import { nearbyOffersReducer } from './nearby-offers-store';

describe('Reducer: nearbyOffersReducer', () => {

  it('should update isNearbyOffersLoading when nearbyOffers loading', () => {
    const state = {
      nearbyOffers:[],
      isNearbyOffersLoading: false,
    };

    expect(nearbyOffersReducer(state, loadNearbyOffersStart()))
      .toEqual({
        nearbyOffers:[],
        isNearbyOffersLoading: true,
      });
  });

  it('should update nearbyOffers and isNearbyOffersLoading when nearbyOffers was loaded', () => {
    const state = {
      nearbyOffers:[],
      isNearbyOffersLoading: true,
    };

    expect(nearbyOffersReducer(state, loadNearbyOffersComplete(fakeOffers)))
      .toEqual({
        nearbyOffers: fakeOffers,
        isNearbyOffersLoading: false,
      });
  });

});
