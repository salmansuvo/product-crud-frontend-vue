import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        products,
        auth
    }
});