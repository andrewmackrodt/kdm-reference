import { Vue, Component } from 'vue-property-decorator'

import { injuries } from 'references/injuries'

@Component({
    template: require('./template.html'),
})
export default class extends Vue {
    protected get injuries () {
        return injuries
    }

    protected get $style () {
        return require('./style.scss')
    }
}
