import { Vue } from 'vue-facing-decorator'
import type { RecordValueState } from 'store'

export default class VuexComponent extends Vue {
    protected readonly _stateKey = this.constructor.name

    created(): void {
        if ( ! (this._stateKey in this.$store.state)) {
            this.$store.commit('update', {
                [this._stateKey]: {},
            })
        }
    }

    protected getComponentGlobalStateMany(props: { [key: string]: unknown }) {
        for (const [k, v] of Object.entries(props)) {
            props[k] = this.getComponentGlobalState(k, v)
        }
        return props
    }

    protected getComponentGlobalState(): RecordValueState
    protected getComponentGlobalState<T>(property: string, fallback?: T): T | undefined
    protected getComponentGlobalState<T>(property: string, fallback: T): T

    protected getComponentGlobalState<T>(property?: string, fallback?: T) {
        const state = this.$store.state[this._stateKey]
        if ( ! state || ! property) {
            return fallback
        }
        return property in state ? state[property] : fallback
    }

    protected setComponentGlobalState<T>(property: string, value: T) {
        this.$store.commit('update', {
            [this._stateKey]: {
                [property]: value,
            },
        })
    }
}
