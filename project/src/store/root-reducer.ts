import { combineReducers } from 'redux';
import { appReducer } from './app-store/app-store';
import { authReducer } from './auth-store/auth-store';
import { offersReducer } from './offers-store/offers-store';
import { nearbyOffersReducer } from './nearby-offers-store/nearby-offers-store';
import { offerReducer } from './offer-store/offer-store';
import { reviewsReducer } from './reviews-store/reviews-store';
import { favoritesReducer } from './favorites-store/favorites-store';

enum StoreNameSpace {
  app = 'APP',
  auth = 'AUTH',
  offers = 'OFFERS',
  nearbyOffers = 'NEARBY_OFFERS',
  offer = 'OFFER',
  reviews = 'REVIEWS',
  favoritesOffers = 'FAVORITES_OFFERS',
}

const rootReducer = combineReducers({
  [StoreNameSpace.app]: appReducer,
  [StoreNameSpace.auth]: authReducer,
  [StoreNameSpace.offers]: offersReducer,
  [StoreNameSpace.nearbyOffers]: nearbyOffersReducer,
  [StoreNameSpace.offer]: offerReducer,
  [StoreNameSpace.reviews]: reviewsReducer,
  [StoreNameSpace.favoritesOffers]: favoritesReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export {
  StoreNameSpace,
  rootReducer
};
