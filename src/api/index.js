import axios from 'axios';

export const getTournamentsFromAPI = value => {

 return axios.get('https://api-search.staging.win.gg/search', {
    params: {
      q: value,
      index: "tournament"
    }
  });
}