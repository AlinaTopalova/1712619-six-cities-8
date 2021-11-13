import { ActionType, LogInAction, LogOutAction } from 'types/action';
import { User } from 'types/user';

const logIn = (user: User): LogInAction => ({
  type: ActionType.LogIn,
  payload: user,
});

const logOut = (): LogOutAction => ({
  type: ActionType.LogOut,
});

export { logIn, logOut };
