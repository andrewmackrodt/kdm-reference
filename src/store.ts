import type { App } from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

export interface RecordValueState {
    [key: string]: Record<string, unknown>
}

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})

export const store = new Vuex.Store({
    state: {} as RecordValueState,
    mutations: {
        update(state: RecordValueState, payload: Record<string, unknown>) {
            for (const [k, v] of Object.entries(payload)) {
                state[k] = Object.assign(state[k] || {}, v)
            }
        },
    },
    plugins: [
        vuexLocal.plugin,
    ],
})

export function useStore<T extends App>(app: T): T {
    return app.use(store)
}
