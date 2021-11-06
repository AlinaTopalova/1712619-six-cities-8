import { ActionType, LogInAction, LogOutAction } from 'types/action';
import { User } from 'types/user';

export const logIn = (user: User): LogInAction => ({
  type: ActionType.LogIn,
  payload: user,
});

export const logOut = (): LogOutAction => ({
  type: ActionType.LogOut,
});
