import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';

import { initialState } from "../reducers/index";
import { get, set } from 'lodash';

import reducer from '../reducers';

const middlewares = applyMiddleware(
  thunkMiddleware,
);


const store = createStore(
  reducer,
  initialState,
  compose(
    middlewares,
    persistState(
      ["addedTournaments"],
      {
        slicer: (paths) => {
          return (state) => {
            let subset = {};

            paths.forEach((path) => {
              const slice = get(state, path);

              if (slice) {
                set(subset, path, slice);
              }
            });

            return subset
          }
        }
      }
      )
    )
);

export default store;