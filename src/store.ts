import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store({
    state: {
        global: {},
    },
    mutations: {
        update(state: any, payload: object) {
            state = state.global

            for (const [k, v] of Object.entries(payload)) {
                state[k] = Object.assign(state[k] || {}, v)
            }
        },
    },
    plugins: [
        vuexLocal.plugin,
    ],
})

export default store
