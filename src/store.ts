import Vue from 'vue';
import Vuex from 'vuex';
import { hrisStore } from './erp/modules/hrisModule/hris-store';
import erpStore from '@/erp/erp-store';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    erp: erpStore,
    hris: hrisStore,
  },
});
export default store;
//# sourceMappingURL=store.js.map
