import 'vue-facing-decorator'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $el: HTMLElement
        beforeCreate(): void
        created(): void
        beforeMount(): void
        mounted(): void
        beforeUpdate(): void
        updated(): void
        beforeUnmount(): void
        unmounted(): void
    }
}
