import { Vue, Component } from 'vue-property-decorator'

import Menu from 'components/menu/component'

@Component({
    template: require('./template.html'),
    components: { Menu },
})
export default class extends Vue {
    protected get $style () {
        return require('./style.scss')
    }
}
