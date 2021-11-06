import { createSelector } from 'reselect';
import { Offer } from 'types/offers';
import { Store } from 'types/store';
import { SortOptions } from 'const';
import { getCurrentCity, getSortOffersBy } from 'store/app-store/selectors';
import { StoreNameSpace } from 'store/root-reducer';


export const getOffers = (store: Store): Offer[] =>
  store[StoreNameSpace.offers].offers;

export const getIsOffersLoading = (store: Store): boolean =>
  store[StoreNameSpace.offers].isOffersLoading;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => city === offer.city.name),
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortOffersBy],
  (offers, sortOffersBy) => {
    const offersCopy = [...offers];

    switch (sortOffersBy) {
      case SortOptions.PriceHighToLow:
        return offersCopy.sort((a, b) => b.price - a.price);
      case SortOptions.PriceLowToHigh:
        return offersCopy.sort((a, b) => a.price - b.price);
      case SortOptions.TopRated:
        return offersCopy.sort((a, b) => b.rating - a.rating);
      default:
        return offersCopy;
    }
  },
);
