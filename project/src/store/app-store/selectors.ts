import { Cities, SortOptions } from 'const';
import { NameSpace } from 'store/root-reducer';
import { Store } from 'types/store';

export const getCurrentCity = (store: Store): Cities =>
  store[NameSpace.app].currentCity;

export const getSortOffersBy = (store: Store): SortOptions =>
  store[NameSpace.app].sortOffersBy;

