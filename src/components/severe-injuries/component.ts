import { Component, Watch } from 'vue-property-decorator'

import VuexModel from 'vuex-model'
import { Injury, injuries } from 'references/injuries'

@Component({template: require('./template.html')})
export default class extends VuexModel {
    protected dice: boolean = false
    protected severity: boolean = false

    constructor() {
        super('Reference.SevereInjuries')

        Object.assign(this, this.getStates({
            dice: this.dice,
            severity: this.severity,
        }))
    }

    protected get injuries () {
        return Object.assign({}, Object.keys(injuries).map(k => {
            const injury = injuries[k]
            const clone = Object.create(injury)
            if (injury.caption) {
                clone.caption = '<p>' + injury.caption
                    .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                    .replace(/\n/mg, '</p><p>') + '</p>'
            }
            clone.description = '<p>' + injury.description
                .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                .replace(/\n/mg, '</p><p>') + '</p>'

            return clone
        }).sort((a: Injury, b: Injury): number => {
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
