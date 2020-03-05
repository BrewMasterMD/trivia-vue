export const SET_LOADING_MUTATION = 'SET_LOADING_MUTATION';
export const SET_TOKEN_MUTATION = 'SET_TOKEN_MUTATION';
export const SET_QUESTION_MUTATION = 'SET_QUESTION_MUTATION';
export const SET_ANSWERED_MUTATION = 'SET_ANSWERED_MUTATION';
export const INCREMENT_QUESTIONS_MUTATION = 'INCREMENT_QUESTIONS_MUTATION';

const mutations = {
  [SET_LOADING_MUTATION]: (state, payload) => {
    state.isLoading = payload;
  },

  [SET_TOKEN_MUTATION]: (state, payload) => {
    state.token = payload;
  },
  
  [SET_QUESTION_MUTATION]: (state, payload) => {
    state.question = payload;
  },

  [SET_ANSWERED_MUTATION]: (state, payload) => {
    state.hasAnswered = payload;
  },
  [INCREMENT_QUESTIONS_MUTATION]: (state, payload) => {
    state.hasAnswered = true;
    state.questionsAnswered++;
    state.questionsGuessed = payload ? state.questionsGuessed + 1 : state.questionsGuessed;
  },
};

export default mutations;