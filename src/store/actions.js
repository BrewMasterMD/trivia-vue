import getData from '../helpers/getData';
import {
  SET_QUESTION_MUTATION,
  SET_TOKEN_MUTATION,
  SET_LOADING_MUTATION,
  SET_ANSWERED_MUTATION,
} from './mutations';

export const GET_TOKEN_ACTION = 'GET_TOKEN_ACTION';
export const GET_QUESTION_ACTION = 'GET_QUESTION_ACTION';

const mutations = {
  [GET_TOKEN_ACTION]: ({ commit, dispatch }) => {
    getData('https://opentdb.com/api_token.php?command=request')
      .then((response) => {
        commit(SET_TOKEN_MUTATION, response.token);
        dispatch(GET_QUESTION_ACTION);
      });
  },

  [GET_QUESTION_ACTION]: ({ commit, state }) => {
    commit(SET_LOADING_MUTATION, true);
    getData(`https://opentdb.com/api.php?amount=1${state.token ? `&token=${state.token}` : ''}`)
      .then((response) => {
        commit(SET_QUESTION_MUTATION, response.results[0]);
        commit(SET_ANSWERED_MUTATION, false);
        commit(SET_LOADING_MUTATION, false);
      });
  },
};

export default mutations;