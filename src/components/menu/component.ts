import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    template: require('./template.html'),
})
export default class extends Vue {
    public created() {
        const module = this.$style.module

        $(document).on('click', function() {
            $(`.${module} .navbar-collapse.show`).collapse('hide')
        })
    }

    public mounted() {
        const module = this.$style.module

        $(`.${module} a[href$="/settings"]`).on('click', function (e) {
            e.preventDefault()

            alert('Not Implemented')
        })
    }

    protected get $style () {
        return require('./style.scss')
    }

    protected get menuItems() {
        return [
            {
                name: 'Reference',
                href: '#!/reference',
                items: [
                    {name: 'Abilities', href: '/reference/abilities'},
                    {name: 'Brain Trauma', href: '/reference/brain-trauma'},
                    {name: 'Disorders', href: '/reference/disorders'},
                    {name: 'Fighting Arts', href: '/reference/fighting-arts'},
                    {name: 'Innovations', href: '/reference/innovations'},
                    {name: 'Principles', href: '/reference/principles'},
                    {name: 'Severe Injuries', href: '/reference/severe-injuries'},
                ],
            },
            {name: 'Settings', href: '/settings'},
        ]
    }
}
