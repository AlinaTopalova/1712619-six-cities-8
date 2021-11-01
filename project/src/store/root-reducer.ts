import { combineReducers } from 'redux';
import { appReducer } from './app-store/app-store';
import { authReducer } from './auth-store/auth-store';
import { offersReducer } from './offers-store/offers-store';
import { nearbyOffersReducer } from './nearby-offers-store/nearby-offers-store';
import { offerReducer } from './offer-store/offer-store';
import { reviewsReducer } from './reviews-store/reviews-store';

export enum NameSpace {
  app = 'APP',
  auth = 'AUTH',
  offers = 'OFFERS',
  nearbyOffers = 'NEARBYOFFERS',
  offer = 'OFFER',
  reviews = 'REVIEWS',
}

export const rootReducer = combineReducers({
  [NameSpace.app]: appReducer,
  [NameSpace.auth]: authReducer,
  [NameSpace.offers]: offersReducer,
  [NameSpace.nearbyOffers]: nearbyOffersReducer,
  [NameSpace.offer]: offerReducer,
  [NameSpace.reviews]: reviewsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
