import { Offer } from 'types/offers';
import { Store } from 'types/store';
import { StoreNameSpace } from 'store/root-reducer';

const getCurrentOffer = (store: Store): Offer | null =>
  store[StoreNameSpace.offer].currentOffer;

const getIsCurrentOfferLoading = (store: Store): boolean =>
  store[StoreNameSpace.offer].isCurrentOfferLoading;

const getIsCurrentOfferLoadingError = (store: Store): boolean =>
  store[StoreNameSpace.offer].isCurrentOfferLoadingError;

export {
  getCurrentOffer,
  getIsCurrentOfferLoading,
  getIsCurrentOfferLoadingError
};
