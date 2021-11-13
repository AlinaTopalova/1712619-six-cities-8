import { fakeOffer } from 'test-utils/mocks';
import { loadCurrentOfferComplete, loadCurrentOfferStart } from './actions';
import { offerReducer } from './offer-store';

describe('Reducer: offerReducer', () => {

  it('should update isCurrentOfferLoading during currentOffer loading', () => {
    const state = {
      currentOffer: null,
      isCurrentOfferLoading: false,
      isCurrentOfferLoadingError: false,
    };

    expect(offerReducer(state, loadCurrentOfferStart()))
      .toEqual({
        currentOffer: null,
        isCurrentOfferLoading: true,
        isCurrentOfferLoadingError: false,
      });
  });

  it('should update currentOffer and isCurrentOfferLoading when the download has finished', () => {
    const state = {
      currentOffer: null,
      isCurrentOfferLoading: true,
      isCurrentOfferLoadingError: false,
    };

    expect(offerReducer(state, loadCurrentOfferComplete(fakeOffer)))
      .toEqual({
        currentOffer: fakeOffer,
        isCurrentOfferLoading: false,
        isCurrentOfferLoadingError: false,
      });
  });
});
