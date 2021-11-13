import { logIn, logOut } from './actions';
import { AuthStatus } from 'const';
import { fakeUserAdapt } from 'test-utils/mocks';
import { authReducer } from './auth-store';

describe('Reducer: offersReducer', () => {

  it('should update authorizationStatus to "AUTH" on successful authorization', () => {
    const state = {
      authStatus: AuthStatus.Unknown,
      user: null,
    };
    expect(authReducer(state, logIn(fakeUserAdapt)))
      .toEqual({
        authStatus: AuthStatus.Auth,
        user: fakeUserAdapt,
      });
  });

  it('should update authorizationStatus to "NOAUTH" when the user logs out', () => {
    const state = {
      authStatus: AuthStatus.Auth,
      user: fakeUserAdapt,
    };
    expect(authReducer(state, logOut()))
      .toEqual({
        authStatus: AuthStatus.NoAuth,
        user: null,
      });
  });

});
