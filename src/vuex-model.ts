import Vue from 'vue'

export default class VuexModel extends Vue {
    protected readonly stateKey: string

    constructor(stateKey?: string) {
        super()

        this.stateKey = stateKey || this.constructor.name

        if (!this.$store.state.global.hasOwnProperty(this.stateKey)) {
            this.$store.commit('update', {
                [this.stateKey]: {}
            })
        }
    }

    protected getStates(props: { [key: string]: any }) {
        for (const [k, v] of Object.entries(props)) {
            props[k] = this.getState(k, v)
        }

        return props
    }

    protected getState(property?: string, value: any = undefined): any {
        const state = this.$store.state.global[this.stateKey]

        if (typeof property !== 'undefined') {
            return state.hasOwnProperty(property)
                ? state[property]
                : value
        }

        return state
    }

    protected setState(property: string, value: any) {
        this.$store.commit('update', {
            [this.stateKey]: {
                [property]: value,
            },
        })
    }
}
