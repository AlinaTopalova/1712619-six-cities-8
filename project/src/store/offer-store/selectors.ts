import { NameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

export const getCurrentOffer = (store: Store): Offer | null =>
  store[NameSpace.offer].currentOffer;

export const getIsCurrentOfferLoading = (store: Store): boolean =>
  store[NameSpace.offer].isCurrentOfferLoading;

export const getIsCurrentOfferLoadingError = (store: Store): boolean =>
  store[NameSpace.offer].isCurrentOfferLoadingError;
