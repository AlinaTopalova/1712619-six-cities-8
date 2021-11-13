import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from 'services/api';
import {
  checkAuthAction,
  fetchCurrentOfferAction,
  fetchFavoritesOffersAction,
  fetchNearbyOffersAction,
  fetchOffersAction,
  fetchReviewsAction,
  logInAction,
  logOutAction,
  postReviewAction
} from './api-action';
import { ApiRoute, ReviewPostStatus } from 'const';
import { Store } from 'types/store';
import { AuthData } from 'types/auth-data';
import {
  fakeFavoritesOffers,
  fakeFavoritesOffersFromServer,
  fakeOffer,
  fakeOfferFromServer,
  fakeOffers,
  fakeOffersFromServer,
  fakeReviews,
  fakeReviewsFromServer,
  fakeUserAdapt,
  fakeUserFromServer
} from 'test-utils/mocks';
import {
  loadOffersComplete,
  loadOffersStart
} from './offers-store/actions';
import {
  loadNearbyOffersComplete,
  loadNearbyOffersStart
} from './nearby-offers-store/actions';
import {
  loadCurrentOfferComplete,
  loadCurrentOfferStart
} from './offer-store/actions';
import {
  loadReviewsComplete,
  loadReviewsStart,
  setReviewPostStatus
} from './reviews-store/actions';
import {
  loadFavoritesOffersComplete,
  loadFavoritesOffersStart
} from './favorites-store/actions';
import {
  logIn,
  logOut
} from './auth-store/actions';

const ID_TEST = '1';

enum HttpCode {
  Ok = 200,
  NoContent = 204,
}

describe('Async actions', () => {
  const onAuthError = jest.fn();
  const onServerError = jest.fn();
  const api = createAPI({onAuthError, onServerError});
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
  Store,
      Action,
      ThunkDispatch<Store, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.LogIn)
      .reply(HttpCode.Ok, fakeUserFromServer);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      logIn(fakeUserAdapt),
    ]);
  });

  it('should dispatch LogOut when logout', async () => {
    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    mockAPI
      .onDelete(ApiRoute.LogOut)
      .reply(HttpCode.NoContent);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(logOutAction());

    expect(store.getActions()).toEqual([
      logOut(),
    ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities');
  });

  it('should dispatch logIn when POST /login', async () => {
    const fakeUser: AuthData = { email: 'fdsfs@vv.ru', password: '12345' };

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    mockAPI
      .onPost(ApiRoute.LogIn)
      .reply(HttpCode.Ok, fakeUserFromServer);

    await store.dispatch(logInAction(fakeUser));

    expect(store.getActions()).toEqual([
      logIn(fakeUserAdapt),
    ]);
    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities','secret');
  });

  it('should dispatch Offers when GET /offers', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Offers)
      .reply(HttpCode.Ok, fakeOffersFromServer);

    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      loadOffersStart(),
      loadOffersComplete(fakeOffers),
    ]);
  });

  it('should dispatch loadNearby when GET /hotels/id/nearby', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Offers}/${ID_TEST}/nearby`)
      .reply(HttpCode.Ok, fakeOffersFromServer);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchNearbyOffersAction(ID_TEST));

    expect(store.getActions())
      .toEqual([
        loadNearbyOffersStart(),
        loadNearbyOffersComplete(fakeOffers),
      ]);
  });

  it('should dispatch loadCurrentOfferStart, loadCurrentOfferComplete when GET /hotels/id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Offers}/${ID_TEST}`)
      .reply(HttpCode.Ok, fakeOfferFromServer);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchCurrentOfferAction(ID_TEST));

    expect(store.getActions())
      .toEqual([
        loadCurrentOfferStart(),
        loadCurrentOfferComplete(fakeOffer),
      ]);
  });

  it('should dispatch loadReviewsStart, loadReviewsComplete when GET /comments/id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${ApiRoute.Reviews}/${ID_TEST}`)
      .reply(HttpCode.Ok, fakeReviewsFromServer);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchReviewsAction(ID_TEST));

    expect(store.getActions())
      .toEqual([
        loadReviewsStart(),
        loadReviewsComplete(fakeReviews)]);
  });

  it('should dispatch setReviewPostStatus, loadReviewsComplete, setReviewPostStatus when POST /comments/id', async() => {
    const store = mockStore();

    mockAPI
      .onPost(`${ApiRoute.Reviews}/${ID_TEST}`)
      .reply(HttpCode.Ok,  fakeReviewsFromServer);

    await store.dispatch(postReviewAction({
      comment: 'Comment test',
      rating: 5,
    }, ID_TEST));

    expect(store.getActions())
      .toEqual([
        setReviewPostStatus(ReviewPostStatus.Posting),
        loadReviewsComplete(fakeReviews),
        setReviewPostStatus(ReviewPostStatus.Posted),
      ]);
  });

  it('should dispatch loadFavoritesOffersStart, loadFavoritesOffersComplete when GET / favoriteOffers', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.FavoritesOffers)
      .reply(HttpCode.Ok, fakeFavoritesOffersFromServer);

    await store.dispatch(fetchFavoritesOffersAction());

    expect(store.getActions()).toEqual([
      loadFavoritesOffersStart(),
      loadFavoritesOffersComplete(fakeFavoritesOffers),
    ]);
  });
});
