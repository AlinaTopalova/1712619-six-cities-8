import { NameSpace } from 'store/root-reducer';
import { Offer } from 'types/offers';
import { Store } from 'types/store';
import { createSelector } from 'reselect';
import { getCurrentCity, getSortOffersBy } from 'store/app-store/selectors';
import { SortOptions } from 'const';

export const getOffers = (store: Store): Offer[] =>
  store[NameSpace.offers].offers;

export const getIsOffersLoading = (store: Store): boolean =>
  store[NameSpace.offers].isOffersLoading;

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
