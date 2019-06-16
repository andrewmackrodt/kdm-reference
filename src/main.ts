import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'
import App from './components/app/component'

// global styles
import 'bootstrap/scss/bootstrap.scss'
import 'styles/style.scss'

// global scripts
import 'jquery'
import 'bootstrap'

const router = new VueRouter({routes})

new Vue({
    components: { App },
    el: '#app',
    router,
    template: `<App />`,
})
