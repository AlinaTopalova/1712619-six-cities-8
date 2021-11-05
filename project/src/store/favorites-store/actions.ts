import {
  ActionType,
  LoadFavoritesOffersStartAction,
  LoadFavoritesOffersCompleteAction,
  UpdateFavoriteOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

export const loadFavoritesOffersStart = (): LoadFavoritesOffersStartAction => ({
  type: ActionType.LoadFavoritesOffersStart,
});

export const loadFavoritesOffersComplete = (favoritesOffers: Offer[]): LoadFavoritesOffersCompleteAction => ({
  type: ActionType.LoadFavoritesOffersComplete,
  payload: favoritesOffers,
});

export const updateFavoriteOffers = (offer: Offer): UpdateFavoriteOffersAction => ({
  type: ActionType.UpdateFavoriteOffers,
  payload: offer,
});
