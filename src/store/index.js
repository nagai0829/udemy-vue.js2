import { from } from 'core-js/fn/array';
import Vue from 'Vue';
import Vuex from 'Vuex';
import count from './modules/count'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.useContext(Vuex);

new Vuex.Store({
    state: {
        count: 2,
        message: ""
    },
    getters,
    mutations,
    actions,
    modules: {
        count,
    }
});