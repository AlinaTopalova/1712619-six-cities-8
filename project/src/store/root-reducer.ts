import { combineReducers } from 'redux';
import { appReducer } from './app-store/app-store';
import { authReducer } from './auth-store/auth-store';
import { offersReducer } from './offers-store/offers-store';
import { nearbyOffersReducer } from './nearby-offers-store/nearby-offers-store';
import { offerReducer } from './offer-store/offer-store';
import { reviewsReducer } from './reviews-store/reviews-store';

export enum StoreNameSpace {
  app = 'APP',
  auth = 'AUTH',
  offers = 'OFFERS',
  nearbyOffers = 'NEARBY_OFFERS',
  offer = 'OFFER',
  reviews = 'REVIEWS',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.app]: appReducer,
  [StoreNameSpace.auth]: authReducer,
  [StoreNameSpace.offers]: offersReducer,
  [StoreNameSpace.nearbyOffers]: nearbyOffersReducer,
  [StoreNameSpace.offer]: offerReducer,
  [StoreNameSpace.reviews]: reviewsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
