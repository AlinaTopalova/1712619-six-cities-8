import {
  ActionType,
  LoadCurrentOfferCompleteAction,
  LoadCurrentOfferStartAction,
  LoadCurrentOfferErrorAction,
  UpdateCurrentOfferAction
} from 'types/action';
import { Offer } from 'types/offers';

const loadCurrentOfferComplete = (currentOffer: Offer): LoadCurrentOfferCompleteAction => ({
  type: ActionType.LoadCurrentOfferComplete,
  payload: currentOffer,
});

const loadCurrentOfferStart = (): LoadCurrentOfferStartAction => ({
  type: ActionType.LoadCurrentOfferStart,
});

const loadCurrentOfferError = (): LoadCurrentOfferErrorAction => ({
  type: ActionType.LoadCurrentOfferError,
});

const updateCurrentOffer = (offer: Offer): UpdateCurrentOfferAction => ({
  type: ActionType.UpdateCurrentOffer,
  payload: offer,
});

export {
  loadCurrentOfferComplete,
  loadCurrentOfferStart,
  loadCurrentOfferError,
  updateCurrentOffer
};
