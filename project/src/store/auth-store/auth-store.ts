import { AuthStatus } from 'const';
import { Actions, ActionType } from 'types/action';
import { AuthStore } from 'types/store';

const initialState: AuthStore = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

const authReducer = (state = initialState, action: Actions): AuthStore => {
  switch (action.type) {
    case ActionType.LogIn:
      return {
        ...state,
        user: action.payload,
        authStatus: AuthStatus.Auth,
      };
    case ActionType.LogOut:
      return {
        ...state,
        user: null,
        authStatus: AuthStatus.NoAuth,
      };
    default:
      return state;
  }
};

export { authReducer };
