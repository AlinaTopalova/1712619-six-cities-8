import { StoreNameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

const getFavoritesOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.favoritesOffers].favoritesOffers;

const getIsFavoritesOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.favoritesOffers].isFavoriteOffersLoading;

export {
  getFavoritesOffers,
  getIsFavoritesOffersLoading
};
