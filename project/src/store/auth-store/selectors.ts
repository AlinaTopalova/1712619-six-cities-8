import { AuthStatus } from 'const';
import { Store } from 'types/store';
import { User } from 'types/user';
import { StoreNameSpace } from 'store/root-reducer';

const getAuthStatus = (store: Store): AuthStatus =>
  store[StoreNameSpace.auth].authStatus;

const getUser = (store: Store): User | null => store[StoreNameSpace.auth].user;

export { getAuthStatus, getUser };
