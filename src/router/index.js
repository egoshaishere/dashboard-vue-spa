import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projecs from "../views/Projects.vue"
import Map from '../views/Map.vue'
import Grid from '../views/Grid.vue'
import Wiki from '../views/Wiki.vue'
import Ideas from '../views/Ideas.vue'
import Exchange from '../views/Exchange.vue'
import Charts from '../views/Charts.vue'
import NotFound from '../views/404.vue'
import MultiChart from '../views/Multichart.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projecs
  },
  {
    path: '/ideas',
    name: 'ideas',
    component: Ideas
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue') // пример динамического импорта
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: Wiki
  },
  {
    path: '/exchange',
    name: 'exchange',
    component: Exchange
  },
  {
    path: '/charts',
    name: 'charts',
    component: Charts
  },
  {
    path: '/multicharts',
    name: 'multicharts',
    component: MultiChart
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
