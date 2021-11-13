import { Cities, SortOptions } from 'const';
import { Store } from 'types/store';
import { StoreNameSpace } from 'store/root-reducer';

const getCurrentCity = (store: Store): Cities =>
  store[StoreNameSpace.app].currentCity;

const getSortOffersBy = (store: Store): SortOptions =>
  store[StoreNameSpace.app].sortOffersBy;

export { getCurrentCity, getSortOffersBy };

