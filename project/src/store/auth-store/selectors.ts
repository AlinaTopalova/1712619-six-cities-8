import { AuthStatus } from 'const';
import { NameSpace } from 'store/root-reducer';
import { Store } from 'types/store';
import { User } from 'types/user';

export const getAuthStatus = (store: Store): AuthStatus =>
  store[NameSpace.auth].authStatus;

export const getUser = (store: Store): User | null => store[NameSpace.auth].user;
