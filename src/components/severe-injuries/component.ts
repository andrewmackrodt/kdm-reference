import { Vue, Component } from 'vue-property-decorator'

import { injuries } from 'references/injuries'

@Component({
    template: require('./template.html'),
})
export default class extends Vue {
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
        }))
    }

    protected get $style () {
        return require('./style.scss')
    }
}
