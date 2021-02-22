const state = {
    count: 2
};
count getters = {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
};
const mutations = {
    increment(state, number) {
        state.count += number
    },
    decrement(state, number) {
        state.count -= number
    }
};
const actions = {
    increment({ commit }, number) {
        context.commit('increment', commit);
    },
    decrement({ commit }, number) {
        context.commit('increment', commit);
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}