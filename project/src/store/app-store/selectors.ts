import { Cities, SortOptions } from 'const';
import { Store } from 'types/store';
import { StoreNameSpace } from 'store/root-reducer';

export const getCurrentCity = (store: Store): Cities =>
  store[StoreNameSpace.app].currentCity;

export const getSortOffersBy = (store: Store): SortOptions =>
  store[StoreNameSpace.app].sortOffersBy;

