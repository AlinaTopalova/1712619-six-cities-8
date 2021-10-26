import { APIRoute } from 'const';
import { ThunkActionResult } from 'types/action';
import { OfferResponse} from 'types/offers';
import { OfferReviewResponse } from 'types/reviews';
import { adaptOfferToClient, adaptReviewToClient } from 'utils';
import {
  loadOffersComplete,
  loadReviewsComplete,
  loadOffersStart,
  loadReviewsStart,
  loadCurrentOfferComplete,
  loadCurrentOfferStart,
  loadCurrentOfferError,
  loadNearbyOffersComplete,
  loadNearbyOffersStart
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
      if (data) {
        const normalizedOffer = adaptOfferToClient(data);
        dispatch(loadCurrentOfferComplete(normalizedOffer));
      }
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
    if (data) {
      const normalizedNearbyOffers = data.map((offer) => (
        adaptOfferToClient(offer)
      ));
      dispatch(loadNearbyOffersComplete(normalizedNearbyOffers));
    }
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


