import { Cities, SortOptions } from 'const';
import { StoreNameSpace } from 'store/root-reducer';
import { Store } from 'types/store';

export const getCurrentCity = (store: Store): Cities =>
  store[StoreNameSpace.app].currentCity;

export const getSortOffersBy = (store: Store): SortOptions =>
  store[StoreNameSpace.app].sortOffersBy;

