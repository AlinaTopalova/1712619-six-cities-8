import { StoreNameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';

export const getFavoritesOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.favoritesOffers].favoritesOffers;

export const getIsFavoritesOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.favoritesOffers].isFavoriteOffersLoading;
