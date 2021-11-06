import {
  ActionType,
  LoadCurrentOfferCompleteAction,
  LoadCurrentOfferStartAction,
  LoadCurrentOfferErrorAction,
  UpdateCurrentOfferAction
} from 'types/action';
import { Offer } from 'types/offers';

export const loadCurrentOfferComplete = (currentOffer: Offer): LoadCurrentOfferCompleteAction => ({
  type: ActionType.LoadCurrentOfferComplete,
  payload: currentOffer,
});

export const loadCurrentOfferStart = (): LoadCurrentOfferStartAction => ({
  type: ActionType.LoadCurrentOfferStart,
});

export const loadCurrentOfferError = (): LoadCurrentOfferErrorAction => ({
  type: ActionType.LoadCurrentOfferError,
});

export const updateCurrentOffer = (offer: Offer): UpdateCurrentOfferAction => ({
  type: ActionType.UpdateCurrentOffer,
  payload: offer,
});
