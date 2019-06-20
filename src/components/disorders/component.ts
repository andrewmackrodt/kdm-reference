import { Vue, Component } from 'vue-property-decorator'

import { disorders } from 'references/disorders'

@Component({
    template: require('./template.html'),
})
export default class extends Vue {
    protected get disorders () {
        return Object.assign({}, Object.keys(disorders).map(k => {
            const disorder = disorders[k]
            const clone = Object.create(disorder)
            if (disorder.caption) {
                clone.caption = disorder.caption.replace(/\[([^\]]+)\]/g, '<b>$1</b>')
            }
            clone.description = disorder.description.replace(/\[([^\]]+)\]/g, '<b>$1</b>')

            return clone
        }))
    }

    protected get $style () {
        return require('./style.scss')
    }
}
