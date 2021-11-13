import { StoreNameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

const getNearbyOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.nearbyOffers].nearbyOffers;

const getIsNearbyOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.nearbyOffers].isNearbyOffersLoading;

export {
  getNearbyOffers,
  getIsNearbyOffersLoading
};
