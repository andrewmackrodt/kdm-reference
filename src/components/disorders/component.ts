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
                clone.caption = '<p>' + disorder.caption
                    .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                    .replace(/\n/mg, '</p><p>') + '</p>'
            }
            clone.description = '<p>' + disorder.description
                .replace(/\[([^\]]+)\]/g, '<b>$1</b>')
                .replace(/\n/mg, '</p><p>') + '</p>'

            return clone
        }))
    }

    protected get $style () {
        return require('./style.scss')
    }
}
