import { Offer } from 'types/offers';
import { OfferReview } from './reviews';
import { Cities, SortOptions } from 'const';

export type Store = {
  currentCity: Cities,
  offers: Offer[],
  reviews: OfferReview[],
  selectedSortOption: SortOptions,
  isOffersLoaded: boolean,
}
