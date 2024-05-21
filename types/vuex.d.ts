import type { Store } from 'vuex'

declare module '@vue/runtime-core' {

    export interface ComponentCustomProperties {
        $store: Store<{ [key: string]: Record<string, unknown> }>
    }
}
