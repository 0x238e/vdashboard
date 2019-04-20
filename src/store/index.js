import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activatedTab: 'event',
  },
  mutations: {
    updateTab(state, payload) {
      state.activatedTab = payload;
    },
  },
});
