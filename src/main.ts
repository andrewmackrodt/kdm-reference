import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

import routes from './routes'
import App from './components/app/component'

// global styles
import 'bootstrap/scss/bootstrap.scss'
import 'styles/style.scss'

// global scripts
import 'jquery'
import 'bootstrap'

new Vue({
    components: { App },
    el: '#app',
    router: new VueRouter({routes}),
    store: store,
    template: `<App />`,
})
