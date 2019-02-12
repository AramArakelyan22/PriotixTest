import { getTournamentsFromAPI } from '../api';
import {
  ADD_TOURNAMENT,
  DELETE_TOURNAMENT,
  ADD_REQUEST_ERROR,
  FETCHED_TOURNAMENTS,
} from './types';


//The function for put fetched data from API to the reducer
export const fetchedTournaments = tournaments => ({
  type: FETCHED_TOURNAMENTS,
  payload: tournaments
});

//The function for adding tournament into the list
export const addTournament = tournament => ({
  type: ADD_TOURNAMENT,
  payload: tournament
});


//The action for deleting the tournament
export const deleteTournament = id => ({
    type: DELETE_TOURNAMENT,
    payload: id
});

//The function for getting the request error
export const addRequestError = error => ({
  type: ADD_REQUEST_ERROR,
  payload: error
});

//The function for making API request via axios
export const getTournaments = value => {
  return async dispatch => {
    try {
      const tournaments = await getTournamentsFromAPI(value);

      const data = tournaments.data && tournaments.data.length > 0 ? tournaments.data[0].documents : [];
      if(!value.trim()) {dispatch(addRequestError({message: ""}))}
      dispatch(fetchedTournaments(data));
    }
    catch(err) {
      dispatch(addRequestError(err));
    }
  }
};
