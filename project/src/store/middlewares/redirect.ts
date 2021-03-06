import { Middleware } from 'redux';
import browserHistory from 'browser-history';
import { rootReducer } from 'store/root-reducer';
import { ActionType } from 'types/action';

type Reducer = ReturnType<typeof rootReducer>;

const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

export { redirect };
