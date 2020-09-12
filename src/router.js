import VueRouter from 'vue-router'
import AddCard from './components/AddCard'
import PullCard from './components/PullCard'
import OnlineCard from './components/OnlineCard'

var router = new VueRouter({
  routes: [
    {path: '/addCard', component: AddCard},
    {path: '/', redirect: '/addCard'},
    {path:'/pullCard',component:PullCard},
    {path:'/onlineCard',component:OnlineCard}
  ]
})
export default router