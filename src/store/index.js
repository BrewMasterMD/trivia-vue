import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    question: null,
    isLoading: false,
    questionsAnswered: 0,
    questionsGuessed: 0,
    hasAnswered: false,
  },
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;