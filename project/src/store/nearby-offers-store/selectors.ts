import { StoreNameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

export const getNearbyOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.nearbyOffers].nearbyOffers;

export const getIsNearbyOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.nearbyOffers].isNearbyOffersLoading;
