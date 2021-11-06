import { Actions, ActionType } from 'types/action';
import { FavoritesStore } from 'types/store';


const initialState: FavoritesStore = {
  favoritesOffers: [],
  isFavoriteOffersLoading: false,
};

export const favoritesReducer = (state = initialState, action: Actions): FavoritesStore => {
  switch (action.type) {
    case ActionType.LoadFavoritesOffersStart:
      return {
        ...state, isFavoriteOffersLoading: true,
      };
    case ActionType.LoadFavoritesOffersComplete:
      return {
        ...state, favoritesOffers: action.payload, isFavoriteOffersLoading: false,
      };
    case ActionType.UpdateFavoriteOffers:
      return {
        ...state, favoritesOffers: state.favoritesOffers.map((offer) => {
          if (offer.id !== action.payload.id) {
            return offer;
          }
          return action.payload;
        }),
      };
    default:
      return state;
  }
};
