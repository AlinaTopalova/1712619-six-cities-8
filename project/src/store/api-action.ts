/* eslint-disable no-console */

import { ThunkActionResult } from 'types/action';
import { AuthData } from 'types/auth-data';
import { OfferResponse} from 'types/offers';
import { OfferReviewResponse } from 'types/reviews';
import { UserResponse } from 'types/user';
import { APIRoute } from 'const';
import { adaptOfferToClient, adaptReviewToClient, adaptUserToClient } from 'utils';
import { dropToken, saveToken } from 'services/token';
import {
  loadOffersComplete,
  loadReviewsComplete,
  loadOffersStart,
  loadReviewsStart,
  loadCurrentOfferComplete,
  loadCurrentOfferStart,
  loadCurrentOfferError,
  loadNearbyOffersComplete,
  loadNearbyOffersStart,
  logIn,
  logOut
} from 'store/action';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadOffersStart());
    const { data } = await api.get<OfferResponse[]>(APIRoute.Offers);
    const normalizedOffers = data.map((offer) => (
      adaptOfferToClient(offer)
    ));
    dispatch(loadOffersComplete(normalizedOffers));
  };

export const fetchCurrentOfferAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadCurrentOfferStart());
    try {
      const { data } = await api.get<OfferResponse>(
        `${APIRoute.Offers}/${offerId}`,
      );
      const normalizedOffer = adaptOfferToClient(data);
      dispatch(loadCurrentOfferComplete(normalizedOffer));
    } catch {
      dispatch(loadCurrentOfferError());
    }
  };

export const fetchNearbyOffersAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadNearbyOffersStart());
    const { data } = await api.get<OfferResponse[]>(
      `${APIRoute.Offers}/${offerId}/nearby`,
    );
    const normalizedNearbyOffers = data.map((offer) => (
      adaptOfferToClient(offer)
    ));
    dispatch(loadNearbyOffersComplete(normalizedNearbyOffers));
  };

export const fetchReviewsAction = (offerId: string): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadReviewsStart());
    const { data } = await api.get<OfferReviewResponse[]>(
      `${APIRoute.Reviews}/${offerId}`,
    );
    const normalizedReviews = data.map((review) => (
      adaptReviewToClient(review)
    ));
    dispatch(loadReviewsComplete(normalizedReviews));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get<UserResponse>(APIRoute.LogIn);
    dispatch(logIn(adaptUserToClient(data)));
  };

export const logInAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.post<UserResponse>(APIRoute.LogIn, { email, password });
    saveToken(data.token);
    dispatch(logIn(adaptUserToClient(data)));
  };

export const logOutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.LogOut);
    dropToken();
    dispatch(logOut());
  };

