import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex'
import auth from './auth';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store: StoreOptions<any> = {
  state: {
      version: '1.0.0',
  },
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
};
export default new Vuex.Store<any>(store);
