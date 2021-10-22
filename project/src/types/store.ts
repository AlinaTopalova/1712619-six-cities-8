import { Offer } from 'types/offers';
import { Cities, SortOptions } from 'const';

export type Store = {
  currentCity: Cities,
  offers: Offer[],
  selectedSortOption: SortOptions,
}
