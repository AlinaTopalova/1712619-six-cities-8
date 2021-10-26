import { Cities, SortOptions } from 'const';
import { Store } from 'types/store';
import { Actions, ActionType } from 'types/action';

const initialState: Store = {
  currentCity: Cities.Paris,
  currentOffer: null,
  nearbyOffers: [],
  offers: [],
  reviews: [],
  sortOffersBy: SortOptions.Popular,
  isCurrentOfferLoading: false,
  isCurrentOfferLoadingError: false,
  isNearbyOffersLoading: false,
  isOffersLoading: false,
  isReviewsLoading: false,
};

const reducer = (state: Store = initialState, action: Actions): Store => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return {
        ...state, currentCity: action.payload,
      };
    case ActionType.SetSortOffersBy:
      return {
        ...state, sortOffersBy: action.payload,
      };
    case ActionType.LoadOffersComplete:
      return {
        ...state, offers: action.payload, isOffersLoading: false,
      };
    case ActionType.LoadReviewsComplete:
      return {
        ...state, reviews: action.payload, isReviewsLoading: false,
      };
    case ActionType.LoadOffersStart:
      return {
        ...state, isOffersLoading: true,
      };
    case ActionType.LoadReviewsStart:
      return {
        ...state, isReviewsLoading: true,
      };
    case ActionType.LoadCurrentOfferComplete:
      return {
        ...state, currentOffer: action.payload, isCurrentOfferLoading: false,
      };
    case ActionType.LoadCurrentOfferStart:
      return {
        ...state, isCurrentOfferLoading: true, isCurrentOfferLoadingError: false,
      };
    case ActionType.LoadCurrentOfferError:
      return {
        ...state, isCurrentOfferLoadingError: true, isCurrentOfferLoading: false,
      };
    case ActionType.LoadNearbyOffersComplete:
      return {
        ...state, nearbyOffers: action.payload, isNearbyOffersLoading: false,
      };
    case ActionType.LoadNearbyOffersStart:
      return {
        ...state, isNearbyOffersLoading: true,
      };
    default:
      return state;
  }
};

export { reducer };
