import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from 'views/home.vue'
import NotFound from 'views/not-found.vue'

const hashBase = '#!'

export const routes = [
    { path: '/', component: Home },
    { path: '/reference/brain-traumas', component: () => import('views/brain-traumas.vue') },
    { path: '/reference/disorders', component: () => import('views/disorders.vue') },
    { path: '/reference/severe-injuries', component: () => import('views/severe-injuries.vue') },
    { path: '/:params(.*)*', component: NotFound },
]

export function useRouter<T extends App>(app: T): T {
    return app.use(createRouter({ history: createWebHashHistory(hashBase), routes }))
}
