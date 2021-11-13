import {
  ActionType,
  LoadFavoritesOffersStartAction,
  LoadFavoritesOffersCompleteAction,
  UpdateFavoriteOffersAction
} from 'types/action';
import { Offer } from 'types/offers';

const loadFavoritesOffersStart = (): LoadFavoritesOffersStartAction => ({
  type: ActionType.LoadFavoritesOffersStart,
});

const loadFavoritesOffersComplete = (favoritesOffers: Offer[]): LoadFavoritesOffersCompleteAction => ({
  type: ActionType.LoadFavoritesOffersComplete,
  payload: favoritesOffers,
});

const updateFavoriteOffers = (offer: Offer): UpdateFavoriteOffersAction => ({
  type: ActionType.UpdateFavoriteOffers,
  payload: offer,
});

export {
  loadFavoritesOffersStart,
  loadFavoritesOffersComplete,
  updateFavoriteOffers
};
