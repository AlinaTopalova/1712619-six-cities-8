import { AuthStatus } from 'const';
import { StoreNameSpace } from 'store/root-reducer';
import { Store } from 'types/store';
import { User } from 'types/user';

export const getAuthStatus = (store: Store): AuthStatus =>
  store[StoreNameSpace.auth].authStatus;

export const getUser = (store: Store): User | null => store[StoreNameSpace.auth].user;
