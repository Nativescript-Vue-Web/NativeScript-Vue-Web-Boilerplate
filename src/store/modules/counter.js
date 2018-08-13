import { INCREMENT, DECREMENT } from '../mutation-types';

const initialState = {
    count: 0,
};

const mutations = {
    [DECREMENT](state) {
    state.count -= 1; // eslint-disable-line
    },
    [INCREMENT](state) {
    state.count += 1; // eslint-disable-line
    },
};

const actions = {
    [INCREMENT]: ({ commit }) => commit(INCREMENT),
    [DECREMENT]: ({ commit }) => commit(DECREMENT),
};

export default {
    state: initialState,
    mutations,
    actions,
};
