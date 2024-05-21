import App from './app.vue'
import { createApp } from 'vue'
import { useRouter } from 'routes'
import { useStore } from 'store'

// global styles
import 'styles/bootstrap.scss'
import 'styles/style.scss'

// global scripts
import 'jquery'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/collapse'

const app = createApp({
    components: { App },
    template: '<app />',
})

useRouter(app)
useStore(app)

app.mount('#app')
