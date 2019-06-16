import Home from './components/home/component'
import NotFound from './components/not-found/component'
import SevereInjuries from './components/severe-injuries/component'

const routes = [
    { path: '/(home)?', component: Home },
    { path: '/reference/severe-injuries', component: SevereInjuries },
    { path: '*', component: NotFound },
]

export default routes
