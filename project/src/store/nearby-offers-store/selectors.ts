import { NameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

export const getNearbyOffers = (store: Store): Offer[] =>
  store[NameSpace.nearbyOffers].nearbyOffers;

export const getIsNearbyOffersLoading = (store: Store): boolean =>
  store[NameSpace.nearbyOffers].isNearbyOffersLoading;
