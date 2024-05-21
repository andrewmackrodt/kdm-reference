import Home from './components/home/component'
import BrainTraumas from './components/brain-trauma/component'
import Disorders from './components/disorders/component'
import NotFound from './components/not-found/component'
import SevereInjuries from './components/severe-injuries/component'

const routes = [
    { path: '/(home)?', component: Home },
    { path: '/reference/brain-trauma', component: BrainTraumas },
    { path: '/reference/disorders', component: Disorders },
    { path: '/reference/severe-injuries', component: SevereInjuries },
    { path: '*', component: NotFound },
]

export default routes
