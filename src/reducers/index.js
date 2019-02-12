import {
  ADD_TOURNAMENT,
  DELETE_TOURNAMENT,
  ADD_REQUEST_ERROR,
  FETCHED_TOURNAMENTS,
} from '../actions/types';

import { removeDuplicate } from '../utils/removeDuplicate';

export const initialState = {
  tournaments: [],
  addedTournaments: [],
  addTournamentError: ''
};

export default (state = initialState, action) => {
  let newState = null;
  switch(action.type) {
    case FETCHED_TOURNAMENTS:
      newState = {...state};
      newState.addTournamentError = action.payload.length === 0 ? "Nothing was found with this credentials" : "";
      newState.tournaments = action.payload;
      return newState;
    case ADD_TOURNAMENT:
      newState = {...state};
      //To be avoided from duplication
      const hasItem = removeDuplicate(state.addedTournaments, action.payload);
      if(state.addedTournaments.length === 0 || !hasItem){
       newState.addedTournaments = [action.payload, ...state.addedTournaments]
      }
      else {
        newState.addTournamentError = "You have this item in your tournaments."
      }
      return newState;
    case DELETE_TOURNAMENT:
      newState = {...state};
      newState.addedTournaments = state.addedTournaments.filter(item => item.id !== action.payload);
      return newState;
    case ADD_REQUEST_ERROR:
      newState = {...state};
      console.log(JSON.stringify(action.payload));
      const err = action.payload.response && action.payload.response.data && action.payload.response.data.error ? "Search parameter should have more than 1 characters" : action.payload.message ;
      newState.addTournamentError =  err;
      newState.tournaments = [];
      return newState;
    default:
      return state
  }
}