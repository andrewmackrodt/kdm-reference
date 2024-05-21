import { Component, Watch } from 'vue-property-decorator'

import VuexModel from 'vuex-model'
import { BrainTrauma, brainTraumas } from 'references/brain-trauma'

@Component({template: require('./template.html')})
export default class extends VuexModel {
    protected dice: boolean = false
    protected severity: boolean = false

    constructor() {
        super('Reference.BrainTrauma')

        Object.assign(this, this.getStates({
            dice: this.dice,
            severity: this.severity,
        }))
    }

    protected get traumas () {
        return Object.assign({}, Object.keys(brainTraumas).map(k => {
            const trauma = brainTraumas[k]
            const clone = Object.create(trauma)
            if (trauma.caption) {
                clone.caption = '<p>' + trauma.caption
                    .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                    .replace(/\n/mg, '</p><p>') + '</p>'
            }
            clone.description = '<p>' + trauma.description
                .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                .replace(/\n/mg, '</p><p>') + '</p>'

            return clone
        }).sort((a: BrainTrauma, b: BrainTrauma): number => {
            if (this.severity) {
                return 0
            }

            return a.name.localeCompare(b.name)
        }))
    }

    protected get $style () {
        return require('./style.scss')
    }

    @Watch('dice')
    protected onDiceChanged(value: any) {
        this.setState('dice', value)
    }

    @Watch('severity')
    protected onSeverityChanged(value: any) {
        this.setState('severity', value)
    }
}
