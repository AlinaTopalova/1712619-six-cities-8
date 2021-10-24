import { ThunkActionResult } from '../types/action';
import { APIRoute } from '../const';
import { adaptOfferToClient, adaptReviewToClient } from 'utils';
import { loadOffers, loadOffersStart, loadReviews } from 'store/action';
import { OfferResponse } from 'types/offers';
import { OfferReviewResponse } from 'types/reviews';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadOffersStart(true));

    const { data } = await api.get<OfferResponse[]>(APIRoute.Offers);
    const normalizedOffers = data.map((offer: OfferResponse) => (
      adaptOfferToClient(offer)
    ));

    dispatch(loadOffers(normalizedOffers));
  };

export const fetchReviewsAction = (offerID: string): ThunkActionResult =>
  async (dispatch, _getStore, api): Promise<void> => {
    const { data } = await api.get<OfferReviewResponse[]>(`${APIRoute.Reviews}/${offerID}`);
    const normalizedReviews = data.map((review: OfferReviewResponse) => (
      adaptReviewToClient(review)
    ));

    dispatch(loadReviews(normalizedReviews));
  };


